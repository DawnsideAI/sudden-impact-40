
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface DemoRequestFormProps {
  onFormSubmit?: () => void;
  showVideo?: boolean;
}

const DemoRequestForm = ({ onFormSubmit, showVideo = false }: DemoRequestFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isMobile = useIsMobile();
  
  // Add the script tag for the form embed.js after component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.suddenimpactagency.io/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  // Listen for form submission events from the iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Check if the message is from our form iframe
      if (
        event.data && 
        typeof event.data === 'object' && 
        event.data.formId === 'Gf3ORV8Uba4HRiXoml5L' && 
        event.data.type === 'form:submit'
      ) {
        console.log("Form submission detected!");
        handleFormSubmission();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onFormSubmit]);
  
  // Submission functionality
  const handleFormSubmission = () => {
    console.log("Form submission handler called");
    setIsSubmitted(true);
    toast({
      title: "Form submitted!",
      description: "You can now call our AI demo.",
    });
    if (onFormSubmit) {
      onFormSubmit();
    }
  };

  // For demo testing purposes
  const handleTestSubmit = () => {
    console.log("Test submit button clicked");
    handleFormSubmission();
  };

  const phoneNumber = "+1 (302) 618-3977";

  // Render demo video if showVideo prop is true
  if (showVideo) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/HuU_pxXVVqo"
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
    <div className="relative iframe-container" style={{ height: "auto" }}>
      {!isSubmitted ? (
        <>
          <iframe
            ref={iframeRef}
            src="https://link.suddenimpactagency.io/widget/form/Gf3ORV8Uba4HRiXoml5L"
            style={{ 
              width: "100%", 
              height: isMobile ? "1000px" : "735px", 
              border: "none", 
              borderRadius: "8px" 
            }}
            id="inline-Gf3ORV8Uba4HRiXoml5L" 
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="A2P Form - New"
            data-height={isMobile ? "1000" : "735"}
            data-layout-iframe-id="inline-Gf3ORV8Uba4HRiXoml5L"
            data-form-id="Gf3ORV8Uba4HRiXoml5L"
            title="A2P Form - New"
            className="no-scrollbar"
          />
          
          {/* Demo-only submit button - for testing the success state */}
          <div className="absolute bottom-4 right-4">
            <button 
              onClick={handleTestSubmit}
              className="text-xs text-gray-400 hover:text-gray-500"
            >
              (Demo Submit)
            </button>
          </div>
        </>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="p-8 flex flex-col items-center justify-center text-center"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
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
        </motion.div>
      )}
    </div>
  );
};

export default DemoRequestForm;
