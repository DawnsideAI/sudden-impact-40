
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isVisible = useScrollDirection();
  const isMobile = useIsMobile();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/industries', label: 'Industries' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/demo', label: 'Demo' }
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 backdrop-blur-md bg-background/30" />
      
      <div className="relative container-custom">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="relative group flex items-center"
          >
            <motion.img 
              src="/lovable-uploads/04e02938-36ca-4abc-adad-95afd668326b.png" 
              alt="Sudden Impact Agency Logo" 
              className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all bg-white/80 rounded-lg p-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ 
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 10
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
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
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Link to="/demo" className="btn-secondary text-sm">
              See Demo
            </Link>
            <Link to="/pricing" className="btn-primary text-sm">
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
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-[65px] z-40 bg-background/95 backdrop-blur-lg overflow-auto"
          >
            <div className="container-custom py-6 flex flex-col space-y-5">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-3 text-lg font-medium rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-white/10 text-white'
                      : 'text-muted-foreground hover:bg-white/5 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 mt-4 border-t border-white/10">
                <Link 
                  to="/demo" 
                  className="btn-secondary w-full text-center py-3 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  See Demo
                </Link>
                <Link 
                  to="/pricing" 
                  className="btn-primary w-full text-center py-3 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
