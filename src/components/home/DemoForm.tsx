
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import DemoCalendarForm from "@/components/demo/DemoCalendarForm";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const DemoForm = () => {
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
  const [showCalendar, setShowCalendar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear any errors when user starts typing
    if (formError) setFormError("");
  };

  const validateForm = () => {
    // Basic validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formState.email)) {
      setFormError("Please enter a valid email address");
      return false;
    }
    
    const phoneDigits = formState.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setFormError("Please enter a valid phone number");
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setFormError("");
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // GHL form submission endpoint
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
      
      setIsSubmitted(true);
      toast({
        title: "Demo Request Submitted!",
        description: "You'll be connected to our AI voice agent shortly.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError("There was an error submitting your form. Please try again.");
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit demo request. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleScheduleClick = () => {
    setShowCalendar(true);
  };

  return (
    <section className="section-padding relative overflow-hidden section-light">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-agency-vibrantPurple/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Witness First-Hand How Our AI Voice Agents Can{" "}
              <span className="text-agency-vibrantPurple">Revolutionize Your Business</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience a live, interactive demo with our AI voice agent. See how it handles calls, schedules appointments, and answers questions about your business.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-agency-vibrantPurple" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-800">Live 10-Minute Interactive Demo</h3>
                  <p className="text-gray-600">Talk directly with our AI voice agent and experience its capabilities</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-agency-vibrantPurple" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-800">No Sales Pressure</h3>
                  <p className="text-gray-600">This is a technology demo, not a sales call</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Calendar className="h-5 w-5 text-agency-vibrantPurple" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-800">Schedule For Later</h3>
                  <p className="text-gray-600">Can't talk now? Book a future time for your demo</p>
                </div>
              </div>
              
              <button
                onClick={handleScheduleClick}
                className="flex items-center text-agency-vibrantPurple hover:text-agency-blue mt-4 transition-colors"
              >
                <Calendar className="h-4 w-4 mr-2" />
                <span>Schedule for a specific time</span>
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-light shadow-soft rounded-xl p-8"
          >
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Request Your Demo</h3>
                
                {formError && (
                  <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-4">
                    {formError}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="home-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="home-name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-agency-vibrantPurple focus:border-agency-vibrantPurple"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="home-company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="home-company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-agency-vibrantPurple focus:border-agency-vibrantPurple"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="home-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="home-email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-agency-vibrantPurple focus:border-agency-vibrantPurple"
                      placeholder="you@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="home-phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="home-phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-agency-vibrantPurple focus:border-agency-vibrantPurple"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="home-message" className="block text-sm font-medium text-gray-700 mb-1">
                      How can we help?
                    </label>
                    <textarea
                      id="home-message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-agency-vibrantPurple focus:border-agency-vibrantPurple"
                      placeholder="Tell us about your business needs"
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
                  
                  <p className="text-xs text-center text-gray-500 mt-4">
                    By submitting, you agree to our <Link to="/legal" className="text-agency-vibrantPurple hover:underline">Terms & Conditions</Link> and <Link to="/legal" className="text-agency-vibrantPurple hover:underline">Privacy Policy</Link>.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-agency-vibrantPurple flex items-center justify-center text-white mb-6">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Demo Request Submitted!</h3>
                <p className="text-gray-600 mb-6">
                  We'll be in touch shortly to schedule your interactive AI voice demo.
                </p>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <PhoneIcon className="h-5 w-5 text-agency-vibrantPurple" />
                  <a 
                    href="tel:+13026183977"
                    className="text-lg font-medium text-agency-vibrantPurple hover:underline"
                  >
                    +1 (302) 618-3977
                  </a>
                </div>
                <p className="text-sm text-gray-500">
                  Available 24/7 for demonstration purposes
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Calendar dialog for scheduling */}
      <Dialog open={showCalendar} onOpenChange={setShowCalendar}>
        <DialogContent className="sm:max-w-[600px] bg-gray-900 border-white/10">
          <DialogTitle className="text-xl font-bold">Schedule Your Demo</DialogTitle>
          <DemoCalendarForm onSubmitSuccess={() => setShowCalendar(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

// Add the PhoneIcon component since we're using it
const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default DemoForm;
