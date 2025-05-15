
import { motion } from 'framer-motion';
import StyleProvider from '../design/StyleProvider';
import SectionTitle from '../design/SectionTitle';

const logos = [
  { id: 1, name: 'Slack', src: '/lovable-uploads/46b36e77-e44d-4dfd-8c35-6805698f485f.png', alt: 'Slack Logo' },
  { id: 2, name: 'Microsoft', src: '/lovable-uploads/3094ebcc-0925-48b6-9f13-c4e025b7e67d.png', alt: 'Microsoft Logo' },
  { id: 3, name: 'Google', src: '/lovable-uploads/a8ea11c6-eee2-4a72-9e98-851efb0bdc3d.png', alt: 'Google Logo' },
  { id: 4, name: 'Apple', src: '/lovable-uploads/04e02938-36ca-4abc-adad-95afd668326b.png', alt: 'Apple Logo' },
  { id: 5, name: 'Zoom', src: '/lovable-uploads/cf7822cb-c186-4075-9bc8-c04e61c0b9b0.png', alt: 'Zoom Logo' },
];

const TrustedBy = () => {
  return (
    <div className="py-16">
      <StyleProvider className="text-center mb-12">
        <SectionTitle
          title="Trusted by Businesses"
          subtitle="Join hundreds of companies already using our AI voice agents to revolutionize their customer interactions"
          centered={true}
          maxWidth="max-w-3xl"
        />
      </StyleProvider>

      <StyleProvider
        delay={0.2}
        className="flex flex-wrap justify-center items-center gap-10 md:gap-16"
      >
        {logos.map((logo, index) => (
          <motion.div
            key={logo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className="w-28 sm:w-36 md:w-44 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
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
