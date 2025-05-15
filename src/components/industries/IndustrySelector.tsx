
import { useState, useRef, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface Industry {
  id: string;
  title: string;
}

interface IndustrySelectorProps {
  industries: Industry[];
  selectedId: string;
  onChange: (id: string) => void;
}

const IndustrySelector = ({ industries, selectedId, onChange }: IndustrySelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const selectedIndustry = industries.find(industry => industry.id === selectedId) || industries[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mb-8 max-w-md mx-auto" 
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 pink-aqua-bg backdrop-blur-lg border border-white/20 rounded-lg text-white hover:opacity-95 transition-all shadow-lg"
      >
        <span>{selectedIndustry.title}</span>
        <FiChevronDown className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute z-20 mt-2 w-full bg-background border border-white/20 rounded-lg shadow-xl overflow-hidden"
        >
          <div className="max-h-60 overflow-y-auto">
            {industries.map(industry => (
              <button
                key={industry.id}
                onClick={() => {
                  onChange(industry.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 hover:bg-brand-pink/10 transition-colors ${
                  industry.id === selectedId 
                    ? 'bg-gradient-to-r from-brand-pink/20 to-brand-aqua/20 text-white' 
                    : 'text-gray-300'
                }`}
              >
                {industry.title}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default IndustrySelector;
