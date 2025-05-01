
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiMusic } from 'react-icons/fi';
import { RiRestaurantLine, RiBuilding2Line, RiMusicLine } from 'react-icons/ri';

interface IndustryAnimationProps {
  industry: string;
}

const IndustryAnimation = ({ industry }: IndustryAnimationProps) => {
  // Define animation variants for different elements
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
      } 
    }
  };
  
  const itemVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  const rotateVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  // Industry-specific animation content
  const renderAnimationContent = () => {
    switch (industry) {
      case 'restaurants':
        return (
          <div className="relative h-80 w-full">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-red-500/10 to-orange-600/20 rounded-xl" />
            
            {/* Main animation container */}
            <motion.div 
              className="relative h-full w-full flex items-center justify-center"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              {/* Center restaurant icon */}
              <motion.div 
                className="absolute z-20"
                variants={floatVariants}
                animate="animate"
              >
                <motion.div 
                  className="w-28 h-28 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white shadow-lg"
                  variants={itemVariants}
                >
                  <RiRestaurantLine size={64} />
                </motion.div>
              </motion.div>
              
              {/* Orbiting food icons */}
              <motion.div 
                className="absolute w-64 h-64"
                variants={rotateVariants}
                animate="animate"
              >
                {[0, 60, 120, 180, 240, 300].map((degree, index) => (
                  <motion.div 
                    key={index}
                    className="absolute" 
                    style={{
                      transform: `rotate(${degree}deg) translateX(120px)`,
                    }}
                    variants={itemVariants}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-white text-amber-600 shadow-md`}>
                      {index % 3 === 0 ? '🍕' : index % 3 === 1 ? '🍷' : '🍽️'}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Decorative background circles */}
              <motion.div 
                className="absolute w-80 h-80 rounded-full border-2 border-white/10"
                variants={itemVariants}
              />
              <motion.div 
                className="absolute w-60 h-60 rounded-full border-2 border-white/20"
                variants={itemVariants}
              />
            </motion.div>
          </div>
        );
        
      case 'realEstate':
        return (
          <div className="relative h-80 w-full">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-purple-600/20 rounded-xl" />
            
            {/* Main animation container */}
            <motion.div 
              className="relative h-full w-full flex items-center justify-center"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              {/* Center real estate icon */}
              <motion.div 
                className="absolute z-20"
                variants={floatVariants}
                animate="animate"
              >
                <motion.div 
                  className="w-28 h-28 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg"
                  variants={itemVariants}
                >
                  <RiBuilding2Line size={64} />
                </motion.div>
              </motion.div>
              
              {/* Building grid */}
              <motion.div className="absolute bottom-4 w-full flex justify-center gap-4">
                {[...Array(3)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: i * 0.2 + 0.5, duration: 0.5 } 
                    }}
                  >
                    <div className={`w-16 h-${24 + i * 8} bg-gradient-to-t from-blue-800 to-blue-600 rounded-t-lg`}>
                      {[...Array(3 + i)].map((_, j) => (
                        <div key={j} className="flex justify-center gap-1 pt-2">
                          {[...Array(2)].map((_, k) => (
                            <div key={k} className="w-2 h-2 bg-yellow-300 rounded-sm"></div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute w-72 h-72"
                variants={rotateVariants}
                animate={{
                  rotate: [0, 360],
                  transition: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              >
                {[0, 72, 144, 216, 288].map((degree, index) => (
                  <motion.div 
                    key={index}
                    className="absolute" 
                    style={{
                      transform: `rotate(${degree}deg) translateX(130px)`,
                    }}
                    variants={itemVariants}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md`}>
                      {index % 5 === 0 ? '🏠' : index % 5 === 1 ? '🔑' : index % 5 === 2 ? '📝' : index % 5 === 3 ? '📍' : '💰'}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        );
        
      case 'music':
        return (
          <div className="relative h-80 w-full">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-violet-600/20 rounded-xl" />
            
            {/* Main animation container */}
            <motion.div 
              className="relative h-full w-full flex items-center justify-center"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              {/* Center music icon */}
              <motion.div 
                className="absolute z-20"
                variants={floatVariants}
                animate="animate"
              >
                <motion.div 
                  className="w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg"
                  variants={itemVariants}
                >
                  <RiMusicLine size={64} />
                </motion.div>
              </motion.div>
              
              {/* Animated music notes */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-white text-3xl"
                  initial={{ 
                    x: Math.random() * 200 - 100, 
                    y: Math.random() * 200 - 100,
                    opacity: 0
                  }}
                  animate={{ 
                    x: Math.random() * 300 - 150,
                    y: Math.random() * 300 - 150,
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    transition: { 
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.5
                    }
                  }}
                >
                  {i % 3 === 0 ? '♪' : i % 3 === 1 ? '♫' : '🎵'}
                </motion.div>
              ))}
              
              {/* Audio visualization bars */}
              <div className="absolute bottom-6 flex items-end justify-center gap-1 w-60">
                {[...Array(12)].map((_, i) => {
                  const height = 10 + Math.floor(Math.random() * 30);
                  return (
                    <motion.div
                      key={i}
                      className="w-3 bg-gradient-to-t from-purple-500 to-pink-400 rounded-t"
                      initial={{ height: 2, opacity: 0.3 }}
                      animate={{ 
                        height: [height, 5, height * 1.2, height / 2, height],
                        opacity: 1,
                        transition: { 
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.1
                        }
                      }}
                    />
                  );
                })}
              </div>
              
              {/* Rotating vinyl record */}
              <motion.div 
                className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border-8 border-gray-700"
                style={{
                  top: '8%',
                  right: '10%',
                }}
                animate={{ 
                  rotate: 360,
                  transition: { 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              >
                <div className="absolute inset-0 rounded-full border-4 border-gray-600 border-opacity-30 m-8" />
                <div className="absolute inset-0 rounded-full border-4 border-gray-600 border-opacity-20 m-16" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white" />
              </motion.div>
            </motion.div>
          </div>
        );
        
      default:
        return (
          <div className="h-80 w-full flex items-center justify-center">
            <div className="text-2xl text-white">Animation not available</div>
          </div>
        );
    }
  };

  return renderAnimationContent();
};

export default IndustryAnimation;

