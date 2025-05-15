import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
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

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Get Started Today"
          subtitle={`Complete this form to begin your ${industry.replace('-', ' ')} automation journey`}
          centered={true}
        />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <StyleProvider className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <Link 
                to={`/niches/${industry}/pricing`} 
                className="inline-flex items-center text-brand-vibrantPurple hover:text-brand-pink transition-colors"
              >
                View our pricing plans <ArrowRight size={16} className="ml-1" />
              </Link>
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
