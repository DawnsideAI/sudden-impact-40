
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface HeroContentProps {
  lightMode?: boolean;
}

const HeroContent = ({ lightMode = false }: HeroContentProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-brand-pink via-brand-purple to-brand-aqua bg-clip-text text-transparent"
      >
        AI Voice Agents + Business Automation Suite
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xl md:text-2xl text-brand-gray"
      >
        Transform your business operations with AI-powered voice technology, integrated with smart automations and workflows.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link 
          to="/pricing" 
          className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-brand-pink to-brand-aqua hover:opacity-90 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
        >
          Start Free Trial
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        <Link 
          to="/demo" 
          className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg transition-colors border border-brand-pink/20 text-brand-dark bg-white hover:bg-gray-50 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
        >
          See Live Demo
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
