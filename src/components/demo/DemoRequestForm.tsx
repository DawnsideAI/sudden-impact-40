
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check, PhoneCall } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface DemoRequestFormProps {
  onFormSubmit?: () => void;
}

const DemoRequestForm = ({ onFormSubmit }: DemoRequestFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
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
  
  // Mock submission functionality for demo purposes
  const handleFormSubmission = () => {
    setIsSubmitted(true);
    onFormSubmit?.();
    toast({
      title: "Demo Request Submitted!",
      description: "You'll be connected to our AI voice agent shortly.",
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            className="glass-card rounded-xl p-8 max-w-2xl mx-auto relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/10 via-transparent to-brand-aqua/10 animate-pulse-slow" />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center mb-8 relative z-10"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-brand-vibrantPurple flex items-center justify-center text-white mb-4">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Demo Request Submitted!
              </h3>
              <p className="text-muted-foreground">
                Call now to interact with Michelle, our AI receptionist, and experience the future of business communication.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-6 relative z-10"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center gap-4"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  <PhoneCall className="w-6 h-6 text-brand-vibrantPurple" />
                </motion.div>
                <a 
                  href="tel:+13026183977"
                  className="text-xl font-medium text-white hover:text-brand-vibrantPurple transition-colors"
                >
                  +1 (302) 618-3977
                </a>
              </motion.div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Available 24/7 for demonstration purposes
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-brand-vibrantPurple/20 rounded-full blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-blue/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <div className="relative" style={{ height: "735px" }}>
      <iframe
        ref={iframeRef}
        src="https://link.suddenimpactagency.io/widget/form/Gf3ORV8Uba4HRiXoml5L"
        style={{ width:"100%", height:"100%", border:"none", borderRadius:"8px" }}
        id="inline-Gf3ORV8Uba4HRiXoml5L" 
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="A2P Form - New"
        data-height="735"
        data-layout-iframe-id="inline-Gf3ORV8Uba4HRiXoml5L"
        data-form-id="Gf3ORV8Uba4HRiXoml5L"
        title="A2P Form - New"
      />
      
      {/* Demo-only submit button - for testing the success state */}
      <div className="absolute bottom-4 right-4 opacity-0">
        <button 
          onClick={handleFormSubmission}
          aria-hidden="true" 
          className="sr-only"
        >
          Test Submit
        </button>
      </div>
    </div>
  );
};

export default DemoRequestForm;
