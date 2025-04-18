
import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiClock } from "react-icons/fi";

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
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Witness First-Hand How Our AI Voice Agents Can{" "}
              <span className="gradient-text">Revolutionize Your Business</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience a live, interactive demo with our AI voice agent. See how it handles calls, schedules appointments, and answers questions about your business.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FiCheck className="h-5 w-5 text-agency-blue" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Live 10-Minute Interactive Demo</h3>
                  <p className="text-gray-600">Talk directly with our AI voice agent and experience its capabilities</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FiCheck className="h-5 w-5 text-agency-blue" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">No Sales Pressure</h3>
                  <p className="text-gray-600">This is a technology demo, not a sales call</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FiClock className="h-5 w-5 text-agency-blue" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium">Schedule For Later</h3>
                  <p className="text-gray-600">Can't talk now? Book a future time for your demo</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
          >
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold mb-6 text-center">Request Your Demo</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-agency-blue focus:border-agency-blue"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-agency-blue focus:border-agency-blue"
                      placeholder="you@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-agency-blue focus:border-agency-blue"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full btn-primary py-3 flex items-center justify-center ${
                      isLoading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isLoading ? "Processing..." : "Start Live Demo"}
                  </button>
                  
                  <p className="text-xs text-center text-gray-500 mt-4">
                    By submitting, you agree to our <a href="/legal" className="text-agency-blue hover:underline">Terms & Conditions</a> and <a href="/legal" className="text-agency-blue hover:underline">Privacy Policy</a>.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto rounded-full gradient-bg flex items-center justify-center text-white mb-6">
                  <FiCheck size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Demo Request Submitted!</h3>
                <p className="text-gray-600 mb-6">
                  You'll be redirected to our demo experience momentarily. Get ready to interact with our AI voice agent!
                </p>
                <div className="text-sm text-gray-500">
                  (In a real implementation, you would be redirected to the demo page)
                </div>
              </div>
            )}
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="text-center font-medium mb-4">Or Schedule for Later</h4>
              <a 
                href="/demo#schedule" 
                className="block w-full btn-secondary py-3 text-center"
              >
                Book a Demo Appointment
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
