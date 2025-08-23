import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#00121b] text-white">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-8 px-4 py-8">
        {/* Company Info */}
        <div className="flex-1 min-w-[220px]">
          <h1 className="text-2xl font-bold mb-2">Freelhire</h1>
          <p className="text-base leading-relaxed">
            Connecting talent with opportunity — empowering freelancers and
            businesses worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <div className="h-[3px] w-10 bg-red-600 mb-4"></div>
          <ul className="space-y-2 text-lg">
            <li><Link className="hover:text-red-600 transition" to="/">Home</Link></li>
            <li><Link className="hover:text-red-600 transition" to="/search">Search</Link></li>
            <li><Link className="hover:text-red-600 transition" to="/contact">Contact</Link></li>
            <li><Link className="hover:text-red-600 transition" to="/about">About</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-xl font-semibold mb-2">Services</h3>
          <div className="h-[3px] w-10 bg-red-600 mb-4"></div>
          <ul className="space-y-2 text-lg">
            <li><Link className="hover:text-red-600 transition" to="/services">Digital Marketing</Link></li>
            <li><Link className="hover:text-red-600 transition" to="/services">Content Creation</Link></li>
            <li><Link className="hover:text-red-600 transition" to="/services">Logo Designing</Link></li>
            <li><Link className="hover:text-red-600 transition" to="/services">Web Development</Link></li>
            <li><Link className="hover:text-red-600 transition" to="/services">Graphic Designing</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <div className="h-[3px] w-10 bg-red-600 mb-4"></div>
          <ul className="space-y-2 text-lg">
            <li className="flex items-center gap-2">
              <i className="fa fa-envelope"></i>
              <a
                className="hover:text-red-600 transition"
                href="mailto:support@Freelhire.com"
              >
                support@Freelhire.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#000e16] text-center text-sm py-4">
        &copy; {new Date().getFullYear()} Freelhire. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
