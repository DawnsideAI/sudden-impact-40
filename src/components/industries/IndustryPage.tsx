
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/design/SectionTitle';
import IndustrySelector from '@/components/industries/IndustrySelector';
import { Check, ArrowRight, ChevronRight, Music, Calendar, Star, User } from 'lucide-react';

// Type for industry data
interface IndustryData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    initial: string;
  };
  workflows?: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
}

// Data for each industry
const industryData: Record<string, IndustryData> = {
  restaurants: {
    id: "restaurants",
    title: "Restaurant & Hospitality AI",
    subtitle: "Enhance guest experiences and streamline operations",
    description: "Our AI voice assistant handles reservations, answers common questions, and manages waitlists automatically. Free up your staff to focus on creating exceptional dining experiences.",
    benefits: [
      "24/7 reservation handling without adding staff",
      "Automatic waitlist management during peak hours",
      "Answer FAQs like hours and directions instantly",
      "Seamless integration with your existing systems",
      "Personalized guest experiences and preferences tracking",
      "Reduce no-shows with automated confirmations"
    ],
    testimonial: {
      quote: "Since implementing the AI assistant, we've increased our bookings by 22% and our staff can focus completely on our guests instead of answering phones.",
      author: "Michael Rodriguez",
      position: "Owner, Bistro Nouveau",
      initial: "MR"
    }
  },
  realestate: {
    id: "realestate",
    title: "Real Estate AI Solutions",
    subtitle: "Convert more leads and schedule more showings 24/7",
    description: "Our AI voice assistant qualifies leads, schedules property showings, and follows up with potential buyers automatically. Never miss an opportunity again.",
    benefits: [
      "24/7 lead qualification and appointment scheduling",
      "Instant property information for callers",
      "Automatic follow-up sequences with prospects",
      "Seamless integration with your CRM",
      "Track every client interaction and preference",
      "Increase showing attendance with confirmations"
    ],
    testimonial: {
      quote: "In just one month, our AI assistant scheduled 57 property showings that would have been missed calls after hours. It's like adding a full-time agent without the cost.",
      author: "Jennifer Wilson",
      position: "Broker, Premier Properties",
      initial: "JW"
    }
  },
  healthcare: {
    id: "healthcare",
    title: "Healthcare & Medical AI",
    subtitle: "Streamline patient scheduling and communications",
    description: "Our HIPAA-compliant AI voice assistant handles appointment scheduling, reminders, and routine patient inquiries, allowing your staff to focus on providing exceptional care.",
    benefits: [
      "HIPAA-compliant communications",
      "24/7 appointment scheduling and management",
      "Automatic patient reminders to reduce no-shows",
      "Insurance verification workflows",
      "After-hours emergency routing protocols",
      "Seamless EMR/EHR integration"
    ],
    testimonial: {
      quote: "Our no-show rate has dropped by 35% since implementing the AI assistant. Plus, our front office staff can now focus on patients in the office rather than constantly answering phones.",
      author: "Dr. Sarah Chen",
      position: "Medical Director, Wellness Medical Group",
      initial: "SC"
    }
  },
  contractors: {
    id: "contractors",
    title: "Service Contractor AI",
    subtitle: "Book more jobs and provide better customer service",
    description: "Our AI voice assistant books appointments, handles emergency calls, and follows up with customers automatically. Never miss a service opportunity again.",
    benefits: [
      "24/7 emergency and standard service booking",
      "Automatic technician scheduling and routing",
      "Job confirmation and reminder sequences",
      "Seamless integration with field service software",
      "Customer follow-ups for reviews and future services",
      "Detailed analytics on call volumes and types"
    ],
    testimonial: {
      quote: "We've been able to respond to emergency calls 100% of the time, even during peak seasons. The AI has paid for itself just in the after-hours calls it handles.",
      author: "Robert Martinez",
      position: "Owner, Elite Plumbing & HVAC",
      initial: "RM"
    }
  },
  music: {
    id: "music",
    title: "Music Industry AI",
    subtitle: "Streamline studio operations and artist management",
    description: "Our AI voice assistant handles studio bookings, manages artist schedules, and automates fan engagement. Focus on creating amazing music while we handle the business side.",
    benefits: [
      "24/7 studio scheduling and equipment management",
      "Automated artist booking and contract workflows",
      "Fan engagement and release promotion sequences",
      "Venue booking and tour management assistance",
      "Royalty collection and distribution tracking",
      "Seamless integration with music production software"
    ],
    testimonial: {
      quote: "The AI assistant has transformed our studio operations. We've increased bookings by 40% while spending less time on administrative tasks and more time on creative production.",
      author: "Alex Johnson",
      position: "Owner, Resonance Studios",
      initial: "AJ"
    },
    workflows: [
      {
        title: "Studio Booking Automation",
        description: "Automatically manage studio bookings, equipment requests, and engineer scheduling",
        icon: Music
      },
      {
        title: "Artist Management",
        description: "Track artist schedules, contracts, and performance obligations",
        icon: User
      },
      {
        title: "Release Promotion",
        description: "Coordinate release dates, fan engagement, and streaming platform updates",
        icon: Star
      },
      {
        title: "Event Scheduling",
        description: "Manage venue bookings, tour dates, and promotional appearances",
        icon: Calendar
      }
    ]
  }
};

