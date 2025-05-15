
import React from 'react';
import { ArrowRight, Check, Calendar } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import NicheLayout from '@/components/niches/NicheLayout';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';
import '@/styles/iframe-container.css';

const NichePricing = () => {
  const { industry = 'healthcare' } = useParams();
  const validIndustry = ['healthcare', 'real-estate', 'restaurants', 'service-contractors'].includes(industry) 
    ? industry 
    : 'healthcare';
  
  const getGradient = () => {
    switch(validIndustry) {
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

  const getIndustryTitle = () => {
    switch(validIndustry) {
      case 'healthcare':
        return 'Healthcare Practices';
      case 'real-estate':
        return 'Real Estate Agencies';
      case 'restaurants':
        return 'Restaurants & Hospitality';
      case 'service-contractors':
        return 'Service Contractors';
      default:
        return 'Businesses';
    }
  };

  const gradient = getGradient();
  const industryTitle = getIndustryTitle();
  
  const plans = [
    {
      name: "Starter",
      price: 197,
      monthlyFee: 97,
      minutes: 300,
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
      features: [
        "10+ AI Voice Assistants",
        "All Professional Features",
        "Dedicated Account Manager",
        "Custom Integration Development",
        "White-labeled Solution",
        "Phone & Email Support"
      ]
    }
  ];

  return (
    <NicheLayout 
      industry={validIndustry as any}
      title={`Simple, Transparent Pricing for ${industryTitle}`}
      subtitle="Choose the plan that's right for your business. All plans include a 7-day free trial."
    >
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <StyleProvider 
                key={index} 
                delay={index * 0.1} 
                className={`bg-white rounded-xl overflow-hidden border ${plan.popular ? 'border-brand-pink shadow-xl' : 'border-gray-200 shadow-md'}`}
              >
                {plan.popular && (
                  <div className={`py-2 bg-gradient-to-r ${gradient} text-white text-center font-medium`}>
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
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center mr-3 flex-shrink-0`}>
                          <Check size={12} className="text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${gradient} text-white py-2.5`}
                    onClick={() => document.getElementById('try-agent-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started
                    <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </StyleProvider>
            ))}
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold text-center mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800">What are AI minutes?</h4>
                <p className="text-gray-600 mt-1">AI minutes are the time our AI voice agents spend communicating with your customers. Each plan includes a set number of minutes per month.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">What happens if I exceed my monthly minutes?</h4>
                <p className="text-gray-600 mt-1">Overage minutes are billed at $0.15 per minute. We'll notify you when you reach 80% of your monthly allocation.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Is there a long-term contract?</h4>
                <p className="text-gray-600 mt-1">No, all plans are month-to-month and you can cancel anytime. The setup fee is a one-time charge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add AI agent form section */}
      <section id="try-agent-form" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <SectionTitle 
              title="Try Our AI Voice Agent Now"
              subtitle="Fill out the form below to access our AI voice agent"
              centered={true}
            />
            
            <StyleProvider className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200 mt-12">
              {/* Form to access AI's number */}
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
                <p className="text-gray-600 mb-4">Alternatively, schedule a consultation with our team:</p>
                <a 
                  href="https://link.suddenimpactagency.io/widget/booking/MYRdt5Un7mP29erZS5rx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-brand-purple to-brand-aqua text-white rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <Calendar size={16} className="mr-2" /> 
                  Schedule a Consultation
                </a>
              </div>
            </StyleProvider>
          </div>
        </div>
      </section>
    </NicheLayout>
  );
};

export default NichePricing;
