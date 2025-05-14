
import { motion } from 'framer-motion';

const logos = [
  { id: 1, src: '/lovable-uploads/46b36e77-e44d-4dfd-8c35-6805698f485f.png', alt: 'Client Logo 1' },
  { id: 2, src: '/lovable-uploads/3094ebcc-0925-48b6-9f13-c4e025b7e67d.png', alt: 'Client Logo 2' },
  { id: 3, src: '/lovable-uploads/a8ea11c6-eee2-4a72-9e98-851efb0bdc3d.png', alt: 'Client Logo 3' },
  { id: 4, src: '/lovable-uploads/04e02938-36ca-4abc-adad-95afd668326b.png', alt: 'Client Logo 4' },
];

const TrustedBy = () => {
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-agency-dark mb-2">
          Trusted by Businesses
        </h2>
        <p className="text-agency-gray max-w-2xl mx-auto">
          Join hundreds of companies already using our AI voice agents to revolutionize their customer interactions
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
      >
        {logos.map((logo, index) => (
          <motion.div
            key={logo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className="w-24 sm:w-32 md:w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img 
              src={logo.src} 
              alt={logo.alt}
              className="max-w-full h-auto"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TrustedBy;
