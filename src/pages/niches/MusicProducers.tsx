
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Music, Calendar, Star, User, ArrowRight, HelpCircle, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/design/FeatureCard';
import IndustrySelector from '@/components/industries/IndustrySelector';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const MusicProducers = () => {
  const [monthlyCalls, setMonthlyCalls] = React.useState<number>(500);
  const [avgTransactionValue, setAvgTransactionValue] = React.useState<number>(150);
  const [conversionRate, setConversionRate] = React.useState<number>(0.2); // 20% conversion rate
  
  // Industry data
  const industryId = "music";
  const industries = [
    { id: "restaurants", title: "Restaurant & Hospitality AI" },
    { id: "realestate", title: "Real Estate AI Solutions" },
    { id: "healthcare", title: "Healthcare & Medical AI" },
    { id: "contractors", title: "Service Contractor AI" },
    { id: "music", title: "Music Industry AI" }
  ];
  
  const benefits = [
    "24/7 studio scheduling and equipment management",
    "Automated artist booking and contract workflows",
    "Fan engagement and release promotion sequences",
    "Venue booking and tour management assistance",
    "Royalty collection and distribution tracking",
    "Seamless integration with music production software"
  ];
  
  const workflows = [
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
  ];
  
  const testimonial = {
    quote: "The AI assistant has transformed our studio operations. We've increased bookings by 40% while spending less time on administrative tasks and more time on creative production.",
    author: "Alex Johnson",
    position: "Owner, Resonance Studios",
    initial: "AJ"
  };
  
  // Calculate ROI based on current state
  const calculateMonthlySavings = () => {
    // Base monthly savings from call handling
    const callHandlingSavings = monthlyCalls * 3; // $3 saved per call handled by AI
    
    // Additional revenue from improved conversion rate (assuming 5% improvement)
    const improvedConversionRate = conversionRate * 1.05;
    const additionalConversions = monthlyCalls * (improvedConversionRate - conversionRate);
    const additionalRevenue = additionalConversions * avgTransactionValue;
    
    // Estimate staff time savings (assuming $25/hour labor cost)
    const hoursSaved = monthlyCalls * 0.08; // 5 minutes (0.08 hours) saved per call
    const laborSavings = hoursSaved * 25;
    
    // Total monthly savings
    return Math.round(callHandlingSavings + additionalRevenue * 0.3 + laborSavings); // 30% profit margin on additional revenue
  };

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
            selectedId={industryId} 
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
              Music Industry AI
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Streamline studio operations and artist management
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
            title="AI Voice Agents for Music Industry AI"
            subtitle="Our AI voice assistant handles studio bookings, manages artist schedules, and automates fan engagement. Focus on creating amazing music while we handle the business side."
            centered={true}
            className="text-white"
            subtitleClassName="text-gray-300"
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
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
      
      {/* Workflows Section */}
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
            {workflows.map((workflow, index) => (
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
      
      {/* Testimonial Section */}
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
                {testimonial.initial}
              </div>
              <div>
                <svg className="w-10 h-10 text-brand-pink/40 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8v12H6v-8c0-2.21 1.79-4 4-4zm12 0v12h-4v-8c0-2.21 1.79-4 4-4z"/>
                </svg>
                <p className="text-xl text-gray-200 italic mb-6">
                  {testimonial.quote}
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-white">{testimonial.author}</h4>
                  <p className="text-brand-aqua">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* ROI Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-brand-darkPurple to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(156,39,176,0.15),_transparent_70%)] z-0"></div>
        
        <div className="container-custom relative z-10">
          <SectionTitle 
            title="Calculate Your ROI"
            subtitle="See how much you can save with our AI voice agents"
            centered={true}
            className="text-white"
            subtitleClassName="text-gray-300"
          />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="backdrop-blur-sm bg-white/5 border border-white/10 shadow-lg text-white">
              <CardHeader>
                <CardTitle className="text-white">ROI Calculator</CardTitle>
                <CardDescription className="text-gray-300">Adjust the sliders to see your potential savings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Monthly Calls: {monthlyCalls}</label>
                  <Slider 
                    value={[monthlyCalls]} 
                    min={100} 
                    max={1000} 
                    step={50} 
                    onValueChange={(value) => setMonthlyCalls(value[0])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>100</span>
                    <span>1000</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Average Transaction Value: ${avgTransactionValue}</label>
                  <Slider 
                    value={[avgTransactionValue]} 
                    min={50} 
                    max={500} 
                    step={10} 
                    onValueChange={(value) => setAvgTransactionValue(value[0])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>$50</span>
                    <span>$500</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Conversion Rate: {(conversionRate * 100).toFixed(0)}%</label>
                  <Slider 
                    value={[conversionRate * 100]} 
                    min={5} 
                    max={40} 
                    step={1} 
                    onValueChange={(value) => setConversionRate(value[0] / 100)}
                    className="w-full" 
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>5%</span>
                    <span>40%</span>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6 mt-6">
                  <h4 className="font-medium text-white mb-2">Your Potential Monthly Savings</h4>
                  <p className="text-3xl font-bold bg-gradient-to-r from-brand-pink to-brand-aqua bg-clip-text text-transparent">${calculateMonthlySavings()}</p>
                  <p className="text-sm text-gray-400 mt-1">Based on industry averages</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-gradient-to-r from-brand-pink to-brand-aqua hover:opacity-90 text-white"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Your Custom ROI Analysis
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
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
                    className="w-full bg-gradient-to-r from-brand-pink to-brand-aqua hover:opacity-95 text-white py-4 rounded-lg font-medium text-lg shadow-lg"
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

export default MusicProducers;
