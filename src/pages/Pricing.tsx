
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

const Pricing = () => {
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  const [showCalendarDialog, setShowCalendarDialog] = useState(false);
  const [showDemoVideo, setShowDemoVideo] = useState(false);
  
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
  
  const handlePurchaseClick = (planName: string) => {
    // Direct to checkout page with the selected plan
    window.location.href = `https://checkout.suddenimpact.agency?plan=${encodeURIComponent(planName)}`;
  };

  return (
    <Layout lightMode={true}>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                  <p className="flex items-center"><Check className="mr-2 h-4 w-4 text-brand-pink" /> 7-Day Free Trial (credit card required)</p>
                  <p className="flex items-center"><Check className="mr-2 h-4 w-4 text-brand-aqua" /> $197 one-time setup fee</p>
                  <p className="flex items-center"><Check className="mr-2 h-4 w-4 text-brand-pink" /> Cancel anytime during trial period</p>
                  <p className="flex items-center"><Check className="mr-2 h-4 w-4 text-brand-aqua" /> Save 20% when billed annually</p>
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
            className="mb-16"
          />
          
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
                            ${plan.price}
                          </span>
                          <span className="text-gray-500 ml-2">/month</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          ${plan.annualPrice}/month billed annually
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handlePurchaseClick(plan.name)}
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

      {/* Overage Pricing Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
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
      <section className="py-16 md:py-24 bg-white">
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
                  <div className="text-center mb-8">
                    <p className="text-lg text-gray-700 mb-6">
                      Need a tailored plan? We build fully custom solutions for high-growth businesses. 
                      Our team will work with you to create a customized AI voice solution that perfectly fits your 
                      unique business needs and workflows.
                    </p>
                  </div>
                
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
                      to="https://link.suddenimpactagency.io/widget/booking/MYRdt5Un7mP29erZS5rx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-4 px-8 text-center rounded-lg bg-gradient-to-r from-brand-purple via-brand-pink to-brand-aqua text-white hover:opacity-90 transition-all font-medium text-lg shadow-lg hover:shadow-xl"
                    >
                      Schedule a Strategy Call
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
              src="https://www.youtube.com/embed/HuU_pxXVVqo?si=qrMXYUDeg8m8zUzs"
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
