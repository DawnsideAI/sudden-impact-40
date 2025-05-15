
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Calendar, Clock, Check, Mic, MessageSquare } from "lucide-react";
import DemoRequestForm from "@/components/demo/DemoRequestForm";
import AIDemoContact from "@/components/demo/AIDemoContact";
import WhiteSection from "@/components/layout/WhiteSection";
import StyleProvider from "@/components/design/StyleProvider";
import SectionTitle from "@/components/design/SectionTitle";

const Demo = () => {
  const [activeTab, setActiveTab] = useState("live");
  const [showAIDemo, setShowAIDemo] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Demo | Sudden Impact Agency";
    
    if (window.location.hash === "#schedule") {
      setActiveTab("schedule");
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-brand-darkPurple via-brand-purple to-black border-b border-white/10">
        <StyleProvider className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <SectionTitle
              title="Experience Our AI Voice Agents In Action"
              subtitle="Witness first-hand how our AI voice agents can revolutionize your business operations."
              centered={true}
              light={true}
            />
          </div>
        </StyleProvider>
      </section>

      {/* AI Demo Contact - Only shown after form submission */}
      {showAIDemo && <AIDemoContact />}

      {/* Demo Options */}
      <WhiteSection>
        <StyleProvider className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row border-b border-gray-300 mb-12">
            <button
              onClick={() => setActiveTab("live")}
              className={`py-4 px-6 text-lg font-medium border-b-2 transition-colors ${
                activeTab === "live"
                  ? "border-brand-violet text-brand-violet"
                  : "border-transparent text-brand-gray hover:text-brand-dark"
              }`}
            >
              <Mic className="inline-block mr-2 h-5 w-5" />
              Live Demo
            </button>
            <button
              onClick={() => setActiveTab("schedule")}
              className={`py-4 px-6 text-lg font-medium border-b-2 transition-colors ${
                activeTab === "schedule"
                  ? "border-brand-violet text-brand-violet"
                  : "border-transparent text-brand-gray hover:text-brand-dark"
              }`}
            >
              <Calendar className="inline-block mr-2 h-5 w-5" />
              Schedule for Later
            </button>
          </div>

          {/* Live Demo Form */}
          {activeTab === "live" && (
            <StyleProvider delay={0.2} className="bg-white rounded-xl p-8 shadow-md border border-brand-purple/10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple mb-4">
                  <Mic className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-brand-dark">Live AI Voice Agent Demo</h2>
                <p className="text-brand-gray">
                  Complete the form below to access our AI voice agent demo.
                </p>
              </div>

              <DemoRequestForm onFormSubmit={() => setShowAIDemo(true)} />
            </StyleProvider>
          )}

          {/* Schedule Demo */}
          {activeTab === "schedule" && (
            <StyleProvider delay={0.2} className="bg-white rounded-xl p-8 shadow-md border border-brand-purple/10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple mb-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-brand-dark">Schedule Your Demo</h2>
                <p className="text-brand-gray">
                  Pick a convenient time for your 10-minute AI voice agent demo.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-medium mb-4 text-brand-dark">How It Works:</h3>
                  <ul className="space-y-4">
                    {["Book a Time Slot", "Receive Confirmation", "Get Reminders", "Experience the Demo"].map((step, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="bg-brand-purple/20 text-brand-purple w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium">
                            {index + 1}
                          </div>
                        </div>
                        <p className="ml-3 text-brand-gray">
                          <strong className="text-brand-dark">{step}</strong>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
                  <h3 className="text-xl font-medium mb-4 text-brand-dark">Demo Scheduler</h3>
                  <p className="text-brand-gray mb-6">
                    Select an available time slot for your interactive demo session.
                  </p>
                  <button className="px-6 py-3 text-white bg-gradient-to-r from-brand-indigo to-brand-violet hover:from-brand-indigo/90 hover:to-brand-violet/90 rounded-lg transition-colors">
                    View Available Time Slots
                  </button>
                </div>
              </div>
            </StyleProvider>
          )}
        </StyleProvider>
      </WhiteSection>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-brand-darkPurple via-brand-purple to-black border-y border-white/10">
        <StyleProvider className="container-custom">
          <SectionTitle
            title="What to Expect During Your Demo"
            subtitle="Get a glimpse of how our AI voice agents can transform your business operations"
            centered={true}
            light={true}
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <MessageSquare className="h-5 w-5" />,
                title: "Interactive Conversation",
                description: "Experience natural, human-like conversations with our AI voice agent."
              },
              {
                icon: <Calendar className="h-5 w-5" />,
                title: "Appointment Scheduling",
                description: "See how the AI agent handles appointment scheduling and follow-ups."
              },
              {
                icon: <Check className="h-5 w-5" />,
                title: "Lead Qualification",
                description: "Witness how our AI agents qualify leads by gathering important information."
              }
            ].map((feature, index) => (
              <StyleProvider
                key={index}
                delay={index * 0.1}
                className="glass-morphism rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-brand-purple/20 group-hover:bg-brand-purple/30 flex items-center justify-center text-white mb-4 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </StyleProvider>
            ))}
          </div>
        </StyleProvider>
      </section>
    </Layout>
  );
};

export default Demo;
