
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/demo', label: 'Demo' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 backdrop-blur-md bg-background/30" />
      
      <div className="relative container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="relative group"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-agency-blue to-agency-vibrantPurple bg-clip-text text-transparent">
              Sudden Impact
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-agency-blue to-agency-vibrantPurple transition-all group-hover:w-full" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-white'
                    : 'text-muted-foreground hover:text-white'
                }`}
              >
                <span className="relative">
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-agency-blue to-agency-vibrantPurple"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </span>
              </Link>
            ))}
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
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-muted-foreground hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="relative md:hidden"
          >
            <div className="absolute inset-0 backdrop-blur-md bg-background/30" />
            <div className="relative container-custom py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-white/10 text-white'
                      : 'text-muted-foreground hover:bg-white/5 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <Link 
                  to="/demo" 
                  className="btn-secondary w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  See Demo
                </Link>
                <Link 
                  to="/pricing" 
                  className="btn-primary w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
