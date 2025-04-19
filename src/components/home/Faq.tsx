
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does Sudden Impact Agency offer?",
    answer: "We provide plug-and-play AI voice agents specifically designed for service-based businesses. Our agents handle calls, qualify leads, schedule appointments, and integrate seamlessly into your workflows."
  },
  {
    question: "Are your AI voice agents customizable?",
    answer: "Yes! We offer both ready-to-deploy voice agents and fully custom AI solutions built to match your specific industry needs and internal systems."
  },
  {
    question: "What is the Sudden Impact Automation Suite?",
    answer: "It's our bundled platform that includes voice agents, CRM tools, smart calendars, funnel pages, and automation systems—all under one streamlined SaaS solution."
  },
  {
    question: "Do you integrate with existing tools?",
    answer: "Yes. We support integrations with most CRMs, scheduling systems, and communication platforms. Custom integrations are available for complex workflows."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a 7-day free trial on all subscription plans, allowing you to experience the full power of our AI voice agents."
  }
];

const Faq = () => {
  return (
    <section className="py-24 bg-background/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Find answers to common questions about our AI voice agent solutions
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-morphism rounded-xl overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-white/10 last:border-0 px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <span className="text-lg font-medium text-white hover:text-agency-vibrantPurple transition-colors text-left">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
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

export default Faq;
