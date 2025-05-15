
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

  const solutionsLinks = [
    { title: "AI Voice Agent", description: "Convert more calls with our AI voice agent", path: "/solutions#voice-agent" },
    { title: "Call Tracking", description: "Track and analyze your call performance", path: "/solutions#call-tracking" },
    { title: "Lead Management", description: "Streamline your lead capture process", path: "/solutions#lead-management" },
  ];

  const industriesLinks = [
    { title: "Real Estate", description: "Solutions for real estate agencies", path: "/industries/realestate" },
    { title: "Healthcare", description: "Solutions for healthcare providers", path: "/industries/healthcare" },
    { title: "Restaurants", description: "Solutions for restaurants and food services", path: "/industries/restaurants" },
    { title: "Service Contractors", description: "Solutions for service contractors", path: "/industries/contractors" },
  ];

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

            {/* Desktop Navigation with Dropdowns */}
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/" className={cn(navigationMenuTriggerStyle(), navItemClass, "bg-transparent")}>
                      Home
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn(navItemClass, "bg-transparent")}>
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {solutionsLinks.map((solution) => (
                          <li key={solution.title} className="row-span-1">
                            <NavigationMenuLink asChild>
                              <Link
                                to={solution.path}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{solution.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {solution.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn(navItemClass, "bg-transparent")}>
                      Industries
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {industriesLinks.map((industry) => (
                          <li key={industry.title} className="row-span-1">
                            <NavigationMenuLink asChild>
                              <Link
                                to={industry.path}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{industry.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {industry.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/pricing" className={cn(navigationMenuTriggerStyle(), navItemClass, "bg-transparent")}>
                      Pricing
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/contact" className={cn(navigationMenuTriggerStyle(), navItemClass, "bg-transparent")}>
                      Contact
                    </Link>
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
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
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
            className="fixed inset-0 z-30 bg-white/95 backdrop-blur-xl pt-24 px-6 flex flex-col md:hidden overflow-auto"
          >
            <nav className="flex flex-col gap-6 py-8">
              <Link 
                to="/" 
                className="text-xl font-medium text-gray-800 hover:text-brand-pink transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Solutions dropdown for mobile */}
              <div className="space-y-3">
                <button 
                  className="flex items-center justify-between w-full text-xl font-medium text-gray-800 hover:text-brand-pink transition-colors"
                  onClick={() => toggleSection('solutions')}
                >
                  <span>Solutions</span>
                  {expandedSection === 'solutions' ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                <motion.div 
                  className={cn(
                    "ml-4 pl-2 border-l border-gray-200 space-y-2",
                    expandedSection !== 'solutions' && "hidden"
                  )}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: expandedSection === 'solutions' ? 'auto' : 0,
                    opacity: expandedSection === 'solutions' ? 1 : 0
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {solutionsLinks.map((solution) => (
                    <Link
                      key={solution.title}
                      to={solution.path}
                      className="block py-2 text-gray-600 hover:text-brand-pink transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {solution.title}
                    </Link>
                  ))}
                </motion.div>
              </div>
              
              {/* Industries dropdown for mobile */}
              <div className="space-y-3">
                <button 
                  className="flex items-center justify-between w-full text-xl font-medium text-gray-800 hover:text-brand-pink transition-colors"
                  onClick={() => toggleSection('industries')}
                >
                  <span>Industries</span>
                  {expandedSection === 'industries' ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                <motion.div 
                  className={cn(
                    "ml-4 pl-2 border-l border-gray-200 space-y-2",
                    expandedSection !== 'industries' && "hidden"
                  )}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: expandedSection === 'industries' ? 'auto' : 0,
                    opacity: expandedSection === 'industries' ? 1 : 0
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {industriesLinks.map((industry) => (
                    <Link
                      key={industry.title}
                      to={industry.path}
                      className="block py-2 text-gray-600 hover:text-brand-pink transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {industry.title}
                    </Link>
                  ))}
                </motion.div>
              </div>
              
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
