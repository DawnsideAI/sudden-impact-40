
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Play, Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useIsMobile } from '@/hooks/use-mobile';

interface HeroContentProps {
  lightMode?: boolean;
}

const HeroContent = ({ lightMode = false }: HeroContentProps) => {
  const [showDemoVideo, setShowDemoVideo] = useState(false);
  const [showScheduleDialog, setShowScheduleDialog] = useState(false);
  const isMobile = useIsMobile();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 text-center lg:text-left"
    >
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
      >
        <span className="bg-gradient-to-r from-brand-pink via-brand-purple to-brand-aqua bg-clip-text text-transparent">
          AI Voice Agents + Business Automation Suite
        </span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
      >
        Transform your business operations with AI-powered voice technology, integrated with smart automations and workflows.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
      >
        <button
          onClick={() => setShowScheduleDialog(true)}
          className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-brand-pink to-brand-aqua hover:opacity-90 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
        >
          <Calendar className="mr-2 h-5 w-5" />
          Schedule Demo
        </button>
        
        <button
          onClick={() => setShowDemoVideo(true)}
          className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg transition-colors border border-brand-pink/20 text-gray-700 bg-white hover:bg-gray-50 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
        >
          <Play className="mr-2 h-5 w-5 text-brand-pink" />
          Watch Demo Video
        </button>
      </motion.div>
      
      {/* Video demo dialog */}
      <Dialog open={showDemoVideo} onOpenChange={setShowDemoVideo}>
        <DialogContent className="sm:max-w-[800px] bg-gray-900 border-white/10">
          <DialogTitle className="text-xl font-bold text-center mb-4">AI Voice Agent Demo</DialogTitle>
          <div className="aspect-video relative bg-black/20 rounded-lg overflow-hidden flex items-center justify-center">
            {/* Replace with actual video once available */}
            <div className="text-center p-8">
              <p className="text-white/80 mb-4">Demo video will be placed here once available.</p>
              <p className="text-sm text-white/60">This video shows the AI voice agent in action, CRM dashboard previews, and onboarding automation.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Schedule Demo dialog - Using the same booking widget as Demo page */}
      <Dialog open={showScheduleDialog} onOpenChange={setShowScheduleDialog}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto bg-gray-900 border-white/10">
          <DialogTitle className="text-xl font-bold text-center mb-4">Schedule Your Demo</DialogTitle>
          <div className="w-full calendar-container">
            <div className="iframe-container">
              <iframe 
                src="https://link.suddenimpactagency.io/widget/booking/MYRdt5Un7mP29erZS5rx" 
                style={{ 
                  width: "100%",
                  height: isMobile ? "600px" : "700px", 
                  border: "none",
                }}
                scrolling="no" 
                id="msgsndr-calendar-hero"
                className="no-scrollbar"
              ></iframe>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default HeroContent;
