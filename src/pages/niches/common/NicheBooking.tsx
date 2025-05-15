
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Calendar as CalendarIcon } from 'lucide-react';
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import NicheLayout from '@/components/niches/NicheLayout';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';
import { cn } from "@/lib/utils";

const NicheBooking = () => {
  const { industry = 'healthcare' } = useParams();
  const validIndustry = ['healthcare', 'real-estate', 'restaurants', 'service-contractors'].includes(industry) 
    ? industry 
    : 'healthcare';
  
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      date: undefined,
      time: "",
    }
  });
  
  const getIndustryText = () => {
    switch(validIndustry) {
      case 'healthcare':
        return { title: "Healthcare", buttonText: "Book Your Demo" };
      case 'real-estate':
        return { title: "Real Estate", buttonText: "Schedule Your Demo" };
      case 'restaurants':
        return { title: "Restaurant", buttonText: "Book Your Demo" };
      case 'service-contractors':
        return { title: "Service", buttonText: "Schedule Your Demo" };
      default:
        return { title: "Your", buttonText: "Book Your Demo" };
    }
  };
  
  const industryText = getIndustryText();
  
  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", 
    "12:00 PM", "01:00 PM", "02:00 PM", 
    "03:00 PM", "04:00 PM", "05:00 PM"
  ];
  
  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Demo scheduled!",
      description: `Thank you for booking a demo on ${format(data.date, "MMMM d, yyyy")} at ${data.time}.`,
    });
    setStep(3); // Move to thank you step
  };
  
  const nextStep = () => {
    const currentStepValues = step === 1 
      ? form.getValues(["name", "email", "phone", "company"]) 
      : form.getValues(["date", "time"]);
      
    const isStepValid = currentStepValues.every(value => value);
    
    if (isStepValid) {
      setStep(step + 1);
    } else {
      toast({
        variant: "destructive",
        title: "Please fill all fields",
        description: "All fields are required to proceed.",
      });
    }
  };
  
  const prevStep = () => setStep(step - 1);
  
  return (
    <NicheLayout 
      industry={validIndustry as any}
      title={`Book Your ${industryText.title} AI Demo`}
      subtitle="Schedule a personalized demo to see how our AI voice agents can transform your business."
    >
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-12">
              <div className="flex items-center w-full max-w-md justify-between">
                <div className={`flex flex-col items-center ${step >= 1 ? 'text-brand-pink' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-gradient-to-r from-brand-pink to-brand-aqua text-white' : 'bg-gray-200 text-gray-500'}`}>
                    <User size={20} />
                  </div>
                  <span className="text-sm mt-2">Your Info</span>
                </div>
                <div className={`flex-1 h-0.5 mx-2 ${step >= 2 ? 'bg-gradient-to-r from-brand-pink to-brand-aqua' : 'bg-gray-200'}`}></div>
                <div className={`flex flex-col items-center ${step >= 2 ? 'text-brand-pink' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-gradient-to-r from-brand-pink to-brand-aqua text-white' : 'bg-gray-200 text-gray-500'}`}>
                    <Calendar size={20} />
                  </div>
                  <span className="text-sm mt-2">Select Time</span>
                </div>
                <div className={`flex-1 h-0.5 mx-2 ${step >= 3 ? 'bg-gradient-to-r from-brand-pink to-brand-aqua' : 'bg-gray-200'}`}></div>
                <div className={`flex flex-col items-center ${step >= 3 ? 'text-brand-pink' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-gradient-to-r from-brand-pink to-brand-aqua text-white' : 'bg-gray-200 text-gray-500'}`}>
                    <Check size={20} />
                  </div>
                  <span className="text-sm mt-2">Confirmed</span>
                </div>
              </div>
            </div>
            
            <StyleProvider className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200">
              {step === 1 && (
                <>
                  <SectionTitle 
                    title="Your Information"
                    subtitle="Tell us about yourself and your business"
                    centered={true}
                  />
                  <Form {...form}>
                    <form className="space-y-6 mt-8">
                      <div className="grid grid-cols-1 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700">Full Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your name" 
                                  {...field}
                                  className="rounded-lg border-gray-300 focus:border-brand-pink focus:ring-brand-pink/20"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700">Email Address</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email"
                                  placeholder="your@email.com" 
                                  {...field}
                                  className="rounded-lg border-gray-300 focus:border-brand-pink focus:ring-brand-pink/20"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700">Phone Number</FormLabel>
                              <FormControl>
                                <Input 
                                  type="tel"
                                  placeholder="(123) 456-7890" 
                                  {...field}
                                  className="rounded-lg border-gray-300 focus:border-brand-pink focus:ring-brand-pink/20"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700">Company Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your business name" 
                                  {...field}
                                  className="rounded-lg border-gray-300 focus:border-brand-pink focus:ring-brand-pink/20"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="pt-4">
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="w-full bg-gradient-to-r from-brand-pink to-brand-aqua text-white py-6 rounded-lg"
                        >
                          Continue to Select Time
                          <ArrowRight size={18} className="ml-2" />
                        </Button>
                      </div>
                    </form>
                  </Form>
                </>
              )}
              
              {step === 2 && (
                <>
                  <SectionTitle 
                    title="Select Your Demo Time"
                    subtitle="Choose a date and time that works for you"
                    centered={true}
                  />
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel className="text-gray-700 mb-2">Select Date</FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "w-full pl-3 text-left font-normal",
                                          !field.value && "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0" align="start">
                                    <CalendarComponent
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) =>
                                        date < new Date() || date < new Date("1900-01-01")
                                      }
                                      initialFocus
                                    />
                                  </PopoverContent>
                                </Popover>
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div>
                          <FormField
                            control={form.control}
                            name="time"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 mb-2">Select Time</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select a time slot" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {timeSlots.map((time) => (
                                      <SelectItem key={time} value={time}>{time}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      <div className="flex gap-4 pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={prevStep}
                          className="flex-1 py-6"
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 bg-gradient-to-r from-brand-pink to-brand-aqua text-white py-6 rounded-lg"
                        >
                          {industryText.buttonText}
                          <ArrowRight size={18} className="ml-2" />
                        </Button>
                      </div>
                    </form>
                  </Form>
                </>
              )}
              
              {step === 3 && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua mx-auto flex items-center justify-center">
                    <Check size={32} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold mt-6">Your Demo is Confirmed!</h2>
                  <p className="text-gray-600 mt-3 max-w-md mx-auto">
                    Thank you for scheduling a demo. We've sent a confirmation to your email with all the details.
                  </p>
                  <div className="mt-8 bg-gray-50 rounded-lg p-6 max-w-md mx-auto">
                    <div className="flex items-start mb-4">
                      <Calendar className="text-brand-pink mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-gray-500 text-sm">Date</p>
                        <p className="font-medium">{form.getValues("date") ? format(form.getValues("date"), "MMMM d, yyyy") : "Not selected"}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="text-brand-pink mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-gray-500 text-sm">Time</p>
                        <p className="font-medium">{form.getValues("time") || "Not selected"}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link to={`/niches/${validIndustry}`}>
                      <Button variant="outline" className="px-6">
                        Return to Home
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </StyleProvider>
          </div>
        </div>
      </section>
    </NicheLayout>
  );
};

// Lucide Check icon component
const Check = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default NicheBooking;
