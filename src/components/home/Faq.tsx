
import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "What does Sudden Impact Agency offer?",
    answer: "We provide plug-and-play AI voice agents specifically designed for service-based businesses like contractors, call centers, restaurants, healthcare providers, and more. Our agents handle calls, qualify leads, schedule appointments, and integrate seamlessly into your workflows."
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
    answer: "Yes! We offer a 7-day free trial on all subscription plans."
  },
  {
    question: "Do I need a credit card for the trial?",
    answer: "Yes, a valid credit card is required to start the trial. However, you won't be charged until the trial ends."
  }
];

const FaqItem = ({ question, answer, isOpen, toggle, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="border-b border-gray-200 py-5"
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={toggle}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? <FiChevronUp className="h-5 w-5 text-agency-blue" /> : <FiChevronDown className="h-5 w-5 text-gray-500" />}
        </span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-3"
        >
          <p className="text-gray-600">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Find answers to common questions about our AI voice agent solutions
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => toggleFaq(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
