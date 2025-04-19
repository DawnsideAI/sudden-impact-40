import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Calendar, Clock, Check, Mic, MessageSquare } from "lucide-react";
import DemoRequestForm from "@/components/demo/DemoRequestForm";

const Demo = () => {
  const [activeTab, setActiveTab] = useState("live");

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
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background/50 border-b border-white/10">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent"
            >
              Experience Our AI Voice Agents In Action
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Witness first-hand how our AI voice agents can revolutionize your business operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Demo Options */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row border-b border-white/10 mb-12"
            >
              <button
                onClick={() => setActiveTab("live")}
                className={`py-4 px-6 text-lg font-medium border-b-2 transition-colors ${
                  activeTab === "live"
                    ? "border-agency-vibrantPurple text-agency-vibrantPurple"
                    : "border-transparent text-muted-foreground hover:text-white"
                }`}
              >
                <Mic className="inline-block mr-2 h-5 w-5" />
                Live Demo
              </button>
              <button
                onClick={() => setActiveTab("schedule")}
                className={`py-4 px-6 text-lg font-medium border-b-2 transition-colors ${
                  activeTab === "schedule"
                    ? "border-agency-vibrantPurple text-agency-vibrantPurple"
                    : "border-transparent text-muted-foreground hover:text-white"
                }`}
              >
                <Calendar className="inline-block mr-2 h-5 w-5" />
                Schedule for Later
              </button>
            </motion.div>

            {/* Live Demo Form */}
            {activeTab === "live" && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-morphism rounded-xl p-8"
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto rounded-full bg-agency-vibrantPurple/20 flex items-center justify-center text-white mb-4">
                    <Mic className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-white">Live AI Voice Agent Demo</h2>
                  <p className="text-muted-foreground">
                    Complete the form below to instantly experience our AI voice agent in action.
                  </p>
                </div>

                <DemoRequestForm />
              </motion.div>
            )}

            {/* Schedule Demo */}
            {activeTab === "schedule" && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-morphism rounded-xl p-8"
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto rounded-full bg-agency-vibrantPurple/20 flex items-center justify-center text-white mb-4">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-white">Schedule Your Demo</h2>
                  <p className="text-muted-foreground">
                    Pick a convenient time for your 10-minute AI voice agent demo.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h3 className="font-medium mb-4 text-white">How It Works:</h3>
                    <ul className="space-y-4">
                      {["Book a Time Slot", "Receive Confirmation", "Get Reminders", "Experience the Demo"].map((step, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="bg-agency-vibrantPurple/20 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium">
                              {index + 1}
                            </div>
                          </div>
                          <p className="ml-3 text-muted-foreground">
                            <strong className="text-white">{step}</strong>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 p-8 rounded-lg border border-white/10 text-center">
                    <h3 className="text-xl font-medium mb-4 text-white">Demo Scheduler</h3>
                    <p className="text-muted-foreground mb-6">
                      Select an available time slot for your interactive demo session.
                    </p>
                    <button className="px-6 py-3 text-white bg-agency-vibrantPurple hover:bg-agency-vibrantPurple/90 rounded-lg transition-colors">
                      View Available Time Slots
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background/50 border-y border-white/10">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              What to Expect During Your Demo
            </h2>
            <p className="text-xl text-muted-foreground">
              Get a glimpse of how our AI voice agents can transform your business operations
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-morphism rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-agency-vibrantPurple/20 group-hover:bg-agency-vibrantPurple/30 flex items-center justify-center text-white mb-4 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;
