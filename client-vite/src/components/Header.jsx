import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import MenuOutlined from "@mui/icons-material/Menu";
import logopic from "../assets/images/logo.png";
import MenuItems from "./MenuItems";

const Header = () => {
  const [active, setActive] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  const showMenu = () => setActive((prev) => !prev);

  // Add scroll listener with cleanup
  useEffect(() => {
    const changeBackground = () => {
      setNavbar(window.scrollY >= 80);
    };
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  // Check login state
  const userToken = localStorage.getItem("user_token");
  const adminToken = localStorage.getItem("admin_token");

  const handleLogout = (type) => {
    localStorage.removeItem(type);
    navigate("/");
    window.location.reload();
  };

  return (
    <header
      className={`fixed w-full flex justify-between items-center p-4 z-10 transition-colors duration-300 ${
        navbar ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <button
        onClick={() => navigate("/")}
        className="hover:scale-110 transition-transform duration-300"
      >
        <img src={logopic} alt="logo" className="w-32 ml-6" />
      </button>

      {/* Desktop Nav */}
      <nav>
        <ul className="hidden md:flex gap-12 px-6 text-lg font-medium uppercase">
          <li className="hover:scale-110 transition-transform hover:text-[#ff4057]">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:scale-110 transition-transform hover:text-[#ff4057]">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:scale-110 transition-transform hover:text-[#ff4057]">
            <Link to="/services">Services</Link>
          </li>

          {userToken || adminToken ? (
            <>
              <li className="hover:scale-110 transition-transform hover:text-[#ff4057]">
                <button
                  onClick={() =>
                    navigate(userToken ? "/userdashboard" : "/admindashboard")
                  }
                >
                  Dashboard
                </button>
              </li>
              <li className="hover:scale-110 transition-transform hover:text-[#ff4057]">
                <button
                  onClick={() =>
                    handleLogout(userToken ? "user_token" : "admin_token")
                  }
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className="hover:scale-110 transition-transform hover:text-[#ff4057]">
              <Link to="/signup">Signup</Link>
            </li>
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="absolute right-6 top-6 md:hidden">
          <MenuOutlined
            onClick={showMenu}
            className="cursor-pointer text-white scale-150"
          />
        </div>

        {/* Mobile Menu Items */}
        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </header>
  );
};

export default Header;
