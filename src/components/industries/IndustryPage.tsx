
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import IndustrySelector from './IndustrySelector';
import IndustryAnimation from './IndustryAnimation';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

// Define industry data
const industryData = {
  restaurants: {
    title: "Restaurants & Hospitality",
    intro: "Boost reservations, improve staff efficiency, and grow profits with AI voice agents designed for restaurants.",
    benefits: [
      "Never miss a reservation call, even during peak hours",
      "Streamline takeout and delivery ordering processes",
      "Answer common questions about hours, menu, and specials",
      "Handle multiple calls simultaneously during rush periods",
      "Reduce wait times and improve customer satisfaction"
    ],
    pricing: [
      {
        title: "Starter Impact",
        price: "$397",
        description: "Perfect for small restaurants just getting started with AI voice technology",
        features: [
          "500 AI Engagement Minutes/month",
          "1 AI Voice Agent (plug-and-play template)",
          "Contact & lead CRM (via GHL)",
          "1 Smart Booking Calendar (GHL native calendar)",
          "1 Lead Capture Form (branded)",
          "SMS & Email Follow-up Automation",
          "Unified Inbox Mobile App (iOS & Android)",
          "Real-Time Notifications",
          "Social Media Scheduler"
        ]
      },
      {
        title: "Impact Pro",
        price: "$597",
        description: "Ideal for established restaurants with steady call volume",
        features: [
          "1,500 AI Engagement Minutes/month",
          "Up to 3 AI Voice Agents",
          "Smart Round-Robin Calendar Routing",
          "Up to 5 Funnels or Landing Pages",
          "Advanced Pipeline & Deal Management",
          "Multi-Step Email/SMS Sequences",
          "Unified Inbox Mobile App (iOS & Android)",
          "Real-Time Notifications",
          "Social Media Scheduler",
          "Reputation Management",
          "Custom KPI Dashboard & Reports",
          "Zapier & API Integrations"
        ],
        highlighted: true
      },
      {
        title: "Enterprise",
        price: "$897",
        description: "For restaurant groups and high-volume establishments",
        features: [
          "5,000 AI Engagement Minutes/month",
          "Unlimited AI Voice Agents",
          "Unlimited Calendars, Forms, Funnels",
          "Multi-location CRM Dashboard",
          "Role-based Permissions + User Controls",
          "White-labeled SaaS Portal Branding",
          "Quarterly Automation Success Check-ins",
          "Priority Support Access",
          "All Pro features included"
        ]
      }
    ],
    image: "/lovable-uploads/a8ea11c6-eee2-4a72-9e98-851efb0bdc3d.png",
    testimonials: [
      {
        name: "John Martinez",
        position: "Owner, Seaside Bistro",
        quote: "Since implementing the AI voice agent, we've never missed another reservation call. Our staff can focus on in-person service while the AI handles phone inquiries perfectly."
      },
      {
        name: "Laura Chen",
        position: "Manager, Urban Spice",
        quote: "Our takeout orders have increased by 35% since we started using the AI voice agent. It handles multiple calls simultaneously during rush hours, which has been a game-changer."
      }
    ]
  },
  realestate: {
    title: "Real Estate",
    intro: "Capture more leads, schedule showings efficiently, and streamline property management with AI voice agents.",
    benefits: [
      "Answer property inquiries 24/7 without missing opportunities",
      "Schedule and manage property showings automatically",
      "Pre-qualify buyers and renters before agent involvement",
      "Provide consistent information about properties and neighborhoods",
      "Follow up with leads systematically to improve conversion"
    ],
    pricing: [
      {
        title: "Starter Impact",
        price: "$397",
        description: "For individual agents and small agencies",
        features: [
          "500 AI Engagement Minutes/month",
          "1 AI Voice Agent (plug-and-play template)",
          "Contact & lead CRM (via GHL)",
          "1 Smart Booking Calendar (GHL native calendar)",
          "1 Lead Capture Form (branded)",
          "SMS & Email Follow-up Automation",
          "Unified Inbox Mobile App (iOS & Android)",
          "Real-Time Notifications",
          "Social Media Scheduler"
        ]
      },
      {
        title: "Impact Pro",
        price: "$597",
        description: "For growing agencies with multiple agents",
        features: [
          "1,500 AI Engagement Minutes/month",
          "Up to 3 AI Voice Agents",
          "Smart Round-Robin Calendar Routing",
          "Up to 5 Funnels or Landing Pages",
          "Advanced Pipeline & Deal Management",
          "Multi-Step Email/SMS Sequences",
          "Unified Inbox Mobile App (iOS & Android)",
          "Real-Time Notifications",
          "Social Media Scheduler",
          "Reputation Management",
          "Custom KPI Dashboard & Reports",
          "Zapier & API Integrations"
        ],
        highlighted: true
      },
      {
        title: "Enterprise",
        price: "$897",
        description: "For large brokerages and property management firms",
        features: [
          "5,000 AI Engagement Minutes/month",
          "Unlimited AI Voice Agents",
          "Unlimited Calendars, Forms, Funnels",
          "Multi-location CRM Dashboard",
          "Role-based Permissions + User Controls",
          "White-labeled SaaS Portal Branding",
          "Quarterly Automation Success Check-ins",
          "Priority Support Access",
          "All Pro features included"
        ]
      }
    ],
    image: "/lovable-uploads/04e02938-36ca-4abc-adad-95afd668326b.png",
    testimonials: [
      {
        name: "Rebecca Wilson",
        position: "Broker, Elite Properties",
        quote: "Our agents are spending more time with clients and less time answering basic property questions. The AI voice agent has helped us convert 40% more leads into viewings."
      },
      {
        name: "Michael Chang",
        position: "Property Manager, Skyline Rentals",
        quote: "Managing inquiries for multiple properties was overwhelming until we implemented this AI solution. Now we never miss a potential renter and our response time has improved drastically."
      }
    ]
  },
  healthcare: {
    title: "Healthcare & Wellness",
    intro: "Enhance patient experience, reduce scheduling errors, and free up staff to focus on care with HIPAA-compliant AI voice agents.",
    benefits: [
      "Provide 24/7 patient appointment scheduling and management",
      "Answer common questions about services, hours, and policies",
      "Reduce no-shows with automated appointment reminders",
      "Handle insurance verification and basic intake",
      "Ensure HIPAA compliance with secure communication"
    ],
    pricing: [
      {
        title: "Starter Impact",
        price: "$397",
        description: "For small practices and wellness centers",
        features: [
          "500 AI Engagement Minutes/month",
          "1 AI Voice Agent (plug-and-play template)",
          "Contact & lead CRM (via GHL)",
          "1 Smart Booking Calendar (GHL native calendar)",
          "1 Lead Capture Form (branded)",
          "SMS & Email Follow-up Automation",
          "Unified Inbox Mobile App (iOS & Android)",
          "Real-Time Notifications",
          "HIPAA Compliance Features"
        ]
      },
      {
        title: "Impact Pro",
        price: "$597",
        description: "For mid-sized practices and clinics",
        features: [
          "1,500 AI Engagement Minutes/month",
          "Up to 3 AI Voice Agents",
          "Smart Round-Robin Calendar Routing",
          "Up to 5 Funnels or Landing Pages",
          "Advanced Pipeline & Patient Management",
          "Multi-Step Email/SMS Sequences",
          "Unified Inbox Mobile App (iOS & Android)",
          "Real-Time Notifications",
          "HIPAA Compliance Features",
          "Custom KPI Dashboard & Reports",
          "Zapier & API Integrations"
        ],
        highlighted: true
      },
      {
        title: "Enterprise",
        price: "$897",
        description: "For large clinics and healthcare networks",
        features: [
          "5,000 AI Engagement Minutes/month",
          "Unlimited AI Voice Agents",
          "Unlimited Calendars, Forms, Funnels",
          "Multi-location CRM Dashboard",
          "Role-based Permissions + User Controls",
          "White-labeled SaaS Portal Branding",
          "Quarterly Automation Success Check-ins",
          "Priority Support Access",
          "Enhanced HIPAA Compliance Features",
          "All Pro features included"
        ]
      }
    ],
    image: "/lovable-uploads/cf7822cb-c186-4075-9bc8-c04e61c0b9b0.png",
    testimonials: [
      {
        name: "Dr. Sarah Johnson",
        position: "Director, Wellness Medical Group",
        quote: "Our front desk staff used to spend hours on the phone scheduling appointments. Now with the AI voice agent, they can focus on patients who are physically present while maintaining perfect scheduling."
      },
      {
        name: "Thomas Reynolds",
        position: "Practice Manager, Family Care Associates",
        quote: "Patient satisfaction has increased by 45% since implementing the AI voice solution. Patients appreciate being able to schedule appointments or ask questions any time of day."
      }
    ]
  },
  contractors: {
    title: "Service Contractors",
    intro: "Never miss a job opportunity and streamline scheduling with AI voice agents tailored for HVAC, plumbing, electrical, and general contractors.",
    benefits: [
      "Answer service calls 24/7 without missing potential jobs",
      "Pre-qualify customers and collect essential job details",
      "Schedule appointments efficiently with real-time availability",
      "Provide instant estimates for standard service requests",
      "Follow up on quotes and generate reviews after service"
    ],
    pricing: [
      {
        title: "Starter Impact",
        price: "$397",
        description: "For independent contractors and small teams",
        features: [
          "500 AI Engagement Minutes/month",
          "1 AI Voice Agent (plug-and-play template)",
          "Contact & lead CRM (via GHL)",
          "1 Smart Booking Calendar (GHL native calendar)",
          "1 Lead Capture Form (branded)",
          "SMS & Email Follow-up Automation",
          "Unified Inbox Mobile App (iOS & Android)",
          "Real-Time Notifications",
          "Social Media Scheduler"
        ]
      },
      {
        title: "Impact Pro",
        price: "$597",
        description: "For growing service businesses",
        features: [
          "1,500 AI Engagement Minutes/month",
          "Up to 3 AI Voice Agents",
          "Smart Round-Robin Calendar Routing",
          "Up to 5 Funnels or Landing Pages",
          "Advanced Pipeline & Deal Management",
          "Multi-Step Email/SMS Sequences",
          "Unified Inbox Mobile App (iOS & Android)",
          "Real-Time Notifications",
          "Social Media Scheduler",
          "Reputation Management",
          "Custom KPI Dashboard & Reports",
          "Zapier & API Integrations"
        ],
        highlighted: true
      },
      {
        title: "Enterprise",
        price: "$897",
        description: "For large service companies and franchises",
        features: [
          "5,000 AI Engagement Minutes/month",
          "Unlimited AI Voice Agents",
          "Unlimited Calendars, Forms, Funnels",
          "Multi-location CRM Dashboard",
          "Role-based Permissions + User Controls",
          "White-labeled SaaS Portal Branding",
          "Quarterly Automation Success Check-ins",
          "Priority Support Access",
          "All Pro features included"
        ]
      }
    ],
    image: "/lovable-uploads/46b36e77-e44d-4dfd-8c35-6805698f485f.png",
    testimonials: [
      {
        name: "Robert Garcia",
        position: "Owner, All-Pro Plumbing",
        quote: "I used to miss calls when I was on jobs. Now with the AI voice agent, I never miss an opportunity and my schedule is always optimized for maximum efficiency."
      },
      {
        name: "Jennifer Adams",
        position: "Operations Manager, Elite Electric",
        quote: "The AI voice agent has reduced our administrative workload by 60% and improved our job booking rate. It's like having an extra office staff member who works 24/7."
      }
    ]
  }
};

