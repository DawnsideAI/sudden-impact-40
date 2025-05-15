
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Calendar, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import DemoCalendarForm from "@/components/demo/DemoCalendarForm";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  smsConsent: boolean;
}

const DemoForm = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    smsConsent: false,
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [showDemoVideo, setShowDemoVideo] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear errors when user starts typing
    if (formError) setFormError("");
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormState((prev) => ({
      ...prev,
      smsConsent: checked,
    }));
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
    
    // Validate SMS consent
    if (!formState.smsConsent) {
      setFormError("Please consent to receive SMS messages to continue");
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
      formData.append('smsConsent', formState.smsConsent ? 'yes' : 'no');
      
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

  const handleDemoVideoClick = () => {
    setShowDemoVideo(true);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/5 via-white/90 to-brand-aqua/5"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
              Witness First-Hand How Our AI Voice Agents Can{" "}
              <span className="bg-gradient-to-r from-brand-pink to-brand-aqua bg-clip-text text-transparent">Revolutionize Your Business</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 text-center">
              Experience a live, interactive demo with our AI voice agent. See how it handles calls, schedules appointments, and answers questions about your business.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-brand-pink" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-800">Live 10-Minute Interactive Demo</h3>
                  <p className="text-gray-600">Talk directly with our AI voice agent and experience its capabilities</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-brand-pink" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-800">No Sales Pressure</h3>
                  <p className="text-gray-600">This is a technology demo, not a sales call</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Calendar className="h-5 w-5 text-brand-pink" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-800">Schedule For Later</h3>
                  <p className="text-gray-600">Can't talk now? Book a future time for your demo</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <button
                  onClick={handleDemoVideoClick}
                  className="bg-white border border-brand-pink/30 text-brand-pink hover:bg-gray-50 font-medium py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  Watch Demo Video
                </button>
                
                <button
                  onClick={handleScheduleClick}
                  className="bg-white border border-brand-aqua/30 text-brand-aqua hover:bg-gray-50 font-medium py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  Schedule For Later
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
          >
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Try Our AI Voice Agent</h3>
                
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
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-aqua focus:border-brand-aqua"
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
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-aqua focus:border-brand-aqua"
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
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-aqua focus:border-brand-aqua"
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
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-aqua focus:border-brand-aqua"
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
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-aqua focus:border-brand-aqua"
                      placeholder="Tell us about your business needs"
                    />
                  </div>
                  
                  {/* A2P Compliance SMS Consent Checkbox */}
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="home-smsConsent" 
                      checked={formState.smsConsent}
                      onCheckedChange={handleCheckboxChange}
                      className="border-brand-aqua data-[state=checked]:bg-brand-aqua data-[state=checked]:border-brand-aqua mt-1"
                    />
                    <label
                      htmlFor="home-smsConsent"
                      className="text-sm text-gray-600 cursor-pointer"
                    >
                      I consent to receive SMS messages from Sudden Impact Agency regarding my demo request and follow-ups. Message and data rates may apply.
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-brand-pink to-brand-aqua hover:opacity-90 rounded-lg shadow-lg transition-colors ${
                      isLoading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isLoading ? "Processing..." : "Try the AI Voice Agent"}
                  </button>
                  
                  <p className="text-xs text-center text-gray-500 mt-4">
                    By submitting, you agree to our <Link to="/legal" className="text-brand-pink hover:underline">Terms & Conditions</Link> and <Link to="/legal" className="text-brand-pink hover:underline">Privacy Policy</Link>.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center text-white mb-6">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Demo Request Submitted!</h3>
                <p className="text-gray-600 mb-6">
                  We'll be in touch shortly to schedule your interactive AI voice demo.
                </p>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <PhoneCall className="h-5 w-5 text-brand-pink" />
                  <a 
                    href="tel:+13026183977"
                    className="text-lg font-medium text-brand-aqua hover:underline"
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
      
      {/* Video demo dialog */}
      <Dialog open={showDemoVideo} onOpenChange={setShowDemoVideo}>
        <DialogContent className="sm:max-w-[800px] bg-gray-900 border-white/10">
          <DialogTitle className="text-xl font-bold text-center mb-4">AI Voice Agent Demo</DialogTitle>
          <div className="aspect-video relative bg-black/20 rounded-lg overflow-hidden flex items-center justify-center">
            {/* Replace with actual video once available */}
            <div className="text-center p-8">
              <p className="text-white/80 mb-4">Demo video will be placed here once available.</p>
              <p className="text-sm text-white/60">This video will show the AI voice agent in action, CRM dashboard previews, and onboarding automation.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DemoForm;
