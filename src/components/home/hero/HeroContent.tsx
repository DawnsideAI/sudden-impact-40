
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroContent = () => {
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
        className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent"
      >
        AI Voice Agents + Business Automation Suite
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xl md:text-2xl text-muted-foreground"
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
          className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-agency-vibrantPurple hover:bg-agency-vibrantPurple/90 rounded-lg transition-colors"
        >
          Start Free Trial
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        <Link 
          to="/demo" 
          className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm transition-colors border border-white/20"
        >
          See Live Demo
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
