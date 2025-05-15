
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
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

  // Close mobile menu when route changes or screen size changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setExpandedSection(null);
  }, [isMobile]);

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const toggleSection = (section: string) => {
    setExpandedSection(prev => prev === section ? null : section);
  };

  // Use consistent styling
  const bgColor = 'bg-white/90 backdrop-blur-xl';
  const textColor = 'text-gray-800';
  const navItemClass = "text-gray-700 hover:text-brand-pink transition-colors duration-200";

  const toggleMobileMenu = () => {
    console.log("Toggle mobile menu called, current state:", mobileMenuOpen);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <motion.div
        className={cn(
          'w-full transition-all duration-300 border-b py-4 border-gray-200 relative z-40',
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
                  src="/lovable-uploads/293aebbf-1435-4e16-867f-2a95f52ef685.png" 
                  alt="Sudden Impact Agency Logo" 
                  className="h-20 md:h-28 w-auto rounded-md" 
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation with direct links instead of dropdowns */}
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/" className={cn(navigationMenuTriggerStyle(), navItemClass, "bg-transparent")}>
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/solutions" className={cn(navigationMenuTriggerStyle(), navItemClass, "bg-transparent")}>
                        Solutions
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/industries" className={cn(navigationMenuTriggerStyle(), navItemClass, "bg-transparent")}>
                        Industries
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/pricing" className={cn(navigationMenuTriggerStyle(), navItemClass, "bg-transparent")}>
                        Pricing
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link to="/contact" className={cn(navigationMenuTriggerStyle(), navItemClass, "bg-transparent")}>
                        Contact
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center gap-2">
              <Link 
                to="/demo" 
                className="bg-gradient-to-r from-brand-pink to-brand-aqua text-white font-medium py-2 px-3 md:py-2 md:px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Try AI Voice Agent
              </Link>
              
              <button 
                className="md:hidden ml-2 p-2 text-gray-700 focus:outline-none focus:ring-0"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl pt-24 px-6 flex flex-col md:hidden overflow-auto"
          >
            <nav className="flex flex-col gap-6 py-8">
              <Link 
                to="/" 
                className="text-xl font-medium text-gray-800 hover:text-brand-pink transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <Link 
                to="/solutions" 
                className="text-xl font-medium text-gray-800 hover:text-brand-pink transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              
              <Link 
                to="/industries" 
                className="text-xl font-medium text-gray-800 hover:text-brand-pink transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Industries
              </Link>
              
              <Link 
                to="/pricing" 
                className="text-xl font-medium text-gray-800 hover:text-brand-pink transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              
              <Link 
                to="/contact" 
                className="text-xl font-medium text-gray-800 hover:text-brand-pink transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <hr className="border-gray-200 my-2" />
              
              <Link 
                to="/demo" 
                className="bg-gradient-to-r from-brand-pink to-brand-aqua text-white text-center font-medium py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Try AI Voice Agent
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
