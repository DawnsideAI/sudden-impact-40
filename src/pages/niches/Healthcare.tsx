
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import NicheLayout from '@/components/niches/NicheLayout';
import NicheContactForm from '@/components/niches/NicheContactForm';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';
import FeatureCard from '@/components/design/FeatureCard';

const Healthcare = () => {
  const benefits = [
    "Reduce front-desk staff workload by 70%",
    "Decrease no-show appointments by 45%",
    "Handle patient inquiries 24/7 without additional staffing",
    "Improve patient satisfaction with prompt responses",
    "HIPAA-compliant communication for patient data security",
    "Custom scheduling rules for different providers and services"
  ];

  return (
    <NicheLayout 
      industry="healthcare"
      title="Healthcare AI Voice Solutions"
      subtitle="Streamline patient scheduling, reduce administrative burden, and improve patient experience with AI voice agents tailored for healthcare practices."
    >
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-brand-aqua/5 to-brand-pink/5">
        <div className="container-custom">
          <SectionTitle
            title="Transform Your Healthcare Practice"
            subtitle="Our AI voice agents handle appointment scheduling, patient inquiries, and follow-ups while your staff focuses on in-person care"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <StyleProvider key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-aqua to-brand-pink flex items-center justify-center shadow-md">
                      <Check className="text-white" size={16} />
                    </div>
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </StyleProvider>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="HIPAA-Compliant Voice AI"
            subtitle="Purpose-built features for healthcare providers"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Check}
              title="Patient Scheduling"
              description="AI voice agents handle new appointments, reschedules, and cancellations according to your practice's availability rules."
              index={0}
            />
            <FeatureCard
              icon={Check}
              title="Insurance Verification"
              description="Collect and verify insurance information before appointments to streamline patient check-in process."
              index={1}
            />
            <FeatureCard
              icon={Check}
              title="Appointment Reminders"
              description="Automated call reminders to reduce no-shows and late cancellations, improving practice efficiency."
              index={2}
            />
            <FeatureCard
              icon={Check}
              title="Patient Triage"
              description="Screen calls for urgent issues and route to staff when necessary while handling routine inquiries."
              index={3}
            />
            <FeatureCard
              icon={Check}
              title="EHR Integration"
              description="Seamlessly connect with your existing Electronic Health Record system for updated patient information."
              index={4}
            />
            <FeatureCard
              icon={Check}
              title="Multilingual Support"
              description="Communicate with patients in their preferred language to ensure clear understanding."
              index={5}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-brand-aqua/5 to-brand-pink/5">
        <div className="container-custom">
          <SectionTitle
            title="Trusted by Healthcare Professionals"
            subtitle="See how our AI voice agents are helping practices like yours"
            centered={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-brand-aqua to-brand-pink flex items-center justify-center text-white text-2xl font-bold">
                DR
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 italic mb-4">
                  "Our front desk staff was overwhelmed with calls before implementing this AI solution. Now they can focus on patients in the office while the voice agent handles scheduling and routine inquiries. We've seen a 45% reduction in no-shows and our staff is much happier."
                </p>
                <div>
                  <h4 className="text-gray-800 font-medium">Dr. Rebecca Harris</h4>
                  <p className="text-gray-500">Director, Wellness Medical Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <NicheContactForm industry="healthcare" />
    </NicheLayout>
  );
};

export default Healthcare;
