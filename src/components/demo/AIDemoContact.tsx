
import { motion } from "framer-motion";
import { PhoneCall, MessageSquare } from "lucide-react";

const AIDemoContact = () => {
  return (
    <section className="py-12">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-morphism rounded-xl p-8 max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              Try Our AI Voice Assistant Now
            </h3>
            <p className="text-muted-foreground">
              Call now to interact with Michelle, our AI receptionist, and experience the future of business communication.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <PhoneCall className="w-6 h-6 text-agency-vibrantPurple" />
              <a 
                href="tel:+13026183977"
                className="text-xl font-medium text-white hover:text-agency-vibrantPurple transition-colors"
              >
                +1 (302) 618-3977
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Available 24/7 for demonstration purposes
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIDemoContact;
