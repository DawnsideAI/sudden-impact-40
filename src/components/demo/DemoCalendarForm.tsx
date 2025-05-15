import React, { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from '@/hooks/use-toast';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', 
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
];

interface DemoCalendarFormProps {
  onSubmitSuccess?: () => void;
}

const DemoCalendarForm: React.FC<DemoCalendarFormProps> = ({ onSubmitSuccess }) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isMobile = useIsMobile();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot) {
      toast({
        title: "Missing information",
        description: "Please select both a date and time for your demo.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Format the date and time for submission
      const formattedDate = format(date, 'yyyy-MM-dd');
      
      // Create form data for submission
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('company', company);
      formData.append('date', formattedDate);
      formData.append('time', timeSlot);
      
      // Link to GHL form submission endpoint
      const ghlFormEndpoint = "https://www.go.suddenimpact.agency/l/1089001/2024-05-07/5sgcb";
      
      // Submit to GHL form
      const response = await fetch(ghlFormEndpoint, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // GHL form may require this
      });
      
      // Mark as submitted and show success message
      setIsSubmitted(true);
      toast({
        title: "Demo Scheduled!",
        description: `Your demo is scheduled for ${format(date, 'MMMM d, yyyy')} at ${timeSlot}.`,
      });
      
      // Call the onSubmitSuccess callback if provided
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Scheduling Error",
        description: "We couldn't schedule your demo. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Show confirmation after submission
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-8"
      >
        <div className="w-16 h-16 mx-auto rounded-full bg-agency-vibrantPurple flex items-center justify-center text-white mb-6">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Demo Scheduled!</h3>
        <p className="text-muted-foreground mb-2">
          Your demo is scheduled for {date && format(date, 'MMMM d, yyyy')} at {timeSlot}.
        </p>
        <p className="text-muted-foreground">
          We've sent a confirmation to your email with all the details.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-xl font-bold mb-4">Schedule Your Demo</h3>
        <p className="text-muted-foreground mb-6">
          Choose a date and time that works for you, and our team will walk you through a personalized demonstration.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-agency-vibrantPurple focus:border-agency-vibrantPurple"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-agency-vibrantPurple focus:border-agency-vibrantPurple"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-agency-vibrantPurple focus:border-agency-vibrantPurple"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-agency-vibrantPurple focus:border-agency-vibrantPurple"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Select Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground",
                    "bg-white/5 border border-white/10 hover:bg-white/10"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => {
                    // Disable past dates and weekends
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    const day = date.getDay();
                    return date < today || day === 0 || day === 6;
                  }}
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Select Time
            </label>
            <select
              value={timeSlot || ''}
              onChange={(e) => setTimeSlot(e.target.value)}
              disabled={!date}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-agency-vibrantPurple focus:border-agency-vibrantPurple"
            >
              <option value="">Select a time</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full gradient-bg text-white py-2"
          disabled={isSubmitting || !date || !timeSlot}
        >
          {isSubmitting ? "Scheduling..." : "Schedule Demo"}
        </Button>
        
        <p className="text-xs text-center text-muted-foreground">
          All scheduled demos are with our team at team@suddenimpact.io
        </p>
      </form>
    </motion.div>
  );
};

export default DemoCalendarForm;
