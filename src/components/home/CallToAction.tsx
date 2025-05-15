
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import SectionTitle from "../design/SectionTitle";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const CallToAction = () => {
  const [date, setDate] = useState<Date>();

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      toast({
        title: "Date Selected!",
        description: `You've selected ${format(selectedDate, "PPP")} for your demo. Our team will contact you to confirm the time.`,
      });
    }
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-pink/10 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-brand-indigo to-brand-violet rounded-3xl p-8 md:p-16 shadow-2xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Ready to Transform Your Business with AI Voice Agents?"
              subtitle="Start your free 7-day trial today and experience how our AI voice agents can revolutionize your operations and enhance customer experiences."
              centered={true}
              light={true}
            />
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center mt-8">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link 
                  to="/pricing" 
                  className="inline-flex items-center justify-center px-6 py-3 text-brand-indigo bg-white hover:bg-gray-100 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Popover>
                  <PopoverTrigger asChild>
                    <button 
                      className="inline-flex items-center justify-center px-6 py-3 text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/20 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule For Later
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white shadow-xl border border-gray-100" align="center">
                    <div className="p-4 border-b border-gray-100">
                      <h4 className="font-medium text-lg text-gray-800">Select a Demo Date</h4>
                      <p className="text-gray-600 text-sm">Choose your preferred date</p>
                    </div>
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={handleDateSelect}
                      className={cn("p-3 pointer-events-auto")}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
