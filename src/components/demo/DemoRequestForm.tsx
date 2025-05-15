
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";

interface DemoRequestFormProps {
  onFormSubmit?: () => void;
}

const DemoRequestForm = ({ onFormSubmit }: DemoRequestFormProps) => {
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
    if (onFormSubmit) {
      onFormSubmit();
    }
    toast({
      title: "Demo Request Submitted!",
      description: "Call our AI voice agent at the number below.",
    });
  };

  // For demo testing purposes
  const handleTestSubmit = () => {
    console.log("Test submit button clicked");
    handleFormSubmission();
  };

  const phoneNumber = "+1 (302) 618-3977";

  return (
    <div className="relative iframe-container" style={{ height: isSubmitted ? "auto" : "auto" }}>
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
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center py-12 px-4 text-center bg-white rounded-xl shadow-md"
        >
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center text-white mb-6"
          >
            <PhoneCall size={32} />
          </motion.div>
          
          <h3 className="text-3xl font-bold mb-3 text-gray-800">Thank you for taking the time to complete this form.</h3>
          
          <p className="text-xl text-gray-600 mb-8">
            Call our AI voice agent to experience our technology:
          </p>
          
          <div className="mb-6">
            <motion.a 
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="text-3xl font-semibold text-brand-aqua hover:underline flex items-center justify-center mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <PhoneCall className="h-6 w-6 mr-3 text-brand-pink" />
              {phoneNumber}
            </motion.a>
          </div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              variant="action"
              size="xl"
              className="shadow-lg bg-gradient-to-r from-brand-pink to-brand-aqua hover:shadow-xl transition-all duration-300"
              onClick={() => window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`}
            >
              <PhoneCall className="mr-2" /> Call Now
            </Button>
          </motion.div>
          
          <p className="text-sm text-gray-500 mt-4">
            Available 24/7 for demonstration purposes
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default DemoRequestForm;
