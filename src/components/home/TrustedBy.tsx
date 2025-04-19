
import { motion } from "framer-motion";

const TrustedBy = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold text-white/80">Trusted by Industry Leaders</h2>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-32 h-16 bg-white/5 rounded-lg flex items-center justify-center"
            >
              <div className="text-xl font-bold text-white/40">Logo {i}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