const industries = [
  { id: "restaurants", title: "Restaurants & Hospitality" },
  { id: "realestate", title: "Real Estate" },
  { id: "healthcare", title: "Healthcare & Wellness" },
  { id: "contractors", title: "Service Contractors" }
];

const IndustryPage = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const navigate = useNavigate();
  const [industry, setIndustry] = useState<string>(industryId || 'restaurants');
  const [selectedBusinessType, setSelectedBusinessType] = useState<string | null>(null);
  
  useEffect(() => {
    // Get selected business type from session storage if available
    const storedBusinessType = sessionStorage.getItem('selectedBusinessType');
    if (storedBusinessType) {
      setSelectedBusinessType(storedBusinessType);
      sessionStorage.removeItem('selectedBusinessType'); // Clean up after using
    }
    
    if (industryId && industryData[industryId as keyof typeof industryData]) {
      setIndustry(industryId);
    } else if (!industryId) {
      navigate('/industries/restaurants', { replace: true });
    }
    
    window.scrollTo(0, 0);
  }, [industryId, navigate]);
  
  const handleIndustryChange = (id: string) => {
    navigate(`/industries/${id}`, { replace: true });
    toast({
      title: "Industry Changed",
      description: `Viewing ${industryData[id as keyof typeof industryData]?.title} solutions`
    });
  };
  
  const currentIndustry = industryData[industry as keyof typeof industryData];
  
  if (!currentIndustry) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Layout>
      <div className="pt-28 md:pt-36">
        <div className="container-custom">
          {/* Hero Section with Gradient */}
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              AI Voice Solutions for <span className="pink-aqua-text">{currentIndustry.title}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              {currentIndustry.intro}
            </motion.p>
          </div>
          
          {/* Industry Selector */}
          <IndustrySelector 
            industries={industries} 
            selectedId={industry} 
            onChange={handleIndustryChange} 
          />
          
          {/* Main Content Area with Animation and Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 items-center">
            <div className="bg-gradient-to-br from-brand-pink/20 to-brand-aqua/20 rounded-xl overflow-hidden shadow-xl border border-white/10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="glass-card"
                key={industry}
              >
                <IndustryAnimation industry={industry} />
              </motion.div>
            </div>
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-8 pink-aqua-text"
              >
                Key Benefits
              </motion.h2>
              <ul className="space-y-4">
                {currentIndustry.benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="mt-1 mr-3 flex-shrink-0">
                      <div className="w-6 h-6 rounded-full pink-aqua-bg flex items-center justify-center shadow-md">
                        <Check className="text-white" size={14} />
                      </div>
                    </div>
                    <p className="text-gray-100 text-lg">{benefit}</p>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8"
              >
                <Button 
                  className="pink-aqua-bg text-white hover:opacity-90 font-medium py-3 px-6 rounded-lg shadow-lg"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Pricing Options
                </Button>
              </motion.div>
            </div>
          </div>
          
          {/* Testimonials Section */}
          {currentIndustry.testimonials && (
            <div className="mb-20">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-10 text-center aqua-pink-text"
              >
                What {currentIndustry.title} Customers Say
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentIndustry.testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative p-8 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
                  >
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 pink-aqua-bg opacity-30 rounded-full blur-xl"></div>
                    <div className="relative z-10">
                      <svg className="h-10 w-10 text-brand-pink opacity-30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-lg text-gray-200 italic mb-6">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <h4 className="text-white font-medium">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          {/* Pricing Section */}
          <div id="pricing" className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-10 text-center pink-aqua-text"
            >
              Pricing Options for {currentIndustry.title}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentIndustry.pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`glass-card rounded-xl border overflow-hidden ${
                    plan.highlighted 
                      ? 'ring-2 ring-brand-pink/50 relative' 
                      : 'border-white/10'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-brand-pink to-brand-aqua text-white text-xs font-bold px-4 py-1 uppercase">
                      Most Popular
                    </div>
                  )}
                  
                  {/* Plan header */}
                  <div className={`p-6 ${plan.highlighted ? 'pink-aqua-bg' : 'bg-white/5'}`}>
                    <h3 className="text-xl font-bold text-white mb-1">{plan.title}</h3>
                    <div className="flex items-baseline mb-1">
                      <span className="text-3xl font-bold text-white">{plan.price}</span>
                      <span className="ml-2 text-white/70">/month</span>
                    </div>
                    <p className="text-white/80 text-sm">{plan.description}</p>
                  </div>
                  
                  {/* Features */}
                  <div className="p-6">
                    <h4 className="text-lg font-medium text-white mb-4 border-b border-white/10 pb-2">Features</h4>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <Check 
                            className={`mr-2 mt-1 ${plan.highlighted ? 'text-brand-pink' : 'text-brand-aqua'}`}
                            size={16} 
                          />
                          <span className="text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to="/demo"
                      className={`w-full block text-center py-2.5 px-4 rounded-lg transition-colors ${
                        plan.highlighted 
                          ? 'bg-white text-brand-pink hover:bg-white/90' 
                          : 'pink-aqua-bg text-white hover:opacity-90'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20 pink-aqua-bg rounded-xl p-10 text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to Transform Your {currentIndustry.title} Business?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Schedule a personalized demo to see how our AI voice agents can revolutionize your customer interactions and operational efficiency.
            </p>
            <Link 
              to="https://www.go.suddenimpact.agency/meetings/suddenimpact/30min" 
              className="btn-primary bg-white text-brand-pink hover:bg-white/90 inline-flex items-center px-6 py-3 rounded-lg font-medium shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Custom Demo
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default IndustryPage;
