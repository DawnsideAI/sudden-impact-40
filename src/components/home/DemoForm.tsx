
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Calendar, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import DemoCalendarForm from "@/components/demo/DemoCalendarForm";

const DemoForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showDemoVideo, setShowDemoVideo] = useState(false);
  
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

  const handleScheduleClick = () => {
    setShowCalendar(true);
  };

  const handleDemoVideoClick = () => {
    setShowDemoVideo(true);
  };
  
  // For demo purposes - simulates form submission
  const handleFormSubmitted = () => {
    setIsSubmitted(true);
    toast({
      title: "Demo Request Submitted!",
      description: "You'll be connected to our AI voice agent shortly.",
    });
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/5 via-white/90 to-brand-aqua/5"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
              Witness First-Hand How Our AI Voice Agents Can{" "}
              <span className="bg-gradient-to-r from-brand-pink to-brand-aqua bg-clip-text text-transparent">Revolutionize Your Business</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 text-center">
              Experience a live, interactive demo with our AI voice agent. See how it handles calls, schedules appointments, and answers questions about your business.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-brand-pink" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-800">Live 10-Minute Interactive Demo</h3>
                  <p className="text-gray-600">Talk directly with our AI voice agent and experience its capabilities</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-brand-pink" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-800">No Sales Pressure</h3>
                  <p className="text-gray-600">This is a technology demo, not a sales call</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Calendar className="h-5 w-5 text-brand-pink" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-800">Schedule For Later</h3>
                  <p className="text-gray-600">Can't talk now? Book a future time for your demo</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <button
                  onClick={handleDemoVideoClick}
                  className="bg-white border border-brand-pink/30 text-brand-pink hover:bg-gray-50 font-medium py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  Watch Demo Video
                </button>
                
                <button
                  onClick={handleScheduleClick}
                  className="bg-white border border-brand-aqua/30 text-brand-aqua hover:bg-gray-50 font-medium py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  Schedule For Later
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
          >
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Try Our AI Voice Agent</h3>
                
                <div className="w-full h-[600px] relative">
                  <iframe
                    src="https://link.suddenimpactagency.io/widget/form/Gf3ORV8Uba4HRiXoml5L"
                    style={{width:"100%", height:"100%", border:"none", borderRadius:"8px"}}
                    id="home-popup-Gf3ORV8Uba4HRiXoml5L" 
                    data-layout="{'id':'POPUP'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="A2P Form - New"
                    data-height="600"
                    data-layout-iframe-id="home-popup-Gf3ORV8Uba4HRiXoml5L"
                    data-form-id="Gf3ORV8Uba4HRiXoml5L"
                    title="A2P Form - New"
                  />
                  
                  {/* Demo-only submit button - for testing the success state */}
                  <div className="absolute bottom-0 right-0 opacity-0">
                    <button 
                      onClick={handleFormSubmitted}
                      aria-hidden="true" 
                      className="sr-only"
                    >
                      Test Submit
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center text-white mb-6">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Demo Request Submitted!</h3>
                <p className="text-gray-600 mb-6">
                  We'll be in touch shortly to schedule your interactive AI voice demo.
                </p>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <PhoneCall className="h-5 w-5 text-brand-pink" />
                  <a 
                    href="tel:+13026183977"
                    className="text-lg font-medium text-brand-aqua hover:underline"
                  >
                    +1 (302) 618-3977
                  </a>
                </div>
                <p className="text-sm text-gray-500">
                  Available 24/7 for demonstration purposes
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Calendar dialog for scheduling */}
      <Dialog open={showCalendar} onOpenChange={setShowCalendar}>
        <DialogContent className="sm:max-w-[600px] bg-gray-900 border-white/10">
          <DialogTitle className="text-xl font-bold">Schedule Your Demo</DialogTitle>
          <DemoCalendarForm onSubmitSuccess={() => setShowCalendar(false)} />
        </DialogContent>
      </Dialog>
      
      {/* Video demo dialog */}
      <Dialog open={showDemoVideo} onOpenChange={setShowDemoVideo}>
        <DialogContent className="sm:max-w-[800px] bg-gray-900 border-white/10">
          <DialogTitle className="text-xl font-bold text-center mb-4">AI Voice Agent Demo</DialogTitle>
          <div className="aspect-video relative bg-black/20 rounded-lg overflow-hidden flex items-center justify-center">
            {/* Replace with actual video once available */}
            <div className="text-center p-8">
              <p className="text-white/80 mb-4">Demo video will be placed here once available.</p>
              <p className="text-sm text-white/60">This video will show the AI voice agent in action, CRM dashboard previews, and onboarding automation.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DemoForm;
