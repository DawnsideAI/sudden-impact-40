
import { motion } from "framer-motion";
import HeroContent from "./hero/HeroContent";
import HeroPreview from "./hero/HeroPreview";
import StyleProvider from "../design/StyleProvider";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white border-b border-gray-200">
      {/* Background effects with softer gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-[600px] w-[600px] rounded-full bg-agency-vibrantPurple/5 blur-3xl -top-20 -left-20"></div>
        <div className="absolute h-[700px] w-[700px] rounded-full bg-agency-blue/5 blur-3xl top-40 right-10"></div>
      </div>
      
      <StyleProvider className="container-custom relative z-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent lightMode={true} />
          <HeroPreview lightMode={true} />
        </div>
      </StyleProvider>
    </div>
  );
};

export default Hero;
