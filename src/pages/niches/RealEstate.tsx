
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import NicheLayout from '@/components/niches/NicheLayout';
import NicheContactForm from '@/components/niches/NicheContactForm';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';
import FeatureCard from '@/components/design/FeatureCard';

const RealEstate = () => {
  const benefits = [
    "Qualify leads 24/7 without agent intervention",
    "Automatically schedule and confirm property viewings",
    "Follow up with interested buyers without manual effort",
    "Collect detailed buyer requirements and preferences",
    "Free up agents' time for high-value activities",
    "Never miss an opportunity with round-the-clock availability"
  ];

  return (
    <NicheLayout 
      industry="real-estate"
      title="Real Estate AI Voice Solutions"
      subtitle="Convert more leads, schedule more viewings, and close more deals with AI voice agents built specifically for real estate professionals."
    >
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-brand-purple/5 to-brand-aqua/5">
        <div className="container-custom">
          <SectionTitle
            title="Elevate Your Real Estate Business"
            subtitle="Our AI voice agents qualify leads and schedule viewings while your agents focus on closing deals"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <StyleProvider key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-purple to-brand-aqua flex items-center justify-center shadow-md">
                      <Check className="text-white" size={16} />
                    </div>
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </StyleProvider>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Real Estate-Specific AI Features"
            subtitle="Purpose-built technology for property professionals"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Check}
              title="Lead Qualification"
              description="Automatically screen incoming inquiries, qualify leads, and route them to the appropriate agent based on buyer preferences."
              index={0}
            />
            <FeatureCard
              icon={Check}
              title="MLS Integration"
              description="Connect with your MLS listings to provide callers with accurate, up-to-date property information instantly."
              index={1}
            />
            <FeatureCard
              icon={Check}
              title="Viewing Scheduler"
              description="Allow potential buyers to schedule property viewings based on your agents' real-time availability."
              index={2}
            />
            <FeatureCard
              icon={Check}
              title="Property Matching"
              description="Collect buyer preferences and automatically match them with suitable properties in your inventory."
              index={3}
            />
            <FeatureCard
              icon={Check}
              title="Follow-up Sequences"
              description="Automated follow-ups with interested buyers at optimal times to maintain engagement without manual effort."
              index={4}
            />
            <FeatureCard
              icon={Check}
              title="CRM Integration"
              description="Seamlessly connect with your existing CRM to maintain a single source of truth for all client interactions."
              index={5}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-brand-purple/5 to-brand-aqua/5">
        <div className="container-custom">
          <SectionTitle
            title="Success Stories from Real Estate Professionals"
            subtitle="See how our AI voice agents are helping agencies like yours"
            centered={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-brand-purple to-brand-aqua flex items-center justify-center text-white text-2xl font-bold">
                JL
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 italic mb-4">
                  "Our agents save at least 15 hours per week now that the AI assistant handles initial inquiries and schedules viewings. The detailed lead qualification means our agents only speak with serious buyers who are ready to move forward. Our sales have increased by 28% this quarter!"
                </p>
                <div>
                  <h4 className="text-gray-800 font-medium">Jennifer Lopez</h4>
                  <p className="text-gray-500">Broker, Prime Properties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <NicheContactForm industry="real-estate" />
    </NicheLayout>
  );
};

export default RealEstate;
