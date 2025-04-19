import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

const DemoForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-agency-vibrantPurple/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Witness First-Hand How Our AI Voice Agents Can{" "}
              <span className="text-agency-vibrantPurple">Revolutionize Your Business</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience a live, interactive demo with our AI voice agent. See how it handles calls, schedules appointments, and answers questions about your business.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FiCheck className="h-5 w-5 text-agency-vibrantPurple" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-white">Live 10-Minute Interactive Demo</h3>
                  <p className="text-muted-foreground">Talk directly with our AI voice agent and experience its capabilities</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FiCheck className="h-5 w-5 text-agency-vibrantPurple" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-white">No Sales Pressure</h3>
                  <p className="text-muted-foreground">This is a technology demo, not a sales call</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FiClock className="h-5 w-5 text-agency-vibrantPurple" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-white">Schedule For Later</h3>
                  <p className="text-muted-foreground">Can't talk now? Book a future time for your demo</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-morphism rounded-xl p-8 border border-white/10"
          >
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold mb-6 text-center text-white">Request Your Demo</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-agency-vibrantPurple focus:border-agency-vibrantPurple placeholder-white/50"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-agency-vibrantPurple focus:border-agency-vibrantPurple placeholder-white/50"
                      placeholder="you@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-agency-vibrantPurple focus:border-agency-vibrantPurple placeholder-white/50"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 text-white bg-agency-vibrantPurple hover:bg-agency-vibrantPurple/90 rounded-lg transition-colors ${
                      isLoading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isLoading ? "Processing..." : "Start Live Demo"}
                  </button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    By submitting, you agree to our <Link to="/legal" className="text-agency-vibrantPurple hover:underline">Terms & Conditions</Link> and <Link to="/legal" className="text-agency-vibrantPurple hover:underline">Privacy Policy</Link>.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-agency-vibrantPurple flex items-center justify-center text-white mb-6">
                  <FiCheck size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Demo Request Submitted!</h3>
                <p className="text-muted-foreground mb-6">
                  You'll be redirected to our demo experience momentarily. Get ready to interact with our AI voice agent!
                </p>
                <div className="text-sm text-muted-foreground">
                  (In a real implementation, you would be redirected to the demo page)
                </div>
              </div>
            )}
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-center font-medium mb-4 text-white">Or Schedule for Later</h4>
              <Link 
                to="/demo#schedule" 
                className="block w-full inline-flex items-center justify-center px-6 py-3 text-white bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm transition-colors border border-white/20"
              >
                Book a Demo Appointment
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
