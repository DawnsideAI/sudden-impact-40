
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AIPapersSection from "@/components/pricing/AIPapersSection";
import LiveDemoDialog from "@/components/pricing/LiveDemoDialog";
import PricingFaq from "@/components/pricing/PricingFaq";
import { Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import DemoCalendarForm from "@/components/demo/DemoCalendarForm";
import SectionTitle from "@/components/design/SectionTitle";
import StyleProvider from "@/components/design/StyleProvider";

const pricingPlans = [
  {
    name: "Impact Starter",
    price: 397,
    annualPrice: 3811,
    setupFee: "$197.00 One-time set-up",
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
      "Automated client onboarding via GHL snapshot",
      "Unified Inbox Mobile App (iOS & Android)",
      "Real-Time Notifications",
      "2-Way SMS & Email Campaigns",
      "Social Media Scheduler",
      "Reputation Management"
    ],
    mostPopular: false,
    ctaText: "Start Free Trial",
    color: "pink"
  },
  {
    name: "Impact Pro",
    price: 597,
    annualPrice: 5731,
    setupFee: "$197.00 One-time set-up",
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
      "GHL automation & campaign snapshot included",
      "Unified Inbox Mobile App (iOS & Android)",
      "Real-Time Notifications",
      "2-Way SMS & Email Campaigns",
      "Social Media Scheduler",
      "Reputation Management",
      "Custom KPI Dashboard & Reports",
      "Zapier & API Integrations"
    ],
    mostPopular: true,
    ctaText: "Start Free Trial",
    color: "gradient"
  },
  {
    name: "Enterprise",
    price: 897,
    annualPrice: 8611,
    setupFee: "$197.00 One-time set-up",
    description: "Ideal for scaling companies & multi-location teams",
    features: [
      "5,000 AI Engagement Minutes/month",
      "Unlimited AI Voice Agents",
      "Unlimited Calendars, Forms, Funnels",
      "Multi-location CRM Dashboard",
      "Role-based Permissions + User Controls",
      "White-labeled SaaS Portal Branding",
      "Quarterly Automation Success Check-ins",
      "Priority Support Access",
      "Unified Inbox Mobile App (iOS & Android)",
      "Real-Time Notifications",
      "2-Way SMS & Email Campaigns",
      "Social Media Scheduler",
      "Reputation Management",
      "Custom KPI Dashboard & Reports",
      "Zapier & API Integrations"
    ],
    mostPopular: false,
    ctaText: "Start Free Trial",
    color: "aqua"
  }
];

const healthcarePricingPlans = [
  {
    name: "Impact Starter - HIPAA Compliance",
    price: 797,
    annualPrice: 7651,
    setupFee: "$297.00 One-time set-up",
    mostPopular: false,
    monthlyLink: "https://buy.stripe.com/4gM3cnbFheRC3TZd5rejK0p",
    annualLink: "https://buy.stripe.com/00wdR14cPdNyfCHaXjejK0r"
  },
  {
    name: "Impact Pro - HIPAA Compliance",
    price: 1097,
    annualPrice: 10531,
    setupFee: "$297.00 One-time set-up",
    mostPopular: true,
    monthlyLink: "https://buy.stripe.com/14A9ALgZBbFq76baXjejK0s",
    annualLink: "https://buy.stripe.com/fZu28j4cP9xiain4yVejK0t"
  },
  {
    name: "Impact Enterprise - HIPAA Compliance",
    price: 1497,
    annualPrice: 14371,
    setupFee: "$297.00 One-time set-up",
    mostPopular: false,
    monthlyLink: "https://buy.stripe.com/14AdR124HfVGainfdzejK0u",
    annualLink: "https://buy.stripe.com/4gMbITbFh9xigGL4yVejK0v"
  }
];

