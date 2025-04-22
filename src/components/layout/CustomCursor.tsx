
import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Adjusted spring config for smoother movement
  const springConfig = { damping: 25, stiffness: 400, mass: 0.8 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.tagName === 'INPUT' ||
        target.closest('.feature-card');
      
      setIsHovering(!!isInteractive); // Convert to boolean with !! operator
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-agency-vibrantPurple rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 2 : 1,
          translateX: -8,
          translateY: -8,
        }}
        transition={{
          scale: { type: "spring", stiffness: 400, damping: 25 }
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-agency-vibrantPurple rounded-full pointer-events-none z-50 mix-blend-difference opacity-75"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 1.5 : 1,
          translateX: -16,
          translateY: -16,
        }}
        transition={{
          scale: { type: "spring", stiffness: 400, damping: 25 }
        }}
      />
    </>
  );
};

export default CustomCursor;
