
import { useRef } from "react";
import { motion } from "framer-motion";
import { PhoneCall, Play } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

interface DemoRequestFormProps {
  onFormSubmit?: () => void;
  showVideo?: boolean;
}

const DemoRequestForm = ({ onFormSubmit, showVideo = false }: DemoRequestFormProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isMobile = useIsMobile();
  const [showDemoVideo, setShowDemoVideo] = useState(false);
  
  const phoneNumber = "+1 (302) 618-3977";
  const demoVideoUrl = "https://www.youtube.com/embed/HuU_pxXVVqo";

  // Render demo video if showVideo prop is true
  if (showVideo) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-video w-full">
            <iframe
              src={demoVideoUrl}
              title="AI Voice Agent Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="relative">
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="p-8 flex flex-col items-center justify-center text-center"
      >
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ type: "spring", stiffness: 260, damping: 20, repeat: Infinity, repeatType: "reverse", duration: 2 }}
          className="bg-gradient-to-r from-brand-pink to-brand-aqua w-16 h-16 rounded-full flex items-center justify-center mb-6"
        >
          <PhoneCall size={30} className="text-white" />
        </motion.div>
        
        <motion.a
          href={`tel:${phoneNumber.replace(/\D/g, '')}`}
          className="text-3xl font-bold mb-5 text-brand-aqua"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {phoneNumber}
        </motion.a>
        
        <Button
          variant="action"
          size="xl"
          className="shadow-lg bg-gradient-to-r from-brand-pink to-brand-aqua hover:shadow-xl transition-all duration-300"
          onClick={() => window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`}
        >
          <PhoneCall className="mr-2" /> Call Now
        </Button>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Watch Demo Video</h3>
          <button 
            onClick={() => setShowDemoVideo(true)}
            className="inline-flex items-center justify-center px-6 py-3 text-brand-pink bg-white hover:bg-gray-100 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-brand-pink/20"
          >
            <Play className="mr-2 h-5 w-5 text-brand-pink" fill="currentColor" />
            Watch Demo Video
          </button>
          
          <Dialog open={showDemoVideo} onOpenChange={setShowDemoVideo}>
            <DialogContent className="sm:max-w-[800px] bg-white border border-brand-pink/10 shadow-xl">
              <DialogTitle className="text-xl font-bold text-center mb-4 text-gray-800">AI Voice Agent Demo</DialogTitle>
              <div className="aspect-video relative bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5 rounded-lg overflow-hidden">
                <iframe 
                  src={demoVideoUrl}
                  className="w-full h-full"
                  title="AI Voice Agent Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>
    </div>
  );
};

export default DemoRequestForm;
