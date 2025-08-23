const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post("/signup", async (req, res) => {
  try {
    const { admin_name, admin_email, admin_password } = req.body;

    if (!admin_name || !admin_email || !admin_password) {
      return res.status(400).json({ message: "Please add all fields" });
    }

    // Check if admin exists
    const adminExist = await prisma.admin.findUnique({
      where: { admin_email },
    });

    if (adminExist) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(admin_password, 10);

    // Create admin
    await prisma.admin.create({
      data: {
        admin_name,
        admin_email,
        admin_password: hashedPassword,
      },
    });

    res.status(200).json({ message: "Admin created successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { admin_email, admin_password } = req.body;

    const admin = await prisma.admin.findUnique({
      where: { admin_email },
    });

    if (!admin) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(admin_password, admin.admin_password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET);

    return res.json({ message: "success", token, tag: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Authentication route
router.post("/auth", (req, res) => {
  const token = req.body.token;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const adminId = decoded.id;
    return res.json({ message: `Authenticated user: ${adminId}`, tag: true });
  } catch (err) {
    res.status(401).json({ error: "You are not authenticated" });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/admindets", async (req, res) => {
  const { id } = req.body;

  const admin = await prisma.admin.findUnique({
    where: { id: Number(id) },
  });

  if (admin) {
    return res.json({ message: admin, tag: true });
  }
  return res.json({ message: null, tag: false });
});

router.post("/forms", async (req, res) => {
  try {
    const forms = await prisma.form.findMany();
    res.json(forms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/action_by_admin", async (req, res) => {
  try {
    const { action, id } = req.body;

    let status = "Pending";
    if (action === "accept") status = "Accepted";
    if (action === "deny") status = "Rejected";

    const form = await prisma.form.update({
      where: { id: Number(id) },
      data: {
        action,
        status,
      },
    });

    return res.json({ message: form, tag: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
