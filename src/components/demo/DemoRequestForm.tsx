
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

  // Add the script tag for the form embed.js after component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.suddenimpactagency.io/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Clean up script when component unmounts
      const existingScript = document.querySelector(`script[src="https://link.suddenimpactagency.io/js/form_embed.js"]`);
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  // Listen for form submission events from the iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Check if the message is from our form iframe
      if (
        event.data && 
        typeof event.data === 'object' && 
        event.data.formId === formId && 
        event.data.type === 'form:submit'
      ) {
        console.log('Form submission detected via postMessage');
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

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onFormSubmit]);

  // Create MutationObserver to detect changes in the form container
  useEffect(() => {
    const formContainer = document.querySelector('.ghl-form-wrapper');
    if (!formContainer || formSubmitted) return;

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
          // Check for elements that indicate form completion
          const thankYouElements = document.querySelectorAll('.thank-you-message, .form-success, .form-submitted');
          if (thankYouElements.length > 0) {
            console.log('Form completion detected via DOM mutation');
            setFormSubmitted(true);
            localStorage.setItem('a2pFormSubmitted', 'true');
            if (onFormSubmit) onFormSubmit();
            
            // Show success toast
            toast({
              title: "Form submitted successfully",
              description: "Call the number to experience our AI voice demo",
            });
            
            observer.disconnect();
          }
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      attributes: true,
      subtree: true,
      characterData: true
    });

    return () => observer.disconnect();
  }, [formSubmitted, onFormSubmit]);

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

  // For testing purposes - reset the form submission state
  const resetFormSubmission = () => {
    localStorage.removeItem('a2pFormSubmitted');
    setFormSubmitted(false);
  };

  return (
    <div className="relative">
      {!formSubmitted ? (
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold">Complete the form to access our AI demo</h3>
            <p className="text-gray-600">Fill out this quick form to get instant access to our AI voice agent demo</p>
          </div>
          
          <div className="ghl-form-wrapper relative" style={{ minHeight: isMobile ? "650px" : "600px" }}>
            <iframe
              src={`https://link.suddenimpactagency.io/widget/form/${formId}`}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "3px"
              }}
              id={`inline-${formId}`}
              data-layout={`{'id':'INLINE'}`}
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="leadCollected"
              data-deactivation-value=""
              data-form-name={formName}
              data-height="754"
              data-layout-iframe-id={`inline-${formId}`}
              data-form-id={formId}
              title={formName}
              className="no-scrollbar"
            />
          </div>
          
          {/* Hidden reset button - only visible in development */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-2 text-xs text-gray-400 text-center">
              <button onClick={resetFormSubmission} className="hover:text-gray-600">
                (Reset Form)
              </button>
            </div>
          )}
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="p-8 flex flex-col items-center justify-center text-center"
        >
          <motion.div 
            className="bg-gradient-to-r from-brand-pink to-brand-aqua w-16 h-16 rounded-full flex items-center justify-center mb-6"
            whileHover={{ scale: 1.05 }}
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
          
          {/* Hidden reset button - only visible in development */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-8 text-xs text-gray-400">
              <button onClick={resetFormSubmission} className="hover:text-gray-600">
                (Reset Form)
              </button>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default DemoRequestForm;
