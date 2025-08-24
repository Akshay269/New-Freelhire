import { useState } from "react";
import "../styles/signup.css";
import about1 from "../assets/images/about1.svg";
import { useNavigate } from "react-router-dom";
import { login_admin, register_admin } from "../controllers/admin";
import { login_user, register_user } from "../controllers/user";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function Signup() {
  const navigate = useNavigate();

  // Shared state
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [userType, setUserType] = useState(""); // for sign-up
  const [loginType, setLoginType] = useState(""); // for login

  // Reset form fields
  const resetFields = () => {
    setEmail("");
    setName("");
    setPassword("");
    setContact("");
  };

  // Handle registration
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (!userType) {
        alert("Please select Admin/User before signing up.");
        return;
      }

      if (userType === "admin") {
        const obj = { admin_name: name, admin_email: email, admin_password: password };
        const data = await register_admin(obj);
        alert(data.message);
      } else {
        const obj = { user_name: name, user_email: email, user_password: password, user_contact: contact };
        const data = await register_user(obj);
        alert(data.message);
      }
      resetFields();
    } catch (error) {
      console.error(error);
      alert("Something went wrong, please try again.");
    }
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!loginType) {
        alert("Please select Admin/User before logging in.");
        return;
      }

      if (loginType === "admin") {
        const obj = { admin_email: email, admin_password: password };
        const data = await login_admin(obj);
        if (data.tag) {
          localStorage.setItem("admin_token", data.token);
          navigate("/admindashboard");
        } else {
          alert("Invalid login credentials for admin.");
        }
      } else {
        const obj = { user_email: email, user_password: password };
        const data = await login_user(obj);
        if (data.tag) {
          localStorage.setItem("user_token", data.token);
          navigate("/userdashboard");
        } else {
          alert("Invalid login credentials for user.");
        }
      }
    } catch (error) {
      console.error(error);
      alert("Login failed, please try again.");
    }
  };

  return (
    <>
      <img className="imgabout absolute" alt="signup" src={about1} />
      <div className="w-full h-screen bg-cover bg-center flex justify-center items-center px-4 bg-[#c7cacd]">
        <div className="main z-1 mt-32">
          {/* Hidden checkbox toggle for login/signup UI */}
          <input className="input" type="checkbox" id="chk" aria-hidden="true" />

          {/* SIGN UP FORM */}
          <div className="signup">
            <form onSubmit={handleRegister}>
              <label className="label" htmlFor="chk" aria-hidden="true">
                Sign up
              </label>

              <select
                className="dropdown"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                required
              >
                <option value="" disabled hidden>
                  Admin/User
                </option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>

              <input
                className="input"
                type="text"
                placeholder="User name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {userType === "user" && (
                <PhoneInput
                  className="input"
                  placeholder="Contact"
                  value={contact}
                  onChange={setContact}
                  required
                />
              )}

              <input
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit" className="signup-btn">
                Sign up
              </button>
            </form>
          </div>

          {/* LOGIN FORM */}
          <div className="login">
            <form onSubmit={handleLogin}>
              <label className="label" htmlFor="chk" aria-hidden="true">
                Login
              </label>

              <select
                className="dropdown"
                value={loginType}
                onChange={(e) => setLoginType(e.target.value)}
                required
              >
                <option value="" disabled hidden>
                  Admin/User
                </option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>

              <input
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit" className="signup-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
