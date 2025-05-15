
import { motion } from "framer-motion";
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
        <div className="rounded-xl overflow-hidden flex items-center justify-center border border-gray-100 aspect-square">
          <div className="w-full h-full relative bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5">
            {/* Voice visualization container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Animated circular rings */}
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <motion.div
                  className="absolute w-full h-full rounded-full bg-gradient-to-r from-brand-pink/20 via-brand-purple/20 to-brand-aqua/20"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute w-5/6 h-5/6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-pink/30 via-brand-purple/30 to-brand-aqua/30"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                />
                <motion.div
                  className="absolute w-3/4 h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-pink/50 via-brand-purple/50 to-brand-aqua/50"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                />

                {/* Central microphone icon with glow effect */}
                <motion.div
                  className="absolute w-1/2 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center shadow-lg"
                  animate={{ 
                    boxShadow: [
                      "0 0 10px rgba(236, 72, 153, 0.6), 0 0 20px rgba(124, 58, 237, 0.4)", 
                      "0 0 20px rgba(236, 72, 153, 0.8), 0 0 40px rgba(124, 58, 237, 0.6)", 
                      "0 0 10px rgba(236, 72, 153, 0.6), 0 0 20px rgba(124, 58, 237, 0.4)"
                    ] 
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                  </svg>
                </motion.div>

                {/* Sound wave animation elements */}
                <motion.div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center justify-center gap-1.5">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="bg-gradient-to-b from-brand-aqua to-brand-pink w-1.5 md:w-2 rounded-full"
                        animate={{ 
                          height: [
                            `${8 + Math.random() * 8}px`,
                            `${28 + Math.random() * 24}px`,
                            `${8 + Math.random() * 8}px`
                          ],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 1 + Math.random() * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.1
                        }}
                        style={{
                          position: 'absolute',
                          transform: `translateX(${(i - 4) * 10}px)`
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Text heading and description */}
              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-brand-dark">
                  AI Voice Assistant Preview
                </h3>
                <p className="text-brand-gray text-sm md:text-base">
                  Experience our AI voice agent in action
                </p>
              </motion.div>

              {/* Animated dots below text */}
              <div className="flex gap-1.5 mt-4">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating particles */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 4 + Math.random() * 8,
                  height: 4 + Math.random() * 8,
                  background: `linear-gradient(${Math.random() * 360}deg, #EC4899, #06B6D4)`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  x: [
                    Math.random() * 30 - 15,
                    Math.random() * 30 - 15,
                    Math.random() * 30 - 15
                  ],
                  y: [
                    Math.random() * 30 - 15,
                    Math.random() * 30 - 15,
                    Math.random() * 30 - 15
                  ],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
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
