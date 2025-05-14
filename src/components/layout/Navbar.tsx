
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
}

const Navbar: React.FC<NavbarProps> = ({ isSolid }) => {
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

  // Use a semi-transparent background for better visibility and color balance
  const bgColor = 'bg-gray-800/60 backdrop-blur-xl';
  const textColor = 'text-white';

  return (
    <motion.div
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        'border-white/10',
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
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/solutions" className="nav-link">
              Solutions
            </Link>
            <IndustriesDropdown />
            <Link to="/pricing" className="nav-link">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center">
            <Link to="/demo" className="btn-primary">
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
