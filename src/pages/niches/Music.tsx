
import React from 'react';
import NicheLayout from '@/components/niches/NicheLayout';
import { Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/design/SectionTitle';
import StyleProvider from '@/components/design/StyleProvider';
import { NicheContactForm } from '@/components/niches/NicheContactForm';
import { AIDemoCallDialog } from '@/components/niches/AIDemoCallDialog';

const MusicNiche = () => {
  return (
    <NicheLayout
      industry="music"
      title="AI Voice Agents for Music Producers & Artists"
      subtitle="Automated booking, fan engagement, and merchandise management - all handled by your AI voice assistant"
    >
      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <StyleProvider className="text-center mb-16">
            <SectionTitle
              title="How It Works For Music Professionals"
              subtitle="Our AI voice agents handle routine calls while you focus on your creative work"
            />
          </StyleProvider>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-brand-pink">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Customized Setup</h3>
              <p className="text-gray-600">
                We configure your AI voice agent to understand your specific offerings, pricing, availability, and style of communication.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-brand-aqua/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-brand-aqua">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Call Handling</h3>
              <p className="text-gray-600">
                Your AI agent answers calls 24/7, handling booking inquiries, fan requests, and merchandise orders with natural conversation.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-brand-purple">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Seamless Integration</h3>
              <p className="text-gray-600">
                All bookings and orders are automatically added to your calendar and management systems with detailed information.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              className="bg-gradient-to-r from-brand-purple to-brand-aqua text-white px-8 py-6 rounded-lg text-lg font-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Custom AI Agent
            </Button>
          </div>
        </div>
      </section>
      
      {/* Common Pain Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <StyleProvider className="mb-16">
            <SectionTitle
              title="Solving Music Industry Challenges"
              subtitle="Our AI voice assistants address the unique needs of music producers and artists"
              centered={true}
            />
          </StyleProvider>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-brand-pink">Booking Management</h3>
              <p className="text-gray-600 mb-4">
                Handle gig inquiries, studio sessions, and other bookings automatically, ensuring no opportunity is missed due to missed calls.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-pink rounded-full"></span>
                  <span className="text-gray-700">Qualify leads based on budget and requirements</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-pink rounded-full"></span>
                  <span className="text-gray-700">Synchronize with your calendar in real-time</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-pink rounded-full"></span>
                  <span className="text-gray-700">Send automated booking confirmations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-brand-aqua">Fan Engagement</h3>
              <p className="text-gray-600 mb-4">
                Respond to fan inquiries instantly, providing information about upcoming shows, releases, and merchandise availability.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-aqua rounded-full"></span>
                  <span className="text-gray-700">Answer FAQs about your music and performances</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-aqua rounded-full"></span>
                  <span className="text-gray-700">Process fan club memberships and special requests</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-aqua rounded-full"></span>
                  <span className="text-gray-700">Collect fan contact information for your mailing list</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-brand-purple">Merchandise Management</h3>
              <p className="text-gray-600 mb-4">
                Take merchandise orders by phone, handling inventory checks, payment processing, and shipping arrangements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-purple rounded-full"></span>
                  <span className="text-gray-700">Process orders for albums, merchandise, and more</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-purple rounded-full"></span>
                  <span className="text-gray-700">Upsell additional items based on customer interests</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-purple rounded-full"></span>
                  <span className="text-gray-700">Provide order status updates to customers</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-brand-pink">Studio Management</h3>
              <p className="text-gray-600 mb-4">
                Handle studio booking inquiries, session scheduling, and client communication while you focus on production.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-pink rounded-full"></span>
                  <span className="text-gray-700">Schedule studio time based on your availability</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-pink rounded-full"></span>
                  <span className="text-gray-700">Collect project requirements and client information</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-pink rounded-full"></span>
                  <span className="text-gray-700">Send reminders and preparation instructions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <StyleProvider className="mb-12">
            <SectionTitle
              title="Success Stories"
              subtitle="How our AI voice agents are helping music professionals"
              centered={true}
            />
          </StyleProvider>
          
          <div className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-sm max-w-4xl mx-auto border border-gray-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                  <img 
                    src="/lovable-uploads/04e02938-36ca-4abc-adad-95afd668326b.png" 
                    alt="Music Producer testimonial" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-700 italic mb-6">
                  "Since implementing the AI voice agent, I've been able to focus more on music production and less on answering routine calls. Our booking inquiries are handled efficiently 24/7, and our merchandise sales have increased by 45%. It's been a game-changer for our studio."
                </p>
                <div>
                  <p className="font-bold text-gray-900">Alex Morgan</p>
                  <p className="text-gray-600">Independent Music Producer, Rhythm Studios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container-custom">
          <StyleProvider className="mb-16">
            <SectionTitle
              title="Ready to Transform Your Music Business?"
              subtitle="Get started with your custom AI voice agent today"
              centered={true}
            />
          </StyleProvider>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-pink flex items-center justify-center text-white mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Music Industry Specialists</p>
                    <p className="text-gray-600 text-sm">Our team understands the unique needs of music producers and artists</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-aqua flex items-center justify-center text-white mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Custom-Trained AI</p>
                    <p className="text-gray-600 text-sm">Voice agents trained specifically for music business terminology</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-purple flex items-center justify-center text-white mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Seamless Integration</p>
                    <p className="text-gray-600 text-sm">Works with your existing booking and management tools</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-pink flex items-center justify-center text-white mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">24/7 Support</p>
                    <p className="text-gray-600 text-sm">Our team is always available to help with any questions</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <AIDemoCallDialog industry="music" />
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <NicheContactForm industry="music" />
            </div>
          </div>
        </div>
      </section>
    </NicheLayout>
  );
};

export default MusicNiche;
