
import { motion } from "framer-motion";
import { FiClock, FiCalendar, FiFilter, FiLink } from "react-icons/fi";

const features = [
  {
    icon: <FiClock size={24} />,
    title: "24/7 Availability",
    description: "Never miss a call or appointment opportunity with always-on AI voice agents.",
  },
  {
    icon: <FiCalendar size={24} />,
    title: "Appointment Scheduling",
    description: "Automate bookings and integrate seamlessly with your existing calendar systems.",
  },
  {
    icon: <FiFilter size={24} />,
    title: "Lead Qualification",
    description: "Pre-screen potential clients to focus your efforts on high-quality leads.",
  },
  {
    icon: <FiLink size={24} />,
    title: "Seamless Integration",
    description: "Compatible with your existing systems and workflows for a friction-free experience.",
  },
];

const ServiceFeatures = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Plug-and-Play AI Voice Agents for{" "}
            <span className="gradient-text">Service Contractors</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Our ready-to-deploy AI voice agents are designed to streamline your operations, enhance customer interactions, and boost efficiency. Whether you're a plumber, electrician, or HVAC technician, our solutions are crafted to meet your specific needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="feature-card bg-white"
            >
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
