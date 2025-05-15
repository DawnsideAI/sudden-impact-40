
import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import NicheLayout from '@/components/niches/NicheLayout';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';
import DemoRequestForm from '@/components/demo/DemoRequestForm';

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
              {/* Using the main site's DemoRequestForm to ensure consistent experience */}
              <DemoRequestForm onFormSubmit={() => console.log('Demo request submitted from niche page')} />
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
          
          <div className="mt-8 text-center">
            <motion.a
              href={`/niches/${validIndustry}/pricing`}
              className="inline-block px-8 py-3 bg-gradient-to-r from-brand-pink to-brand-aqua text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
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
