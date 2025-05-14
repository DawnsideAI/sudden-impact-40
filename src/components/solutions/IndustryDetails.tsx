
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Industry {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  detailsTitle: string;
  detailsDescription: string;
  features: string[];
  results: string[];
}

interface IndustryDetailsProps {
  industry: Industry;
}

const IndustryDetails = ({ industry }: IndustryDetailsProps) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 h-full border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-agency-vibrantPurple/10 flex items-center justify-center text-agency-vibrantPurple">
          {industry.icon}
        </div>
        <h3 className="text-2xl font-bold text-agency-dark">{industry.detailsTitle}</h3>
      </div>
      
      <p className="text-agency-gray mb-6">
        {industry.detailsDescription}
      </p>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-agency-dark mb-3">Key Features</h4>
        <ul className="space-y-2">
          {industry.features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start gap-2"
            >
              <span className="mt-1 text-agency-vibrantPurple">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-agency-gray">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-agency-dark mb-3">Proven Results</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {industry.results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              className="bg-agency-vibrantPurple/5 p-4 rounded-lg border border-agency-vibrantPurple/20"
            >
              <p className="text-center text-agency-dark font-medium">{result}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="px-5 py-2.5 bg-agency-vibrantPurple text-white rounded-lg hover:bg-agency-vibrantPurple/90 transition-colors">
          Learn More About {industry.title} Solutions
        </button>
      </div>
    </div>
  );
};

export default IndustryDetails;
