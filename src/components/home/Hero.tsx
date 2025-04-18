
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative hero-gradient text-white overflow-hidden">
      {/* Background circles/elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-96 w-96 rounded-full bg-agency-blue opacity-20 blur-3xl -top-20 -left-20"></div>
        <div className="absolute h-96 w-96 rounded-full bg-agency-vibrantPurple opacity-20 blur-3xl top-40 right-10"></div>
      </div>
      
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              AI Voice Agents + Business Automation Suite for Service Pros & Teams
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-100"
            >
              Automate your calls, leads, and workflows using AI-powered voice technology integrated with CRM, booking, funnels, and smart automations.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link to="/pricing" className="btn-primary bg-white text-agency-darkPurple hover:bg-opacity-90 flex items-center justify-center">
                Start Free Trial
                <FiArrowRight className="ml-2" />
              </Link>
              <Link to="/demo" className="btn-secondary border-white text-white hover:bg-white hover:bg-opacity-10 flex items-center justify-center">
                See Live Demo
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 shadow-xl">
              <div className="aspect-video rounded-lg bg-agency-darkPurple bg-opacity-50 overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="animate-float w-24 h-24 mx-auto mb-4 rounded-full bg-agency-blue bg-opacity-30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-agency-blue flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                        <line x1="12" x2="12" y1="19" y2="22"></line>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Voice Assistant Preview</h3>
                  <p className="text-gray-200 mb-4">Click "See Live Demo" to experience our AI voice agent in action</p>
                  <div className="inline-flex rounded-md shadow">
                    <Link to="/demo" className="btn-primary">
                      Experience Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-agency-blue rounded-lg rotate-12 opacity-20 animate-float delay-200"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-agency-vibrantPurple rounded-lg -rotate-12 opacity-20 animate-float delay-300"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
