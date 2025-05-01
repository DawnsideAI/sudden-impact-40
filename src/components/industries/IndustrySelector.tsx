
import { useState, useRef, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';

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
    <div className="relative mb-8 max-w-md mx-auto" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/15 transition-colors"
      >
        <span>{selectedIndustry.title}</span>
        <FiChevronDown className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute z-20 mt-2 w-full bg-background border border-white/20 rounded-lg shadow-lg overflow-hidden">
          <div className="max-h-60 overflow-y-auto">
            {industries.map(industry => (
              <button
                key={industry.id}
                onClick={() => {
                  onChange(industry.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 hover:bg-white/10 transition-colors ${
                  industry.id === selectedId ? 'bg-white/10 text-white' : 'text-gray-300'
                }`}
              >
                {industry.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default IndustrySelector;
