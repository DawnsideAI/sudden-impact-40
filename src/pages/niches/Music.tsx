import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Music as MusicIcon, Calendar, Star, User, Phone } from 'lucide-react';
import NicheLayout from '@/components/niches/NicheLayout';
import NicheContactForm from '@/components/niches/NicheContactForm';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';
import IndustryAnimation from '@/components/industries/IndustryAnimation';
import MusicPricing from '@/components/industries/MusicPricing';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useIsMobile } from '@/hooks/use-mobile';
import AIDemoCallDialog from '@/components/niches/AIDemoCallDialog';

const MusicNiche = () => {
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [showCallDialog, setShowCallDialog] = useState(false);
  const isMobile = useIsMobile();
  
  const benefits = [
    "Book studio time and performances in seconds",
    "Receive instant booking confirmations",
    "Connect with fans through automated systems",
    "Track merchandise sales and inventory",
    "Get reminders for upcoming sessions",
    "Manage fan club memberships and special requests"
  ];

  const workflows = [
    {
      title: "Booking Management Workflow",
      trigger: "Form submission or call inquiry",
      actions: "Confirmation email/SMS, add to calendar, 24hr reminder",
      icon: Calendar
    },
    {
      title: "Fan Engagement System",
      trigger: "Fan contact or merchandise request",
      actions: "Automated response with personalized information",
      icon: Star
    },
    {
      title: "Review & Promotion Request",
      trigger: "After performance or release",
      actions: "SMS and email with social sharing links",
      icon: MusicIcon
    },
    {
      title: "Loyalty Campaign",
      trigger: "Fan milestone or special event",
      actions: "Personalized exclusive offer via SMS/email",
      icon: User
    }
  ];

  return (
    <NicheLayout 
      industry="music"
      title="Book Studio Time or Manage Fan Engagement"
      subtitle="Instant booking, fan communication, and merchandise management — all in one seamless experience."
    >
      {/* Music Industry Animation Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <IndustryAnimation industry="music" />
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5">
        <div className="container-custom">
          <SectionTitle
            title="Enhance Your Music Business"
            subtitle="Our AI voice agents handle bookings and inquiries while you focus on creating exceptional music"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <StyleProvider key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center shadow-md">
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
      
      {/* New Pricing Section */}
      <MusicPricing />
      
      {/* Workflows Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Music Business Automation Workflows"
            subtitle="Seamless experiences from booking to fan engagement"
            centered={true}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflows.map((workflow, index) => (
              <StyleProvider key={index} delay={index * 0.1} className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center shadow-md mb-4">
                      {React.createElement(workflow.icon, { className: "text-white", size: 20 })}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{workflow.title}</h3>
                  </div>
                  <div className="space-y-3 flex-grow">
                    <div>
                      <p className="text-sm font-medium text-gray-500">TRIGGER</p>
                      <p className="text-gray-700">{workflow.trigger}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">ACTIONS</p>
                      <p className="text-gray-700">{workflow.actions}</p>
                    </div>
                  </div>
                </div>
              </StyleProvider>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5">
        <div className="container-custom">
          <SectionTitle
            title="Success Stories from Music Professionals"
            subtitle="See how our AI voice agents are helping music businesses like yours"
            centered={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua flex items-center justify-center text-white text-2xl font-bold">
                AM
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 italic mb-4">
                  "Since implementing the AI voice agent, I've been able to focus more on music production and less on answering routine calls. Our booking inquiries are handled efficiently 24/7, and our merchandise sales have increased by 45%. It's been a game-changer for our studio."
                </p>
                <div>
                  <h4 className="text-gray-800 font-medium">Alex Morgan</h4>
                  <p className="text-gray-500">Independent Music Producer, Rhythm Studios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* New Contact Section - Styled like the second screenshot */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-pink to-brand-aqua bg-clip-text text-transparent">
                Ready to Transform Your Music Business?
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Schedule a personalized demo to see how our AI voice agents can revolutionize your 
              customer interactions and operational efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-brand-pink to-brand-aqua text-white hover:opacity-90 px-8 py-6"
                onClick={() => setShowCallDialog(true)}
              >
                <Phone className="mr-2 h-5 w-5" />
                Try AI Demo Now
              </Button>
              
              <Button
                variant="outline"
                className="border border-gray-200 px-8 py-6"
                onClick={() => setShowBookingDialog(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Booking Dialog - Updated with new booking URL */}
      <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto bg-white border border-brand-pink/10 shadow-xl">
          <DialogTitle className="text-xl font-bold text-center mb-4 text-gray-800">Schedule Your Consultation</DialogTitle>
          <div className="w-full calendar-container p-1 md:p-4 bg-gradient-to-br from-brand-pink/5 to-brand-aqua/5 rounded-lg">
            <div className="iframe-container">
              <iframe 
                src="https://link.suddenimpactagency.io/widget/bookings/XaOGCzWWKmrQWqpbwWlq-4f31f69f-689b-4bd4-95d8-c885cf48e9ac-ff5dc43e-63e9-438c-a258-ad582d9e066e-a667fee4-6211-4e1e-9aed-df4252fe1635" 
                style={{ 
                  width: "100%",
                  height: isMobile ? "600px" : "700px", 
                  border: "none",
                  borderRadius: "8px",
                }}
                scrolling="no" 
                id="booking-iframe-niche"
                className="no-scrollbar bg-white shadow-md"
              ></iframe>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* AI Demo Call Dialog */}
      <AIDemoCallDialog 
        open={showCallDialog} 
        onOpenChange={setShowCallDialog}
        phoneNumber="+1 (302) 618-3977"
        industry="music"
      />
      
      {/* Contact Form */}
      <NicheContactForm industry="music" />
    </NicheLayout>
  );
};

export default MusicNiche;
