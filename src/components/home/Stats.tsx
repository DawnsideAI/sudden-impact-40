
import { motion } from 'framer-motion';

const statsData = [
  { value: '98%', label: 'Caller Satisfaction' },
  { value: '80%', label: 'Cost Reduction' },
  { value: '24/7', label: 'Availability' },
  { value: '90%', label: 'Booking Rate' },
];

const Stats = () => {
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-agency-dark"
        >
          Proven Results
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-agency-gray max-w-2xl mx-auto"
        >
          Our AI voice agents consistently deliver exceptional performance metrics
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold mb-2 text-agency-blue">{stat.value}</span>
              <span className="text-agency-gray text-sm md:text-base">{stat.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
