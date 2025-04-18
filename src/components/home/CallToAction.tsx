
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const CallToAction = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-96 w-96 rounded-full bg-agency-purple opacity-5 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl gradient-bg text-white p-8 md:p-16 shadow-xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI Voice Agents?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Start your free 7-day trial today and experience how our AI voice agents can revolutionize your operations and enhance customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link to="/pricing" className="btn-primary bg-white text-agency-darkPurple hover:bg-opacity-90 flex items-center justify-center">
                Start Free Trial
                <FiArrowRight className="ml-2" />
              </Link>
              <Link to="/demo" className="btn-secondary border-white text-white hover:bg-white hover:bg-opacity-10 flex items-center justify-center">
                See Live Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
