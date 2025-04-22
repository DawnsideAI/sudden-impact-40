
import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

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

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.tagName === 'INPUT' ||
        target.closest('.feature-card');
      
      setIsHovering(!!isInteractive);
    };

    // Only add mouse event listeners if not a touch device
    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseover', handleMouseOver);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseover', handleMouseOver);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [cursorX, cursorY]);

  // Don't render cursor on touch devices
  if (!window.matchMedia('(pointer: fine)').matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-agency-vibrantPurple rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isClicking ? 0.8 : isHovering ? 2 : 1,
          translateX: -8,
          translateY: -8,
        }}
        transition={{
          scale: { type: "spring", stiffness: 600, damping: 30 }
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-agency-vibrantPurple rounded-full pointer-events-none z-50 mix-blend-difference opacity-75"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isClicking ? 1.2 : isHovering ? 1.5 : 1,
          translateX: -16,
          translateY: -16,
        }}
        transition={{
          scale: { type: "spring", stiffness: 600, damping: 30 }
        }}
      />
    </>
  );
};

export default CustomCursor;

