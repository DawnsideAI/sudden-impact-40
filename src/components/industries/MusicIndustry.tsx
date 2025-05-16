
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar, Bell, Music } from 'lucide-react';
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
    "Book your studio time online in seconds",
    "Get SMS and email reminders",
    "Access secure booking forms",
    "Reschedule without phone calls",
    "Review your performances anywhere",
    "Communicate securely with your fans"
  ];

  const workflows = [
    {
      title: "Studio Booking + Reminder",
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
      title: "Fan Reactivation Campaign",
      trigger: "6 months inactive",
      actions: "Email/SMS prompt to schedule next session",
      icon: Calendar
    },
    {
      title: "New Artist Intake",
      trigger: "Booking confirmation",
      actions: "Send secure form for intake",
      icon: Check
    }
  ];

  // Add pricing data
  const pricing = [
    {
      title: "Studio",
      price: "$199",
      description: "Perfect for small studios and independent artists",
      features: [
        "1 AI voice agent",
        "100 minutes/month",
        "Studio booking integration",
        "Basic artist management",
        "Business hours configuration"
      ],
      highlighted: false
    },
    {
      title: "Professional",
      price: "$349",
      description: "Ideal for busy studios and small labels",
      features: [
        "2 AI voice agents",
        "300 minutes/month",
        "Advanced booking system integration",
        "Special requests handling",
        "Custom voice and personality",
        "Artist recognition system",
        "Weekly performance reports"
      ],
      highlighted: true
    },
    {
      title: "Enterprise",
      price: "$599",
      description: "For music groups and large establishments",
      features: [
        "5 AI voice agents",
        "600 minutes/month",
        "Multi-location support",
        "DAW & CRM integration",
        "VIP artist recognition",
        "Custom workflows and scripts",
        "Detailed analytics dashboard",
        "Priority support"
      ],
      highlighted: false
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
                Secure, Simple Music <span className="bg-gradient-to-r from-brand-pink to-brand-aqua bg-clip-text text-transparent">Studio Bookings</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Book your studio time, get reminders, and stay in control of your music career.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-gradient-to-r from-brand-pink to-brand-aqua hover:opacity-90 text-white px-6 py-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Get Started Now
                </Button>
                
                <Button
                  variant="outline"
                  className="border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/5 px-6 py-6 rounded-lg font-medium"
                  onClick={() => setShowDemoDialog(true)}
                >
                  Try Live Demo
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
                    <Music className="text-white" size={20} />
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
      
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5">
        <div className="container-custom">
          <SectionTitle
            title="Transform Your Music Experience"
            subtitle="Our AI voice agents handle studio bookings, reminders, and follow-ups while you focus on creating music"
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
            title="Automated Music Studio Workflows"
            subtitle="Seamless experiences from booking to follow-up"
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
      
      {/* Pricing Section - Added to match other industry pages */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Pricing for Music Industry"
            subtitle="Select the plan that's right for your music business"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <StyleProvider key={index} delay={index * 0.2}>
                <div 
                  className={`rounded-xl overflow-hidden bg-white border transition-all duration-300 hover:shadow-lg ${
                    plan.highlighted 
                      ? 'border-brand-pink shadow-md transform scale-105 md:scale-110' 
                      : 'border-gray-200 shadow-sm hover:-translate-y-1'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="bg-gradient-to-r from-brand-pink to-brand-aqua text-white text-center py-1 font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`p-8 ${plan.highlighted ? 'bg-gray-50' : ''}`}>
                    <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-500 ml-2">/month</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <div className={`mr-3 mt-1 text-${plan.highlighted ? 'brand-pink' : 'brand-aqua'}`}>
                            <Check size={16} className={plan.highlighted ? 'text-brand-pink' : 'text-brand-aqua'} />
                          </div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to="/demo"
                      className={`w-full block text-center py-3 px-4 rounded-lg transition-all duration-300 ${
                        plan.highlighted 
                          ? 'bg-gradient-to-r from-brand-pink to-brand-aqua text-white hover:shadow-lg' 
                          : 'border border-gray-200 hover:border-brand-pink/30 text-gray-700 hover:shadow'
                      }`}
                    >
                      {plan.highlighted ? 'Get Started' : 'Learn More'}
                    </Link>
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
            title="Trusted by Music Professionals"
            subtitle="See how our AI voice agents are helping studios like yours"
            centered={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center text-white text-2xl font-bold">
                JR
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 italic mb-4">
                  "Our front desk staff was overwhelmed with calls before implementing this AI solution. Now they can focus on artists in the studio while the voice agent handles scheduling and routine inquiries. We've seen a 45% reduction in no-shows and our client satisfaction has improved tremendously."
                </p>
                <div>
                  <h4 className="text-gray-800 font-medium">James Rodriguez</h4>
                  <p className="text-gray-500">Director, Harmony Studios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Ready to Transform Your Music Business?"
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