// Industry links map
const industryLinks = {
  'service-contractors': {
    starter: {
      monthly: "https://buy.stripe.com/aFa14ffVxdNy9ej1mJejK06",
      annual: "https://buy.stripe.com/fZu00b38LaBm627aXjejK07"
    },
    pro: {
      monthly: "https://buy.stripe.com/eVqfZ95gT38UgGL3uRejK08",
      annual: "https://buy.stripe.com/eVq8wHbFhaBm8af9TfejK09"
    },
    enterprise: {
      monthly: "https://buy.stripe.com/5kQ5kv10DbFq1LRe9vejK0a",
      annual: "https://buy.stripe.com/bJe5kvdNp10MeyDc1nejK0b"
    }
  },
  'real-estate': {
    starter: {
      monthly: "https://buy.stripe.com/4gM8wH10DcJu2PV0iFejK0d",
      annual: "https://buy.stripe.com/28EfZ9aBd38U1LR0iFejK0e"
    },
    pro: {
      monthly: "https://buy.stripe.com/3cIcMX8t5dNy627d5rejK0f",
      annual: "https://buy.stripe.com/8x23cn8t58tegGL6H3ejK0g"
    },
    enterprise: {
      monthly: "https://buy.stripe.com/9B6dR124HeRC6275CZejK0h",
      annual: "https://buy.stripe.com/3cIdR18t510MfCHd5rejK0i"
    }
  },
  'music': {
    starter: {
      monthly: "https://buy.stripe.com/4gM00bfVxbFq2PV9TfejK0j",
      annual: "https://buy.stripe.com/7sY00bcJl38UgGLaXjejK0k"
    },
    pro: {
      monthly: "https://buy.stripe.com/cNi5kv6kX7pa2PVd5rejK0l",
      annual: "https://buy.stripe.com/9B600bfVx4cYbmr2qNejK0m"
    },
    enterprise: {
      monthly: "https://buy.stripe.com/bJecMXeRt6l6bmr9TfejK0n",
      annual: "https://buy.stripe.com/dRm7sD24HfVG4Y33uRejK0o"
    }
  },
  'healthcare': {
    starter: {
      monthly: "https://buy.stripe.com/4gM3cnbFheRC3TZd5rejK0p",
      annual: "https://buy.stripe.com/00wdR14cPdNyfCHaXjejK0r"
    },
    pro: {
      monthly: "https://buy.stripe.com/14A9ALgZBbFq76baXjejK0s",
      annual: "https://buy.stripe.com/fZu28j4cP9xiain4yVejK0t"
    },
    enterprise: {
      monthly: "https://buy.stripe.com/14AdR124HfVGainfdzejK0u",
      annual: "https://buy.stripe.com/4gMbITbFh9xigGL4yVejK0v"
    }
  },
  'restaurants': {
    starter: {
      monthly: "https://buy.stripe.com/dRmaEPeRt38Ubmr7L7ejK0w",
      annual: "https://buy.stripe.com/8x27sDbFh6l61LR0iFejK0x"
    },
    pro: {
      monthly: "https://buy.stripe.com/28E3cncJl24Q2PVd5rejK0z",
      annual: "https://buy.stripe.com/14AcMX7p1eRC3TZ4yVejK0A"
    },
    enterprise: {
      monthly: "https://buy.stripe.com/eVqdR18t538Ubmr8PbejK0B",
      annual: "https://buy.stripe.com/6oU28j38L24QeyD5CZejK0C"
    }
  }
};

