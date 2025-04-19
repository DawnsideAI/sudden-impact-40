
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
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold text-white/80">Trusted by Industry Leaders</h2>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-80 hover:opacity-100 transition-all duration-500">
          {trustedCompanies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative w-32 h-32 rounded-xl flex flex-col items-center justify-center gap-2 border border-white/10 backdrop-blur-sm"
              style={{ backgroundColor: `${company.color}10` }}
            >
              <company.Icon 
                className={`w-8 h-8 ${company.textColor} group-hover:scale-110 transition-transform duration-300`}
              />
              <span className={`text-sm font-medium ${company.textColor}`}>
                {company.name}
              </span>
              <span className="text-xs text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {company.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
