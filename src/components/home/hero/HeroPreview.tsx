
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
          <div className="w-full p-6 md:p-8 flex flex-col items-center justify-center">
            {/* Animated voice wave */}
            <div className="relative mb-6 md:mb-8">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-brand-pink/20 via-brand-purple/20 to-brand-aqua/20 flex items-center justify-center"
              >
                <motion.div 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-brand-pink/40 via-brand-purple/40 to-brand-aqua/40 flex items-center justify-center"
                >
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center shadow-lg"
                  >
                    {/* Microphone icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <line x1="12" x2="12" y1="19" y2="22"></line>
                    </svg>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              {/* Voice wave animation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                <div className="flex items-center justify-center gap-1 md:gap-2">
                  {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <motion.div
                      key={i}
                      className="bg-brand-aqua h-4 md:h-6 w-1 md:w-1.5 rounded-full"
                      animate={{
                        height: [
                          `${Math.max(16, Math.random() * 24)}px`,
                          `${Math.max(32, Math.random() * 48)}px`,
                          `${Math.max(16, Math.random() * 24)}px`,
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1 + Math.random(),
                        ease: "easeInOut",
                        delay: i * 0.1,
                      }}
                      style={{ 
                        opacity: 0.7,
                        position: 'absolute',
                        transform: `translateX(${(i - 4) * 8}px)`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl font-semibold mb-2 text-brand-dark"
            >
              AI Voice Assistant Preview
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-brand-gray mb-6 md:mb-8 text-sm md:text-base"
            >
              Experience our AI voice agent in action
            </motion.p>
            
            <div className="flex flex-col gap-3 w-full max-w-[280px] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/demo" 
                  className="w-full inline-flex items-center justify-center px-4 py-3 text-sm md:text-base font-medium text-white bg-gradient-to-r from-brand-pink to-brand-aqua hover:opacity-90 rounded-lg transition-all duration-300 shadow-md"
                >
                  Try AI Voice Agent <span className="ml-1">→</span>
                </Link>
              </motion.div>
              
              <motion.button 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center px-4 py-3 text-sm md:text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                <Play className="w-4 h-4 mr-2 text-brand-pink" /> Watch Demo Video
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements with enhanced design */}
      <motion.div 
        initial={{ opacity: 0, x: -20, y: -20, rotate: -10 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 12 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className={`absolute -top-4 -right-4 ${isMobile ? 'w-16 h-16' : 'w-24 h-24'} bg-gradient-to-br from-brand-pink/20 to-brand-aqua/20 rounded-lg rotate-12 animate-float delay-200`}
      />
      
      <motion.div 
        initial={{ opacity: 0, x: 20, y: 20, rotate: 10 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: -12 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className={`absolute -bottom-4 -left-4 ${isMobile ? 'w-12 h-12' : 'w-16 h-16'} bg-gradient-to-br from-brand-aqua/20 to-brand-pink/20 rounded-lg -rotate-12 animate-float delay-300`}
      />
    </motion.div>
  );
};

export default HeroPreview;
