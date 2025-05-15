
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Home, Calendar, User, Star } from 'lucide-react';
import NicheLayout from '@/components/niches/NicheLayout';
import NicheContactForm from '@/components/niches/NicheContactForm';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';
import FeatureCard from '@/components/design/FeatureCard';

const RealEstate = () => {
  const benefits = [
    "Schedule property viewings instantly online",
    "Get pre-qualified for mortgages faster",
    "Access exclusive property listings",
    "Communicate with agents on your schedule",
    "Receive updates on market changes",
    "Complete paperwork securely online"
  ];

  const workflows = [
    {
      title: "Lead Nurture Funnel",
      trigger: "Property inquiry form",
      actions: "Assign to agent, email/SMS series with listings, videos, and appointments",
      icon: Home
    },
    {
      title: "Open House Automation",
      trigger: "Open house sign-in",
      actions: "Thank you SMS, follow-up email, property links",
      icon: Calendar
    },
    {
      title: "Mortgage Pre-Qual Form + Funnel",
      trigger: "Pre-qual form filled",
      actions: "Send required docs list, schedule consult",
      icon: User
    },
    {
      title: "Referral + Review Request",
      trigger: "Deal closed",
      actions: "Review request + referral offer via SMS/email",
      icon: Star
    }
  ];

  return (
    <NicheLayout 
      industry="real-estate"
      title="Find Your Dream Home or Finance It — Fast"
      subtitle="Schedule a viewing, apply for a mortgage, or speak to an agent instantly."
    >
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-brand-purple/5 to-brand-aqua/5">
        <div className="container-custom">
          <SectionTitle
            title="Elevate Your Real Estate Experience"
            subtitle="Our AI voice agents handle inquiries and scheduling while your agents focus on closing deals"
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
      
      {/* Workflows Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Automated Real Estate Workflows"
            subtitle="From first contact to closing and beyond"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflows.map((workflow, index) => (
              <StyleProvider key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-purple to-brand-aqua flex items-center justify-center shadow-md mb-4">
                      {React.createElement(workflow.icon, { className: "text-white", size: 20 })}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{workflow.title}</h3>
                  </div>
                  <div className="space-y-3 flex-grow">
                    <div>
                      <p className="text-sm font-medium text-gray-500">TRIGGER</p>
                      <p className="text-gray-700">{workflow.trigger}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">ACTIONS</p>
                      <p className="text-gray-700">{workflow.actions}</p>
                    </div>
                  </div>
                </div>
              </StyleProvider>
            ))}
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
                  "Our agents save at least 15 hours per week now that the AI assistant handles initial inquiries and schedules viewings. The automated lead nurturing ensures potential buyers stay engaged, and our closing rate has increased by 28% this quarter!"
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
