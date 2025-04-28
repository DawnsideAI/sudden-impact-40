
import HeroContent from "./hero/HeroContent";
import HeroPreview from "./hero/HeroPreview";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background/50 border-b border-white/10">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-[500px] w-[500px] rounded-full bg-agency-blue/20 blur-3xl -top-20 -left-20"></div>
        <div className="absolute h-[600px] w-[600px] rounded-full bg-agency-vibrantPurple/20 blur-3xl top-40 right-10"></div>
      </div>
      
      <div className="container-custom relative z-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroPreview />
        </div>
      </div>
    </div>
  );
};

export default Hero;
