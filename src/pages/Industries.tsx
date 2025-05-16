
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/design/SectionTitle';
import { Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const industries = [
  { id: "restaurants", label: "Restaurants & Hospitality", value: "restaurants" },
  { id: "realestate", label: "Real Estate / Mortgage", value: "realestate" },
  { id: "healthcare", label: "Healthcare & Medical Providers", value: "healthcare" },
  { id: "contractors", label: "Service Contractors", value: "contractors" },
  { id: "music", label: "Music Producers & Artists", value: "music" },
  { id: "custom", label: "Custom Solutions", value: "custom" },
];

const businessTypes = {
  restaurants: [
    { id: "restaurant", label: "Restaurant" },
    { id: "cafe", label: "Café or Coffee Shop" },
    { id: "bar", label: "Bar or Nightclub" },
    { id: "hotel", label: "Hotel" },
    { id: "catering", label: "Catering Service" },
  ],
  realestate: [
    { id: "agency", label: "Real Estate Agency" },
    { id: "broker", label: "Individual Broker/Agent" },
    { id: "property-management", label: "Property Management" },
    { id: "developer", label: "Property Developer" },
    { id: "mortgage", label: "Mortgage Broker/Lender" },
  ],
  healthcare: [
    { id: "medical-practice", label: "Medical Practice" },
    { id: "dental", label: "Dental Office" },
    { id: "therapy", label: "Therapy/Counseling" },
    { id: "wellness", label: "Wellness Center" },
    { id: "chiropractic", label: "Chiropractic Office" },
  ],
  contractors: [
    { id: "hvac", label: "HVAC" },
    { id: "plumbing", label: "Plumbing" },
    { id: "electrical", label: "Electrical" },
    { id: "landscaping", label: "Landscaping" },
    { id: "cleaning", label: "Cleaning Service" },
    { id: "general", label: "General Contractor" },
  ],
  music: [
    { id: "producer", label: "Music Producer" },
    { id: "artist", label: "Recording Artist" },
    { id: "studio", label: "Recording Studio" },
    { id: "label", label: "Independent Label" },
    { id: "dj", label: "DJ/Performer" },
  ],
  custom: [
    { id: "enterprise", label: "Enterprise Business" },
    { id: "agency", label: "Marketing Agency" },
    { id: "saas", label: "SaaS Company" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "other", label: "Other Industry" },
  ],
};

type BusinessType = keyof typeof businessTypes;

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<BusinessType | null>(null);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string | null>(null);
  const [redirect, setRedirect] = useState<string | null>(null);

  const handleIndustrySelect = (industry: BusinessType) => {
    setSelectedIndustry(industry);
    setSelectedBusinessType(null); // Reset business type when industry changes
    
    // If custom solutions is selected, direct to calendar booking
    if (industry === 'custom') {
      window.open('https://link.suddenimpactagency.io/widget/booking/MYRdt5Un7mP29erZS5rx', '_blank');
    }
  };

  const handleBusinessTypeSelect = (businessType: string) => {
    setSelectedBusinessType(businessType);
  };

  const handleSubmit = () => {
    if (selectedIndustry && selectedBusinessType) {
      // Map to appropriate industry page
      const route = `/industries/${selectedIndustry}`;
      
      // Store the business type in session storage for the industry page to use
      sessionStorage.setItem('selectedBusinessType', selectedBusinessType);
      
      toast({
        title: "Perfect match!",
        description: "We're taking you to your customized industry solution.",
      });
      
      setRedirect(route);
    }
  };

  if (redirect) {
    return <Navigate to={redirect} replace />;
  }

  return (
    <Layout lightMode={true}>
      <section className="py-24 relative overflow-hidden">
        {/* Enhanced background with pink/aqua gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/5 via-white to-brand-aqua/5"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-aqua/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-brand-purple/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <SectionTitle
            title="Find Your Industry-Specific AI Solution"
            subtitle="Our AI voice agents are tailored to meet the unique needs of your industry"
            centered={true}
            className="mb-16"
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto rounded-xl bg-white p-8 shadow-lg border border-gray-100"
          >
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-brand-pink/10 text-brand-pink flex items-center justify-center mr-3 text-sm font-bold">1</span>
                Select Your Industry
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map((industry) => (
                  <motion.button
                    key={industry.id}
                    onClick={() => handleIndustrySelect(industry.value as BusinessType)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-lg text-left relative overflow-hidden ${
                      selectedIndustry === industry.value
                        ? "border-2 border-brand-aqua shadow-md bg-gradient-to-br from-brand-aqua/5 to-transparent"
                        : "border border-gray-200 hover:border-brand-pink/30"
                    }`}
                  >
                    {selectedIndustry === industry.value && (
                      <span className="absolute top-2 right-2 bg-brand-aqua text-white rounded-full p-0.5">
                        <Check size={12} />
                      </span>
                    )}
                    
                    <span className="text-base font-medium block">{industry.label}</span>
                    {industry.id === 'custom' && (
                      <span className="text-xs text-gray-500 mt-1 block">
                        Need a tailored plan? We build fully custom solutions for high-growth businesses.
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
            
            {selectedIndustry && selectedIndustry !== 'custom' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mb-10"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-aqua/10 text-brand-aqua flex items-center justify-center mr-3 text-sm font-bold">2</span>
                  Select Your Business Type
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {businessTypes[selectedIndustry].map((type) => (
                    <motion.button
                      key={type.id}
                      onClick={() => handleBusinessTypeSelect(type.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-lg text-left relative overflow-hidden ${
                        selectedBusinessType === type.id
                          ? "border-2 border-brand-pink shadow-md bg-gradient-to-br from-brand-pink/5 to-transparent"
                          : "border border-gray-200 hover:border-brand-aqua/30"
                      }`}
                    >
                      {selectedBusinessType === type.id && (
                        <span className="absolute top-2 right-2 bg-brand-pink text-white rounded-full p-0.5">
                          <Check size={12} />
                        </span>
                      )}
                      
                      <span className="text-base font-medium block">{type.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
            
            {selectedIndustry && selectedIndustry !== 'custom' && (
              <div className="text-center mt-8">
                <Button
                  onClick={handleSubmit}
                  disabled={!selectedBusinessType}
                  className={`pink-aqua-bg hover:opacity-90 px-8 py-6 rounded-lg font-medium text-white text-lg shadow-md transition-all duration-300 ${
                    !selectedBusinessType ? 'opacity-70' : 'hover:shadow-lg'
                  }`}
                >
                  See Your Tailored Solution
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
