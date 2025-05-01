
import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    // Add custom cursor styles to the body element
    document.body.classList.add('custom-cursor');
    
    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  // Return null as we're using CSS for the cursor
  return null;
};

export default CustomCursor;
