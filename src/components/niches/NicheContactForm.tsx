
import React from 'react';
import { motion } from 'framer-motion';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';

interface NicheContactFormProps {
  industry: 'healthcare' | 'real-estate' | 'restaurants';
}

const NicheContactForm = ({ industry }: NicheContactFormProps) => {
  // Define industry-specific form labels
  const getIndustryLabel = () => {
    switch(industry) {
      case 'healthcare':
        return 'Healthcare Practice';
      case 'real-estate':
        return 'Real Estate Agency';
      case 'restaurants':
        return 'Restaurant Name';
      default:
        return 'Company Name';
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
      default:
        return 'from-brand-pink to-brand-aqua';
    }
  };

  const industryLabel = getIndustryLabel();
  const gradient = getGradient();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Get Started Today"
          subtitle={`Schedule a demo of our AI voice solution tailored for your ${industry.replace('-', ' ')} business`}
          centered={true}
        />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <StyleProvider className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink outline-none transition"
                    placeholder="Your first name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink outline-none transition"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-gray-700 font-medium">{industryLabel}</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink outline-none transition"
                  placeholder={`Enter your ${industryLabel.toLowerCase()}`}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink outline-none transition"
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-gray-700 font-medium">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink outline-none transition"
                  placeholder="(123) 456-7890"
                />
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className={`w-full py-3 px-4 bg-gradient-to-r ${gradient} text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  Schedule My Demo
                </button>
                <p className="text-gray-500 text-sm text-center mt-4">
                  We'll contact you within 24 hours to schedule your personalized demo.
                </p>
              </div>
            </form>
          </StyleProvider>
        </div>
      </div>
    </section>
  );
};

export default NicheContactForm;
