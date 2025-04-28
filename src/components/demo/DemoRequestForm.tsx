
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface FormState {
  name: string;
  email: string;
  phone: string;
}

interface DemoRequestFormProps {
  onFormSubmit?: () => void;
}

const DemoRequestForm = ({ onFormSubmit }: DemoRequestFormProps) => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      onFormSubmit?.();
      toast({
        title: "Demo Request Submitted!",
        description: "You'll be redirected to the demo experience shortly.",
      });
    } catch (error) {
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
      <div className="text-center py-4 sm:py-8">
        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-agency-vibrantPurple flex items-center justify-center text-white mb-4 sm:mb-6">
          <Check className="h-6 w-6 sm:h-8 sm:w-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Demo Request Submitted!</h3>
        <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
          You'll be redirected to our demo experience momentarily. Get ready to interact with our AI voice agent!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
        <a href="/legal" className="text-agency-vibrantPurple hover:underline">
          Terms & Conditions
        </a>{" "}
        and{" "}
        <a href="/legal" className="text-agency-vibrantPurple hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
};

export default DemoRequestForm;
