
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../design/SectionTitle";

const CallToAction = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-agency-vibrantPurple/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-morphism rounded-3xl p-8 md:p-16"
        >
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Ready to Transform Your Business with AI Voice Agents?"
              subtitle="Start your free 7-day trial today and experience how our AI voice agents can revolutionize your operations and enhance customer experiences."
              centered={true}
              light={true}
            />
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center mt-8">
              <Link 
                to="/pricing" 
                className="inline-flex items-center justify-center px-6 py-3 text-white bg-agency-vibrantPurple hover:bg-agency-vibrantPurple/90 rounded-lg transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center justify-center px-6 py-3 text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/20"
              >
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
