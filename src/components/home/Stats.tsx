
import { motion } from "framer-motion";
import { Users, Award, Star, TrendingUp } from "lucide-react";

const stats = [
  {
    number: "99.9%",
    label: "Accuracy Rate",
    description: "AI-powered voice recognition precision",
    icon: Star,
    delay: 0.1
  },
  {
    number: "1M+",
    label: "Conversations",
    description: "Successfully handled monthly",
    icon: Users,
    delay: 0.2
  },
  {
    number: "60%",
    label: "Cost Reduction",
    description: "Average savings for businesses",
    icon: TrendingUp,
    delay: 0.3
  },
  {
    number: "24/7",
    label: "Availability",
    description: "Round-the-clock service",
    icon: Award,
    delay: 0.4
  }
];

const Stats = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-agency-darkPurple/20 to-transparent" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: stat.delay }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-agency-vibrantPurple/20 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-agency-vibrantPurple" />
              </div>
              <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                {stat.number}
              </h3>
              <p className="text-lg font-semibold text-white/90 mb-2">{stat.label}</p>
              <p className="text-sm text-white/60">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
