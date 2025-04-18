
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { FiCheck, FiInfo } from "react-icons/fi";

const pricingPlans = [
  {
    name: "Starter Impact",
    price: 397,
    annualPrice: 317,
    description: "Perfect for solo pros & lean teams starting their AI journey",
    features: [
      "500 AI Engagement Minutes/month",
      "1 AI Voice Agent (plug-and-play template)",
      "Contact & lead CRM (via GHL)",
      "1 Smart Booking Calendar (GHL native calendar)",
      "1 Lead Capture Form (branded)",
      "SMS & Email Follow-up Automation",
      "Funnel access (1 prebuilt, branded)",
      "Access to Live AI Demo Tool",
      "Automated client onboarding via GHL snapshot"
    ],
    mostPopular: false,
    ctaText: "Start Free Trial"
  },
  {
    name: "Impact Pro",
    price: 587,
    annualPrice: 470,
    description: "For growing teams who need smart routing and powerful automation",
    features: [
      "1,500 AI Engagement Minutes/month",
      "Up to 3 AI Voice Agents (e.g., per service or department)",
      "Smart Round-Robin Calendar Routing",
      "Up to 5 Funnels or Landing Pages",
      "Advanced Pipeline & Deal Management",
      "Voicemail Drops + Missed Call Text-Backs",
      "Multi-Step Email/SMS Sequences",
      "Smart Demo Scheduler + Custom Reminder Flows",
      "GHL automation & campaign snapshot included"
    ],
    mostPopular: true,
    ctaText: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: 897,
    annualPrice: 718,
    description: "Ideal for scaling companies & multi-location teams",
    features: [
      "5,000 AI Engagement Minutes/month",
      "Unlimited AI Voice Agents",
      "Unlimited Calendars, Forms, Funnels",
      "Multi-location CRM Dashboard",
      "Smart Round-Robin Calendar Routing",
      "Advanced Pipeline & Deal Management",
      "Voicemail Drops + Missed Call Text-Backs",
      "Multi-Step Email/SMS Sequences",
      "Enterprise-level automation & campaign snapshot"
    ],
    mostPopular: false,
    ctaText: "Start Free Trial"
  }
];

const Pricing = () => {
  const [annualBilling, setAnnualBilling] = useState(false);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Pricing | Sudden Impact Agency";
  }, []);

  const toggleBilling = () => {
    setAnnualBilling(!annualBilling);
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
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Everything you need to launch, scale, and engage — powered by our AI Voice Agents and wrapped in the Sudden Impact Automation Suite.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-2 rounded-lg inline-flex shadow-sm mb-6"
            >
              <button
                onClick={() => setAnnualBilling(false)}
                className={`px-4 py-2 rounded-md transition-all ${
                  !annualBilling ? "bg-agency-blue text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnualBilling(true)}
                className={`px-4 py-2 rounded-md transition-all ${
                  annualBilling ? "bg-agency-blue text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Annually
                <span className="ml-1 text-xs py-0.5 px-1 bg-green-100 text-green-800 rounded">
                  Save 20%
                </span>
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center text-sm space-y-2 sm:space-y-0 sm:space-x-4"
            >
              <div className="flex items-center text-gray-600">
                <FiCheck className="text-agency-blue mr-2" />
                7-Day Free Trial
              </div>
              <div className="flex items-center text-gray-600">
                <FiCheck className="text-agency-blue mr-2" />
                $197 One-Time Setup Fee
              </div>
              <div className="flex items-center text-gray-600">
                <FiCheck className="text-agency-blue mr-2" />
                Cancel Anytime
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                className={`bg-white rounded-xl shadow-md overflow-hidden relative border ${
                  plan.mostPopular ? 'border-agency-blue' : 'border-gray-200'
                }`}
              >
                {plan.mostPopular && (
                  <div className="absolute top-0 right-0 bg-agency-blue text-white py-1 px-3 text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">
                        ${annualBilling ? plan.annualPrice : plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </div>
                    {annualBilling && (
                      <p className="text-green-600 text-sm mt-1">
                        Billed annually at ${plan.annualPrice * 12}/year
                      </p>
                    )}
                  </div>
                  
                  <Link
                    to="/demo"
                    className={`block w-full py-3 px-4 text-center rounded-lg font-medium mb-8 ${
                      plan.mostPopular
                        ? "gradient-bg text-white shadow-md hover:shadow-lg transition-all"
                        : "bg-white border border-agency-blue text-agency-blue hover:bg-agency-blue hover:text-white transition-all"
                    }`}
                  >
                    {plan.ctaText}
                  </Link>
                  
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex">
                        <FiCheck className="text-agency-blue mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and plans
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">What happens after the 7-day trial?</h3>
                <p className="text-gray-600">
                  If you don't cancel before the trial ends, your chosen plan will begin automatically, and your card will be charged the monthly (or annual) subscription fee, along with a one-time $197 setup fee.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Can I cancel during the trial?</h3>
                <p className="text-gray-600">
                  Absolutely. You can cancel anytime during your 7-day trial with no charge.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">What are AI Engagement Minutes?</h3>
                <p className="text-gray-600">
                  AI Engagement Minutes are the amount of time your AI agent spends actively engaging with your leads or customers. This includes live calls, demo sessions, and appointment workflows.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">What if I go over my monthly minutes?</h3>
                <p className="text-gray-600">
                  If you exceed your plan's allocated minutes, you'll be charged an overage fee per minute at the current rate (currently $0.15/min). Your card on file will be billed automatically.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-gray-600">
                  Yes! You can change your plan at any time. Upgrades go into effect immediately; downgrades take effect at the start of the next billing cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Ready to experience the <span className="gradient-text">future of business automation</span>?
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Start your 7-day free trial today and see how our AI voice agents can transform your business operations.
                </p>
                <Link to="/demo" className="btn-primary inline-block">
                  See Demo and Start Free Trial
                </Link>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold mb-4">What's included in every plan</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FiCheck className="text-agency-blue mt-1 mr-3 flex-shrink-0" />
                    <span>AI Voice Agent Capability</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-agency-blue mt-1 mr-3 flex-shrink-0" />
                    <span>CRM Integration</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-agency-blue mt-1 mr-3 flex-shrink-0" />
                    <span>Booking & Calendar Functions</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-agency-blue mt-1 mr-3 flex-shrink-0" />
                    <span>Email & SMS Follow-ups</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-agency-blue mt-1 mr-3 flex-shrink-0" />
                    <span>Dedicated Support Team</span>
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

export default Pricing;
