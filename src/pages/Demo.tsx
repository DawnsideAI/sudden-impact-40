
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { FiCalendar, FiClock, FiCheck, FiMic, FiMessageCircle, FiCalendar as FiCalendarIcon } from "react-icons/fi";

const Demo = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("live");

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Demo | Sudden Impact Agency";
    
    // Check if URL has a hash to determine which tab to show
    if (window.location.hash === "#schedule") {
      setActiveTab("schedule");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Experience Our <span className="gradient-text">AI Voice Agents</span> In Action
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Witness first-hand how our AI voice agents can revolutionize your business operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Demo Options */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-col sm:flex-row border-b border-gray-200 mb-12">
              <button
                onClick={() => setActiveTab("live")}
                className={`py-4 px-6 text-lg font-medium border-b-2 transition-colors ${
                  activeTab === "live"
                    ? "border-agency-blue text-agency-blue"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <FiMic className="inline-block mr-2" />
                Live Demo
              </button>
              <button
                onClick={() => setActiveTab("schedule")}
                className={`py-4 px-6 text-lg font-medium border-b-2 transition-colors ${
                  activeTab === "schedule"
                    ? "border-agency-blue text-agency-blue"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <FiCalendarIcon className="inline-block mr-2" />
                Schedule for Later
              </button>
            </div>

            {/* Live Demo Form */}
            {activeTab === "live" && (
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto rounded-full gradient-bg flex items-center justify-center text-white mb-4">
                    <FiMic size={24} />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Live AI Voice Agent Demo</h2>
                  <p className="text-gray-600">
                    Complete the form below to instantly experience our AI voice agent in action.
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-agency-blue focus:border-agency-blue"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-agency-blue focus:border-agency-blue"
                        placeholder="you@company.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-agency-blue focus:border-agency-blue"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-0.5">
                          <FiClock className="h-5 w-5 text-agency-blue" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-gray-700">
                            The demo will last approximately <strong>10 minutes</strong>. After submitting, you'll be connected to our AI voice agent for an interactive demo.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full btn-primary py-3 flex items-center justify-center ${
                        isLoading ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isLoading ? "Processing..." : "Start Live Demo Now"}
                    </button>
                    
                    <p className="text-xs text-center text-gray-500 mt-4">
                      By submitting, you agree to our <a href="/legal" className="text-agency-blue hover:underline">Terms & Conditions</a> and <a href="/legal" className="text-agency-blue hover:underline">Privacy Policy</a>.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 mx-auto rounded-full gradient-bg flex items-center justify-center text-white mb-6">
                      <FiCheck size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">You're Connected!</h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Your AI voice agent demo is now active. In a real implementation, you would now be interacting with our AI voice assistant.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6 max-w-md mx-auto">
                      <h4 className="font-medium mb-2">Demo Session Details:</h4>
                      <p className="text-sm text-gray-600">
                        <strong>Session ID:</strong> DEMO-{Math.floor(Math.random() * 10000)}<br />
                        <strong>Duration:</strong> 10 minutes<br />
                        <strong>Status:</strong> Active
                      </p>
                    </div>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="btn-secondary"
                    >
                      Reset Demo
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Schedule Demo */}
            {activeTab === "schedule" && (
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto rounded-full gradient-bg flex items-center justify-center text-white mb-4">
                    <FiCalendar size={24} />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Schedule Your Demo</h2>
                  <p className="text-gray-600">
                    Pick a convenient time for your 10-minute AI voice agent demo.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                  <h3 className="font-medium mb-4">How It Works:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-agency-blue text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium">
                          1
                        </div>
                      </div>
                      <p className="ml-3 text-gray-700">
                        <strong>Book a Time Slot</strong> - Select a convenient 10-minute slot for your demo
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-agency-blue text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium">
                          2
                        </div>
                      </div>
                      <p className="ml-3 text-gray-700">
                        <strong>Receive Confirmation</strong> - Get an email and text confirmation with your demo details
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-agency-blue text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium">
                          3
                        </div>
                      </div>
                      <p className="ml-3 text-gray-700">
                        <strong>Get Reminders</strong> - Receive a text and email reminder 10 minutes before your demo
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-agency-blue text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium">
                          4
                        </div>
                      </div>
                      <p className="ml-3 text-gray-700">
                        <strong>Experience the Demo</strong> - Click the link in your reminder to start your interactive demo
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-100 p-8 rounded-lg border border-gray-200 text-center">
                  <h3 className="text-xl font-medium mb-4">Demo Scheduler</h3>
                  <p className="text-gray-600 mb-6">
                    In a real implementation, a calendar booking widget would appear here allowing users to select available time slots.
                  </p>
                  <button className="btn-primary">
                    View Available Time Slots
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              What to Expect During Your <span className="gradient-text">Demo</span>
            </h2>
            <p className="text-xl text-gray-600">
              Get a glimpse of how our AI voice agents can transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white mb-4">
                <FiMessageCircle size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2">Interactive Conversation</h3>
              <p className="text-gray-600">
                Experience natural, human-like conversations with our AI voice agent. Ask questions, test scenarios, and see how it handles customer interactions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white mb-4">
                <FiCalendar size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2">Appointment Scheduling</h3>
              <p className="text-gray-600">
                See how the AI agent handles appointment scheduling, calendar integration, and follow-up processes to streamline your booking workflow.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white mb-4">
                <FiCheck size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2">Lead Qualification</h3>
              <p className="text-gray-600">
                Witness how our AI agents qualify leads by asking relevant questions and gathering important information to prioritize high-quality prospects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Transform Your Business With <span className="gradient-text">AI Voice Agents</span>?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  After experiencing our demo, take the next step and start your free 7-day trial to see the full potential of our AI voice agents for your business.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a href="#" className="btn-primary">
                    Start Free Trial
                  </a>
                  <a href="/pricing" className="btn-secondary">
                    View Pricing Plans
                  </a>
                </div>
              </div>
              <div className="hero-gradient text-white p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Benefits at a Glance</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FiCheck className="text-white mt-1 mr-3 flex-shrink-0" />
                    <span>24/7 availability to never miss a call</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-white mt-1 mr-3 flex-shrink-0" />
                    <span>Automated appointment scheduling and reminders</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-white mt-1 mr-3 flex-shrink-0" />
                    <span>Intelligent lead qualification and routing</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-white mt-1 mr-3 flex-shrink-0" />
                    <span>Seamless integration with your existing systems</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-white mt-1 mr-3 flex-shrink-0" />
                    <span>Reduced operational costs and improved efficiency</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;
