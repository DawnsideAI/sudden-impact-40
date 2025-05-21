
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
  const bgColor = scrolled ? 'bg-white/95 backdrop-blur-xl' : 'bg-white/90 backdrop-blur-xl';
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
          <div className="flex items-center justify-between py-0.5">
            {/* Logo container with different sizing for mobile vs desktop */}
            <Link to="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative bg-transparent rounded-lg p-0.5"
              >
                {/* Logo with enhanced visibility on white background */}
                <div className="relative inline-block">
                  <img 
                    src="/lovable-uploads/99284eb7-0e97-4d18-a9bd-6e1edf74a2a1.png" 
                    alt="Sudden Impact Agency Logo" 
                    className={cn(
                      "relative z-10",
                      isMobile ? "h-24 w-auto object-contain" : "h-56 w-auto object-contain",
                      "filter drop-shadow-sm hover:drop-shadow-md transition-all duration-300"
                    )}
                  />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation with direct links */}
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/" className={cn(navigationMenuTriggerStyle(), navItemClass, "bg-transparent rounded-md py-1.5")}>
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/solutions" className={cn(navigationMenuTriggerStyle(), navItemClass, "bg-transparent rounded-md py-1.5")}>
                        Solutions
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/industries" className={cn(navigationMenuTriggerStyle(), navItemClass, "bg-transparent rounded-md py-1.5")}>
                        Industries
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/pricing" className={cn(navigationMenuTriggerStyle(), navItemClass, "bg-transparent rounded-md py-1.5")}>
                        Pricing
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/contact" className={cn(navigationMenuTriggerStyle(), navItemClass, "bg-transparent rounded-md py-1.5")}>
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
                className="bg-gradient-to-r from-brand-pink to-brand-aqua text-white font-medium py-1.5 px-3 md:py-1.5 md:px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-sm md:text-base whitespace-nowrap"
              >
                Try AI Voice Agent
              </Link>
              
              {/* Sheet component for mobile menu */}
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <button 
                    className="ml-2 p-1.5 text-gray-700 focus:outline-none focus:ring-0"
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
