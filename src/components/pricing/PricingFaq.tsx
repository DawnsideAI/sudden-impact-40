
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "What happens after the 7-day trial?",
    answer: "If you don't cancel before the trial ends, your chosen plan will begin automatically, and your card will be charged the monthly (or annual) subscription fee, along with a one-time $197 setup fee."
  },
  {
    question: "Can I cancel during the trial?",
    answer: "Absolutely. You can cancel anytime during your 7-day trial with no charge."
  },
  {
    question: "What are AI Engagement Minutes?",
    answer: "AI Engagement Minutes are the amount of time your AI agent spends actively engaging with your leads or customers. This includes live calls, demo sessions, and appointment workflows."
  },
  {
    question: "What if I go over my monthly minutes?",
    answer: "If you exceed your plan's allocated minutes, you'll be charged an overage fee per minute at the current rate (currently $0.15/min). Your card on file will be billed automatically."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes! You can change your plan at any time. Upgrades go into effect immediately; downgrades take effect at the start of the next billing cycle."
  }
];

const PricingFaq = () => {
  const [openItem, setOpenItem] = useState<string | null>("item-0");

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            Everything you need to know about our pricing and plans
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-xl overflow-hidden">
            <Accordion
              type="single"
              collapsible
              value={openItem}
              onValueChange={setOpenItem}
              className="w-full"
            >
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={`item-${index}`}
                  value={`item-${index}`}
                  className={cn(
                    "border-b border-white/10 last:border-0",
                    "transition-all duration-200"
                  )}
                >
                  <AccordionTrigger className="py-5 px-6 hover:no-underline group">
                    <span className="text-lg font-medium text-white group-hover:text-agency-vibrantPurple transition-colors">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5">
                    <div className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingFaq;
