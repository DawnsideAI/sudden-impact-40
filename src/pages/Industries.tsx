
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/design/SectionTitle';
import { Check } from 'lucide-react';

const industries = [
  { id: "restaurants", label: "Restaurants & Hospitality", value: "restaurants" },
  { id: "realestate", label: "Real Estate", value: "realestate" },
  { id: "healthcare", label: "Healthcare & Wellness", value: "healthcare" },
  { id: "contractors", label: "Service Contractors", value: "contractors" },
  { id: "other", label: "Other Industry", value: "other" },
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
  other: [
    { id: "other", label: "Other Business Type" },
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
  };

  const handleBusinessTypeSelect = (businessType: string) => {
    setSelectedBusinessType(businessType);
  };

  const handleSubmit = () => {
    if (selectedIndustry && selectedBusinessType) {
      // Map to appropriate industry page
      // In a real implementation, you might have more complex routing logic
      const route = `/industries/${selectedIndustry}`;
      
      // Store the business type in session storage for the industry page to use
      sessionStorage.setItem('selectedBusinessType', selectedBusinessType);
      
      setRedirect(route);
    }
  };

  if (redirect) {
    return <Navigate to={redirect} replace />;
  }

  return (
    <Layout lightMode={true}>
      <section className="py-24 relative overflow-hidden">
        {/* Background with pink/aqua gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/5 via-white to-brand-aqua/5"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-aqua/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <SectionTitle
            title="Find Your Industry-Specific AI Solution"
            subtitle="Our AI voice agents are tailored to meet the unique needs of your industry"
            centered={true}
          />
          
          <div className="max-w-3xl mx-auto mt-12 rounded-xl bg-white p-8 shadow-lg border border-gray-100">
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Step 1: Select Your Industry</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {industries.map((industry) => (
                  <motion.button
                    key={industry.id}
                    onClick={() => handleIndustrySelect(industry.value as BusinessType)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-lg text-left relative overflow-hidden ${
                      selectedIndustry === industry.value
                        ? "border-2 border-brand-aqua shadow-md"
                        : "border border-gray-200 hover:border-brand-pink/30"
                    }`}
                  >
                    {selectedIndustry === industry.value && (
                      <span className="absolute top-2 right-2 bg-brand-aqua text-white rounded-full p-0.5">
                        <Check size={12} />
                      </span>
                    )}
                    
                    <span className="text-base font-medium block">{industry.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
            
            {selectedIndustry && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mb-10"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Step 2: Select Your Business Type</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {businessTypes[selectedIndustry].map((type) => (
                    <motion.button
                      key={type.id}
                      onClick={() => handleBusinessTypeSelect(type.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-lg text-left relative overflow-hidden ${
                        selectedBusinessType === type.id
                          ? "border-2 border-brand-pink shadow-md"
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
            
            <div className="text-center mt-8">
              <Button
                onClick={handleSubmit}
                disabled={!selectedIndustry || !selectedBusinessType}
                className="bg-gradient-to-r from-brand-pink to-brand-aqua hover:opacity-90 px-8 py-6 rounded-lg font-medium text-white text-lg"
              >
                See Your Tailored Solution
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
