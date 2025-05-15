
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar, Bell, Star, User } from 'lucide-react';
import NicheLayout from '@/components/niches/NicheLayout';
import NicheContactForm from '@/components/niches/NicheContactForm';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';
import FeatureCard from '@/components/design/FeatureCard';

const Restaurants = () => {
  const benefits = [
    "Book tables in seconds with online reservations",
    "Receive instant booking confirmations",
    "Access exclusive offers and promotions",
    "Track and redeem loyalty rewards",
    "Get reminders for upcoming reservations",
    "Book special events and private dining"
  ];

  const workflows = [
    {
      title: "Reservation Booking Workflow",
      trigger: "Form submission or chat widget inquiry",
      actions: "Confirmation email/SMS, add to calendar, 24hr reminder",
      icon: Calendar
    },
    {
      title: "Missed Call Text-Back",
      trigger: "Missed call",
      actions: "SMS with link to reserve or ask a question",
      icon: Bell
    },
    {
      title: "Review Request Automation",
      trigger: "2 hours after reservation time",
      actions: "SMS and email with Google/Yelp review link",
      icon: Star
    },
    {
      title: "Loyalty Campaign",
      trigger: "Birthday or visit milestone",
      actions: "Personalized offer via SMS/email",
      icon: User
    }
  ];

  return (
    <NicheLayout 
      industry="restaurants"
      title="Book Your Table or Event in Seconds"
      subtitle="Instant reservations, exclusive offers, and loyalty rewards — all in one seamless experience."
    >
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5">
        <div className="container-custom">
          <SectionTitle
            title="Enhance Your Dining Experience"
            subtitle="Our AI voice agents handle reservations and inquiries while your staff focuses on creating exceptional dining experiences"
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
            title="Restaurant Automation Workflows"
            subtitle="Seamless experiences from reservation to loyalty rewards"
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
            title="Success Stories from Restaurant Owners"
            subtitle="See how our AI voice agents are helping restaurants like yours"
            centered={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center text-white text-2xl font-bold">
                MC
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 italic mb-4">
                  "Our staff used to spend hours on the phone taking reservations. Now our AI assistant handles it all, and our team can focus on creating amazing dining experiences. The automated review requests have boosted our online ratings, and our loyalty program runs itself!"
                </p>
                <div>
                  <h4 className="text-gray-800 font-medium">Michael Chen</h4>
                  <p className="text-gray-500">Owner, Fusion Bistro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <NicheContactForm industry="restaurants" />
    </NicheLayout>
  );
};

export default Restaurants;
