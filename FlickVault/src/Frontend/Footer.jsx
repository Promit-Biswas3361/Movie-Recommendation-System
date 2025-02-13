import React from "react";
import { Linkedin, Github, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#134456] text-white py-5 px-4 mt-25 lg:mt-35">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">FlickVault</h2>
          <p className="text-gray-400 text-sm">
            © 2025 FlickVault. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 text-gray-300 text-sm">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/profile" className="hover:text-white">
            Profile
          </Link>
          <Link to="/about" className="hover:text-white">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-white">
            Contact Us
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="mailto:support@flickvault.com"
            className="text-gray-300 hover:text-white"
          >
            <Mail />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <Linkedin />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <Github />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <Instagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
