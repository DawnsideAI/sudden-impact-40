
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface HeroPreviewProps {
  lightMode?: boolean;
}

const HeroPreview = ({ lightMode = false }: HeroPreviewProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative"
    >
      <div className={`${lightMode ? 'bg-white shadow-lg border border-gray-200' : 'glass-morphism'} rounded-xl p-6`}>
        <div className={`aspect-video rounded-lg ${lightMode ? 'bg-gray-50' : 'bg-background/50'} overflow-hidden flex items-center justify-center ${lightMode ? 'border border-gray-200' : 'border border-white/10'}`}>
          <div className="text-center p-8">
            <div className={`animate-float w-24 h-24 mx-auto mb-4 rounded-full ${lightMode ? 'bg-agency-blue/10' : 'bg-agency-vibrantPurple/30'} flex items-center justify-center`}>
              <div className={`w-16 h-16 rounded-full ${lightMode ? 'bg-agency-blue' : 'bg-agency-vibrantPurple'} flex items-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" x2="12" y1="19" y2="22"></line>
                </svg>
              </div>
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${lightMode ? 'text-agency-dark' : 'text-white'}`}>AI Voice Assistant Preview</h3>
            <p className={`${lightMode ? 'text-agency-gray' : 'text-muted-foreground'} mb-4`}>Experience our AI voice agent in action</p>
            <Link 
              to="/demo" 
              className={`inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white ${lightMode ? 'bg-agency-blue hover:bg-agency-blue/90' : 'bg-agency-vibrantPurple hover:bg-agency-vibrantPurple/90'} rounded-lg transition-colors`}
            >
              Try Demo
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating elements - more subtle in light mode */}
      <div className={`absolute -top-4 -right-4 w-24 h-24 ${lightMode ? 'bg-agency-blue/10' : 'bg-agency-vibrantPurple/30'} rounded-lg rotate-12 animate-float delay-200`}></div>
      <div className={`absolute -bottom-4 -left-4 w-16 h-16 ${lightMode ? 'bg-agency-blue/20' : 'bg-agency-blue/30'} rounded-lg -rotate-12 animate-float delay-300`}></div>
    </motion.div>
  );
};

export default HeroPreview;
