
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
      description: "Call our AI voice agent at the number below.",
    });
  };

  // For demo testing purposes
  const handleTestSubmit = () => {
    handleFormSubmission();
  };

  return (
    <div className="relative iframe-container" style={{ height: "auto" }}>
      {!isSubmitted ? (
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
      ) : (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center text-white mb-6">
            <PhoneCall size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Call Our AI Voice Agent</h3>
          <p className="text-lg text-gray-600 mb-6">
            Experience our AI voice technology by calling:
          </p>
          <a 
            href="tel:+13026183977"
            className="text-2xl font-semibold text-brand-aqua hover:underline flex items-center mb-4"
          >
            <PhoneCall className="h-5 w-5 mr-2 text-brand-pink" />
            +1 (302) 618-3977
          </a>
          <p className="text-sm text-gray-500">
            Available 24/7 for demonstration purposes
          </p>
        </div>
      )}
      
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
