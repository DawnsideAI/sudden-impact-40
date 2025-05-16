
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Music3, Music4, Calendar, PhoneCall } from 'lucide-react';
import { Button } from "@/components/ui/button";
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';
import FeatureCard from '@/components/design/FeatureCard';
import Layout from '@/components/layout/Layout';

const MusicIndustry = () => {
  const benefits = [
    "24/7 availability for your clients and fans",
    "Automated booking and scheduling",
    "Instant responses to common inquiries",
    "Seamless integration with your existing calendar",
    "Personalized communication with fans and clients",
    "Reduced overhead costs and increased efficiency"
  ];

  return (
    <Layout lightMode={true}>
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-pink/5 via-white to-brand-aqua/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-aqua/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-brand-pink font-medium">Industry Solution</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6 leading-tight">
                AI Voice Solutions for <span className="bg-gradient-to-r from-brand-pink to-brand-aqua bg-clip-text text-transparent">Music Professionals</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Streamline studio bookings, engage with fans, and manage your music business with our AI voice agents. Available 24/7, they handle routine tasks so you can focus on creating exceptional music.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-gradient-to-r from-brand-pink to-brand-aqua hover:opacity-90 text-white px-6 py-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => document.getElementById('learn-more')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
                
                <Button
                  variant="outline"
                  className="border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/5 px-6 py-6 rounded-lg font-medium"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl border-2 border-white">
                <img 
                  src="/lovable-uploads/46b36e77-e44d-4dfd-8c35-6805698f485f.png" 
                  alt="AI Voice Agent for Music Industry" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center">
                    <PhoneCall className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Available 24/7</p>
                    <p className="font-semibold">Never Miss a Booking</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section id="learn-more" className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="How It Works for Music Professionals"
            subtitle="Streamline your operations with AI voice technology"
            centered={true}
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Music3}
              title="Studio Bookings"
              description="Our AI voice agents handle studio booking inquiries, confirm appointments, and send reminders to reduce no-shows."
              index={0}
            />
            <FeatureCard
              icon={Calendar}
              title="Fan Engagement"
              description="Engage with fans through personalized interactions, handle merchandise requests, and provide information about upcoming events."
              index={1}
            />
            <FeatureCard
              icon={Music4}
              title="Business Management"
              description="Track inventory, manage schedules, and handle routine inquiries about your services and availability."
              index={2}
            />
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5">
        <div className="container-custom">
          <SectionTitle
            title="Benefits for Music Professionals"
            subtitle="Our AI voice agents help you grow your music business"
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
      
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Success Stories from Music Professionals"
            subtitle="See how our AI voice agents are helping music businesses"
            centered={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center text-white text-2xl font-bold">
                JR
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 italic mb-4">
                  "The AI voice agent has transformed how we manage our recording studio. Our booking rate has increased by 35%, and we're spending far less time on the phone handling routine inquiries. This technology has been a game-changer for our business."
                </p>
                <div>
                  <h4 className="text-gray-800 font-medium">James Rodriguez</h4>
                  <p className="text-gray-500">Owner, Harmony Recording Studios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-20 bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5">
        <div className="container-custom">
          <SectionTitle
            title="Ready to Elevate Your Music Business?"
            subtitle="Get in touch with our team to learn more about our AI voice solutions"
            centered={true}
          />
          
          <div className="mt-12 max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-aqua focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-aqua focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                <select 
                  id="business" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-aqua focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select your business type</option>
                  <option value="studio">Recording Studio</option>
                  <option value="producer">Music Producer</option>
                  <option value="artist">Independent Artist</option>
                  <option value="band">Band/Group</option>
                  <option value="label">Independent Label</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-aqua focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your business needs..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <Button
                  className="bg-gradient-to-r from-brand-pink to-brand-aqua hover:opacity-90 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Submit Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MusicIndustry;
