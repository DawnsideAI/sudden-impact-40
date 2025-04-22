
import { motion } from "framer-motion";
import { Chrome, Github, Slack, Figma, Dribbble } from "lucide-react";

const trustedCompanies = [
  {
    name: "Github",
    color: "#333",
    textColor: "text-gray-300",
    Icon: Github,
    description: "Version Control"
  },
  {
    name: "Chrome",
    color: "#4285F4",
    textColor: "text-blue-500",
    Icon: Chrome,
    description: "Browser Extension"
  },
  {
    name: "Slack",
    color: "#E01E5A",
    textColor: "text-pink-500",
    Icon: Slack,
    description: "Integration"
  },
  {
    name: "Figma",
    color: "#A259FF",
    textColor: "text-purple-500",
    Icon: Figma,
    description: "Design Partner"
  },
  {
    name: "Dribbble",
    color: "#EA4C89",
    textColor: "text-pink-500",
    Icon: Dribbble,
    description: "Design Showcase"
  }
];

const TrustedBy = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 relative"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-semibold text-white/80"
          >
            Trusted by Industry Leaders
          </motion.h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-12 opacity-80 hover:opacity-100 transition-all duration-500"
        >
          {trustedCompanies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1,
                type: "spring",
                bounce: 0.3
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative w-32 h-32 rounded-xl flex flex-col items-center justify-center gap-2 border border-white/10 backdrop-blur-sm hover:border-white/20"
              style={{ backgroundColor: `${company.color}10` }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.2
                }}
              >
                <company.Icon 
                  className={`w-8 h-8 ${company.textColor} group-hover:scale-110 transition-transform duration-300`}
                />
              </motion.div>
              
              <motion.span 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`text-sm font-medium ${company.textColor}`}
              >
                {company.name}
              </motion.span>
              
              <motion.span 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-xs text-white/40 absolute bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {company.description}
              </motion.span>

              {/* Decorative gradient background */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
