
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Check, Mic, MessageSquare, CalendarClock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import DemoRequestForm from "@/components/demo/DemoRequestForm";
import AIDemoContact from "@/components/demo/AIDemoContact";
import AIDemoCallDialog from "@/components/niches/AIDemoCallDialog";
import WhiteSection from "@/components/layout/WhiteSection";
import StyleProvider from "@/components/design/StyleProvider";
import SectionTitle from "@/components/design/SectionTitle";
import { useIsMobile } from '@/hooks/use-mobile';
import "../styles/iframe-container.css"; // Import the iframe-container CSS

const Demo = () => {
  const [activeTab, setActiveTab] = useState("live");
  const [showAIDemo, setShowAIDemo] = useState(false);
  const [showCallDialog, setShowCallDialog] = useState(false);
  const [showDemoVideo, setShowDemoVideo] = useState(false);
  const isMobile = useIsMobile();
  const [isBookingScriptLoaded, setIsBookingScriptLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormScriptLoaded, setIsFormScriptLoaded] = useState(false);

  useEffect(() => {
    // Set loading to false after a timeout to ensure components have time to render
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    window.scrollTo(0, 0);
    document.title = "Demo | Sudden Impact Agency";
    
    if (window.location.hash === "#schedule") {
      setActiveTab("schedule");
    } else if (window.location.hash === "#video") {
      setActiveTab("video");
    }

    // Load booking script for the scheduler
    if (activeTab === "schedule" && !isBookingScriptLoaded) {
      try {
        const script = document.createElement('script');
        script.src = "https://link.suddenimpactagency.io/js/embed.js";
        script.type = "text/javascript";
        script.async = true;
        script.onload = () => setIsBookingScriptLoaded(true);
        document.body.appendChild(script);
      
        return () => {
          const existingScript = document.querySelector(`script[src="https://link.suddenimpactagency.io/js/embed.js"]`);
          if (existingScript && existingScript.parentNode) {
            existingScript.parentNode.removeChild(existingScript);
          }
          clearTimeout(timer);
        };
      } catch (error) {
        console.error("Error loading booking script:", error);
      }
    }
    
    // Load form script for all tabs (ensures it's available when switching tabs)
    if (!isFormScriptLoaded) {
      const script = document.createElement('script');
      script.src = "https://link.suddenimpactagency.io/js/form_embed.js";
      script.async = true;
      script.onload = () => setIsFormScriptLoaded(true);
      document.body.appendChild(script);
      
      return () => {
        const existingScript = document.querySelector(`script[src="https://link.suddenimpactagency.io/js/form_embed.js"]`);
        if (existingScript && existingScript.parentNode) {
          existingScript.parentNode.removeChild(existingScript);
        }
        clearTimeout(timer);
      };
    }
    
    return () => clearTimeout(timer);
  }, [activeTab, isBookingScriptLoaded, isFormScriptLoaded]);

  // Handle form submission
  const handleFormSubmit = () => {
    setShowCallDialog(true);
  };

  if (isLoading) {
    return (
      <Layout lightMode={true}>
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-t-brand-pink rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading demo page...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout lightMode={true}>
      {/* Hero Section - Mobile optimized with improved text visibility */}
      <section className="pt-16 md:pt-32 pb-10 md:pb-20 bg-gradient-to-br from-brand-darkPurple via-brand-purple to-black border-b border-white/10 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-aqua/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl"></div>
        </div>
        
        <StyleProvider className="container-custom relative z-10 px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">
              AI Voice Agents vs Human Agents
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-2">
              Experience the future of customer service with our AI voice agents - delivering 
              unmatched efficiency, availability, and cost savings compared to traditional human call handlers
            </p>
          </motion.div>
        </StyleProvider>
      </section>

      {/* AI Demo Contact - Only shown after form submission */}
      {showAIDemo && <AIDemoContact />}

      {/* Demo Options - Mobile optimized */}
      <section className="py-4 md:py-16 bg-white">
        <div className="container-custom px-4 md:px-8">
          <StyleProvider className="max-w-4xl mx-auto">
            {/* Tab Navigation - Mobile friendly with overflow handling */}
            <div className="flex border-b border-gray-300 mb-6 md:mb-12 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab("live")}
                className={`py-2 md:py-4 px-3 md:px-6 text-sm md:text-lg font-medium border-b-2 transition-colors whitespace-nowrap flex-1 ${
                  activeTab === "live"
                    ? "border-brand-violet text-brand-violet"
                    : "border-transparent text-brand-gray hover:text-brand-dark"
                }`}
              >
                <Mic className="inline-block mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
                Live Demo
              </button>
              <button
                onClick={() => setActiveTab("video")}
                className={`py-2 md:py-4 px-3 md:px-6 text-sm md:text-lg font-medium border-b-2 transition-colors whitespace-nowrap flex-1 ${
                  activeTab === "video"
                    ? "border-brand-violet text-brand-violet"
                    : "border-transparent text-brand-gray hover:text-brand-dark"
                }`}
              >
                <MessageSquare className="inline-block mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
                Video Demo
              </button>
              <button
                onClick={() => setActiveTab("schedule")}
                className={`py-2 md:py-4 px-3 md:px-6 text-sm md:text-lg font-medium border-b-2 transition-colors whitespace-nowrap flex-1 ${
                  activeTab === "schedule"
                    ? "border-brand-violet text-brand-violet"
                    : "border-transparent text-brand-gray hover:text-brand-dark"
                }`}
              >
                <Calendar className="inline-block mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
                Schedule
              </button>
            </div>

            {/* Live Demo Form */}
            {activeTab === "live" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <StyleProvider delay={0.2} className="bg-white rounded-xl p-4 md:p-8 shadow-md border border-brand-purple/10">
                  <div className="text-center mb-4 md:mb-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-gradient-to-br from-brand-pink to-brand-aqua/70 flex items-center justify-center text-white mb-3 md:mb-4">
                      <Mic className="h-4 w-4 md:h-6 md:w-6" />
                    </div>
                    <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 text-brand-dark">Live AI Voice Agent Demo</h2>
                    <p className="text-sm md:text-base text-brand-gray mb-5">
                      Complete the form below to access our AI voice agent demo.
                    </p>
                  </div>
                  
                  {/* Direct GHL form embed */}
                  <div className="ghl-form-wrapper" style={{ height: "auto", minHeight: isMobile ? "980px" : "900px" }}>
                    <iframe
                      src="https://link.suddenimpactagency.io/widget/form/Gf3ORV8Uba4HRiXoml5L"
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        minHeight: isMobile ? "980px" : "900px",
                        border: "none", 
                        borderRadius: "8px" 
                      }}
                      id="inline-Gf3ORV8Uba4HRiXoml5L" 
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="leadCollected"
                      data-deactivation-value=""
                      data-form-name="A2P Form - New"
                      data-height="auto"
                      data-layout-iframe-id="inline-Gf3ORV8Uba4HRiXoml5L"
                      data-form-id="Gf3ORV8Uba4HRiXoml5L"
                      title="A2P Form - New"
                    ></iframe>
                  </div>
                </StyleProvider>
              </motion.div>
            )}

            {/* Video Demo - Using direct form embed */}
            {activeTab === "video" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <StyleProvider delay={0.2} className="bg-white rounded-xl p-2 md:p-8 shadow-md border border-brand-purple/10">
                  <div className="text-center mb-3 md:mb-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-gradient-to-br from-brand-pink to-brand-aqua/70 flex items-center justify-center text-white mb-2 md:mb-4">
                      <MessageSquare className="h-4 w-4 md:h-6 md:w-6" />
                    </div>
                    <h2 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-brand-dark">AI Voice Agent Demo Video</h2>
                    <p className="text-xs md:text-base text-brand-gray mb-6">
                      Watch our AI voice agent in action with this demo video.
                    </p>
                  </div>

                  <DemoRequestForm showVideo={true} />
                </StyleProvider>
              </motion.div>
            )}

            {/* Schedule Demo - Mobile optimized */}
            {activeTab === "schedule" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <StyleProvider delay={0.2} className="bg-white rounded-xl p-2 md:p-8 shadow-md border border-brand-purple/10">
                  <div className="text-center mb-2 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-gradient-to-br from-brand-pink to-brand-aqua/70 flex items-center justify-center text-white mb-2 md:mb-4">
                      <CalendarClock className="h-4 w-4 md:h-6 md:w-6" />
                    </div>
                    <h2 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-brand-dark">Schedule Your Demo</h2>
                    <p className="text-xs md:text-base text-brand-gray mb-2 md:mb-4">
                      Pick a convenient time for your 10-minute AI voice agent demo.
                    </p>
                  </div>

                  {/* Updated Booking Widget with improved mobile handling */}
                  <div className="w-full calendar-container">
                    <div className="iframe-container">
                      {isBookingScriptLoaded ? (
                        <iframe 
                          src="https://link.suddenimpactagency.io/widget/booking/MYRdt5Un7mP29erZS5rx" 
                          style={{ 
                            width: "100%",
                            height: isMobile ? "950px" : "800px", 
                            border: "none",
                          }}
                          scrolling="no" 
                          id="msgsndr-calendar"
                          className="no-scrollbar"
                        ></iframe>
                      ) : (
                        <div className="flex items-center justify-center h-64">
                          <div className="text-center">
                            <div className="w-10 h-10 border-4 border-t-brand-pink rounded-full animate-spin mx-auto mb-4"></div>
                            <p className="text-gray-600">Loading calendar...</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </StyleProvider>
              </motion.div>
            )}
          </StyleProvider>
        </div>
      </section>

      {/* Features Section - Improved text visibility */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-brand-darkPurple via-brand-purple to-brand-violet border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center opacity-10"></div>
        </div>
        
        <div className="container-custom px-4 md:px-8 relative z-10">
          <StyleProvider>
            <div className="mb-8 md:mb-16 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-white leading-tight">
                What to Expect During Your Demo
              </h2>
              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
                Get a glimpse of how our AI voice agents can transform your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
              {[
                {
                  icon: <MessageSquare className="h-5 w-5 md:h-6 md:w-6" />,
                  title: "Interactive Conversation",
                  description: "Experience natural, human-like conversations with our AI voice agent."
                },
                {
                  icon: <Calendar className="h-5 w-5 md:h-6 md:w-6" />,
                  title: "Appointment Scheduling",
                  description: "See how the AI agent handles appointment scheduling and follow-ups."
                },
                {
                  icon: <Check className="h-5 w-5 md:h-6 md:w-6" />,
                  title: "Lead Qualification",
                  description: "Witness how our AI agents qualify leads by gathering important information."
                }
              ].map((feature, index) => (
                <StyleProvider
                  key={index}
                  delay={index * 0.15}
                >
                  <div className="text-center px-3">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-pink-600/30 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 backdrop-blur-sm">
                      <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-brand-pink to-brand-aqua rounded-full flex items-center justify-center text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-white">{feature.title}</h3>
                    <p className="text-sm md:text-base text-gray-300 max-w-xs mx-auto">{feature.description}</p>
                  </div>
                </StyleProvider>
              ))}
            </div>
          </StyleProvider>
        </div>
      </section>
      
      {/* AI Demo Call Dialog */}
      <AIDemoCallDialog 
        open={showCallDialog} 
        onOpenChange={setShowCallDialog}
        phoneNumber="+1 (302) 618-3977"
      />
    </Layout>
  );
};

export default Demo;
