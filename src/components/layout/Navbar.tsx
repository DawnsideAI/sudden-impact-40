
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

// Import required components for the mobile menu
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  
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

  // Determine active path for highlighting
  const isActive = (path: string) => {
    return location.pathname === path || 
           (path !== '/' && location.pathname.startsWith(path));
  };

  // Navigation items consistent with the reference image
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Industries', path: '/industries' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="container-custom">
      <div className="flex items-center justify-between h-16">
        {/* Logo container */}
        <Link to="/" className="flex items-center">
          <div className="relative inline-block">
            <img 
              src="/lovable-uploads/99284eb7-0e97-4d18-a9bd-6e1edf74a2a1.png" 
              alt="Sudden Impact Agency Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation - styled to match the reference image */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-base font-medium transition-colors",
                isActive(item.path) 
                  ? "text-brand-purple" 
                  : "text-gray-700 hover:text-brand-purple"
              )}
            >
              {item.label}
            </Link>
          ))}
          
          {/* CTA Button - styled to match reference image */}
          <Link 
            to="/demo" 
            className="bg-gradient-to-r from-brand-pink to-brand-aqua text-white font-medium py-2 px-6 rounded-full text-base hover:shadow-md transition-all duration-300"
          >
            Try AI Voice Agent
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          {/* CTA button - smaller on mobile */}
          <Link 
            to="/demo" 
            className="bg-gradient-to-r from-brand-pink to-brand-aqua text-white font-medium py-1.5 px-3 rounded-full text-sm hover:shadow-md transition-all duration-300"
          >
            Try AI Voice Agent
          </Link>
          
          {/* Sheet component for mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button 
                className="p-1 text-gray-700 focus:outline-none focus:ring-0"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="md:hidden py-6 w-[85vw] sm:max-w-sm">
              <SheetHeader className="mb-5">
                <SheetTitle className="text-center font-bold text-xl">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className={cn(
                      "text-xl font-medium p-2 rounded-md transition-colors",
                      isActive(item.path) ? "text-white bg-brand-purple" : "text-gray-800 hover:text-white hover:bg-brand-purple"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <hr className="border-gray-200 my-2" />
                
                <Link 
                  to="/demo" 
                  className="bg-gradient-to-r from-brand-pink to-brand-aqua text-white text-center font-medium py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Try AI Voice Agent
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
