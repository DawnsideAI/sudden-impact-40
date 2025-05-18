
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

// Import required components for the popup approach
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

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
  // Updated navItemClass to include purple hover state with white text
  const navItemClass = "text-gray-700 hover:text-white hover:bg-brand-purple transition-colors duration-200";

  return (
    <>
      <motion.div
        className={cn(
          'w-full transition-all duration-300 border-b border-gray-200 relative z-40',
          bgColor,
          scrolled ? 'shadow-md' : ''
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-1 md:py-2">
            {/* Logo container with consistent sizing */}
            <Link to="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative bg-transparent rounded-lg"
              >
                <img 
                  src="/lovable-uploads/293aebbf-1435-4e16-867f-2a95f52ef685.png" 
                  alt="Sudden Impact Agency Logo" 
                  className="h-24 md:h-32 w-auto object-contain" 
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation with direct links */}
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/" className={cn(navigationMenuTriggerStyle(), navItemClass, "bg-transparent rounded-md")}>
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/solutions" className={cn(navigationMenuTriggerStyle(), navItemClass, "bg-transparent rounded-md")}>
                        Solutions
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/industries" className={cn(navigationMenuTriggerStyle(), navItemClass, "bg-transparent rounded-md")}>
                        Industries
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/pricing" className={cn(navigationMenuTriggerStyle(), navItemClass, "bg-transparent rounded-md")}>
                        Pricing
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/contact" className={cn(navigationMenuTriggerStyle(), navItemClass, "bg-transparent rounded-md")}>
                        Contact
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile Menu using Sheet component */}
            <div className="flex items-center gap-2">
              {/* CTA button with appropriate sizing */}
              <Link 
                to="/demo" 
                className="bg-gradient-to-r from-brand-pink to-brand-aqua text-white font-medium py-2 px-3 md:py-2 md:px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-sm md:text-base whitespace-nowrap"
              >
                Try AI Voice Agent
              </Link>
              
              {/* Sheet component for mobile menu */}
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <button 
                    className="ml-2 p-2 text-gray-700 focus:outline-none focus:ring-0"
                    aria-label="Open menu"
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="md:hidden py-6 w-[85vw] sm:max-w-sm">
                  <SheetHeader className="mb-5">
                    <SheetTitle className="text-center font-bold text-xl">Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-6">
                    <Link 
                      to="/" 
                      className="text-xl font-medium text-gray-800 hover:text-white hover:bg-brand-purple p-2 rounded-md transition-colors"
                    >
                      Home
                    </Link>
                    
                    <Link 
                      to="/solutions" 
                      className="text-xl font-medium text-gray-800 hover:text-white hover:bg-brand-purple p-2 rounded-md transition-colors"
                    >
                      Solutions
                    </Link>
                    
                    <Link 
                      to="/industries" 
                      className="text-xl font-medium text-gray-800 hover:text-white hover:bg-brand-purple p-2 rounded-md transition-colors"
                    >
                      Industries
                    </Link>
                    
                    <Link 
                      to="/pricing" 
                      className="text-xl font-medium text-gray-800 hover:text-white hover:bg-brand-purple p-2 rounded-md transition-colors"
                    >
                      Pricing
                    </Link>
                    
                    <Link 
                      to="/contact" 
                      className="text-xl font-medium text-gray-800 hover:text-white hover:bg-brand-purple p-2 rounded-md transition-colors"
                    >
                      Contact
                    </Link>
                    
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
      </motion.div>
    </>
  );
};

export default Navbar;
