
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Twitter, TikTok } from 'lucide-react';

interface FooterProps {
  lightMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ lightMode = false }) => {
  // Define classes based on light/dark mode
  const bgColor = lightMode ? 'bg-white' : 'bg-background';
  const borderColor = lightMode ? 'border-gray-200' : 'border-white/10';
  const textColor = lightMode ? 'text-gray-600' : 'text-gray-300';
  const titleColor = lightMode ? 'text-agency-dark' : 'text-white';
  const linkHoverColor = lightMode ? 'hover:text-agency-blue' : 'hover:text-white';

  return (
    <footer className={`${bgColor} border-t ${borderColor} pt-10 pb-6`}>
      <div className="container-custom max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Company Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/lovable-uploads/cf7822cb-c186-4075-9bc8-c04e61c0b9b0.png" 
                alt="Sudden Impact Agency Logo" 
                className="h-8 mb-3" 
              />
              <p className={`${textColor} text-sm`}>
                Transforming business communication through intelligent AI voice agents.
              </p>
            </motion.div>
          </div>

          {/* Case Studies */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className={`font-bold text-sm mb-3 ${titleColor}`}>Case Studies</h4>
              <ul className="space-y-1.5 text-sm">
                {[
                  { name: "Real Estate", url: "/industries/real-estate" },
                  { name: "Healthcare", url: "/industries/healthcare" },
                  { name: "Restaurants", url: "/industries/restaurants" },
                  { name: "Service Contractors", url: "/industries/contractors" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link to={item.url} className={`${textColor} ${linkHoverColor} transition-colors duration-200`}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className={`font-bold text-sm mb-3 ${titleColor}`}>Resources</h4>
              <ul className="space-y-1.5 text-sm">
                {[
                  { name: "Demo", url: "/demo" },
                  { name: "Pricing", url: "/pricing" },
                  { name: "Legal", url: "/legal" },
                  { name: "Contact", url: "/demo" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link to={item.url} className={`${textColor} ${linkHoverColor} transition-colors duration-200`}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <div className={`border-t ${borderColor} pt-4 mt-4`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`${textColor} text-xs mb-3 md:mb-0`}>
              © {new Date().getFullYear()} Sudden Impact Agency. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/suddenaiimpact/" target="_blank" rel="noopener noreferrer" className={textColor} aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/suddenimpact/" target="_blank" rel="noopener noreferrer" className={textColor} aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://www.tiktok.com/@suddenimpactai" target="_blank" rel="noopener noreferrer" className={textColor} aria-label="TikTok">
                <TikTok className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
