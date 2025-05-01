
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface Feature {
  title: string;
  description: string;
}

interface IndustryDetailsProps {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  features: Feature[];
  benefits: string[];
  color: string;
  accentColor: string;
}

export const IndustryDetails = ({
  id,
  icon,
  title,
  description,
  features,
  benefits,
  color,
  accentColor,
}: IndustryDetailsProps) => {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8"
    >
      <div className="rounded-xl glass-card border border-white/10 p-8 mb-12 backdrop-blur-xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center gap-6 mb-8"
        >
          <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white shrink-0">
            {icon}
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">{title}</h2>
            <p className="text-gray-300 text-lg">{description}</p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center text-white">
                <span className={`${accentColor} gradient-text`}>Key Features</span>
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="glass-card p-5 border border-white/5 hover:border-white/10 transition-all"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  >
                    <h4 className={`font-semibold mb-2 gradient-text`}>{feature.title}</h4>
                    <p className="text-gray-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center text-white">
                <span className={`${accentColor} gradient-text`}>Benefits</span>
              </h3>
              <div className="glass-card p-6 border border-white/5 mb-6">
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                    >
                      <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full gradient-bg flex items-center justify-center">
                        <FiCheck className="text-white" size={12} />
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div 
                className="glass-card p-6 border border-white/5 hover:border-white/20 transition-all"
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
              >
                <h4 className="font-semibold mb-4 text-white">Ready to transform your {title.toLowerCase()} operations?</h4>
                <Link to="/demo" className="btn-primary w-full text-center block">
                  Request a Demo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
