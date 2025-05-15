
import { motion } from 'framer-motion';
import StyleProvider from '../design/StyleProvider';
import SectionTitle from '../design/SectionTitle';
import { Github } from 'lucide-react';

// Updated logos array with actual companies and their correct SVG icons
const logos = [
  { id: 1, name: 'Github', component: Github, alt: 'Github Logo', width: 'w-24 sm:w-28 md:w-32', color: 'text-white' },
  { id: 2, name: 'Chrome', alt: 'Chrome Logo', width: 'w-24 sm:w-28 md:w-32', color: 'text-blue-500' },
  { id: 3, name: 'Slack', alt: 'Slack Logo', width: 'w-24 sm:w-28 md:w-32', color: 'text-pink-500' },
  { id: 4, name: 'Figma', alt: 'Figma Logo', width: 'w-24 sm:w-28 md:w-32', color: 'text-purple-500' },
  { id: 5, name: 'Dribbble', alt: 'Dribbble Logo', width: 'w-24 sm:w-28 md:w-32', color: 'text-pink-600' },
];

const TrustedBy = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-950 to-black rounded-3xl mx-4 md:mx-8 border border-gray-800">
      <StyleProvider className="text-center mb-10">
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
        className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
      >
        {logos.map((logo, index) => (
          <motion.div
            key={logo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className={`${logo.width} flex flex-col items-center justify-center transition-all duration-300 hover:scale-105`}
          >
            <div className="h-12 w-12 flex items-center justify-center mb-2">
              {logo.name === 'Github' && logo.component && (
                <logo.component className="h-12 w-12" />
              )}
              {logo.name === 'Chrome' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 w-12 fill-current text-blue-500">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3a9 9 0 019 9 8.99 8.99 0 01-.463 2.856h-4.68C16.556 13.2 15.324 12 13.846 12H9.154a2.771 2.771 0 00-2.769 2.769 2.771 2.771 0 002.769 2.769h4.308a4.194 4.194 0 01-3.462 1.846 4.616 4.616 0 01-4.615-4.615A9 9 0 0112 3zm0 4a1.385 1.385 0 110 2.769A1.385 1.385 0 0112 7zm6.923 5.538A6.89 6.89 0 0119.385 12a7.381 7.381 0 01-7.385 7.385 7.381 7.381 0 01-7.385-7.385 7.381 7.381 0 017.385-7.385 7.045 7.045 0 012.855.59l-2.36 4.077a2.769 2.769 0 00-3.871 2.564 2.771 2.771 0 002.769 2.769 2.771 2.771 0 002.769-2.769 2.755 2.755 0 00-.064-.59h4.825z" />
                </svg>
              )}
              {logo.name === 'Slack' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 w-12 fill-current text-pink-500">
                  <path d="M9.25 3.25a2.25 2.25 0 00-4.5 0v5.5a2.25 2.25 0 104.5 0v-5.5zM11.5 8.75a2.25 2.25 0 010-4.5h5.5a2.25 2.25 0 010 4.5h-5.5zM9.25 15.25a2.25 2.25 0 00-4.5 0v3.25a2.25 2.25 0 104.5 0v-3.25zM11.5 15.25a2.25 2.25 0 114.5 0v5.5a2.25 2.25 0 11-4.5 0v-5.5zM15.25 9.25a2.25 2.25 0 000 4.5h3.25a2.25 2.25 0 000-4.5h-3.25zM7 11.5a2.25 2.25 0 01-4.5 0v-5.5a2.25 2.25 0 014.5 0v5.5zM17 11.5a2.25 2.25 0 01-4.5 0v-3.25a2.25 2.25 0 114.5 0v3.25zM7 17a2.25 2.25 0 01-4.5 0v-3.25a2.25 2.25 0 114.5 0V17z" />
                </svg>
              )}
              {logo.name === 'Figma' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 w-12 fill-current text-purple-500">
                  <path d="M8.5 2a3.5 3.5 0 100 7h7a3.5 3.5 0 100-7h-7zm7 7h-7a3.5 3.5 0 100 7h1.5v-3.5H15a3.5 3.5 0 100-3.5zm-5.5 7v3.5a3.5 3.5 0 107 0v-3.5h-7z" fillRule="evenodd" clipRule="evenodd" />
                  <path d="M8.5 16a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" />
                  <path d="M8.5 2h7a3.5 3.5 0 010 7h-7V2z" />
                </svg>
              )}
              {logo.name === 'Dribbble' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 w-12 fill-current text-pink-600">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.98 9.358c-2.297-.548-4.316-.55-6.118.003-.198-.442-.398-.876-.607-1.302 1.92-.835 3.443-1.988 4.601-3.397 1.268 1.267 2.116 2.935 2.225 4.756-.033-.014.099-.049-.1-.06zm-3.26-5.722c-.986 1.24-2.323 2.262-4.03 3.012-.855-1.576-1.74-3.063-2.637-4.437A8.062 8.062 0 0112 3c1.765 0 3.398.547 4.72 1.636zM6.034 4.673c.95 1.347 1.857 2.782 2.704 4.195-2.038.58-4.466.876-7.302.91C1.978 7.323 3.68 5.215 6.034 4.673zm-4 8.142c0-.072 0-.144.002-.216 3.194-.143 5.946-.694 8.218-1.676.183.373.362.746.535 1.12-2.883 1.02-5.197 2.976-7.17 6.048-1.095-1.538-1.585-3.38-1.585-5.276zm2.118 6.631c1.712-2.963 3.811-4.854 6.581-5.243.786 2.178 1.355 4.496 1.67 6.929-2.77 1.03-5.705.505-8.25-1.686zm9.791.604c-.336-2.271-.866-4.44-1.591-6.478 1.64-.237 3.35-.15 5.16.259-.475 2.636-1.81 4.872-3.569 6.219z" />
                </svg>
              )}
            </div>
            <span className={`${logo.color} font-medium`}>{logo.name}</span>
          </motion.div>
        ))}
      </StyleProvider>
    </div>
  );
};

export default TrustedBy;
