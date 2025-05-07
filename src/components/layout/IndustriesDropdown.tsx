
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Utensils, Building2, Music, Tool, PhoneCall } from "lucide-react";

const industries = [
  {
    id: "restaurants",
    name: "Restaurants & Hospitality",
    icon: <Utensils className="w-5 h-5 mr-2" />,
    url: "/industries/restaurants",
  },
  {
    id: "realEstate",
    name: "Real Estate",
    icon: <Building2 className="w-5 h-5 mr-2" />,
    url: "/industries/realEstate",
  },
  {
    id: "music",
    name: "Music Artists & Labels",
    icon: <Music className="w-5 h-5 mr-2" />,
    url: "/industries/music",
  },
  {
    id: "contractors",
    name: "Service Contractors",
    icon: <Tool className="w-5 h-5 mr-2" />,
    url: "/industries/contractors",
  },
  {
    id: "callcenters",
    name: "Call Centers",
    icon: <PhoneCall className="w-5 h-5 mr-2" />,
    url: "/industries/callcenters",
  },
];

const IndustriesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={toggleDropdown}
        className="nav-link flex items-center"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Industries
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-background border border-white/10">
          <div className="py-1 rounded-md backdrop-blur-lg bg-black/90">
            {industries.map((industry) => (
              <Link
                key={industry.id}
                to={industry.url}
                className="flex items-center px-4 py-2 text-sm hover:bg-white/5 text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {industry.icon}
                {industry.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default IndustriesDropdown;
