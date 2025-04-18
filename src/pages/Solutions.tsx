
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { FiUsers, FiHeart, FiPhoneCall, FiTool, FiArrowRight, FiCheck } from "react-icons/fi";
import { RiRestaurantLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const industries = [
  {
    id: "contractors",
    icon: <FiTool size={24} />,
    title: "Service Contractors",
    description: "AI voice agents designed specifically for plumbers, electricians, HVAC technicians, and other service contractors.",
    color: "bg-blue-50",
    accentColor: "text-blue-600",
    features: [
      {
        title: "24/7 Availability",
        description: "Never miss a call or appointment opportunity with always-on AI voice agents."
      },
      {
        title: "Appointment Scheduling",
        description: "Automate bookings and integrate seamlessly with your existing calendar systems."
      },
      {
        title: "Lead Qualification",
        description: "Pre-screen potential clients to focus your efforts on high-quality leads."
      },
      {
        title: "Seamless Integration",
        description: "Compatible with your existing systems and workflows for a friction-free experience."
      }
    ],
    benefits: [
      "Reduce missed call opportunities",
      "Automate routine scheduling tasks",
      "Improve customer response times",
      "Focus resources on service delivery",
      "Enhance customer satisfaction with responsive communication"
    ]
  },
  {
    id: "restaurants",
    icon: <RiRestaurantLine size={24} />,
    title: "Restaurants & Hospitality",
    description: "Streamline reservations, handle menu inquiries, and process orders with our specialized AI voice agents.",
    color: "bg-amber-50",
    accentColor: "text-amber-600",
    features: [
      {
        title: "Reservation Management",
        description: "Handle bookings efficiently, even during peak hours when staff are busy."
      },
      {
        title: "Menu Assistance",
        description: "Provide instant answers to menu inquiries, special offerings, and dietary concerns."
      },
      {
        title: "Order Processing",
        description: "Streamline takeout and delivery orders with precision and accuracy."
      },
      {
        title: "Special Events & Promotions",
        description: "Automated information and booking for special events, private dining, and promotions."
      }
    ],
    benefits: [
      "Never miss a reservation or takeout order",
      "Free up staff to focus on in-person guests",
      "Reduce hold times during rush periods",
      "Capture accurate order details",
      "Improve customer satisfaction with responsive service"
    ]
  },
  {
    id: "healthcare",
    icon: <FiHeart size={24} />,
    title: "Healthcare Providers",
    description: "HIPAA-compliant voice agents to improve patient care, scheduling, and information sharing.",
    color: "bg-blue-50",
    accentColor: "text-blue-600",
    features: [
      {
        title: "Patient Scheduling",
        description: "Automate appointment bookings and reminders to reduce no-shows."
      },
      {
        title: "Information Dissemination",
        description: "Provide answers to common patient queries about services, insurance, and procedures."
      },
      {
        title: "Post-Care Follow-Up",
        description: "Ensure patients receive timely post-treatment information and check-ins."
      },
      {
        title: "HIPAA Compliance",
        description: "Our healthcare solutions are fully HIPAA-compliant for secure patient interactions."
      }
    ],
    benefits: [
      "Reduce administrative burden on healthcare staff",
      "Improve patient communication and follow-up",
      "Decrease appointment no-shows",
      "Enhance patient satisfaction with responsive care",
      "Maintain HIPAA compliance with secure communications"
    ]
  },
  {
    id: "callcenters",
    icon: <FiPhoneCall size={24} />,
    title: "Call Centers",
    description: "Enhance operational efficiency with intelligent call routing, support, and data collection.",
    color: "bg-purple-50",
    accentColor: "text-purple-600",
    features: [
      {
        title: "Call Routing",
        description: "Direct calls to the appropriate departments or personnel based on customer needs."
      },
      {
        title: "Customer Support",
        description: "Handle FAQs and common issues without human intervention."
      },
      {
        title: "Data Collection",
        description: "Gather customer feedback and insights seamlessly for business intelligence."
      },
      {
        title: "Call Overflow Management",
        description: "Manage high call volume periods without long wait times or dropped calls."
      }
    ],
    benefits: [
      "Reduce wait times for customers",
      "Optimize agent utilization for complex issues",
      "Ensure 24/7 customer support coverage",
      "Improve first-call resolution rates",
      "Enhance customer satisfaction with efficient service"
    ]
  }
];

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(industries[0].id);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Solutions | Sudden Impact Agency";
    
    // Check if URL has a hash and set the active tab accordingly
    const hash = window.location.hash.replace('#', '');
    if (hash && industries.some(industry => industry.id === hash)) {
      setActiveTab(hash);
      
      // Scroll to the solutions section
      setTimeout(() => {
        const element = document.getElementById('solutions-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Custom AI Voice Solutions for <span className="gradient-text">Diverse Industries</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              We offer tailored AI voice agents designed to meet the unique demands of various sectors, enhancing efficiency and customer experiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions-section" className="py-16">
        <div className="container-custom">
          {/* Tab Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`p-6 rounded-xl text-left transition-all duration-300 ${
                  activeTab === industry.id
                    ? "border-2 border-agency-blue shadow-md"
                    : "border border-gray-200 hover:border-agency-blue hover:shadow-sm bg-white"
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white mb-4 ${
                  activeTab === industry.id ? "gradient-bg" : "bg-gray-200"
                }`}>
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-gray-600 line-clamp-2">{industry.description}</p>
                
                {activeTab === industry.id && (
                  <div className="mt-2 text-agency-blue font-medium">Selected</div>
                )}
              </button>
            ))}
          </div>

          {/* Active Industry Content */}
          {industries.map((industry) => (
            activeTab === industry.id && (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8"
              >
                <div className={`rounded-2xl ${industry.color} p-8 border border-gray-100 shadow-sm mb-12`}>
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                    <div className={`w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white shrink-0`}>
                      {industry.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">{industry.title}</h2>
                      <p className="text-gray-700 text-lg">{industry.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <span className={`mr-2 ${industry.accentColor}`}>Key Features</span>
                      </h3>
                      <div className="space-y-6">
                        {industry.features.map((feature, index) => (
                          <div key={index} className="bg-white rounded-lg p-5 shadow-sm">
                            <h4 className={`font-semibold mb-2 ${industry.accentColor}`}>{feature.title}</h4>
                            <p className="text-gray-600">{feature.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <span className={`mr-2 ${industry.accentColor}`}>Benefits</span>
                      </h3>
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <ul className="space-y-3">
                          {industry.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <FiCheck className={`${industry.accentColor} mt-1 mr-3 flex-shrink-0`} />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="font-semibold mb-4">Ready to transform your {industry.title.toLowerCase()} operations?</h4>
                        <Link to="/demo" className="btn-primary w-full text-center block">
                          Request a Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Need a <span className="gradient-text">Custom Solution</span>?
            </h2>
            <p className="text-xl text-gray-600">
              Beyond our ready-to-deploy industry solutions, we offer fully customized AI voice agents built specifically for your unique business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Tailored to Your Business</h3>
              <p className="text-gray-600 mb-6">
                Our custom AI voice solutions are designed to address your specific challenges, integrate with your existing systems, and reflect your unique brand voice.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <strong>Unique Voice Personas</strong> - Develop AI voices that match your brand identity
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <strong>Custom Workflows</strong> - Design specific conversation flows unique to your business
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <strong>API Integrations</strong> - Connect with your existing software stack
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <strong>Specialized Training</strong> - AI agents trained on your industry-specific knowledge
                  </p>
                </li>
              </ul>
              
              <Link to="/demo" className="btn-primary">
                Discuss Your Custom Needs <FiArrowRight className="ml-2" />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Our Development Process</h3>
              <p className="text-gray-600 mb-6">
                Building your custom AI voice solution follows our proven methodology to ensure perfect alignment with your business goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold mb-1">Discovery & Requirements</h4>
                    <p className="text-gray-600">We analyze your business processes and identify the optimal voice automation opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold mb-1">Solution Design</h4>
                    <p className="text-gray-600">Creating conversation flows, integration points, and voice personas tailored to your needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold mb-1">Development & Training</h4>
                    <p className="text-gray-600">Building and training your custom AI voice agents with your industry-specific knowledge.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold mb-1">Testing & Refinement</h4>
                    <p className="text-gray-600">Rigorous testing and optimization to ensure exceptional customer experiences.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm">
                      5
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold mb-1">Deployment & Ongoing Support</h4>
                    <p className="text-gray-600">Seamless launch with continuous monitoring, updates, and performance optimization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="rounded-2xl gradient-bg text-white p-8 md:p-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Transform Your Business with AI Voice Agents?
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

export default Solutions;
