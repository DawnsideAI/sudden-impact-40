
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
    ]
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
    ]
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
    ]
  }
];

const IndustrySolutions = () => {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id);

  const getActiveIndustry = () => {
    return industries.find(industry => industry.id === activeIndustry) || industries[0];
  };

  const current = getActiveIndustry();

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-agency-vibrantPurple/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent"
          >
            Custom AI Voice Solutions for{" "}
            <span className="gradient-text">Diverse Industries</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Beyond service contractors, we offer AI voice agents tailored to the unique demands of various sectors.
          </motion.p>
          
          <Link to="/industries" className="btn-secondary inline-block mt-6">
            Explore All Industry Solutions
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {industries.map((industry) => (
            <motion.button
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`glass-morphism p-6 rounded-xl text-left transition-all duration-300 ${
                activeIndustry === industry.id
                  ? "border-2 border-agency-vibrantPurple shadow-md"
                  : "border border-white/10 hover:border-agency-vibrantPurple/70 hover:shadow-sm"
              }`}
              onClick={() => setActiveIndustry(industry.id)}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white mb-4 ${
                activeIndustry === industry.id ? "bg-agency-vibrantPurple" : "bg-white/10"
              }`}>
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{industry.title}</h3>
              <p className="text-muted-foreground line-clamp-2">{industry.description}</p>
              
              {activeIndustry === industry.id && (
                <div className="mt-2 text-agency-vibrantPurple font-medium">Selected</div>
              )}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-morphism rounded-2xl p-8 border border-white/10"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <div className="w-16 h-16 rounded-full bg-agency-vibrantPurple flex items-center justify-center text-white shrink-0">
              {current.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">{current.title}</h3>
              <p className="text-muted-foreground">{current.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {current.features.map((feature, index) => {
              const [title, description] = feature.split(": ");
              
              return (
                <div key={index} className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <p className="font-semibold mb-2 text-agency-vibrantPurple">{title}</p>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-center">
            <Link 
              to={`/industries/${current.id}`} 
              className="inline-flex items-center justify-center px-6 py-3 text-white bg-agency-vibrantPurple hover:bg-agency-vibrantPurple/90 rounded-lg transition-colors"
            >
              Learn More About {current.title}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
