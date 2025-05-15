
import { motion } from "framer-motion";
import StyleProvider from "../design/StyleProvider";
import SectionTitle from "../design/SectionTitle";
import { Award, Medal, ShieldCheck, TrendingUp } from "lucide-react";

const statsData = [
  { 
    value: '98%', 
    label: 'Caller Satisfaction', 
    icon: <Award className="w-6 h-6" />,
    color: "from-agency-blue to-agency-vibrantPurple"
  },
  { 
    value: '80%', 
    label: 'Cost Reduction', 
    icon: <TrendingUp className="w-6 h-6" />,
    color: "from-agency-vibrantPurple to-agency-purple"
  },
  { 
    value: '24/7', 
    label: 'Availability', 
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "from-agency-purple to-agency-blue"
  },
  { 
    value: '90%', 
    label: 'Booking Rate', 
    icon: <Medal className="w-6 h-6" />,
    color: "from-agency-blue to-agency-vibrantPurple"
  },
];

const Stats = () => {
  return (
    <div className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-[300px] w-[300px] rounded-full bg-agency-vibrantPurple/10 blur-3xl -top-10 -left-10"></div>
        <div className="absolute h-[400px] w-[400px] rounded-full bg-agency-blue/10 blur-3xl bottom-10 right-10"></div>
      </div>
      
      <div className="relative z-10">
        <SectionTitle
          title="Real World Results"
          subtitle="Our AI voice agents consistently deliver exceptional performance metrics across industries"
          centered={true}
          maxWidth="max-w-4xl"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
          {statsData.map((stat, index) => (
            <StyleProvider
              key={index}
              delay={index * 0.1}
            >
              <motion.div 
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full"
              >
                <div className={`h-2 bg-gradient-to-r ${stat.color}`}></div>
                <div className="p-6">
                  <div className="flex flex-col items-center">
                    <div className={`w-14 h-14 rounded-full mb-4 bg-gradient-to-br ${stat.color} text-white flex items-center justify-center`}>
                      {stat.icon}
                    </div>
                    <span className={`text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </span>
                    <span className="text-agency-gray text-sm md:text-base font-medium">{stat.label}</span>
                  </div>
                </div>
              </motion.div>
            </StyleProvider>
          ))}
        </div>

        {/* Additional context callout */}
        <StyleProvider delay={0.5} className="mt-12 max-w-4xl mx-auto">
          <motion.div 
            whileHover={{ y: -3 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200"
          >
            <p className="text-center text-agency-gray">
              Based on aggregated data from over 10,000 customer interactions across multiple industries.
              <span className="block mt-2 text-sm font-medium text-agency-vibrantPurple">
                See our full case studies for detailed performance metrics
              </span>
            </p>
          </motion.div>
        </StyleProvider>
      </div>
    </div>
  );
};

export default Stats;
