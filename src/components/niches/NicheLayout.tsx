
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import StyleProvider from '@/components/design/StyleProvider';
import { Button } from '@/components/ui/button';

interface NicheLayoutProps {
  children: React.ReactNode;
  industry: 'healthcare' | 'real-estate' | 'restaurants';
  title: string;
  subtitle: string;
}

const NicheLayout = ({ children, industry, title, subtitle }: NicheLayoutProps) => {
  // Define industry-specific gradients and colors
  const getGradient = () => {
    switch(industry) {
      case 'healthcare':
        return 'from-brand-aqua to-brand-pink';
      case 'real-estate':
        return 'from-brand-purple to-brand-aqua';
      case 'restaurants':
        return 'from-brand-pink to-brand-aqua';
      default:
        return 'from-brand-pink to-brand-aqua';
    }
  };
  
  const gradient = getGradient();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Simple header without any navigation to main site */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container-custom">
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/293aebbf-1435-4e16-867f-2a95f52ef685.png" 
              alt="Sudden Impact Agency Logo" 
              className="h-16 md:h-20 w-auto" 
            />
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="bg-gray-50 pt-16 pb-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <StyleProvider>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                  {title}
                </span>
              </h1>
              <p className="text-xl text-gray-600 mt-6">
                {subtitle}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className={`bg-gradient-to-r ${gradient} text-white hover:opacity-90 px-6 py-6 rounded-lg shadow-lg flex items-center gap-2 text-lg`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                  <ArrowRight size={18} />
                </Button>
                
                <Button
                  variant="outline"
                  className="px-6 py-6 rounded-lg border border-gray-200 hover:border-brand-pink/30 text-gray-700 flex items-center gap-2 text-lg"
                >
                  <Phone size={18} />
                  Schedule Demo
                </Button>
              </div>
            </StyleProvider>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      {children}
      
      {/* Footer - Simple without links to main site */}
      <footer className="bg-gray-50 border-t border-gray-200 py-10">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-gray-600">© {new Date().getFullYear()} Sudden Impact Agency. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2">AI Voice Agents for Business Communication</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NicheLayout;
