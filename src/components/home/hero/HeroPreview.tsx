
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroPreviewProps {
  lightMode?: boolean;
}

const HeroPreview = ({ lightMode = false }: HeroPreviewProps) => {
  const isMobile = useIsMobile();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`relative ${isMobile ? 'mx-auto max-w-[92%] py-2' : ''}`}
    >
      <div className="bg-white shadow-xl border border-brand-pink/10 rounded-2xl p-4 md:p-6 relative z-10">
        <div className="rounded-xl bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5 overflow-hidden flex items-center justify-center border border-gray-100">
          <div className="text-center p-4 md:p-8 w-full">
            <div className="animate-float w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-br from-brand-pink/20 to-brand-aqua/20 flex items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" x2="12" y1="19" y2="22"></line>
                </svg>
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-brand-dark">AI Voice Assistant Preview</h3>
            <p className="text-brand-gray mb-3 md:mb-4 text-sm md:text-base">Experience our AI voice agent in action</p>
            
            <div className="flex flex-col gap-3 max-w-[220px] mx-auto">
              <Link 
                to="/demo" 
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-brand-pink to-brand-aqua hover:opacity-90 rounded-lg transition-all duration-300"
              >
                Try AI Voice Agent <span className="ml-1">→</span>
              </Link>
              
              <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300">
                <Play className="w-4 h-4 mr-2 text-brand-pink" /> Watch Demo Video
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements with enhanced design - smaller on mobile */}
      <div className={`absolute -top-4 -right-4 ${isMobile ? 'w-16 h-16' : 'w-24 h-24'} bg-gradient-to-br from-brand-pink/20 to-brand-aqua/20 rounded-lg rotate-12 animate-float delay-200`}></div>
      <div className={`absolute -bottom-4 -left-4 ${isMobile ? 'w-12 h-12' : 'w-16 h-16'} bg-gradient-to-br from-brand-aqua/20 to-brand-pink/20 rounded-lg -rotate-12 animate-float delay-300`}></div>
    </motion.div>
  );
};

export default HeroPreview;
