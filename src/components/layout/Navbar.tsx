
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import IndustriesDropdown from './IndustriesDropdown';

interface NavbarProps {
  isSolid: boolean;
  lightMode?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isSolid, lightMode = false }) => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 75;
      if (isTop !== scrolled) {
        setScrolled(!isTop);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Use theme-appropriate background and text colors
  const bgColor = lightMode 
    ? scrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-xl' 
    : 'bg-gray-800/60 backdrop-blur-xl';
    
  const textColor = lightMode ? 'text-brand-dark' : 'text-white';
  const borderColor = lightMode ? 'border-gray-200' : 'border-white/10';
  const navItemClass = lightMode 
    ? "text-brand-dark hover:text-brand-purple transition-colors duration-200" 
    : "text-gray-300 hover:text-white transition-colors duration-200";

  return (
    <motion.div
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        borderColor,
        bgColor,
        textColor
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container-custom py-1">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative bg-transparent rounded-lg"
            >
              <img 
                src="/lovable-uploads/cf7822cb-c186-4075-9bc8-c04e61c0b9b0.png" 
                alt="Sudden Impact Agency Logo" 
                className="h-16 w-auto rounded-md" 
              />
            </motion.div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className={navItemClass}>
              Home
            </Link>
            <Link to="/solutions" className={navItemClass}>
              Solutions
            </Link>
            <IndustriesDropdown />
            <Link to="/pricing" className={navItemClass}>
              Pricing
            </Link>
          </nav>
          <div className="flex items-center">
            <Link 
              to="/demo" 
              className={lightMode 
                ? "bg-gradient-to-r from-brand-indigo to-brand-violet text-white font-medium py-2 px-3 md:py-2 md:px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5" 
                : "btn-primary"}
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
