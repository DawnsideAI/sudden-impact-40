
import { useState } from "react";
import { motion } from "framer-motion";
import { FiUsers, FiHeart, FiPhoneCall } from "react-icons/fi";
import { RiRestaurantLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const industries = [
  {
    id: "restaurants",
    icon: <RiRestaurantLine size={24} />,
    title: "Restaurants & Hospitality",
    description: "Streamline reservations, handle menu inquiries, and process orders with our specialized AI voice agents.",
    features: [
      "Reservation Management: Handle bookings efficiently, even during peak hours.",
      "Menu Assistance: Provide instant answers to menu inquiries and dietary concerns.",
      "Order Processing: Streamline takeout and delivery orders with precision."
    ],
    bgColor: "bg-amber-50",
    accentColor: "text-amber-600"
  },
  {
    id: "healthcare",
    icon: <FiHeart size={24} />,
    title: "Healthcare Providers",
    description: "HIPAA-compliant voice agents to improve patient care, scheduling, and information sharing.",
    features: [
      "Patient Scheduling: Automate appointment bookings and reminders.",
      "Information Dissemination: Provide answers to common patient queries.",
      "Post-Care Follow-Up: Ensure patients receive timely post-treatment information."
    ],
    bgColor: "bg-blue-50",
    accentColor: "text-blue-600"
  },
  {
    id: "callcenters",
    icon: <FiPhoneCall size={24} />,
    title: "Call Centers",
    description: "Enhance operational efficiency with intelligent call routing, support, and data collection.",
    features: [
      "Call Routing: Direct calls to the appropriate departments or personnel.",
      "Customer Support: Handle FAQs and common issues without human intervention.",
      "Data Collection: Gather customer feedback and insights seamlessly."
    ],
    bgColor: "bg-purple-50",
    accentColor: "text-purple-600"
  }
];

const IndustrySolutions = () => {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id);

  const getActiveIndustry = () => {
    return industries.find(industry => industry.id === activeIndustry) || industries[0];
  };

  const current = getActiveIndustry();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Custom AI Voice Solutions for{" "}
            <span className="gradient-text">Diverse Industries</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Beyond service contractors, we offer AI voice agents tailored to the unique demands of various sectors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {industries.map((industry) => (
            <motion.button
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`p-6 rounded-xl text-left transition-all duration-300 ${
                activeIndustry === industry.id
                  ? "border-2 border-agency-purple shadow-md"
                  : "border border-gray-200 hover:border-agency-purple hover:shadow-sm"
              }`}
              onClick={() => setActiveIndustry(industry.id)}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white mb-4 ${
                activeIndustry === industry.id ? "gradient-bg" : "bg-gray-200"
              }`}>
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
              <p className="text-gray-600 line-clamp-2">{industry.description}</p>
              
              {activeIndustry === industry.id && (
                <div className="mt-2 text-agency-blue font-medium">Selected</div>
              )}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`rounded-2xl ${current.bgColor} p-8 border border-gray-100 shadow-sm`}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <div className={`w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white shrink-0`}>
              {current.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">{current.title}</h3>
              <p className="text-gray-700">{current.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {current.features.map((feature, index) => {
              const [title, description] = feature.split(": ");
              
              return (
                <div key={index} className="bg-white rounded-lg p-5 shadow-sm">
                  <p className={`font-semibold mb-2 ${current.accentColor}`}>{title}</p>
                  <p className="text-gray-600">{description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-center">
            <Link to="/solutions" className="btn-primary">
              Learn More About {current.title}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
