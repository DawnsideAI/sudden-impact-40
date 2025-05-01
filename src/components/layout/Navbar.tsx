
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { ModeToggle } from '@/components/ui/mode-toggle';
import IndustriesDropdown from './IndustriesDropdown';

interface NavbarProps {
  isSolid: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isSolid }) => {
  const { pathname } = useLocation();
  const [mounted, setMounted] = React.useState(false);
  const { setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const bgColor = isSolid || scrolled 
    ? 'bg-white/70 backdrop-blur-xl' 
    : 'bg-white/20 backdrop-blur-lg';
  const textColor = isSolid || scrolled ? 'text-foreground' : 'text-gray-800';

  return (
    <motion.div
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        isSolid || scrolled ? 'border-gray-200/50' : 'border-transparent',
        bgColor,
        textColor
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container-custom py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/46b36e77-e44d-4dfd-8c35-6805698f485f.png" 
              alt="Sudden Impact Agency Logo" 
              className="h-20 w-auto shadow-lg rounded-md" 
            />
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
          <div className="flex items-center gap-2">
            {mounted && (
              <ModeToggle
                enableSystem={true}
                onChange={(mode) => {
                  setTheme(mode);
                }}
              />
            )}
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
