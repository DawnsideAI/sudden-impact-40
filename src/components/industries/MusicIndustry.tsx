
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Music3, Music, Calendar, PhoneCall, DollarSign, Quote, Heart, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';
import FeatureCard from '@/components/design/FeatureCard';
import Layout from '@/components/layout/Layout';
import LiveDemoDialog from '@/components/pricing/LiveDemoDialog';

const MusicIndustry = () => {
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  
  const benefits = [
    "24/7 availability for your clients and fans",
    "Automated booking and scheduling",
    "Instant responses to common inquiries",
    "Seamless integration with your existing calendar",
    "Personalized communication with fans and clients",
    "Reduced overhead costs and increased efficiency"
  ];

  // Pricing plans to match healthcare page exactly
  const pricingPlans = [
    {
      name: "Starter",
      price: 197,
      monthlyFee: 97,
      features: ["300 AI Minutes", "Calendar Integration", "Booking Management", "24/7 Availability"]
    },
    {
      name: "Professional",
      price: 197,
      monthlyFee: 297,
      popular: true,
      features: ["1000 AI Minutes", "CRM Integration", "Custom Workflows", "Fan Engagement System"]
    },
    {
      name: "Enterprise",
      price: 497,
      monthlyFee: 597,
      features: ["3000 AI Minutes", "White-labeled Solution", "Dedicated Manager", "Multi-location Support"]
    }
  ];

  // Testimonials to match healthcare page
  const testimonials = [
    {
      quote: "The AI voice agent has transformed how we manage our recording studio. Our booking rate has increased by 35%, and we're spending far less time on the phone handling routine inquiries. This technology has been a game-changer for our business.",
      name: "James Rodriguez",
      position: "Owner, Harmony Recording Studios",
      initials: "JR"
    },
    {
      quote: "As a touring musician, managing fan interactions and merchandise orders was overwhelming. The AI system now handles all routine inquiries, allowing me to focus on creating music. My fans love the instant responses too!",
      name: "Lisa Chen",
      position: "Independent Artist",
      initials: "LC"
    }
  ];

  return (
    <Layout lightMode={true}>
      {/* Hero Section - Exactly matching healthcare layout */}
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
      
      {/* Demo Banner - Exactly matching healthcare layout */}
      <section className="py-12 bg-gradient-to-r from-brand-pink to-brand-aqua">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold">Experience Our AI Voice Assistant</h3>
              <p className="mt-2 text-white/90">Call our AI demo or schedule a personalized consultation</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-white text-brand-pink hover:bg-gray-100 px-8 py-3 rounded-lg font-medium shadow-lg"
                onClick={() => setShowDemoDialog(true)}
              >
                <PhoneCall className="mr-2" size={18} /> Try AI Demo
              </Button>
              <Button
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium"
                onClick={() => window.open('https://link.suddenimpactagency.io/widget/booking/MYRdt5Un7mP29erZS5rx', '_blank')}
              >
                <Calendar className="mr-2" size={18} /> Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section - Exactly matching healthcare layout */}
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
              icon={Music}
              title="Business Management"
              description="Track inventory, manage schedules, and handle routine inquiries about your services and availability."
              index={2}
            />
          </div>
        </div>
      </section>
      
      {/* Benefits Section - Exactly matching healthcare layout */}
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
      
      {/* Pricing Section - Exactly matching healthcare layout */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Simple, Transparent Pricing"
            subtitle="Choose the plan that's right for your music business"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <StyleProvider key={index} delay={index * 0.1}>
                <div className={`bg-white rounded-xl overflow-hidden border ${plan.popular ? 'border-brand-pink shadow-xl' : 'border-gray-200 shadow-lg'} h-full flex flex-col`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-brand-pink to-brand-aqua text-white py-2 px-4 text-center font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                    <div className="mt-4 mb-6">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold">${plan.monthlyFee}</span>
                        <span className="text-gray-500 ml-1">/month</span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">
                        ${plan.price} one-time setup
                      </p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mr-2 mt-1">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center">
                              <Check className="text-white" size={12} />
                            </div>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 border-t border-gray-100">
                    <Button
                      className={`w-full ${plan.popular ? 'bg-gradient-to-r from-brand-pink to-brand-aqua text-white' : 'border-2 border-brand-aqua text-brand-aqua hover:bg-brand-aqua/5'}`}
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </StyleProvider>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-500">Need a custom plan? <Link to="#contact" className="text-brand-pink font-medium hover:underline">Contact us</Link> for enterprise solutions.</p>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section - Exactly matching healthcare layout */}
      <section className="py-20 bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5">
        <div className="container-custom">
          <SectionTitle
            title="Success Stories from Music Professionals"
            subtitle="See how our AI voice agents are helping music businesses"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <StyleProvider key={index} delay={index * 0.1} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex flex-col h-full">
                  <div className="mb-6 relative">
                    <div className="absolute -top-4 -left-2 text-brand-pink/10">
                      <Quote size={50} />
                    </div>
                    <p className="text-gray-700 italic relative z-10">"{testimonial.quote}"</p>
                  </div>
                  <div className="mt-auto flex items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center text-white text-xl font-bold mr-4">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-medium">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </StyleProvider>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form - Exactly matching healthcare layout */}
      <section id="contact" className="py-20 bg-white">
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

      {/* Live Demo Dialog */}
      <LiveDemoDialog open={showDemoDialog} onOpenChange={setShowDemoDialog} />
    </Layout>
  );
};

export default MusicIndustry;
