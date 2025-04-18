
import { Link } from "react-router-dom";
import { FiTwitter, FiLinkedin, FiFacebook, FiInstagram } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-agency-darkPurple text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Sudden Impact</h3>
            <p className="text-gray-300 mt-2">
              Your AI-powered automation partner providing cutting-edge voice agent solutions for modern businesses.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/demo" className="text-gray-300 hover:text-white transition-colors">Demo</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/solutions#contractors" className="text-gray-300 hover:text-white transition-colors">Service Contractors</Link></li>
              <li><Link to="/solutions#restaurants" className="text-gray-300 hover:text-white transition-colors">Restaurants & Hospitality</Link></li>
              <li><Link to="/solutions#healthcare" className="text-gray-300 hover:text-white transition-colors">Healthcare Providers</Link></li>
              <li><Link to="/solutions#callcenters" className="text-gray-300 hover:text-white transition-colors">Call Centers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/legal#privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal#terms" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/legal#overage" className="text-gray-300 hover:text-white transition-colors">Overage Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Sudden Impact Agency. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              Powered by Sudden Impact Automation Suite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
