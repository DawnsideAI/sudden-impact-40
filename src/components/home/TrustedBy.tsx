
import { motion } from 'framer-motion';
import StyleProvider from '../design/StyleProvider';
import SectionTitle from '../design/SectionTitle';

// Updated logos array with actual companies
const logos = [
  { id: 1, name: 'Github', src: '/lovable-uploads/12471307-0118-414d-a10b-0b0779fc4d94.png', alt: 'Github Logo', width: 'w-24 sm:w-28 md:w-32', color: 'text-white' },
  { id: 2, name: 'Chrome', src: '/lovable-uploads/12471307-0118-414d-a10b-0b0779fc4d94.png', alt: 'Chrome Logo', width: 'w-24 sm:w-28 md:w-32', color: 'text-blue-500' },
  { id: 3, name: 'Slack', src: '/lovable-uploads/12471307-0118-414d-a10b-0b0779fc4d94.png', alt: 'Slack Logo', width: 'w-24 sm:w-28 md:w-32', color: 'text-pink-500' },
  { id: 4, name: 'Figma', src: '/lovable-uploads/12471307-0118-414d-a10b-0b0779fc4d94.png', alt: 'Figma Logo', width: 'w-24 sm:w-28 md:w-32', color: 'text-purple-500' },
  { id: 5, name: 'Dribbble', src: '/lovable-uploads/12471307-0118-414d-a10b-0b0779fc4d94.png', alt: 'Dribbble Logo', width: 'w-24 sm:w-28 md:w-32', color: 'text-pink-600' },
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
            {/* Using icons directly instead of images since we're using the screenshot as reference */}
            <div className="h-12 w-12 flex items-center justify-center mb-2">
              {logo.name === 'Github' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 w-12 fill-current text-white">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              )}
              {logo.name === 'Chrome' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 w-12 fill-current text-blue-500">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 3c4.972 0 9 4.028 9 9s-4.028 9-9 9-9-4.028-9-9 4.028-9 9-9zm-2.696 5c-.526 0-1.051.197-1.452.597-.803.801-.802 2.104.002 2.907l1.693 1.693c.801.804 2.104.803 2.905 0 .803-.801.802-2.104 0-2.907l-1.697-1.696c-.399-.399-.925-.594-1.451-.594zm7.479 1.501l-1.961 3.67-3.039.917 3.432 3.432c.464-.17.901-.438 1.269-.806 1.634-1.635 1.633-4.274.001-5.906-.239-.24-.5-.445-.702-.307zm-8.747 6.02c-.901.327-1.73.89-2.331 1.491-1.634 1.635-1.633 4.275 0 5.908.249.249.508.467.773.65l2.532-4.73-.974-3.319z"/>
                </svg>
              )}
              {logo.name === 'Slack' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 w-12 fill-current text-pink-500">
                  <path d="M6 15c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2s2-.895 2-2c0-1.105-.895-2-2-2zm6-13c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2s2-.895 2-2c0-1.105-.895-2-2-2zm-6 9c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2s2-.895 2-2c0-1.105-.895-2-2-2zm12-6c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2s2-.895 2-2c0-1.105-.895-2-2-2zm-6 6c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2s2-.895 2-2c0-1.105-.895-2-2-2zm6 0c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2s2-.895 2-2c0-1.105-.895-2-2-2z"/>
                </svg>
              )}
              {logo.name === 'Figma' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 w-12 fill-current text-purple-500">
                  <path d="M8.5,5H12v14h-3.5a3.5,3.5,0,0,1-3.5-3.5v-7A3.5,3.5,0,0,1,8.5,5m3.5,0h3.5a3.5,3.5,0,0,1,3.5,3.5v0A3.5,3.5,0,0,1,15.5,12H12m0,0H8.5a3.5,3.5,0,0,0-3.5,3.5v0A3.5,3.5,0,0,0,8.5,19H12M12,5V0H8.5a3.5,3.5,0,0,0-3.5,3.5v0A3.5,3.5,0,0,0,8.5,7H12"/>
                </svg>
              )}
              {logo.name === 'Dribbble' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 w-12 fill-current text-pink-600">
                  <path d="M12 0c-6.628 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/>
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
