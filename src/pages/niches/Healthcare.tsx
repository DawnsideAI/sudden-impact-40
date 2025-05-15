
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar, Bell } from 'lucide-react';
import NicheLayout from '@/components/niches/NicheLayout';
import NicheContactForm from '@/components/niches/NicheContactForm';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';
import FeatureCard from '@/components/design/FeatureCard';

const Healthcare = () => {
  const benefits = [
    "Book your visit online in seconds",
    "Get SMS and email reminders",
    "Access secure patient forms",
    "Reschedule without phone calls",
    "Review your care plan anywhere",
    "Communicate securely with your provider"
  ];

  const workflows = [
    {
      title: "Appointment Booking + Reminder",
      trigger: "Form submission",
      actions: "SMS/email confirmation + 24hr/2hr reminders",
      icon: Calendar
    },
    {
      title: "Missed Call Text-Back",
      trigger: "Missed call",
      actions: "SMS with link to schedule online",
      icon: Bell
    },
    {
      title: "Reactivation Campaign",
      trigger: "6 months inactive",
      actions: "Email/SMS prompt to schedule next visit",
      icon: Calendar
    },
    {
      title: "New Patient Intake",
      trigger: "Booking confirmation",
      actions: "Send secure form for intake",
      icon: Check
    }
  ];

  return (
    <NicheLayout 
      industry="healthcare"
      title="Secure, Simple Healthcare Appointments"
      subtitle="Book your visit, get reminders, and stay in control of your care."
    >
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-brand-aqua/5 to-brand-pink/5">
        <div className="container-custom">
          <SectionTitle
            title="Transform Your Healthcare Experience"
            subtitle="Our AI voice agents handle appointment scheduling, reminders, and follow-ups while your staff focuses on patient care"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <StyleProvider key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-aqua to-brand-pink flex items-center justify-center shadow-md">
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
            title="Automated Healthcare Workflows"
            subtitle="Seamless experiences from booking to follow-up"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflows.map((workflow, index) => (
              <StyleProvider key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-aqua to-brand-pink flex items-center justify-center shadow-md mb-4">
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
      <section className="py-20 bg-gradient-to-br from-brand-aqua/5 to-brand-pink/5">
        <div className="container-custom">
          <SectionTitle
            title="Trusted by Healthcare Professionals"
            subtitle="See how our AI voice agents are helping practices like yours"
            centered={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-brand-aqua to-brand-pink flex items-center justify-center text-white text-2xl font-bold">
                DR
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 italic mb-4">
                  "Our front desk staff was overwhelmed with calls before implementing this AI solution. Now they can focus on patients in the office while the voice agent handles scheduling and routine inquiries. We've seen a 45% reduction in no-shows and our patient satisfaction has improved tremendously."
                </p>
                <div>
                  <h4 className="text-gray-800 font-medium">Dr. Rebecca Harris</h4>
                  <p className="text-gray-500">Director, Wellness Medical Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <NicheContactForm industry="healthcare" />
    </NicheLayout>
  );
};

export default Healthcare;
