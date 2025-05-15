
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';
import '@/styles/iframe-container.css';

interface NicheContactFormProps {
  industry: 'healthcare' | 'real-estate' | 'restaurants' | 'service-contractors';
}

const NicheContactForm = ({ industry }: NicheContactFormProps) => {
  const { toast } = useToast();
  const [showPricing, setShowPricing] = useState(true);

  // Define industry-specific form labels
  const getIndustryLabel = () => {
    switch(industry) {
      case 'healthcare':
        return 'Healthcare Practice';
      case 'real-estate':
        return 'Real Estate Agency';
      case 'restaurants':
        return 'Restaurant Name';
      case 'service-contractors':
        return 'Service Business Name';
      default:
        return 'Company Name';
    }
  };

  const getButtonText = () => {
    switch(industry) {
      case 'healthcare':
        return 'Book Your Appointment';
      case 'real-estate':
        return 'Get Started Now';
      case 'restaurants':
        return 'Reserve Now';
      case 'service-contractors':
        return 'Schedule Service Now';
      default:
        return 'Submit';
    }
  };

  const getGradient = () => {
    switch(industry) {
      case 'healthcare':
        return 'from-brand-aqua to-brand-pink';
      case 'real-estate':
        return 'from-brand-purple to-brand-aqua';
      case 'restaurants':
        return 'from-brand-pink to-brand-aqua';
      case 'service-contractors':
        return 'from-brand-purple to-brand-pink';
      default:
        return 'from-brand-pink to-brand-aqua';
    }
  };

  const industryLabel = getIndustryLabel();
  const buttonText = getButtonText();
  const gradient = getGradient();

  // Basic pricing plans to display inline
  const pricingPlans = [
    {
      name: "Starter",
      price: 197,
      monthlyFee: 97,
      features: ["300 AI Minutes", "Calendar Integration", "24/7 Availability"]
    },
    {
      name: "Professional",
      price: 197,
      monthlyFee: 297,
      popular: true,
      features: ["1000 AI Minutes", "CRM Integration", "Custom Workflows"]
    },
    {
      name: "Enterprise",
      price: 497,
      monthlyFee: 597,
      features: ["3000 AI Minutes", "White-labeled Solution", "Dedicated Manager"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Get Started Today"
          subtitle={`Complete this form to begin your ${industry.replace('-', ' ')} automation journey`}
          centered={true}
        />
        
        {/* Display condensed pricing plans directly on the page */}
        <div className="mt-8 mb-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pricingPlans.map((plan, index) => (
              <StyleProvider 
                key={index} 
                delay={index * 0.1} 
                className={`bg-white p-4 rounded-xl border ${plan.popular ? 'border-brand-pink shadow-lg' : 'border-gray-200'}`}
              >
                {plan.popular && (
                  <div className={`py-1 text-sm bg-gradient-to-r ${gradient} text-white text-center font-medium rounded-t-lg -mt-4 -mx-4 mb-3`}>
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold text-center">{plan.name}</h3>
                <div className="text-center my-3">
                  <p className="text-sm text-gray-500">One-time setup</p>
                  <p className="text-xl font-bold">${plan.price}</p>
                  <p className="text-sm text-gray-500">Monthly</p>
                  <p className="text-xl font-bold">${plan.monthlyFee}/mo</p>
                </div>
                <ul className="text-sm space-y-2 mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center mr-2 flex-shrink-0`}>
                        <Check size={10} className="text-white" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <motion.button
                    className="w-full text-sm py-2 bg-gradient-to-r from-brand-pink to-brand-aqua text-white rounded-md hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => document.getElementById('ai-demo-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started
                  </motion.button>
                </div>
              </StyleProvider>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link 
              to={`/niches/${industry}/pricing`}
              className="inline-flex items-center font-medium text-brand-vibrantPurple hover:text-brand-pink transition-colors"
            >
              View detailed pricing plans <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
        
        <div id="ai-demo-form" className="mt-12 max-w-3xl mx-auto">
          <StyleProvider className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-center mb-4">Try Our AI Voice Agent</h3>
            <p className="text-center text-gray-600 mb-6">Fill out the form to get immediate access to our AI voice agent</p>
            
            {/* Embedded form to access AI's number */}
            <div className="iframe-container" style={{ height: "450px" }}>
              <iframe 
                src="https://link.suddenimpactagency.io/widget/form/Gf3ORV8Uba4HRiXoml5L"
                id="inline-Gf3ORV8Uba4HRiXoml5L" 
                className="w-full h-full border-0 no-scrollbar"
                title="AI Voice Agent Demo Form"
                loading="lazy"
              ></iframe>
            </div>
            
            <div className="text-center mt-8">
              <p className="font-medium text-gray-700 mb-2">Prefer to speak with our team?</p>
              <a 
                href="https://link.suddenimpactagency.io/widget/booking/MYRdt5Un7mP29erZS5rx" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-brand-aqua/10 text-brand-aqua hover:bg-brand-aqua/20 rounded-lg transition-colors"
              >
                <Calendar size={16} className="mr-1" /> Schedule a consultation
              </a>
            </div>
          </StyleProvider>
        </div>
      </div>
    </section>
  );
};

export default NicheContactForm;
