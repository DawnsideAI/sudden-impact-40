
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Music, Calendar, Star, User } from 'lucide-react';
import NicheLayout from '@/components/niches/NicheLayout';
import NicheContactForm from '@/components/niches/NicheContactForm';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';

const MusicProducers = () => {
  const benefits = [
    "Book studio sessions with real-time availability",
    "Manage artist bookings and venue arrangements",
    "Track equipment rentals and inventory",
    "Receive automatic follow-ups with clients",
    "Access professional contracts and agreements",
    "Engage with fans for events and releases"
  ];

  const workflows = [
    {
      title: "Recording Session Booking",
      trigger: "Online booking form submission",
      actions: "Confirmation email/SMS, calendar add, 24hr reminder",
      icon: Music
    },
    {
      title: "Artist Management Workflow",
      trigger: "New artist agreement",
      actions: "Welcome series, auto-scheduling, document collection",
      icon: User
    },
    {
      title: "Release Promotion Sequence",
      trigger: "Release date set",
      actions: "Fan notification series, press outreach, streaming platform updates",
      icon: Star
    },
    {
      title: "Event Booking System",
      trigger: "Venue booking request",
      actions: "Availability check, contract generation, payment processing",
      icon: Calendar
    }
  ];

  return (
    <NicheLayout 
      industry="music-producers"
      title="Streamline Your Music Business Operations"
      subtitle="Book studio time, manage artists, and promote releases with automated workflows."
    >
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-brand-purple/5 to-brand-pink/5">
        <div className="container-custom">
          <SectionTitle
            title="Elevate Your Music Production Business"
            subtitle="Our AI voice agents handle bookings and client management while you focus on creating amazing music"
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
            title="Music Industry Automation Workflows"
            subtitle="From session booking to release promotion"
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
            title="Success Stories from Music Professionals"
            subtitle="See how our AI voice agents are helping studios and artists like you"
            centered={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink flex items-center justify-center text-white text-2xl font-bold">
                AJ
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 italic mb-4">
                  "Since implementing the AI booking system, we've doubled our studio sessions without adding staff. The automated follow-ups have increased our repeat bookings by 35%, and artists love how easy it is to schedule time. It's completely transformed how we run our business."
                </p>
                <div>
                  <h4 className="text-gray-800 font-medium">Alex Johnson</h4>
                  <p className="text-gray-500">Owner, Resonance Recording Studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <NicheContactForm industry="music-producers" />
    </NicheLayout>
  );
};

export default MusicProducers;