const IndustryPage = () => {
  const { industryId } = useParams();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  
  // Get industry data or use restaurants as fallback
  const industry = industryData[industryId as string] || industryData.restaurants;
  
  // List of industries for the selector
  const industries = Object.values(industryData).map(ind => ({ id: ind.id, title: ind.title }));
  
  // Get business type from session storage
  useEffect(() => {
    const storedType = sessionStorage.getItem('selectedBusinessType');
    if (storedType) {
      setSelectedType(storedType);
    }
  }, []);
  
  return (
    <Layout lightMode={false}>
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-darkPurple to-black z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-brand-pink/20 to-transparent z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent z-0"></div>
        
        {/* Content */}
        <div className="container-custom relative z-10">
          {/* Industry Selector */}
          <IndustrySelector 
            industries={industries} 
            selectedId={industry.id} 
            onChange={(id) => {
              window.location.href = `/industries/${id}`;
            }} 
          />
          
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              {industry.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              {industry.subtitle}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12"
            >
              <Button 
                size="lg"
                className="pink-aqua-bg hover:opacity-95 text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started Today <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-transparent z-0"></div>
        
        <div className="container-custom relative z-10">
          <SectionTitle 
            title={`AI Voice Agents for ${industry.title}`}
            subtitle={industry.description}
            centered={true}
            className="text-white"
            subtitleClassName="text-gray-300"
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center">
                      <Check className="text-white" size={16} />
                    </div>
                  </div>
                  <p className="text-gray-200">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Workflows Section - Only for Music Industry */}
      {industry.id === 'music' && industry.workflows && (
        <section className="py-20 bg-gradient-to-br from-brand-darkPurple to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(156,39,176,0.1),_transparent_70%)] z-0"></div>
          
          <div className="container-custom relative z-10">
            <SectionTitle 
              title="Music Industry Workflows"
              subtitle="Our AI voice agents can automate these critical processes for your music business"
              centered={true}
              className="text-white"
              subtitleClassName="text-gray-300"
            />
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {industry.workflows.map((workflow, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-pink rounded-lg flex items-center justify-center mb-5">
                    <workflow.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{workflow.title}</h3>
                  <p className="text-gray-300">{workflow.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Testimonial Section */}
      {industry.testimonial && (
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(33,150,243,0.1),_transparent_70%)] z-0"></div>
          
          <div className="container-custom relative z-10">
            <SectionTitle 
              title="Success Story"
              subtitle="See how AI voice agents are transforming businesses like yours"
              centered={true}
              className="text-white"
              subtitleClassName="text-gray-300"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-pink to-brand-aqua flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {industry.testimonial.initial}
                </div>
                <div>
                  <svg className="w-10 h-10 text-brand-pink/40 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8v12H6v-8c0-2.21 1.79-4 4-4zm12 0v12h-4v-8c0-2.21 1.79-4 4-4z"/>
                  </svg>
                  <p className="text-xl text-gray-200 italic mb-6">
                    {industry.testimonial.quote}
                  </p>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{industry.testimonial.author}</h4>
                    <p className="text-brand-aqua">{industry.testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-brand-darkPurple to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(156,39,176,0.15),_transparent_70%)] z-0"></div>
        
        <div className="container-custom relative z-10">
          <SectionTitle 
            title="Ready to Transform Your Business?"
            subtitle="Get started with your AI voice assistant today"
            centered={true}
            className="text-white"
            subtitleClassName="text-gray-300"
          />
          
          <div className="mt-12 max-w-xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Contact our team</h3>
              
              <form 
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Form handling code
                  alert("Thanks for your interest! Our team will contact you soon.");
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
                    placeholder="Your phone number"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-gray-300 mb-2">Business Type</label>
                  <input 
                    type="text" 
                    id="businessType" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
                    placeholder="Type of business"
                    defaultValue={selectedType || ''}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message (Optional)</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
                    placeholder="Tell us about your needs"
                  />
                </div>
                
                <div>
                  <Button
                    type="submit" 
                    className="w-full pink-aqua-bg hover:opacity-95 text-white py-4 rounded-lg font-medium text-lg shadow-lg"
                  >
                    Get Started
                  </Button>
                  
                  <p className="text-sm text-gray-400 mt-4 text-center">
                    You'll hear back from our team within 24 hours
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndustryPage;
