
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
        title: "Starter",
        price: "$299",
        description: "Perfect for small restaurants just getting started with AI voice technology",
        features: [
          "100 minutes of AI calls per month",
          "Basic reservation handling",
          "Menu information responses",
          "Business hours and location info"
        ]
      },
      {
        title: "Impact Pro",
        price: "$599",
        description: "Ideal for established restaurants with steady call volume",
        features: [
          "500 minutes of AI calls per month",
          "Advanced reservation management",
          "Complete menu handling with customization",
          "Takeout order processing",
          "Integration with existing POS systems",
          "Custom voice personality"
        ],
        highlighted: true
      },
      {
        title: "Enterprise",
        price: "Contact Us",
        description: "For restaurant groups and high-volume establishments",
        features: [
          "Unlimited AI call minutes",
          "Multiple location support",
          "Complete system integration",
          "Custom workflow creation",
          "Advanced analytics dashboard",
          "Dedicated support team"
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
        title: "Starter",
        price: "$349",
        description: "For individual agents and small agencies",
        features: [
          "150 minutes of AI calls per month",
          "Basic property information handling",
          "Showing scheduling assistance",
          "Contact information collection"
        ]
      },
      {
        title: "Impact Pro",
        price: "$699",
        description: "For growing agencies with multiple agents",
        features: [
          "600 minutes of AI calls per month",
          "Complete property detailing system",
          "Advanced showing scheduling",
          "Buyer/renter pre-qualification",
          "Integration with CRM systems",
          "Custom scripts for different property types"
        ],
        highlighted: true
      },
      {
        title: "Enterprise",
        price: "Contact Us",
        description: "For large brokerages and property management firms",
        features: [
          "Unlimited AI call minutes",
          "Multi-agent, multi-property support",
          "Full CRM and system integrations",
          "Custom workflow creation",
          "White-labeled voice solutions",
          "Dedicated account executive"
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
        title: "Starter",
        price: "$249",
        description: "For emerging artists and small labels",
        features: [
          "100 minutes of AI calls per month",
          "Basic event and release information",
          "Fan contact collection",
          "Simple booking inquiry handling"
        ]
      },
      {
        title: "Impact Pro",
        price: "$549",
        description: "For established artists and mid-size labels",
        features: [
          "500 minutes of AI calls per month",
          "Complete tour and release management",
          "Merchandise ordering assistance",
          "Fan club membership handling",
          "Media inquiry filtering",
          "Custom artist voice personality"
        ],
        highlighted: true
      },
      {
        title: "Enterprise",
        price: "Contact Us",
        description: "For major labels and top-tier artists",
        features: [
          "Unlimited AI call minutes",
          "Multi-artist support",
          "Global territory management",
          "Advanced merchandising integration",
          "Complete media and booking workflow",
          "Custom voice solution design"
        ]
      }
    ],
    image: "/lovable-uploads/3094ebcc-0925-48b6-9f13-c4e025b7e67d.png"
  }
};

const industries = [
  { id: "restaurants", title: "Restaurants & Hospitality" },
  { id: "realEstate", title: "Real Estate" },
  { id: "music", title: "Music Artists & Labels" }
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
              AI Voice Solutions for <span className="gradient-text">{currentIndustry.title}</span>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Key Benefits</h2>
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
                      <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">Pricing Options for {currentIndustry.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentIndustry.pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`glass-card p-6 rounded-xl border ${
                    plan.highlighted 
                      ? 'border-agency-vibrantPurple gradient-bg relative overflow-hidden' 
                      : 'border-white/10'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 right-0 bg-white text-agency-vibrantPurple text-xs font-bold px-3 py-1 uppercase">
                      Most Popular
                    </div>
                  )}
                  <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-white'}`}>
                    {plan.title}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className={`text-3xl font-bold ${plan.highlighted ? 'text-white' : 'text-white'}`}>
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
                          className={`mr-2 mt-1 ${plan.highlighted ? 'text-white' : 'text-agency-vibrantPurple'}`}
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
                        ? 'bg-white text-agency-vibrantPurple hover:bg-white/90' 
                        : 'bg-agency-vibrantPurple text-white hover:bg-agency-vibrantPurple/90'
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
              className="bg-agency-vibrantPurple rounded-xl p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Ready to Transform Your {currentIndustry.title} Business?
              </h2>
              <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
                Schedule a personalized demo to see how our AI voice agents can revolutionize your customer interactions and operational efficiency.
              </p>
              <Link to="/demo" className="btn-primary bg-white text-agency-vibrantPurple hover:bg-white/90 inline-flex items-center">
                Request a Custom Demo <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndustryPage;
