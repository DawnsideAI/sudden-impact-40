
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { Link, useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import IndustrySelector from "@/components/industries/IndustrySelector";

// All industry types
const industries = [
  {
    id: "restaurants",
    title: "Restaurants & Hospitality",
    intro: "Boost reservations, improve staff efficiency, and grow profits with AI voice assistance.",
    image: "/lovable-uploads/3094ebcc-0925-48b6-9f13-c4e025b7e67d.png",
    features: [
      "24/7 reservation management & booking",
      "Efficient takeout & delivery order processing",
      "Staff resource optimization",
      "Personalized customer service",
      "Automated follow-up communications"
    ],
    plans: [
      {
        title: "Starter",
        price: 397,
        annualPrice: 317,
        features: [
          "500 AI Voice Minutes/month",
          "Reservation booking system",
          "Basic menu information handling",
          "Simple order processing",
          "Email integration"
        ]
      },
      {
        title: "Pro",
        price: 597,
        annualPrice: 478,
        popular: true,
        features: [
          "1,500 AI Voice Minutes/month",
          "Advanced reservation management",
          "Full menu navigation & customization",
          "Order processing with upselling",
          "SMS & email follow-up sequences"
        ]
      },
      {
        title: "Enterprise",
        price: 897,
        annualPrice: 718,
        features: [
          "5,000+ AI Voice Minutes/month",
          "Multiple location support",
          "Custom voice personality",
          "Full POS & delivery integration",
          "VIP customer recognition"
        ]
      }
    ]
  },
  {
    id: "healthcare",
    title: "Healthcare Providers",
    intro: "Streamline patient scheduling, improve care coordination, and enhance patient satisfaction.",
    image: "/lovable-uploads/a8ea11c6-eee2-4a72-9e98-851efb0bdc3d.png",
    features: [
      "HIPAA-compliant communications",
      "24/7 appointment scheduling",
      "Automated patient reminders",
      "Insurance verification assistance",
      "Post-visit follow-up protocols"
    ],
    plans: [
      {
        title: "Starter",
        price: 397,
        annualPrice: 317,
        features: [
          "500 AI Voice Minutes/month",
          "Basic appointment scheduling",
          "Patient information collection",
          "Reminder notifications",
          "HIPAA-compliant systems"
        ]
      },
      {
        title: "Pro",
        price: 597,
        annualPrice: 478,
        popular: true,
        features: [
          "1,500 AI Voice Minutes/month",
          "Advanced scheduling with prioritization",
          "Insurance verification",
          "Multi-provider calendar management",
          "Custom care protocols"
        ]
      },
      {
        title: "Enterprise",
        price: 897,
        annualPrice: 718,
        features: [
          "5,000+ AI Voice Minutes/month",
          "Multi-location support",
          "Full EHR/EMR integration",
          "Custom medical specialization",
          "Advanced analytics dashboard"
        ]
      }
    ]
  },
  {
    id: "realEstate",
    title: "Real Estate",
    intro: "Capture more leads, qualify prospects, and close more deals with AI-powered assistance.",
    image: "/lovable-uploads/04e02938-36ca-4abc-adad-95afd668326b.png",
    features: [
      "24/7 property inquiry handling",
      "Automated lead qualification",
      "Instant property information delivery",
      "Appointment scheduling for showings",
      "Follow-up sequence management"
    ],
    plans: [
      {
        title: "Starter",
        price: 397,
        annualPrice: 317,
        features: [
          "500 AI Voice Minutes/month",
          "Basic property information handling",
          "Simple appointment scheduling",
          "Lead capture & qualification",
          "Email notifications"
        ]
      },
      {
        title: "Pro",
        price: 597,
        annualPrice: 478,
        popular: true,
        features: [
          "1,500 AI Voice Minutes/month",
          "Detailed property descriptions",
          "Neighborhood information delivery",
          "Smart lead scoring & routing",
          "Multi-agent scheduling"
        ]
      },
      {
        title: "Enterprise",
        price: 897,
        annualPrice: 718,
        features: [
          "5,000+ AI Voice Minutes/month",
          "Multiple office support",
          "CRM & MLS integration",
          "Custom workflow automation",
          "Advanced analytics & reporting"
        ]
      }
    ]
  },
  {
    id: "music",
    title: "Music Artists & Labels",
    intro: "Manage bookings, engage fans, and streamline promotional activities with AI assistance.",
    image: "/lovable-uploads/a8ea11c6-eee2-4a72-9e98-851efb0bdc3d.png",
    features: [
      "24/7 booking request management",
      "Fan engagement automation",
      "Merchandise sales assistance",
      "Release promotion coordination",
      "Concert & event scheduling"
    ],
    plans: [
      {
        title: "Starter",
        price: 397,
        annualPrice: 317,
        features: [
          "500 AI Voice Minutes/month",
          "Basic booking management",
          "Fan inquiry handling",
          "Simple merch information",
          "Email follow-up sequences"
        ]
      },
      {
        title: "Pro",
        price: 597,
        annualPrice: 478,
        popular: true,
        features: [
          "1,500 AI Voice Minutes/month",
          "Advanced booking negotiation",
          "Fan club management",
          "Full merchandise sales support",
          "Multi-channel promotion"
        ]
      },
      {
        title: "Enterprise",
        price: 897,
        annualPrice: 718,
        features: [
          "5,000+ AI Voice Minutes/month",
          "Multiple artist/band support",
          "Custom voice personality",
          "Full tour management integration",
          "VIP fan engagement protocols"
        ]
      }
    ]
  },
  {
    id: "contractors",
    title: "Service Contractors",
    intro: "Never miss a job opportunity, improve scheduling, and boost customer satisfaction.",
    image: "/lovable-uploads/3094ebcc-0925-48b6-9f13-c4e025b7e67d.png",
    features: [
      "24/7 job request handling",
      "Emergency service prioritization",
      "Automated appointment scheduling",
      "Service description & pricing",
      "Follow-up & maintenance reminders"
    ],
    plans: [
      {
        title: "Starter",
        price: 397,
        annualPrice: 317,
        features: [
          "500 AI Voice Minutes/month",
          "Basic service scheduling",
          "Simple job information collection",
          "Appointment reminders",
          "Email notifications"
        ]
      },
      {
        title: "Pro",
        price: 597,
        annualPrice: 478,
        popular: true,
        features: [
          "1,500 AI Voice Minutes/month",
          "Smart job prioritization",
          "Detailed service explanations",
          "Multi-technician scheduling",
          "SMS & email follow-up"
        ]
      },
      {
        title: "Enterprise",
        price: 897,
        annualPrice: 718,
        features: [
          "5,000+ AI Voice Minutes/month",
          "Multiple service area support",
          "Full field service integration",
          "Custom service protocols",
          "Preventative maintenance scheduling"
        ]
      }
    ]
  }
];

const Industries = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const navigate = useNavigate();
  const [selectedIndustry, setSelectedIndustry] = useState(
    industries.find(i => i.id === industryId) || industries[0]
  );
  
  // Effect to handle direct navigation to industry
  useEffect(() => {
    if (industryId) {
      const industry = industries.find(i => i.id === industryId);
      if (industry) {
        setSelectedIndustry(industry);
      } else {
        navigate("/industries");
      }
    }
  }, [industryId, navigate]);

  const handleIndustryChange = (industryId: string) => {
    const industry = industries.find(i => i.id === industryId);
    if (industry) {
      setSelectedIndustry(industry);
      navigate(`/industries/${industryId}`);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              AI Voice Solutions for <span className="gradient-text">{selectedIndustry.title}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-300 mb-8"
            >
              {selectedIndustry.intro}
            </motion.p>

            <IndustrySelector 
              industries={industries} 
              selectedId={selectedIndustry.id} 
              onChange={handleIndustryChange}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Designed Specifically for <span className="gradient-text">{selectedIndustry.title}</span>
              </h2>
              
              <div className="space-y-4 mb-6">
                {selectedIndustry.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center text-white">
                        <FiCheck className="h-3 w-3" />
                      </div>
                    </div>
                    <p className="ml-3 text-white">{feature}</p>
                  </div>
                ))}
              </div>
              
              <Link to="/demo" className="btn-primary inline-flex items-center">
                See How It Works <FiArrowRight className="ml-2" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-agency-vibrantPurple/30 rounded-full blur-3xl" />
              <img 
                src={selectedIndustry.image} 
                alt={selectedIndustry.title} 
                className="relative z-10 w-full h-auto rounded-xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Plans */}
      <section className="py-12 relative">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Pricing</span> for {selectedIndustry.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectedIndustry.plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                className={`glass-card rounded-xl overflow-hidden relative ${
                  plan.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-3 text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  
                  <div className="mb-8">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-gray-400 ml-2">/month</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        ${plan.annualPrice}/month billed annually
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    to="/demo"
                    className={`block w-full py-3 px-4 text-center rounded-lg font-medium mb-8 ${
                      plan.popular
                        ? "gradient-bg text-white shadow-lg hover:shadow-xl transition-all"
                        : "glass-card text-white hover:bg-white/10 transition-all"
                    }`}
                  >
                    Start Free Trial
                  </Link>
                  
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex">
                        <span className="text-blue-400 mr-3">•</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="container-custom">
          <div className="rounded-2xl gradient-bg text-white p-8 md:p-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Transform Your {selectedIndustry.title} Business?
              </h2>
              <p className="text-xl mb-8 text-gray-100">
                Start your free 7-day trial today and experience how our AI voice agents can revolutionize your operations and enhance customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <Link to="/pricing" className="btn-primary bg-white text-agency-darkPurple hover:bg-opacity-90 flex items-center justify-center">
                  Start Free Trial
                  <FiArrowRight className="ml-2" />
                </Link>
                <Link to="/demo" className="btn-secondary border-white text-white hover:bg-white hover:bg-opacity-10 flex items-center justify-center">
                  See Live Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
