import { useState } from "react";
import { Link } from "react-router-dom";
import Close from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      {/* Desktop Navbar */}
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Freelhire
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/register" className="hover:text-blue-600 transition">
            Register
          </Link>
          <Link to="/login" className="hover:text-blue-600 transition">
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          <MenuIcon fontSize="large" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-blue-600">Menu</h2>
          <Close
            onClick={toggleMenu}
            className="cursor-pointer text-gray-700"
          />
        </div>
        <nav className="flex flex-col gap-6 p-6 text-lg font-medium text-gray-700">
          <Link to="/" onClick={toggleMenu} className="hover:text-blue-600">
            Home
          </Link>
          <Link
            to="/register"
            onClick={toggleMenu}
            className="hover:text-blue-600"
          >
            Register
          </Link>
          <Link to="/login" onClick={toggleMenu} className="hover:text-blue-600">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
