
import { useEffect } from 'react';
import { MousePointer } from 'lucide-react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);
    
    // Check if device has coarse pointer (touch) - don't show custom cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      document.body.classList.remove('custom-cursor');
      return;
    } else {
      document.body.classList.add('custom-cursor');
    }
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  // Only render on non-touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div 
      className="custom-cursor-icon"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <MousePointer size={20} className="text-white" />
    </div>
  );
};

export default CustomCursor;