const Pricing = () => {
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  const [showCalendarDialog, setShowCalendarDialog] = useState(false);
  const [showDemoVideo, setShowDemoVideo] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Pricing | Sudden Impact Agency";
  }, []);

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDemoDialog(true);
  };
  
  const handleScheduleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowCalendarDialog(true);
  };
  
  const handleDemoVideoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDemoVideo(true);
  };
  
  const handlePurchaseClick = (plan: typeof pricingPlans[0]) => {
    const tierMap: Record<string, string> = {
      "Impact Starter": "starter",
      "Impact Pro": "pro",
      "Enterprise": "enterprise"
    };
    
    // Default to service-contractors if no specific industry
    const industry = 'service-contractors';
    const tier = tierMap[plan.name] || 'starter';
    const url = industryLinks[industry as keyof typeof industryLinks][tier as keyof typeof industryLinks[keyof typeof industryLinks]][billingPeriod];
    
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <Layout lightMode={true}>
      {/* Hero Section - Modified to prevent content cutoff */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-aqua/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <StyleProvider delay={0.1}>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Everything you need to launch, scale, and engage
                <span className="bg-gradient-to-r from-brand-pink to-brand-aqua bg-clip-text text-transparent"> — powered by our AI</span>
              </h1>
              <div className="max-w-2xl mx-auto mt-8 p-6 rounded-xl bg-white shadow-lg border border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 text-gray-700">
                  <p className="flex items-center"><Check className="mr-2 h-4 w-4 text-brand-pink" /> 7-Day Free Trial (credit card required)</p>
                  <p className="flex items-center"><Check className="mr-2 h-4 w-4 text-brand-aqua" /> $197.00 One-time setup fee</p>
                  <p className="flex items-center"><Check className="mr-2 h-4 w-4 text-brand-pink" /> Cancel anytime during trial period</p>
                  <p className="flex items-center"><Check className="mr-2 h-4 w-4 text-brand-aqua" /> Save with annual billing</p>
                </div>
              </div>
            </div>
          </StyleProvider>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-100 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-aqua/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <SectionTitle
            title="Choose Your Plan"
            subtitle="Select the perfect plan for your business needs"
            centered={true}
            className="mb-8"
          />
          
          <div className="flex justify-center mb-10">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
              <button 
                className={`px-4 py-2 rounded-md text-sm font-medium ${billingPeriod === 'monthly' ? 'bg-white shadow-sm text-brand-dark' : 'text-gray-600'}`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
              <button 
                className={`px-4 py-2 rounded-md text-sm font-medium ${billingPeriod === 'annual' ? 'bg-white shadow-sm text-brand-dark' : 'text-gray-600'}`}
                onClick={() => setBillingPeriod('annual')}
              >
                Annual (Save)
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <StyleProvider 
                key={plan.name}
                delay={0.1 + (index * 0.1)}
              >
                <div className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                  plan.mostPopular 
                    ? 'ring-2 ring-brand-pink' 
                    : 'border border-gray-100'
                }`}
                >
                  {/* Top gradient bar */}
                  <div className={`h-2 w-full ${
                    plan.color === 'gradient' 
                      ? 'bg-gradient-to-r from-brand-pink to-brand-aqua' 
                      : plan.color === 'pink' 
                        ? 'bg-brand-pink' 
                        : 'bg-brand-aqua'
                  }`}></div>
                  
                  {plan.mostPopular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-brand-pink to-brand-aqua text-white py-1 px-3 text-sm font-medium rounded-full shadow-md">
                      Most Popular
                    </div>
                  )}

                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{plan.name}</h3>
                    <p className="text-gray-600 mb-6 h-12">{plan.description}</p>
                    
                    <div className="mb-8">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-baseline">
                          <span className={`text-4xl font-bold ${
                            plan.color === 'gradient' 
                              ? 'bg-gradient-to-r from-brand-pink to-brand-aqua bg-clip-text text-transparent' 
                              : plan.color === 'pink' 
                                ? 'text-brand-pink' 
                                : 'text-brand-aqua'
                          }`}>
                            ${billingPeriod === 'monthly' ? plan.price : plan.annualPrice}
                          </span>
                          <span className="text-gray-500 ml-2">{billingPeriod === 'monthly' ? '/mo' : '/annual'}</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          {plan.setupFee}
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handlePurchaseClick(plan)}
                      className={`block w-full py-3 px-4 text-center rounded-lg font-medium mb-8 ${
                        plan.color === 'gradient'
                          ? "bg-gradient-to-r from-brand-pink to-brand-aqua text-white shadow-lg hover:shadow-xl transition-all"
                          : plan.color === 'pink'
                            ? "bg-brand-pink text-white hover:opacity-90 transition-all"
                            : "bg-brand-aqua text-white hover:opacity-90 transition-all"
                      }`}
                    >
                      {plan.ctaText}
                    </button>
                    
                    <div className="space-y-4 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex">
                          <Check className={`mr-3 flex-shrink-0 ${
                            plan.color === 'gradient' 
                              ? 'text-brand-purple' 
                              : plan.color === 'pink' 
                                ? 'text-brand-pink' 
                                : 'text-brand-aqua'
                          }`} size={18} />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </StyleProvider>
            ))}
          </div>
          
          <StyleProvider delay={0.4} className="mt-12 text-center">
            <p className="text-gray-700 mb-6 text-lg">Not sure which plan is right for you?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleDemoClick}
                className="bg-gradient-to-r from-brand-pink to-brand-aqua hover:opacity-90 text-white py-6 px-6 text-lg"
              >
                Try the AI Voice Agent
              </Button>
              <Button
                onClick={handleScheduleDemoClick}
                variant="outline"
                className="border-gray-300 text-gray-800 hover:bg-gray-100 py-6 px-6 text-lg"
              >
                <Calendar className="mr-2" /> Schedule a Consultation
              </Button>
            </div>
          </StyleProvider>
        </div>
      </section>

      {/* Healthcare Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Healthcare HIPAA-Compliant Pricing"
            subtitle="Secure solutions for healthcare providers with full HIPAA compliance"
            centered={true}
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {healthcarePricingPlans.map((plan, index) => (
              <StyleProvider 
                key={index} 
                delay={index * 0.1} 
                className={`bg-white p-6 rounded-xl border ${plan.mostPopular ? 'border-brand-pink shadow-lg' : 'border-gray-200'} flex flex-col`}
              >
                {plan.mostPopular && (
                  <div className={`py-1 text-sm bg-gradient-to-r from-brand-aqua to-brand-pink text-white text-center font-medium rounded-t-lg -mt-6 -mx-6 mb-4`}>
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-center mb-2">{plan.name}</h3>
                
                {/* Monthly Option */}
                <div className="border rounded-lg p-4 mb-3 flex-1">
                  <div className="text-center">
                    <p className="text-xl font-bold mb-1">${plan.price}/mo</p>
                    <p className="text-sm text-gray-500 mb-2">{plan.setupFee}</p>
                    
                    <motion.button
                      className="w-full text-sm py-2 px-3 bg-gradient-to-r from-brand-pink to-brand-aqua text-white rounded-md hover:shadow-md transition-all duration-300"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => window.open(plan.monthlyLink, '_blank')}
                    >
                      Select Monthly
                    </motion.button>
                  </div>
                </div>
                
                {/* Annual Option */}
                <div className="border border-green-100 bg-green-50/30 rounded-lg p-4 flex-1">
                  <div className="text-center">
                    <p className="text-lg font-bold mb-1">${plan.annualPrice}/annual</p>
                    <p className="text-sm text-gray-500 mb-1">{plan.setupFee}</p>
                    <p className="text-xs text-green-600 font-medium mb-2">Save with annual billing</p>
                    
                    <motion.button
                      className="w-full text-sm py-2 px-3 bg-gradient-to-r from-green-500 to-brand-aqua text-white rounded-md hover:shadow-md transition-all duration-300"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => window.open(plan.annualLink, '_blank')}
                    >
                      Select Annual
                    </motion.button>
                  </div>
                </div>
              </StyleProvider>
            ))}
          </div>
        </div>
      </section>

      {/* Overage Pricing Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Overage Pricing"
            subtitle="Transparent rates for when you need additional capacity"
            centered={true}
            className="mb-16"
          />
          
          <StyleProvider delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-8 rounded-xl bg-white shadow-lg border border-gray-100 relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-pink"></div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Outbound</h3>
                <p className="text-3xl font-bold text-brand-pink mb-1">$0.056</p>
                <p className="text-sm text-gray-500">per minute</p>
              </div>
              
              <div className="text-center p-8 rounded-xl bg-white shadow-lg border border-gray-100 relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-pink to-brand-aqua"></div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Inbound</h3>
                <p className="text-3xl font-bold bg-gradient-to-r from-brand-pink to-brand-aqua bg-clip-text text-transparent mb-1">$0.034</p>
                <p className="text-sm text-gray-500">per minute</p>
              </div>
              
              <div className="text-center p-8 rounded-xl bg-white shadow-lg border border-gray-100 relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-aqua"></div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">SMS</h3>
                <p className="text-3xl font-bold text-brand-aqua mb-1">$0.0316</p>
                <p className="text-sm text-gray-500">per segment</p>
              </div>
            </div>
            
            <div className="mt-8 text-center max-w-2xl mx-auto">
              <p className="text-gray-600">
                Overage minutes are automatically charged to your card on file when you exceed your plan's limits.
              </p>
            </div>
          </StyleProvider>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <StyleProvider>
            <div className="max-w-4xl mx-auto">
              <SectionTitle
                title="Custom AI Solutions"
                subtitle="For healthcare, call centers, or multi-brand teams needing high-complexity builds"
                centered={true}
                className="mb-16"
              />
              
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative">
                {/* Top gradient bar */}
                <div className="h-2 w-full bg-gradient-to-r from-brand-purple via-brand-pink to-brand-aqua"></div>
                
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {[
                      "Custom AI Voice Agent Development",
                      "HIPAA-Compliance Ready Workflows",
                      "Complex Multi-Step Voice Logic",
                      "Industry-Tailored Automations",
                      "Full Implementation + Strategy Buildout",
                      "POS System Integrations",
                      "EMR/CRM Sync via API or Webhooks",
                      "AI Scheduling with Staff/Provider Matching",
                      "Multi-Location Call Routing by Intent",
                      "Custom Data Capture + Validation",
                      "Bilingual/Multilingual Voice Agent Support",
                      "Post-Call Summarization + CRM Logging",
                      "Escalation to Live Agents with Handoff",
                      "Secure Call Recording + Compliance Tracking"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <Link
                      to="https://www.go.suddenimpact.agency/meetings/suddenimpact/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-4 px-8 text-center rounded-lg bg-gradient-to-r from-brand-purple via-brand-pink to-brand-aqua text-white hover:opacity-90 transition-all font-medium text-lg shadow-lg hover:shadow-xl"
                    >
                      Schedule a Consultation
                    </Link>
                  </div>
                </div>
                
                <div className="text-center p-4 text-sm text-white bg-gradient-to-r from-brand-pink/90 to-brand-aqua/90">
                  ⚠️ Enterprise solutions are billed at $0.15/minute — auto-charged to card on file
                </div>
              </div>
            </div>
          </StyleProvider>
        </div>
      </section>

      {/* FAQ Section - Using the PricingFaq component */}
      <PricingFaq />

      {/* Additional Paper Section */}
      <AIPapersSection />

      {/* Demo Dialogs */}
      <LiveDemoDialog 
        open={showDemoDialog} 
        onOpenChange={setShowDemoDialog} 
      />
      
      {/* Calendar Dialog */}
      <Dialog open={showCalendarDialog} onOpenChange={setShowCalendarDialog}>
        <DialogContent className="sm:max-w-[600px] bg-gray-900 border-white/10">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Schedule Your Demo</DialogTitle>
          </DialogHeader>
          <DemoCalendarForm onSubmitSuccess={() => setShowCalendarDialog(false)} />
        </DialogContent>
      </Dialog>
      
      {/* Video demo dialog */}
      <Dialog open={showDemoVideo} onOpenChange={setShowDemoVideo}>
        <DialogContent className="sm:max-w-[800px] bg-gray-900 border-white/10">
          <DialogTitle className="text-xl font-bold text-center mb-4">AI Voice Agent Demo</DialogTitle>
          <div className="aspect-video relative bg-black/20 rounded-lg overflow-hidden flex items-center justify-center">
            <iframe
              src="https://www.youtube.com/embed/HuU_pxXVVqo"
              title="AI Voice Agent Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Pricing;
