
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PhoneCall, Play } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

interface DemoRequestFormProps {
  onFormSubmit?: () => void;
  showVideo?: boolean;
}

const DemoRequestForm = ({ onFormSubmit, showVideo = false }: DemoRequestFormProps) => {
  const isMobile = useIsMobile();
  const [showDemoVideo, setShowDemoVideo] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const phoneNumber = "+1 (302) 618-3977";
  const demoVideoUrl = "https://www.youtube.com/embed/HuU_pxXVVqo?si=qrMXYUDeg8m8zUzs";
  const formId = "Gf3ORV8Uba4HRiXoml5L";
  const formName = "A2P Form - New";

  // Check if the form has been submitted on component mount
  useEffect(() => {
    const isA2PFormSubmitted = localStorage.getItem('a2pFormSubmitted') === 'true';
    setFormSubmitted(isA2PFormSubmitted);
  }, []);
  
  // Handle message events from GHL form
  useEffect(() => {
    const handleGHLMessage = (event: MessageEvent) => {
      if (
        event.data && 
        typeof event.data === 'object' && 
        event.data.type === 'form:submit'
      ) {
        console.log('Form submission detected via postMessage', event.data);
        setFormSubmitted(true);
        localStorage.setItem('a2pFormSubmitted', 'true');
        
        if (onFormSubmit) onFormSubmit();
        
        // Show success toast
        toast({
          title: "Form submitted successfully",
          description: "Call the number to experience our AI voice demo",
        });
      }
    };

    window.addEventListener('message', handleGHLMessage);
    return () => window.removeEventListener('message', handleGHLMessage);
  }, [onFormSubmit]);

  // Handle video load complete
  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  // Render demo video if showVideo prop is true
  if (showVideo) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-video w-full relative">
            {isVideoLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="w-10 h-10 border-4 border-t-brand-pink rounded-full animate-spin"></div>
              </div>
            )}
            <iframe
              src={demoVideoUrl}
              title="AI Voice Agent Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              onLoad={handleVideoLoad}
            ></iframe>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="relative">
      {!formSubmitted ? (
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="ghl-form-wrapper" style={{ height: isMobile ? "900px" : "800px" }}>
            <iframe
              src="https://link.suddenimpactagency.io/widget/form/Gf3ORV8Uba4HRiXoml5L"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
              id="inline-Gf3ORV8Uba4HRiXoml5L" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="leadCollected"
              data-deactivation-value=""
              data-form-name="A2P Form - New"
              data-height="735"
              data-layout-iframe-id="inline-Gf3ORV8Uba4HRiXoml5L"
              data-form-id="Gf3ORV8Uba4HRiXoml5L"
              title="A2P Form - New"
            ></iframe>
          </div>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="p-8 flex flex-col items-center justify-center text-center bg-white rounded-lg shadow-md border border-gray-200"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Call Now To Speak With Our AI Assistant</h3>
          
          <motion.div 
            className="bg-gradient-to-r from-brand-pink to-brand-aqua w-16 h-16 rounded-full flex items-center justify-center mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
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
          
          <p className="text-gray-600 mb-6">
            Call this number to speak with our AI voice agent and experience our technology first-hand.
          </p>
          
          <Button
            variant="action"
            size="xl"
            className="shadow-lg bg-gradient-to-r from-brand-pink to-brand-aqua hover:shadow-xl transition-all duration-300"
            onClick={() => {
              window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`;
              if (onFormSubmit) onFormSubmit();
            }}
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
                  {isVideoLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 border-4 border-t-brand-pink rounded-full animate-spin"></div>
                    </div>
                  )}
                  <iframe 
                    src={demoVideoUrl}
                    className="w-full h-full"
                    title="AI Voice Agent Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={() => setIsVideoLoading(false)}
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DemoRequestForm;
