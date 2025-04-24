import { Link } from "react-router-dom";
import { FiLinkedin, FiFacebook, FiInstagram } from "react-icons/fi";
import { FaFacebook, FaLinkedin, FaTiktok, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-agency-darkPurple text-white">
      <div className="container-custom py-8 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 space-y-4">
            <h3 className="text-xl font-bold gradient-text">Sudden Impact</h3>
            <p className="text-gray-300 mt-2 text-sm md:text-base">
              Your AI-powered automation partner providing cutting-edge voice agent solutions for modern businesses.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.facebook.com/suddenaiimpact/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/suddenimpact/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@suddenimpactai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTiktok size={20} />
              </a>
              <a 
                href="https://www.instagram.com/suddenimpactagency/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://x.com/SImpactAgency" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/demo" className="text-gray-300 hover:text-white transition-colors">Demo</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-3 md:mb-4">Our Solutions</h4>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
              <li><Link to="/solutions#contractors" className="text-gray-300 hover:text-white transition-colors">Service Contractors</Link></li>
              <li><Link to="/solutions#restaurants" className="text-gray-300 hover:text-white transition-colors">Restaurants & Hospitality</Link></li>
              <li><Link to="/solutions#healthcare" className="text-gray-300 hover:text-white transition-colors">Healthcare Providers</Link></li>
              <li><Link to="/solutions#callcenters" className="text-gray-300 hover:text-white transition-colors">Call Centers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-3 md:mb-4">Legal</h4>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
              <li><Link to="/legal#privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal#terms" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/legal#overage" className="text-gray-300 hover:text-white transition-colors">Overage Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 md:mt-12 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs md:text-sm">
            &copy; {currentYear} Sudden Impact Agency. All rights reserved.
          </p>
          <div className="mt-2 md:mt-0">
            <p className="text-gray-400 text-xs md:text-sm">
              Powered by Sudden Impact Automation Suite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
