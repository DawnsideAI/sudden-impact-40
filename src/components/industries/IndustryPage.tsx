
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import IndustrySelector from './IndustrySelector';
import IndustryAnimation from './IndustryAnimation';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
    image: "/lovable-uploads/a8ea11c6-eee2-4a72-9e98-851efb0bdc3d.png"
  },
  realEstate: {
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
    image: "/lovable-uploads/04e02938-36ca-4abc-adad-95afd668326b.png"
  },
  music: {
    title: "Music Artists & Labels",
    intro: "Streamline fan engagement, manage booking inquiries, and handle merchandising with AI voice solutions.",
    benefits: [
      "Never miss a booking opportunity or media inquiry",
      "Provide fans with consistent information about releases and events",
      "Handle merchandise ordering and shipping questions",
      "Manage fan club memberships and special offers",
      "Coordinate with venues and promoters efficiently"
    ],
    pricing: [
      {
        title: "Starter Impact",
        price: "$397",
        description: "For emerging artists and small labels",
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
        description: "For established artists and mid-size labels",
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
        description: "For major labels and top-tier artists",
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
    image: "/lovable-uploads/3094ebcc-0925-48b6-9f13-c4e025b7e67d.png"
  },
  contractors: {
    title: "Service Contractors",
    intro: "Optimize appointment scheduling, client communication, and field service management with AI voice technology.",
    benefits: [
      "Never miss a service call or inquiry, even after hours",
      "Schedule and manage appointments efficiently",
      "Pre-qualify leads and collect essential information",
      "Answer common questions about services and pricing",
      "Follow up with clients automatically for reviews"
    ],
    pricing: [
      {
        title: "Starter Impact",
        price: "$397",
        description: "For solo contractors and small teams",
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
        description: "For growing contractor businesses",
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
    image: "/lovable-uploads/a8ea11c6-eee2-4a72-9e98-851efb0bdc3d.png"
  },
  callcenters: {
    title: "Call Centers",
    intro: "Transform customer service and call management with AI voice agents designed for call centers.",
    benefits: [
      "Handle routine inquiries without human intervention",
      "Reduce wait times and improve customer satisfaction",
      "Provide 24/7 support coverage for global operations",
      "Intelligently route calls based on intent and priority",
      "Collect valuable customer data and insights"
    ],
    pricing: [
      {
        title: "Starter Impact",
        price: "$397",
        description: "For small contact centers starting with AI",
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
        description: "For established call centers with steady volume",
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
        description: "For large call centers and BPO operations",
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
    image: "/lovable-uploads/a8ea11c6-eee2-4a72-9e98-851efb0bdc3d.png"
  }
};

const industries = [
  { id: "restaurants", title: "Restaurants & Hospitality" },
  { id: "realEstate", title: "Real Estate" },
  { id: "music", title: "Music Artists & Labels" },
  { id: "contractors", title: "Service Contractors" },
  { id: "callcenters", title: "Call Centers" }
];

const IndustryPage = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const navigate = useNavigate();
  const [industry, setIndustry] = useState<string>(industryId || 'restaurants');
  
  useEffect(() => {
    if (industryId && industryData[industryId as keyof typeof industryData]) {
      setIndustry(industryId);
    } else if (!industryId) {
      navigate('/industries/restaurants', { replace: true });
    }
    
    window.scrollTo(0, 0);
  }, [industryId, navigate]);
  
  const handleIndustryChange = (id: string) => {
    navigate(`/industries/${id}`, { replace: true });
  };
  
  const currentIndustry = industryData[industry as keyof typeof industryData];
  
  if (!currentIndustry) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Layout>
      <div className="pt-28 md:pt-36">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              AI Voice Solutions for <span className="pink-aqua-text">{currentIndustry.title}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {currentIndustry.intro}
            </p>
          </div>
          
          <IndustrySelector 
            industries={industries} 
            selectedId={industry} 
            onChange={handleIndustryChange} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl border border-white/10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="glass-card"
                key={industry} // Important to reset animation on industry change
              >
                <IndustryAnimation industry={industry} />
              </motion.div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 pink-aqua-text">Key Benefits</h2>
              <ul className="space-y-3">
                {currentIndustry.benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="mt-1 mr-3 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full pink-aqua-bg flex items-center justify-center">
                        <FiCheck className="text-white" size={12} />
                      </div>
                    </div>
                    <p className="text-gray-200">{benefit}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center pink-aqua-text">Pricing Options for {currentIndustry.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentIndustry.pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`glass-card p-6 rounded-xl border ${
                    plan.highlighted 
                      ? 'border-brand-pink pink-aqua-bg relative overflow-hidden' 
                      : 'border-white/10'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 right-0 bg-white text-brand-pink text-xs font-bold px-3 py-1 uppercase">
                      Most Popular
                    </div>
                  )}
                  <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-white'}`}>
                    {plan.title}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className={`text-3xl font-bold ${plan.highlighted ? 'text-white' : 'aqua-pink-text'}`}>
                      {plan.price}
                    </span>
                    <span className={`ml-2 ${plan.highlighted ? 'text-white/80' : 'text-gray-400'}`}>
                      {plan.price !== "Contact Us" ? "/month" : ""}
                    </span>
                  </div>
                  <p className={`mb-6 ${plan.highlighted ? 'text-white/90' : 'text-gray-400'}`}>
                    {plan.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <FiCheck 
                          className={`mr-2 mt-1 ${plan.highlighted ? 'text-white' : 'text-brand-aqua'}`}
                          size={16} 
                        />
                        <span className={plan.highlighted ? 'text-white/90' : 'text-gray-300'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/demo"
                    className={`w-full block text-center py-2 px-4 rounded-lg transition-colors ${
                      plan.highlighted 
                        ? 'bg-white text-brand-pink hover:bg-white/90' 
                        : 'aqua-pink-bg text-white hover:opacity-90'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pink-aqua-bg rounded-xl p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Ready to Transform Your {currentIndustry.title} Business?
              </h2>
              <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
                Schedule a personalized demo to see how our AI voice agents can revolutionize your customer interactions and operational efficiency.
              </p>
              <Link 
                to="https://www.go.suddenimpact.agency/meetings/suddenimpact/30min" 
                className="btn-primary bg-white text-brand-pink hover:bg-white/90 inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Custom Demo <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndustryPage;
