
import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import NicheLayout from '@/components/niches/NicheLayout';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';
import '@/styles/iframe-container.css';

const NicheBooking = () => {
  const { industry = 'healthcare' } = useParams();
  const validIndustry = ['healthcare', 'real-estate', 'restaurants', 'service-contractors'].includes(industry) 
    ? industry 
    : 'healthcare';
  
  const getIndustryText = () => {
    switch(validIndustry) {
      case 'healthcare':
        return { title: "Healthcare", subtitle: "Schedule a personalized AI agent demo to see how we can streamline your patient communications" };
      case 'real-estate':
        return { title: "Real Estate", subtitle: "Schedule a personalized AI agent demo to see how we can boost your property showings and client engagement" };
      case 'restaurants':
        return { title: "Restaurant", subtitle: "Schedule a personalized AI agent demo to see how we can enhance your reservation system and guest experience" };
      case 'service-contractors':
        return { title: "Service", subtitle: "Schedule a personalized AI agent demo to see how we can optimize your booking system and customer follow-ups" };
      default:
        return { title: "Your", subtitle: "Schedule a personalized demo to see our AI voice agents in action" };
    }
  };
  
  const industryText = getIndustryText();

  return (
    <NicheLayout 
      industry={validIndustry as any}
      title={`Book Your ${industryText.title} AI Demo`}
      subtitle={industryText.subtitle}
    >
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="Experience Our AI Voice Agent Live"
              subtitle="Complete the form below to schedule your personalized demo"
              centered={true}
            />
            
            <StyleProvider className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200 mt-12">
              {/* Embedding the external form to access AI's number */}
              <div className="iframe-container" style={{ height: "500px" }}>
                <iframe 
                  src="https://link.suddenimpactagency.io/widget/form/Gf3ORV8Uba4HRiXoml5L"
                  id="inline-Gf3ORV8Uba4HRiXoml5L" 
                  className="w-full h-full border-0 no-scrollbar"
                  title="AI Voice Agent Demo Form"
                  loading="lazy"
                ></iframe>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">Alternatively, schedule a consultation with our team:</p>
                <a 
                  href="https://link.suddenimpactagency.io/widget/booking/MYRdt5Un7mP29erZS5rx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-brand-vibrantPurple to-brand-pink text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Schedule a Consultation
                </a>
              </div>
            </StyleProvider>
          </div>
        </div>
      </section>
      
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
