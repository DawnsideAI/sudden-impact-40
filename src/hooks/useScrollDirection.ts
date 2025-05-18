
import { useState, useEffect } from 'react';
import { useIsMobile } from './use-mobile';

export function useScrollDirection() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Add threshold to prevent navbar flickering on small scroll movements on mobile
      const threshold = isMobile ? 20 : 10;
      
      if (currentScrollY > lastScrollY && Math.abs(currentScrollY - lastScrollY) > threshold) {
        // scrolling down - hide with a delay on mobile for smoother experience
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY && Math.abs(currentScrollY - lastScrollY) > threshold) {
        // scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Use passive event listener to improve performance
    window.addEventListener('scroll', controlNavbar, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, isMobile]);

  return isVisible;
}
