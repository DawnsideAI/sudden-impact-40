
import { motion } from "framer-motion";

const trustedCompanies = [
  {
    name: "OpenAI",
    color: "#14B8A6",
    textColor: "text-teal-500",
    logo: "OA"
  },
  {
    name: "Google",
    color: "#4285F4",
    textColor: "text-blue-500",
    logo: "G"
  },
  {
    name: "Microsoft",
    color: "#6B7280",
    textColor: "text-gray-500", 
    logo: "MS"
  },
  {
    name: "Anthropic",
    color: "#8B5CF6",
    textColor: "text-purple-500",
    logo: "A"
  },
  {
    name: "DeepMind",
    color: "#10B981",
    textColor: "text-green-500",
    logo: "DM"
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
        
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {trustedCompanies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`w-32 h-16 rounded-lg flex items-center justify-center border border-white/10 shadow-lg`}
              style={{ backgroundColor: `${company.color}20` }}
            >
              <div className={`text-2xl font-bold ${company.textColor} opacity-80`}>
                {company.logo}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
