
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import DemoRequestForm from "@/components/demo/DemoRequestForm";
import A2PFormEmbed from "@/components/demo/A2PFormEmbed";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionTitle from "@/components/design/SectionTitle";

const Demo = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [a2pFormCompleted, setA2pFormCompleted] = useState(false);
  
  // Check localStorage for form completion status on component mount
  useEffect(() => {
    const formCompleted = localStorage.getItem('a2pFormCompleted') === 'true';
    setA2pFormCompleted(formCompleted);
  }, []);
  
  // Handle A2P form submission
  const handleA2PFormSubmit = () => {
    setA2pFormCompleted(true);
    setShowDemoForm(true);
  };

  return (
    <Layout>
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <SectionTitle
              title="Experience Our AI Voice Agent Demo"
              subtitle="Complete the A2P form to access our AI demo"
              centered
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="overflow-hidden shadow-lg border border-gray-100">
              {!a2pFormCompleted ? (
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">A2P Registration Form</h3>
                  <p className="text-gray-600 mb-6">
                    Please complete this form to register for our AI voice agent demo. 
                    This is required by telecommunications regulations.
                  </p>
                  <A2PFormEmbed onFormSubmit={handleA2PFormSubmit} />
                </div>
              ) : (
                <DemoRequestForm onFormSubmit={() => {}} />
              )}
            </Card>
          </motion.div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-2">Need assistance?</p>
            <Button 
              variant="outline" 
              onClick={() => {
                // For demo purposes - clear the form completion status
                localStorage.removeItem('a2pFormCompleted');
                setA2pFormCompleted(false);
              }}
              className="text-brand-aqua border-brand-aqua/20 hover:bg-brand-aqua/5"
            >
              Reset Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;
