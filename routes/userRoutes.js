const express = require("express");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const shortid = require("shortid");


// set up storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// create an instance of the multer middleware
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // limit file size to 1 MB
});

//checked
router.post("/signup", async (req, res) => {
  try {
    const { user_name, user_email, user_contact, user_password } = req.body;

    if (!user_name || !user_email || !user_contact || !user_password) {
      return res.status(400).json({ message: "Please add all fields" });
    }

    // Check if user exists
    const userExist = await prisma.user.findUnique({
      where: { user_email },
    });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(user_password, 10);

    // Create user
    await prisma.user.create({
      data: {
        user_name,
        user_email,
        user_contact,
        user_password: hashedPassword,
      },
    });

    res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//checked
router.post("/login", async (req, res) => {
  try {
    const { user_email, user_password } = req.body;

    const user = await prisma.user.findUnique({
      where: { user_email },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(user_password, user.user_password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (user.isAdmin) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.json({ message: "success", token, tag: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/auth", (req, res) => {
  // Get the token from the authorization header
  const token = req.body.token;

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET,);

    // Get the user ID from the decoded token
    const userId = decoded.id;

    // Return the protected data
    res.json({ message: `Authenticated user: ${userId}`, tag: true });
  } catch (err) {
    // Return an error if the token is invalid
    res.status(401).json({ error: "You are not authenticated" });
  }
});

//Submit Form checked
router.post("/submit_form", upload.array("images", 10), async (req, res) => {
  try {
    const token = req.body.token;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.id;

    const temp_user = await prisma.user.findUnique({
      where: { id: userId },
    });

    const form_id = shortid.generate();
    await prisma.form.create({
      data: {
        form_id,
        form_title: req.body.form_title,
        form_desc: req.body.form_desc,
        form_budget: req.body.form_budget,
        user_id: userId,
        form_user_name: temp_user.user_name,
        form_user_contact: temp_user.user_contact,
        images: req.files.map((file) => file.filename),
      },
    });

    res.json({ message: "Form submit Success", tag: true });
  } catch (err) {
    console.error(err);
    res.json({ message: "try again", tag: false });
  }
});

router.delete("/form/delete", async (req, res) => {
  try {
    const { id } = req.body;

    await prisma.form.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ message: `Form with ID '${id}' deleted` });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/form/edit", async (req, res) => {
  try {
    const { formid, form_title, form_desc, form_budget } = req.body;

    const form = await prisma.form.update({
      where: { id: Number(formid) },
      data: {
        form_title,
        form_desc,
        form_budget,
      },
    });

    res.json({ message: form, tag: true });
  } catch (err) {
    console.error(err);
    res.json({ message: "try again", tag: false });
  }
});

router.post("/userdets", async (req, res) => {
  const { id } = req.body;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });

  if (user) {
    return res.json({ message: user, tag: true });
  }
  res.json({ message: null, tag: false });
});

router.post("/forms_by_user", async (req, res) => {
  try {
    const { id } = req.body;
    const forms = await prisma.form.findMany({
      where: { user_id: Number(id) },
    });
    res.json({ message: forms, tag: true });
  } catch (err) {
    res.status(500).json({ message: err.message, tag: false });
  }
});

router.post("/forms_by_id", async (req, res) => {
  try {
    const { id } = req.body;
    const form = await prisma.form.findUnique({
      where: { id: Number(id) },
    });
    res.json({ message: form, tag: !!form });
  } catch (err) {
    res.status(500).json({ message: err.message, tag: false });
  }
});

module.exports = router;
