
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check, PhoneCall } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useIsMobile } from '@/hooks/use-mobile';

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
        handleFormSubmission();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onFormSubmit]);
  
  // Submission functionality
  const handleFormSubmission = () => {
    setIsSubmitted(true);
    if (onFormSubmit) {
      onFormSubmit();
    }
    toast({
      title: "Demo Request Submitted!",
      description: "You'll be connected to our AI voice agent shortly.",
    });
  };

  // For demo testing purposes
  const handleTestSubmit = () => {
    handleFormSubmission();
  };

  return (
    <div className="relative iframe-container" style={{ height: "auto" }}>
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
    </div>
  );
};

export default DemoRequestForm;
