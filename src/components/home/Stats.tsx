
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
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-agency-darkPurple/20 to-transparent"
      />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: stat.delay,
                type: "spring",
                bounce: 0.3
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="glass-card p-6 text-center hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay + 0.2, duration: 0.5 }}
                className="w-12 h-12 mx-auto mb-4 rounded-full bg-agency-vibrantPurple/20 flex items-center justify-center relative"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute inset-0 rounded-full bg-agency-vibrantPurple/20"
                />
                <stat.icon className="w-6 h-6 text-agency-vibrantPurple relative z-10" />
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay + 0.4, duration: 0.5 }}
                className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
              >
                {stat.number}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay + 0.5, duration: 0.5 }}
                className="text-lg font-semibold text-white/90 mb-2"
              >
                {stat.label}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay + 0.6, duration: 0.5 }}
                className="text-sm text-white/60"
              >
                {stat.description}
              </motion.p>

              {/* Decorative background elements */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }}
                className="absolute -top-10 -right-10 w-20 h-20 bg-agency-vibrantPurple/5 rounded-full blur-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
