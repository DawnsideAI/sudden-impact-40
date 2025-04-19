
import { motion } from "framer-motion";
import { Clock, Calendar, Filter, Link as LinkIcon } from "lucide-react";

const features = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "24/7 Availability",
    description: "Never miss a call or appointment opportunity with always-on AI voice agents.",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Appointment Scheduling",
    description: "Automate bookings and integrate seamlessly with your existing calendar systems.",
  },
  {
    icon: <Filter className="h-6 w-6" />,
    title: "Lead Qualification",
    description: "Pre-screen potential clients to focus your efforts on high-quality leads.",
  },
  {
    icon: <LinkIcon className="h-6 w-6" />,
    title: "Seamless Integration",
    description: "Compatible with your existing systems and workflows for a friction-free experience.",
  },
];

const ServiceFeatures = () => {
  return (
    <section className="py-24 bg-background/50 border-y border-white/10">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent"
          >
            Plug-and-Play AI Voice Agents for Service Pros
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Our ready-to-deploy AI voice agents are designed to streamline your operations and enhance customer interactions.
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
              className="glass-morphism rounded-xl p-6 hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-agency-vibrantPurple/20 group-hover:bg-agency-vibrantPurple/30 flex items-center justify-center text-white mb-4 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
