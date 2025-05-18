
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import NicheLayout from '@/components/niches/NicheLayout';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import AIDemoCallDialog from '@/components/niches/AIDemoCallDialog';
import '@/styles/iframe-container.css';

const NicheBooking = () => {
  const { industry = 'healthcare' } = useParams();
  const [showDemoVideo, setShowDemoVideo] = useState(false);
  const [isFormScriptLoaded, setIsFormScriptLoaded] = useState(false);
  
  // Add the script tag for the form embed.js after component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.suddenimpactagency.io/js/form_embed.js";
    script.async = true;
    script.onload = () => setIsFormScriptLoaded(true);
    document.body.appendChild(script);
    
    return () => {
      // Clean up script when component unmounts
      const existingScript = document.querySelector(`script[src="https://link.suddenimpactagency.io/js/form_embed.js"]`);
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);
  
  const validIndustry = ['healthcare', 'real-estate', 'restaurants', 'service-contractors', 'music'].includes(industry) 
    ? industry 
    : 'healthcare';
  
  const getIndustryText = () => {
    switch(validIndustry) {
      case 'healthcare':
        return { title: "Healthcare", subtitle: "Experience our AI agent demo to see how we can streamline your patient communications" };
      case 'real-estate':
        return { title: "Real Estate", subtitle: "Experience our AI agent demo to see how we can boost your property showings and client engagement" };
      case 'restaurants':
        return { title: "Restaurant", subtitle: "Experience our AI agent demo to see how we can enhance your reservation system and guest experience" };
      case 'service-contractors':
        return { title: "Service", subtitle: "Experience our AI agent demo to see how we can optimize your booking system and customer follow-ups" };
      case 'music':
        return { title: "Music", subtitle: "Experience our AI agent demo to see how we can handle your bookings and fan engagement" };
      default:
        return { title: "Your", subtitle: "Experience our AI voice agents in action" };
    }
  };
  
  const industryText = getIndustryText();
  const demoVideoUrl = "https://www.youtube.com/embed/HuU_pxXVVqo?si=qrMXYUDeg8m8zUzs";

  return (
    <NicheLayout 
      industry={validIndustry as any}
      title={`${industryText.title} AI Demo`}
      subtitle={industryText.subtitle}
    >
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="Experience Our AI Voice Agent Live"
              subtitle="Complete our demo form to speak with our AI voice agent"
              centered={true}
            />
            
            <StyleProvider className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200 mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-800 text-center">Complete The Demo Form</h3>
                  <div className="ghl-form-wrapper" style={{ height: "800px" }}>
                    <iframe
                      src="https://link.suddenimpactagency.io/widget/form/Gf3ORV8Uba4HRiXoml5L"
                      style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
                      id="inline-niche-Gf3ORV8Uba4HRiXoml5L" 
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="leadCollected"
                      data-deactivation-value=""
                      data-form-name="A2P Form - New"
                      data-height="735"
                      data-layout-iframe-id="inline-niche-Gf3ORV8Uba4HRiXoml5L"
                      data-form-id="Gf3ORV8Uba4HRiXoml5L"
                      title="A2P Form - New"
                    ></iframe>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-800 text-center">Watch Demo Video</h3>
                  <div onClick={() => setShowDemoVideo(true)} className="aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer relative group">
                    <div className="absolute inset-0 bg-brand-darkPurple/50 flex items-center justify-center group-hover:bg-brand-darkPurple/70 transition-all duration-300">
                      <motion.div 
                        className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-pink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </motion.div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800" 
                      alt="Demo video thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center mt-8">
                    <h4 className="font-medium text-gray-800 mb-4">Or schedule a consultation with our team:</h4>
                    <a 
                      href="https://link.suddenimpactagency.io/widget/bookings/XaOGCzWWKmrQWqpbwWlq-4f31f69f-689b-4bd4-95d8-c885cf48e9ac-ff5dc43e-63e9-438c-a258-ad582d9e066e-a667fee4-6211-4e1e-9aed-df4252fe1635"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-brand-vibrantPurple to-brand-pink text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Schedule a Consultation
                    </a>
                  </div>
                </div>
              </div>
            </StyleProvider>
          </div>
        </div>
      </section>
      
      {/* Demo video dialog */}
      <Dialog open={showDemoVideo} onOpenChange={setShowDemoVideo}>
        <DialogContent className="sm:max-w-[800px] bg-white border border-brand-pink/10 shadow-xl">
          <DialogTitle className="text-xl font-bold text-center mb-4 text-gray-800">AI Voice Agent Demo</DialogTitle>
          <div className="aspect-video relative bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5 rounded-lg overflow-hidden">
            <iframe 
              src={demoVideoUrl}
              className="w-full h-full"
              title="AI Voice Agent Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Add pricing section directly on the booking page for easier access */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title={`${industryText.title} AI Voice Agent Pricing`}
            subtitle="Choose the plan that's right for your business. All plans include a 7-day free trial."
            centered={true}
          />
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: 197,
                monthlyFee: 97,
                minutes: 300,
                popular: false,
                features: [
                  "1 AI Voice Assistant",
                  "Calendar Integration",
                  "SMS & Email Notifications",
                  "24/7 Availability",
                  "Basic Analytics Dashboard",
                  "Email Support"
                ]
              },
              {
                name: "Professional",
                price: 197,
                monthlyFee: 297,
                minutes: 1000,
                popular: true,
                features: [
                  "3 AI Voice Assistants",
                  "All Starter Features",
                  "Custom Workflow Builder",
                  "CRM Integration",
                  "Advanced Analytics",
                  "Priority Support"
                ]
              },
              {
                name: "Enterprise",
                price: 497,
                monthlyFee: 597,
                minutes: 3000,
                popular: false,
                features: [
                  "10+ AI Voice Assistants",
                  "All Professional Features",
                  "Dedicated Account Manager",
                  "Custom Integration Development",
                  "White-labeled Solution",
                  "Phone & Email Support"
                ]
              }
            ].map((plan, index) => (
              <StyleProvider 
                key={index} 
                delay={index * 0.1} 
                className={`bg-white rounded-xl overflow-hidden border ${plan.popular ? 'border-brand-pink shadow-xl' : 'border-gray-200 shadow-md'}`}
              >
                {plan.popular && (
                  <div className={`py-2 bg-gradient-to-r from-brand-pink to-brand-aqua text-white text-center font-medium`}>
                    Most Popular
                  </div>
                )}
                <div className="p-6 space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
                    <div className="mt-4">
                      <span className="text-gray-500 text-sm">One-time setup fee</span>
                      <p className="text-3xl font-bold">${plan.price}</p>
                    </div>
                    <div className="mt-2">
                      <span className="text-gray-500 text-sm">Monthly subscription</span>
                      <p className="text-3xl font-bold">${plan.monthlyFee}<span className="text-sm font-normal text-gray-500">/mo</span></p>
                      <p className="text-sm text-gray-600">{plan.minutes} AI minutes included</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center mr-3 flex-shrink-0`}>
                          <motion.div className="text-white">✓</motion.div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button 
                    className="w-full bg-gradient-to-r from-brand-pink to-brand-aqua text-white py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started
                  </motion.button>
                </div>
              </StyleProvider>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <motion.a
              href={`/niches/${validIndustry}/pricing`}
              className="inline-block px-8 py-3 border border-brand-aqua text-brand-aqua font-medium rounded-lg hover:bg-brand-aqua/5 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Pricing Details
            </motion.a>
          </div>
        </div>
      </section>
    </NicheLayout>
  );
};

export default NicheBooking;
