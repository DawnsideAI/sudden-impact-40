
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Wrench, Clock, Star, Bell } from 'lucide-react';
import NicheLayout from '@/components/niches/NicheLayout';
import NicheContactForm from '@/components/niches/NicheContactForm';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';

const ServiceContractors = () => {
  const benefits = [
    "Book service appointments in minutes online",
    "Get instant confirmations and reminders",
    "Receive accurate arrival time windows",
    "Access service history and warranty info",
    "Schedule emergency and routine maintenance",
    "Set up recurring maintenance plans"
  ];

  const workflows = [
    {
      title: "Service Request Automation",
      trigger: "Website form submission",
      actions: "Assign to rep, send confirmation SMS/email, book on calendar",
      icon: Wrench
    },
    {
      title: "Estimate Follow-up Workflow",
      trigger: "Quote sent",
      actions: "SMS + email follow-up at 24hr, 3-day, 7-day intervals",
      icon: Clock
    },
    {
      title: "Review Request Post-Service",
      trigger: "Job marked complete",
      actions: "Review request with optional photo upload",
      icon: Star
    },
    {
      title: "Maintenance Reminder",
      trigger: "6 months after last service",
      actions: "Email/SMS with \"Time for your check-up?\" message",
      icon: Bell
    }
  ];

  return (
    <NicheLayout 
      industry="service-contractors"
      title="Fast, Reliable Repairs & Service Booked Online"
      subtitle="Book your HVAC, plumbing, or electrical service in minutes — no phone tag."
    >
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-brand-purple/5 to-brand-pink/5">
        <div className="container-custom">
          <SectionTitle
            title="Transform Your Service Business"
            subtitle="Our AI voice agents handle bookings and follow-ups while your technicians focus on delivering quality service"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <StyleProvider key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink flex items-center justify-center shadow-md">
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
            title="Service Contractor Automation Workflows"
            subtitle="From initial request to maintenance reminders"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflows.map((workflow, index) => (
              <StyleProvider key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink flex items-center justify-center shadow-md mb-4">
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
      <section className="py-20 bg-gradient-to-br from-brand-purple/5 to-brand-pink/5">
        <div className="container-custom">
          <SectionTitle
            title="Success Stories from Service Professionals"
            subtitle="See how our AI voice agents are helping service companies like yours"
            centered={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink flex items-center justify-center text-white text-2xl font-bold">
                RM
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 italic mb-4">
                  "Our call center was overwhelmed with service requests before implementing this AI solution. Now our dispatchers can focus on coordinating technicians while the voice agent handles bookings and follow-ups. We've seen a 35% increase in efficiency and our customers love how easy it is to schedule appointments."
                </p>
                <div>
                  <h4 className="text-gray-800 font-medium">Robert Martinez</h4>
                  <p className="text-gray-500">Owner, Premier Plumbing & HVAC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <NicheContactForm industry="service-contractors" />
    </NicheLayout>
  );
};

export default ServiceContractors;
