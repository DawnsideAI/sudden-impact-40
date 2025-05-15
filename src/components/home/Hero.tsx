
import { motion } from "framer-motion";
import HeroContent from "./hero/HeroContent";
import HeroPreview from "./hero/HeroPreview";
import StyleProvider from "../design/StyleProvider";
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative overflow-hidden bg-white border-b border-gray-200">
      {/* Background effects with softer gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-[300px] w-[300px] md:h-[600px] md:w-[600px] rounded-full bg-brand-violet/5 blur-3xl -top-20 -left-20"></div>
        <div className="absolute h-[350px] w-[350px] md:h-[700px] md:w-[700px] rounded-full bg-brand-indigo/5 blur-3xl top-40 right-10"></div>
      </div>
      
      <StyleProvider className="container-custom relative z-10 py-16 md:py-24 lg:py-32 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <HeroContent lightMode={true} />
          {/* Only show preview on desktop or conditionally on mobile based on importance */}
          <div className={isMobile ? "mt-6" : ""}>
            <HeroPreview lightMode={true} />
          </div>
        </div>
      </StyleProvider>
    </div>
  );
};

export default Hero;
