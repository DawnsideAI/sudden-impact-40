
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react";
import StyleProvider from "@/components/design/StyleProvider";
import SectionTitle from "@/components/design/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from '@/hooks/use-mobile';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, {
    message: "Message must not be longer than 500 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact | Sudden Impact Agency";
  }, []);

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent",
      description: "Thank you! Our team will be in touch with you shortly.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Layout lightMode={true}>
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-brand-darkPurple via-brand-purple to-brand-indigo border-b border-white/10 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-aqua/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl"></div>
        </div>
        
        <StyleProvider className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                title="Get in Touch"
                subtitle="Have questions about our AI voice solutions? Let's start a conversation."
                centered={true}
                light={true}
              />
            </motion.div>
          </div>
        </StyleProvider>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-12 md:py-16 bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Contact Information */}
            <StyleProvider className="space-y-8 lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm border border-gray-100 p-6"
              >
                <h2 className="text-2xl font-bold mb-6 text-brand-dark bg-clip-text text-transparent bg-gradient-to-r from-brand-indigo to-brand-purple">
                  Connect With Our Team
                </h2>
                <p className="text-gray-600 max-w-md mb-8">
                  Our team of AI voice specialists is ready to answer your questions and help you transform your business communication.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-brand-pink to-brand-aqua p-3 rounded-lg mr-4 shadow-md">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-brand-dark">Phone</h3>
                      <p className="text-gray-600 mt-1">+1 (302) 618-3977</p>
                      <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-brand-pink to-brand-aqua p-3 rounded-lg mr-4 shadow-md">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-brand-dark">Email</h3>
                      <p className="text-gray-600 mt-1">support@suddenimpactagency.io</p>
                      <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-brand-pink to-brand-aqua p-3 rounded-lg mr-4 shadow-md">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-brand-dark">Office</h3>
                      <p className="text-gray-600 mt-1">
                        100 Technology Drive<br />
                        Suite 300<br />
                        Wilmington, DE 19801
                      </p>
                    </div>
                  </div>
                </div>
                
                {!isMobile && (
                  <div className="mt-12">
                    <div className="p-4 bg-brand-indigo/5 rounded-lg border border-brand-indigo/10">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium text-brand-indigo">Schedule a Demo:</span> Want to see our AI voice agents in action? Book a personalized demo with our team.
                      </p>
                      <Button variant="link" className="mt-2 text-brand-purple p-0 flex items-center gap-1">
                        Book a Demo <ArrowRight className="h-3.5 w-3.5 ml-1" />
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            </StyleProvider>
            
            {/* Contact Form */}
            <StyleProvider className="lg:col-span-3" delay={0.2}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-6 text-brand-dark">Send Us a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-gray-700">Your Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                className="w-full focus:border-brand-purple/50 focus:ring-brand-purple/30"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-gray-700">Email Address</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full focus:border-brand-purple/50 focus:ring-brand-purple/30"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="How can we help?"
                              className="w-full focus:border-brand-purple/50 focus:ring-brand-purple/30"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please provide details about your inquiry..."
                              className="min-h-[150px] w-full focus:border-brand-purple/50 focus:ring-brand-purple/30 resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                          <div className="text-right text-xs text-gray-400 mt-1">
                            {field.value?.length || 0}/500 characters
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-brand-pink to-brand-aqua hover:opacity-90 text-white py-6 mt-4"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send className="mr-2 h-5 w-5" /> Send Message
                        </span>
                      )}
                    </Button>

                    {isMobile && (
                      <div className="mt-6 p-4 bg-brand-indigo/5 rounded-lg border border-brand-indigo/10">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium text-brand-indigo">Schedule a Demo:</span> Want to see our AI voice agents in action? Book a personalized demo.
                        </p>
                        <Button variant="link" className="mt-2 text-brand-purple p-0 flex items-center gap-1">
                          Book a Demo <ArrowRight className="h-3.5 w-3.5 ml-1" />
                        </Button>
                      </div>
                    )}
                  </form>
                </Form>
              </motion.div>
            </StyleProvider>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
