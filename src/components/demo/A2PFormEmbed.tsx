
import { useEffect } from "react";
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from "@/hooks/use-toast";

interface A2PFormEmbedProps {
  onFormSubmit?: () => void;
}

const A2PFormEmbed = ({ onFormSubmit }: A2PFormEmbedProps) => {
  const isMobile = useIsMobile();
  
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
        event.data.formId === 'Gf3ORV8Uba4HRiXoml5L' && 
        event.data.type === 'form:submit'
      ) {
        // Set the form completion status in localStorage
        localStorage.setItem('a2pFormCompleted', 'true');
        
        // Show success toast
        toast({
          title: "A2P Form Submitted!",
          description: "You can now access the AI demo experience.",
        });
        
        // Call onFormSubmit callback if provided
        if (onFormSubmit) onFormSubmit();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onFormSubmit]);

  return (
    <div className="w-full iframe-container relative" style={{ minHeight: "400px" }}>
      <iframe
        src="https://link.suddenimpactagency.io/widget/form/Gf3ORV8Uba4HRiXoml5L"
        style={{
          width: "100%", 
          height: isMobile ? "650px" : "600px",
          border: "none", 
          borderRadius: "3px"
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
        data-height={isMobile ? "650" : "600"}
        data-layout-iframe-id="inline-Gf3ORV8Uba4HRiXoml5L"
        data-form-id="Gf3ORV8Uba4HRiXoml5L"
        title="A2P Form - New"
        className="no-scrollbar"
      />
      
      {/* For demo purposes - a button to simulate form submission */}
      <div className="absolute bottom-0 right-0 p-2">
        <button 
          onClick={() => {
            localStorage.setItem('a2pFormCompleted', 'true');
            toast({
              title: "A2P Form Submitted!",
              description: "You can now access the AI demo experience.",
            });
            if (onFormSubmit) onFormSubmit();
          }}
          className="text-xs text-gray-400 hover:text-gray-500"
        >
          (Demo Submit)
        </button>
      </div>
    </div>
  );
};

export default A2PFormEmbed;
