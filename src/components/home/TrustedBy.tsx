
import { motion } from 'framer-motion';
import StyleProvider from '../design/StyleProvider';
import SectionTitle from '../design/SectionTitle';

// Updated logos array to use Sudden Impact Agency branding images
const logos = [
  { id: 1, name: 'Sudden Impact 1', src: '/lovable-uploads/5cf2c10b-14ce-493b-af8b-4b89a496e362.png', alt: 'Sudden Impact Agency Logo 1', width: 'w-36 sm:w-44 md:w-56' },
  { id: 2, name: 'Sudden Impact 2', src: '/lovable-uploads/5cf2c10b-14ce-493b-af8b-4b89a496e362.png', alt: 'Sudden Impact Agency Logo 2', width: 'w-36 sm:w-44 md:w-56' },
  { id: 3, name: 'Sudden Impact 3', src: '/lovable-uploads/5cf2c10b-14ce-493b-af8b-4b89a496e362.png', alt: 'Sudden Impact Agency Logo 3', width: 'w-36 sm:w-44 md:w-56' },
  { id: 4, name: 'Sudden Impact 4', src: '/lovable-uploads/5cf2c10b-14ce-493b-af8b-4b89a496e362.png', alt: 'Sudden Impact Agency Logo 4', width: 'w-36 sm:w-44 md:w-56' },
];

const TrustedBy = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-white to-gray-50 rounded-3xl mx-4 md:mx-8 border border-brand-purple/5">
      <StyleProvider className="text-center mb-10">
        <SectionTitle
          title="Trusted by Leading Businesses"
          subtitle="Join hundreds of companies already using our AI voice agents to revolutionize their customer interactions"
          centered={true}
          maxWidth="max-w-3xl"
        />
      </StyleProvider>

      <StyleProvider
        delay={0.2}
        className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
      >
        {logos.map((logo, index) => (
          <motion.div
            key={logo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className={`${logo.width} flex items-center justify-center transition-all duration-300 hover:scale-105`}
          >
            <img 
              src={logo.src} 
              alt={logo.alt}
              className="max-w-full h-auto"
            />
          </motion.div>
        ))}
      </StyleProvider>
    </div>
  );
};

export default TrustedBy;
