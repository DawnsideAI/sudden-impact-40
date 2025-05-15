import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Calendar, Clock, Check, Mic, MessageSquare, CalendarClock } from "lucide-react";
import DemoRequestForm from "@/components/demo/DemoRequestForm";
import AIDemoContact from "@/components/demo/AIDemoContact";
import WhiteSection from "@/components/layout/WhiteSection";
import StyleProvider from "@/components/design/StyleProvider";
import SectionTitle from "@/components/design/SectionTitle";
import { useIsMobile } from '@/hooks/use-mobile';
import "../styles/iframe-container.css"; // Import the iframe-container CSS

const Demo = () => {
  const [activeTab, setActiveTab] = useState("live");
  const [showAIDemo, setShowAIDemo] = useState(false);
  const isMobile = useIsMobile();
  const [isBookingScriptLoaded, setIsBookingScriptLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Demo | Sudden Impact Agency";
    
    if (window.location.hash === "#schedule") {
      setActiveTab("schedule");
    }

    // Load booking script for the scheduler
    if (activeTab === "schedule" && !isBookingScriptLoaded) {
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
      };
    }
  }, [activeTab, isBookingScriptLoaded]);

  return (
    <Layout lightMode={true}>
      {/* Hero Section - Mobile optimized */}
      <section className="pt-16 md:pt-32 pb-6 md:pb-20 bg-gradient-to-br from-brand-darkPurple via-brand-purple to-black border-b border-white/10 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-aqua/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl"></div>
        </div>
        
        <StyleProvider className="container-custom relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              title="Experience Our AI Voice Agents In Action"
              subtitle="Witness first-hand how our AI voice agents can revolutionize your business operations."
              centered={true}
              light={true}
            />
          </motion.div>
        </StyleProvider>
      </section>

      {/* AI Demo Contact - Only shown after form submission */}
      {showAIDemo && <AIDemoContact />}

      {/* Demo Options - Mobile optimized */}
      <section className="py-4 md:py-16 bg-white">
        <div className="container-custom px-2 md:px-8">
          <StyleProvider className="max-w-4xl mx-auto">
            {/* Tab Navigation - Mobile friendly with overflow handling */}
            <div className="flex border-b border-gray-300 mb-4 md:mb-12 overflow-x-auto no-scrollbar">
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
                <StyleProvider delay={0.2} className="bg-white rounded-xl p-2 md:p-8 shadow-md border border-brand-purple/10">
                  <div className="text-center mb-3 md:mb-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-gradient-to-br from-brand-pink to-brand-aqua/70 flex items-center justify-center text-white mb-2 md:mb-4">
                      <Mic className="h-4 w-4 md:h-6 md:w-6" />
                    </div>
                    <h2 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-brand-dark">Live AI Voice Agent Demo</h2>
                    <p className="text-xs md:text-base text-brand-gray">
                      Complete the form below to access our AI voice agent demo.
                    </p>
                  </div>

                  <DemoRequestForm onFormSubmit={() => setShowAIDemo(true)} />
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
                      <iframe 
                        src="https://link.suddenimpactagency.io/widget/booking/MYRdt5Un7mP29erZS5rx" 
                        style={{ 
                          width: "100%",
                          height: isMobile ? "700px" : "800px", 
                          border: "none",
                        }}
                        scrolling="no" 
                        id="msgsndr-calendar"
                        className="no-scrollbar"
                      ></iframe>
                    </div>
                  </div>
                </StyleProvider>
              </motion.div>
            )}
          </StyleProvider>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-brand-darkPurple via-brand-purple to-brand-violet border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center opacity-10"></div>
        </div>
        
        <div className="container-custom px-4 md:px-8 relative z-10">
          <StyleProvider>
            <SectionTitle
              title="What to Expect During Your Demo"
              subtitle="Get a glimpse of how our AI voice agents can transform your business operations"
              centered={true}
              light={true}
              className="mb-8 md:mb-16"
            />

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
                  <div className="text-center px-2">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-pink-600/30 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 backdrop-blur-sm">
                      <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-brand-pink to-brand-aqua rounded-full flex items-center justify-center text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 text-white">{feature.title}</h3>
                    <p className="text-sm md:text-base text-gray-300 max-w-xs mx-auto">{feature.description}</p>
                  </div>
                </StyleProvider>
              ))}
            </div>
          </StyleProvider>
        </div>
      </section>

      {/* Call to Action */}
      {!showAIDemo && (
        <section className="py-8 md:py-16 bg-white">
          <div className="container-custom px-4 md:px-8">
            <StyleProvider className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-5 md:p-10 rounded-xl bg-gradient-to-br from-brand-purple/5 via-white to-brand-aqua/5 shadow-xl border border-gray-100 text-center"
              >
                <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-6 text-gray-800">
                  Ready to See Our AI Voice Agent in Action?
                </h2>
                <p className="text-sm md:text-lg text-gray-600 mb-5 md:mb-8">
                  Choose the option that works best for you. Try our live demo now or schedule a time for later.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                  <button 
                    onClick={() => {
                      setActiveTab("live");
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-brand-pink to-brand-aqua text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-sm md:text-base"
                  >
                    Try Live Demo Now
                  </button>
                  <button 
                    onClick={() => {
                      setActiveTab("schedule");
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="px-4 md:px-6 py-2.5 md:py-3 bg-white border border-brand-purple/30 text-brand-purple font-medium rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-sm md:text-base"
                  >
                    Schedule For Later
                  </button>
                </div>
              </motion.div>
            </StyleProvider>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Demo;
