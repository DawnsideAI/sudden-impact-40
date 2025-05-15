
import { motion } from 'framer-motion';
import StyleProvider from '../design/StyleProvider';
import SectionTitle from '../design/SectionTitle';
import { Github, Chrome, Figma, Slack, Dribbble } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

// Updated logos array with actual companies and their correct Lucide icons
const logos = [
  { id: 1, name: 'Github', component: Github, color: 'text-white' },
  { id: 2, name: 'Chrome', component: Chrome, color: 'text-blue-500' },
  { id: 3, name: 'Slack', component: Slack, color: 'text-pink-500' },
  { id: 4, name: 'Figma', component: Figma, color: 'text-purple-500' },
  { id: 5, name: 'Dribbble', component: Dribbble, color: 'text-pink-600' },
];

const TrustedBy = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="py-12 md:py-16 bg-[#0C0F19] rounded-xl md:rounded-3xl mx-2 md:mx-8">
      <StyleProvider className="text-center mb-8 md:mb-12 px-4">
        <SectionTitle
          title="Trusted by Industry Leaders"
          subtitle="Join hundreds of companies already using our AI voice agents to revolutionize their customer interactions"
          centered={true}
          maxWidth="max-w-3xl"
          light={true}
        />
      </StyleProvider>

      <StyleProvider
        delay={0.2}
        className="flex flex-wrap justify-center items-center gap-6 md:gap-16 lg:gap-24 px-4"
      >
        {logos.map((logo, index) => {
          const LogoComponent = logo.component;
          return (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="flex flex-col items-center justify-center"
            >
              <div className={`${isMobile ? 'h-16 w-16' : 'h-20 w-20'} flex items-center justify-center mb-3 md:mb-4 bg-[#0F1320] rounded-full shadow-lg border border-[#1A1F2C]`}>
                <LogoComponent className={`${isMobile ? 'h-8 w-8' : 'h-10 w-10'} ${logo.color}`} strokeWidth={1.5} />
              </div>
              <span className={`${logo.color} font-medium text-sm md:text-lg`}>{logo.name}</span>
            </motion.div>
          );
        })}
      </StyleProvider>
    </div>
  );
};

export default TrustedBy;
