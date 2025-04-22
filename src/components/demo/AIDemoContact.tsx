
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

const AIDemoContact = () => {
  return (
    <section className="py-12">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          className="glass-morphism rounded-xl p-8 max-w-2xl mx-auto relative overflow-hidden"
        >
          {/* Background gradient animation */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-agency-vibrantPurple/10 via-transparent to-agency-blue/10 animate-pulse-slow" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-8 relative z-10"
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              Try Our AI Voice Assistant Now
            </h3>
            <p className="text-muted-foreground">
              Call now to interact with Michelle, our AI receptionist, and experience the future of business communication.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-6 relative z-10"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-4"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                <PhoneCall className="w-6 h-6 text-agency-vibrantPurple" />
              </motion.div>
              <a 
                href="tel:+13026183977"
                className="text-xl font-medium text-white hover:text-agency-vibrantPurple transition-colors"
              >
                +1 (302) 618-3977
              </a>
            </motion.div>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Available 24/7 for demonstration purposes
              </p>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute -top-4 -right-4 w-24 h-24 bg-agency-vibrantPurple/20 rounded-full blur-xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            className="absolute -bottom-4 -left-4 w-32 h-32 bg-agency-blue/20 rounded-full blur-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AIDemoContact;
