import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';

interface NicheContactFormProps {
  industry: 'healthcare' | 'real-estate' | 'restaurants' | 'service-contractors' | 'music-producers';
}

const NicheContactForm = ({ industry }: NicheContactFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending');

    let data = {
      name,
      email,
      message,
      industry
    };

    await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify(data)
    }).then((res) => {
      if (res.status === 200) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Failed to send message. Status code:', res.status);
      }
    }).catch((error) => {
      console.error('An error occurred while sending the message:', error);
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Get in Touch"
          subtitle={`Let's discuss how AI voice agents can transform your ${industry.replace('-', ' ')} business`}
          centered={true}
        />
        
        <div className="mt-12 max-w-3xl mx-auto">
          {submitted ? (
            <StyleProvider>
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center">
                <Check className="mx-auto mb-4 w-10 h-10 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
                <p className="text-gray-600">We'll be in touch shortly.</p>
              </div>
            </StyleProvider>
          ) : (
            <StyleProvider>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-pink focus:ring-brand-pink sm:text-sm"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-pink focus:ring-brand-pink sm:text-sm"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-pink focus:ring-brand-pink sm:text-sm"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-brand-pink to-brand-aqua text-white hover:opacity-90 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 text-lg"
                >
                  Send Message
                  <ArrowRight size={18} />
                </Button>
              </form>
            </StyleProvider>
          )}
        </div>
      </div>
    </section>
  );
};

export default NicheContactForm;
