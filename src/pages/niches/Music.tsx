
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Music, Calendar, Star, User } from 'lucide-react';
import NicheLayout from '@/components/niches/NicheLayout';
import NicheContactForm from '@/components/niches/NicheContactForm';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';

const MusicNiche = () => {
  const benefits = [
    "Book studio time and performances in seconds",
    "Receive instant booking confirmations",
    "Connect with fans through automated systems",
    "Track merchandise sales and inventory",
    "Get reminders for upcoming sessions",
    "Manage fan club memberships and special requests"
  ];

  const workflows = [
    {
      title: "Booking Management Workflow",
      trigger: "Form submission or call inquiry",
      actions: "Confirmation email/SMS, add to calendar, 24hr reminder",
      icon: Calendar
    },
    {
      title: "Fan Engagement System",
      trigger: "Fan contact or merchandise request",
      actions: "Automated response with personalized information",
      icon: Star
    },
    {
      title: "Review & Promotion Request",
      trigger: "After performance or release",
      actions: "SMS and email with social sharing links",
      icon: Music
    },
    {
      title: "Loyalty Campaign",
      trigger: "Fan milestone or special event",
      actions: "Personalized exclusive offer via SMS/email",
      icon: User
    }
  ];

  return (
    <NicheLayout 
      industry="music"
      title="Book Studio Time or Manage Fan Engagement"
      subtitle="Instant booking, fan communication, and merchandise management — all in one seamless experience."
    >
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5">
        <div className="container-custom">
          <SectionTitle
            title="Enhance Your Music Business"
            subtitle="Our AI voice agents handle bookings and inquiries while you focus on creating exceptional music"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <StyleProvider key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center shadow-md">
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
            title="Music Business Automation Workflows"
            subtitle="Seamless experiences from booking to fan engagement"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflows.map((workflow, index) => (
              <StyleProvider key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center shadow-md mb-4">
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
      <section className="py-20 bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5">
        <div className="container-custom">
          <SectionTitle
            title="Success Stories from Music Professionals"
            subtitle="See how our AI voice agents are helping music businesses like yours"
            centered={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center text-white text-2xl font-bold">
                AM
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 italic mb-4">
                  "Since implementing the AI voice agent, I've been able to focus more on music production and less on answering routine calls. Our booking inquiries are handled efficiently 24/7, and our merchandise sales have increased by 45%. It's been a game-changer for our studio."
                </p>
                <div>
                  <h4 className="text-gray-800 font-medium">Alex Morgan</h4>
                  <p className="text-gray-500">Independent Music Producer, Rhythm Studios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <NicheContactForm industry="music" />
    </NicheLayout>
  );
};

export default MusicNiche;
