
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar = () => {
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

  // Use consistent styling
  const bgColor = 'bg-white/90 backdrop-blur-xl';
  const textColor = 'text-gray-800';
  const navItemClass = "text-gray-700 hover:text-brand-pink transition-colors duration-200";

  return (
    <motion.div
      className={cn(
        'w-full transition-all duration-300 border-b py-2 border-gray-200',
        bgColor,
        scrolled ? 'shadow-md' : ''
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative bg-transparent rounded-lg"
            >
              <img 
                src="/lovable-uploads/cf7822cb-c186-4075-9bc8-c04e61c0b9b0.png" 
                alt="Sudden Impact Agency Logo" 
                className="h-12 md:h-16 w-auto rounded-md" 
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
            <Link to="/industries" className={navItemClass}>
              Industries
            </Link>
            <Link to="/pricing" className={navItemClass}>
              Pricing
            </Link>
          </nav>
          <div className="flex items-center">
            <Link 
              to="/demo" 
              className="bg-gradient-to-r from-brand-pink to-brand-aqua text-white font-medium py-2 px-3 md:py-2 md:px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Try AI Voice Agent
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
