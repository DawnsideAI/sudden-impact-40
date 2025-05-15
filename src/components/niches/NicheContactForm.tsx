
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Calendar } from 'lucide-react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';

interface NicheContactFormProps {
  industry: 'healthcare' | 'real-estate' | 'restaurants' | 'service-contractors';
}

const NicheContactForm = ({ industry }: NicheContactFormProps) => {
  const { toast } = useToast();
  const form = useForm();
  const [showPricing, setShowPricing] = useState(true);

  // Define industry-specific form labels
  const getIndustryLabel = () => {
    switch(industry) {
      case 'healthcare':
        return 'Healthcare Practice';
      case 'real-estate':
        return 'Real Estate Agency';
      case 'restaurants':
        return 'Restaurant Name';
      case 'service-contractors':
        return 'Service Business Name';
      default:
        return 'Company Name';
    }
  };

  const getButtonText = () => {
    switch(industry) {
      case 'healthcare':
        return 'Book Your Appointment';
      case 'real-estate':
        return 'Get Started Now';
      case 'restaurants':
        return 'Reserve Now';
      case 'service-contractors':
        return 'Schedule Service Now';
      default:
        return 'Submit';
    }
  };

  const getGradient = () => {
    switch(industry) {
      case 'healthcare':
        return 'from-brand-aqua to-brand-pink';
      case 'real-estate':
        return 'from-brand-purple to-brand-aqua';
      case 'restaurants':
        return 'from-brand-pink to-brand-aqua';
      case 'service-contractors':
        return 'from-brand-purple to-brand-pink';
      default:
        return 'from-brand-pink to-brand-aqua';
    }
  };

  const industryLabel = getIndustryLabel();
  const buttonText = getButtonText();
  const gradient = getGradient();

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Form submitted!",
      description: "We'll contact you shortly to confirm your request.",
    });
  };

  // Basic pricing plans to display inline
  const pricingPlans = [
    {
      name: "Starter",
      price: 197,
      monthlyFee: 97,
      features: ["300 AI Minutes", "Calendar Integration", "24/7 Availability"]
    },
    {
      name: "Professional",
      price: 197,
      monthlyFee: 297,
      popular: true,
      features: ["1000 AI Minutes", "CRM Integration", "Custom Workflows"]
    },
    {
      name: "Enterprise",
      price: 497,
      monthlyFee: 597,
      features: ["3000 AI Minutes", "White-labeled Solution", "Dedicated Manager"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Get Started Today"
          subtitle={`Complete this form to begin your ${industry.replace('-', ' ')} automation journey`}
          centered={true}
        />
        
        {/* Display condensed pricing plans directly on the page */}
        <div className="mt-8 mb-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pricingPlans.map((plan, index) => (
              <StyleProvider 
                key={index} 
                delay={index * 0.1} 
                className={`bg-white p-4 rounded-xl border ${plan.popular ? 'border-brand-pink shadow-lg' : 'border-gray-200'}`}
              >
                {plan.popular && (
                  <div className={`py-1 text-sm bg-gradient-to-r ${gradient} text-white text-center font-medium rounded-t-lg -mt-4 -mx-4 mb-3`}>
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold text-center">{plan.name}</h3>
                <div className="text-center my-3">
                  <p className="text-sm text-gray-500">One-time setup</p>
                  <p className="text-xl font-bold">${plan.price}</p>
                  <p className="text-sm text-gray-500">Monthly</p>
                  <p className="text-xl font-bold">${plan.monthlyFee}/mo</p>
                </div>
                <ul className="text-sm space-y-2 mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center mr-2 flex-shrink-0`}>
                        <Check size={10} className="text-white" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link 
                    to={`/niches/${industry}/pricing`}
                    className="text-sm text-brand-vibrantPurple hover:text-brand-pink transition-colors"
                  >
                    Full details
                  </Link>
                </div>
              </StyleProvider>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link 
              to={`/niches/${industry}/pricing`}
              className="inline-flex items-center font-medium text-brand-vibrantPurple hover:text-brand-pink transition-colors"
            >
              View detailed pricing plans <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <StyleProvider className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-center mb-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to={`/niches/${industry}/booking`} 
                className="inline-flex items-center px-4 py-2 bg-brand-vibrantPurple/10 text-brand-vibrantPurple hover:bg-brand-vibrantPurple/20 rounded-lg transition-colors"
              >
                Try our AI voice agent <ArrowRight size={16} className="ml-1" />
              </Link>
              
              <a 
                href="https://link.suddenimpactagency.io/widget/booking/MYRdt5Un7mP29erZS5rx" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-brand-aqua/10 text-brand-aqua hover:bg-brand-aqua/20 rounded-lg transition-colors"
              >
                <Calendar size={16} className="mr-1" /> Schedule a consultation
              </a>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">First Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your first name" 
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink outline-none transition"
                      />
                    </FormControl>
                  </FormItem>
                  
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Last Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your last name"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink outline-none transition"
                      />
                    </FormControl>
                  </FormItem>
                </div>
                
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">{industryLabel}</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder={`Enter your ${industryLabel.toLowerCase()}`}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink outline-none transition"
                    />
                  </FormControl>
                </FormItem>
                
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink outline-none transition"
                    />
                  </FormControl>
                </FormItem>
                
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel"
                      placeholder="(123) 456-7890"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink outline-none transition"
                    />
                  </FormControl>
                </FormItem>
                
                <div className="pt-4">
                  <div className="text-center mb-4">
                    <Link 
                      to={`/niches/${industry}/booking`} 
                      className="text-brand-vibrantPurple hover:text-brand-pink transition-colors"
                    >
                      Or schedule a demo directly
                    </Link>
                  </div>
                  
                  <Button
                    type="submit"
                    className={`w-full py-3 px-4 bg-gradient-to-r ${gradient} text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
                  >
                    {buttonText}
                  </Button>
                  <p className="text-gray-500 text-sm text-center mt-4">
                    We'll contact you within 24 hours to get you started.
                  </p>
                </div>
              </form>
            </Form>
          </StyleProvider>
        </div>
      </div>
    </section>
  );
};

export default NicheContactForm;
