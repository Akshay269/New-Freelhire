import MenuOutlined from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logopic from "../assets/images/logo.png";
import MenuItems from "./MenuItems";

const Header = () => {
  const [active, setActive] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const navigate = useNavigate();

  const showMenu = () => {
    setActive(!active);
  };
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else setNavbar(false);
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div
      className={`fixed w-full text-white  flex justify-between p-4 items-center z-10 ${
        navbar ? "navbar-active" : "bg-transparent"
      }`}
    >
    <button onClick={() => navigate('/')} className="hover:scale-125 duration-500">
        <img src={logopic} alt="logo" className="w-32 ml-8" />
    </button>
     

      <nav>
        <div className="absolute right-6 md:hidden top-6 scale-150">
          <MenuOutlined
            onClick={showMenu}
            className="scale-150 cursor-pointer"
          />
        </div>

        <ul className="hidden text-xl md:flex gap-12 p-12 uppercase bg-transparent hover:color-[#ff4057]">
          <li className="hover:scale-125 duration-150 hover:text-[#ff4057] ">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:scale-125 duration-150 hover:text-[#ff4057] ">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:scale-125 duration-150 hover:text-[#ff4057] ">
            <Link to="/services">Services</Link>
          </li>
          {localStorage.getItem("user_token") ||
          localStorage.getItem("admin_token") ? (
            localStorage.getItem("user_token") ? (
              <>
                <li className="hover:scale-125 duration-150 hover:text-[#ff4057]">
                  <button
                    className="uppercase"
                    onClick={() => {
                      navigate("/userdashboard");
                    }}
                  >
                    Dashboard
                  </button>
                </li>
                <li className="hover:scale-125 duration-150 hover:text-[#ff4057]">
                  <button
                    className="uppercase"
                    onClick={() => {
                      localStorage.removeItem("user_token");
                      navigate("/");
                      window.location.reload();
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="hover:scale-125 duration-150 hover:text-[#ff4057]">
                  <button
                    className="uppercase"
                    onClick={() => {
                      navigate("/admindashboard");
                    }}
                  >
                    Dashboard
                  </button>
                </li>
                <li className="hover:scale-125 duration-150 hover:text-[#ff4057]">
                  <button
                    className="uppercase"
                    onClick={() => {
                      localStorage.removeItem("admin_token");
                      navigate("/");
                      window.location.reload();
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            )
          ) : (
            <li className="hover:scale-125 duration-150 hover:text-[#ff4057]">
              <Link to="/signup">Signup</Link>
            </li>
          )}
        </ul>
        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};

export default Header;
