
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import NicheLayout from '@/components/niches/NicheLayout';
import NicheContactForm from '@/components/niches/NicheContactForm';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';
import FeatureCard from '@/components/design/FeatureCard';

const Restaurants = () => {
  const benefits = [
    "Never miss a reservation or takeout order call again",
    "Handle peak-time call overflow automatically",
    "Take orders accurately with zero staff intervention",
    "Reduce staffing costs while maintaining excellent service",
    "Collect valuable customer feedback and preferences",
    "Provide 24/7 availability for information and bookings"
  ];

  return (
    <NicheLayout 
      industry="restaurants"
      title="Restaurant AI Voice Solutions"
      subtitle="Transform your restaurant operations with AI voice agents that handle reservations, takeout orders, and customer inquiries 24/7."
    >
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5">
        <div className="container-custom">
          <SectionTitle
            title="Level Up Your Restaurant Operations"
            subtitle="Our AI voice agents handle calls while your staff focuses on creating exceptional dining experiences"
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
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Restaurant-Specific AI Features"
            subtitle="Purpose-built technology for the hospitality industry"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Check}
              title="Reservation Management"
              description="Handle table bookings, modifications, and cancellations according to your restaurant's availability and seating configurations."
              index={0}
            />
            <FeatureCard
              icon={Check}
              title="Takeout Order Processing"
              description="Take accurate food orders, including modifiers and special requests, and confirm details before finalizing."
              index={1}
            />
            <FeatureCard
              icon={Check}
              title="Menu Information"
              description="Answer detailed questions about your menu items, including ingredients, allergens, and preparation methods."
              index={2}
            />
            <FeatureCard
              icon={Check}
              title="POS Integration"
              description="Connect with your point-of-sale system to maintain accurate menu information and streamline order processing."
              index={3}
            />
            <FeatureCard
              icon={Check}
              title="Customer Recognition"
              description="Identify returning customers and recall their preferences for a personalized dining experience."
              index={4}
            />
            <FeatureCard
              icon={Check}
              title="Multilingual Support"
              description="Communicate with customers in their preferred language to ensure clear understanding of orders and requests."
              index={5}
            />
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
                  "Our staff used to spend hours on the phone taking orders and reservations. Now our AI assistant handles it all, and our team can focus on creating amazing dining experiences. We've seen a 35% increase in takeout orders since implementing the AI voice agent. It never misses specials or upsell opportunities!"
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
