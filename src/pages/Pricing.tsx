import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AIPapersSection from "@/components/pricing/AIPapersSection";
import LiveDemoDialog from "@/components/pricing/LiveDemoDialog";

const pricingPlans = [
  {
    name: "Starter Impact",
    price: 397,
    annualPrice: 317, // 397 - 20% = 317.6, rounded to 317
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
    price: 597,
    annualPrice: 478, // 597 - 20% = 477.6, rounded up to 478
    description: "For growing teams who need smart routing and powerful automation",
    features: [
      "1,500 AI Engagement Minutes/month",
      "Up to 3 AI Voice Agents",
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
    annualPrice: 718, // 897 - 20% = 717.6, rounded up to 718
    description: "Ideal for scaling companies & multi-location teams",
    features: [
      "5,000 AI Engagement Minutes/month",
      "Unlimited AI Voice Agents",
      "Unlimited Calendars, Forms, Funnels",
      "Multi-location CRM Dashboard",
      "Role-based Permissions + User Controls",
      "White-labeled SaaS Portal Branding",
      "Quarterly Automation Success Check-ins",
      "Priority Support Access"
    ],
    mostPopular: false,
    ctaText: "Start Free Trial"
  }
];

const Pricing = () => {
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pricing | Sudden Impact Agency";
  }, []);

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDemoDialog(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Everything you need to launch, scale, and engage
              <span className="gradient-text"> — powered by our AI</span>
            </motion.h1>
            <div className="flex flex-col gap-3 items-center text-gray-300 mt-8">
              <p>✅ 7-Day Free Trial (credit card required)</p>
              <p>🧾 $197 one-time setup fee (auto-charged after trial ends)</p>
              <p>💳 Credit card required for overage protection & compliance</p>
              <p>💸 Save 20% when billed annually</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-16 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                className={`glass-card rounded-xl overflow-hidden relative ${
                  plan.mostPopular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {plan.mostPopular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-3 text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-gray-400 ml-2">/month</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        ${plan.annualPrice}/month billed annually
                      </div>
                    </div>
                  </div>
                  
                  <a
                    href="#"
                    onClick={handleDemoClick}
                    className={`block w-full py-3 px-4 text-center rounded-lg font-medium mb-8 ${
                      plan.mostPopular
                        ? "gradient-bg text-white shadow-lg hover:shadow-xl transition-all"
                        : "glass-card text-white hover:bg-white/10 transition-all"
                    }`}
                  >
                    {plan.ctaText}
                  </a>
                  
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex">
                        <span className="text-blue-400 mr-3">•</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-12 md:py-16 relative border-t border-white/10">
        <div className="container-custom">
          <div className="glass-card rounded-xl overflow-hidden p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Custom AI Solutions</h3>
            <p className="text-gray-400 mb-6">For healthcare, call centers, or multi-brand teams needing high-complexity builds</p>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Custom AI Agent Development</span>
              </li>
              <li className="flex">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">HIPAA-ready Workflows (on request)</span>
              </li>
              <li className="flex">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Complex Multi-step Voice Logic</span>
              </li>
              <li className="flex">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Industry-tailored Automations</span>
              </li>
              <li className="flex">
                <span className="text-blue-400 mr-3">•</span>
                <span className="text-gray-300">Full Implementation + Strategy Buildout</span>
              </li>
            </ul>
            <Link
              to="https://www.go.suddenimpact.agency/meetings/suddenimpact/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-4 text-center rounded-lg glass-card text-white hover:bg-white/10 transition-all"
            >
              Schedule a Consultation
            </Link>
          </div>
          <div className="text-center mt-8 text-sm text-gray-400">
            ⚠️ Overages billed at $0.15/minute — auto-charged to card on file
          </div>
        </div>
      </section>

      <LiveDemoDialog 
        open={showDemoDialog} 
        onOpenChange={setShowDemoDialog} 
      />
    </Layout>
  );
};

export default Pricing;
