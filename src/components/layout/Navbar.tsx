
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">Sudden Impact</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link font-medium">Home</Link>
            <Link to="/solutions" className="nav-link font-medium">Solutions</Link>
            <Link to="/pricing" className="nav-link font-medium">Pricing</Link>
            <Link to="/demo" className="nav-link font-medium">Demo</Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/demo" className="btn-secondary">
              See Demo
            </Link>
            <Link to="/pricing" className="btn-primary">
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-agency-blue rounded-md focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white"
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="nav-link font-medium px-3 py-2">Home</Link>
            <Link to="/solutions" className="nav-link font-medium px-3 py-2">Solutions</Link>
            <Link to="/pricing" className="nav-link font-medium px-3 py-2">Pricing</Link>
            <Link to="/demo" className="nav-link font-medium px-3 py-2">Demo</Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/demo" className="btn-secondary w-full text-center">
                See Demo
              </Link>
              <Link to="/pricing" className="btn-primary w-full text-center">
                Start Free Trial
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
