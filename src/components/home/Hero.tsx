
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
          <div className="space-y-8">
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
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="glass-morphism rounded-xl p-6">
              <div className="aspect-video rounded-lg bg-background/50 overflow-hidden flex items-center justify-center border border-white/10">
                <div className="text-center p-8">
                  <div className="animate-float w-24 h-24 mx-auto mb-4 rounded-full bg-agency-vibrantPurple/30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-agency-vibrantPurple flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                        <line x1="12" x2="12" y1="19" y2="22"></line>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">AI Voice Assistant Preview</h3>
                  <p className="text-muted-foreground mb-4">Experience our AI voice agent in action</p>
                  <Link 
                    to="/demo" 
                    className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-agency-vibrantPurple hover:bg-agency-vibrantPurple/90 rounded-lg transition-colors"
                  >
                    Try Demo
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-agency-vibrantPurple/30 rounded-lg rotate-12 animate-float delay-200"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-agency-blue/30 rounded-lg -rotate-12 animate-float delay-300"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
