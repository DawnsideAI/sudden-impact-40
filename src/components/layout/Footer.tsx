
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <footer className={`${bgColor} border-t ${borderColor} pt-16 pb-8`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
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
                className="h-10 mb-4" 
              />
              <p className={textColor}>
                Transforming business communication through intelligent AI voice agents.
              </p>
            </motion.div>
          </div>

          {/* Solutions */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className={`font-bold mb-4 ${titleColor}`}>Solutions</h4>
              <ul className="space-y-2">
                {["Voice Automation", "Lead Generation", "Customer Support", "Appointment Booking"].map(
                  (item, i) => (
                    <li key={i}>
                      <a href="#" className={`${textColor} ${linkHoverColor} transition-colors duration-200`}>
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          </div>

          {/* Industries */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className={`font-bold mb-4 ${titleColor}`}>Industries</h4>
              <ul className="space-y-2">
                {[
                  { name: "Real Estate", url: "/industries/real-estate" },
                  { name: "Healthcare", url: "/industries/healthcare" },
                  { name: "Hospitality", url: "/industries/restaurants" },
                  { name: "Professional Services", url: "/industries/contractors" },
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
              <h4 className={`font-bold mb-4 ${titleColor}`}>Resources</h4>
              <ul className="space-y-2">
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

        <div className={`border-t ${borderColor} pt-6 mt-6`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`${textColor} text-sm mb-4 md:mb-0`}>
              © {new Date().getFullYear()} Sudden Impact Agency. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className={textColor} aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className={textColor} aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
