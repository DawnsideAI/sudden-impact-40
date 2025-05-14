
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, PhoneCall } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface DemoRequestFormProps {
  onFormSubmit?: () => void;
}

const DemoRequestForm = ({ onFormSubmit }: DemoRequestFormProps) => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear any previous errors when the user starts typing again
    if (formError) setFormError("");
  };

  const validateForm = () => {
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formState.email)) {
      setFormError("Please enter a valid email address.");
      return false;
    }
    
    // Basic phone validation - at least 10 digits
    const phoneDigits = formState.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setFormError("Please enter a valid phone number with at least 10 digits.");
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset any previous errors
    setFormError("");
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Link to GHL form submission endpoint
      const ghlFormEndpoint = "https://www.go.suddenimpact.agency/l/1089001/2024-05-07/5sgcb";
      
      // Create form data for submission
      const formData = new FormData();
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('phone', formState.phone);
      formData.append('company', formState.company);
      formData.append('message', formState.message);
      
      // Submit to GHL form
      await fetch(ghlFormEndpoint, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // GHL form may require this
      });
      
      // Show success message and update state
      setIsSubmitted(true);
      onFormSubmit?.();
      toast({
        title: "Demo Request Submitted!",
        description: "You'll be connected to our AI voice agent shortly.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError("There was an error submitting your request. Please try again.");
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit demo request. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            className="glass-card rounded-xl p-8 max-w-2xl mx-auto relative overflow-hidden"
          >
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
              <div className="w-16 h-16 mx-auto rounded-full bg-agency-vibrantPurple flex items-center justify-center text-white mb-4">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Demo Request Submitted!
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
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      {formError && (
        <div className="bg-red-500/20 border border-red-500/50 text-white px-4 py-2 rounded-lg">
          {formError}
        </div>
      )}
      
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
          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-agency-vibrantPurple focus:border-agency-vibrantPurple text-white text-sm sm:text-base"
          placeholder="Enter your full name"
        />
      </div>
      
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-white mb-1">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formState.company}
          onChange={handleChange}
          required
          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-agency-vibrantPurple focus:border-agency-vibrantPurple text-white text-sm sm:text-base"
          placeholder="Your company name"
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
          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-agency-vibrantPurple focus:border-agency-vibrantPurple text-white text-sm sm:text-base"
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
          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-agency-vibrantPurple focus:border-agency-vibrantPurple text-white text-sm sm:text-base"
          placeholder="(123) 456-7890"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          rows={3}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-agency-vibrantPurple focus:border-agency-vibrantPurple text-white text-sm sm:text-base"
          placeholder="Tell us about your business needs"
        />
      </div>
      
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full px-4 sm:px-6 py-2 sm:py-3 text-white bg-agency-vibrantPurple hover:bg-agency-vibrantPurple/90 rounded-lg transition-colors flex items-center justify-center text-sm sm:text-base ${
          isLoading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Processing..." : "Start Live Demo"}
      </button>
      
      <p className="text-xs sm:text-sm text-center text-muted-foreground mt-4">
        By submitting, you agree to our{" "}
        <Link to="/legal" className="text-agency-vibrantPurple hover:underline">
          Terms & Conditions
        </Link>{" "}
        and{" "}
        <Link to="/legal" className="text-agency-vibrantPurple hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
};

export default DemoRequestForm;
