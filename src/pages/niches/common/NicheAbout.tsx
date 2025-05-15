
import React from 'react';
import { useParams } from 'react-router-dom';
import NicheLayout from '@/components/niches/NicheLayout';
import StyleProvider from '@/components/design/StyleProvider';
import SectionTitle from '@/components/design/SectionTitle';

const NicheAbout = () => {
  const { industry = 'healthcare' } = useParams();
  const validIndustry = ['healthcare', 'real-estate', 'restaurants', 'service-contractors'].includes(industry) 
    ? industry 
    : 'healthcare';
  
  const getIndustryTitle = () => {
    switch(validIndustry) {
      case 'healthcare':
        return 'Healthcare Practices';
      case 'real-estate':
        return 'Real Estate Agencies';
      case 'restaurants':
        return 'Restaurants & Hospitality';
      case 'service-contractors':
        return 'Service Contractors';
      default:
        return 'Businesses';
    }
  };

  const getDescription = () => {
    switch(validIndustry) {
      case 'healthcare':
        return 'healthcare practices optimize patient appointments and communications';
      case 'real-estate':
        return 'real estate professionals streamline client interactions and property showings';
      case 'restaurants':
        return 'restaurants and hospitality businesses enhance reservation systems and guest experiences';
      case 'service-contractors':
        return 'service contractors automate appointment booking and customer follow-ups';
      default:
        return 'businesses transform their customer communication';
    }
  };
  
  const industryTitle = getIndustryTitle();
  const description = getDescription();
  
  const timeline = [
    {
      year: "2019",
      title: "Our Founding",
      description: "Sudden Impact Agency was founded with a mission to transform business communications using AI technology."
    },
    {
      year: "2020",
      title: "First AI Voice Assistant",
      description: "Launched our first AI Voice Assistant solution, helping businesses automate simple phone interactions."
    },
    {
      year: "2021",
      title: "Industry Specialization",
      description: `Began developing industry-specific solutions for ${validIndustry.replace('-', ' ')} businesses.`
    },
    {
      year: "2022",
      title: "Enhanced AI Capabilities",
      description: "Integrated advanced natural language processing and custom workflow automation."
    },
    {
      year: "2023",
      title: "Enterprise Solution Launch",
      description: "Expanded offerings to serve large enterprise clients with complex communication needs."
    },
    {
      year: "2024",
      title: "Where We Are Today",
      description: `Helping thousands of ${industryTitle.toLowerCase()} across North America transform their customer communications and business operations.`
    }
  ];

  return (
    <NicheLayout 
      industry={validIndustry as any}
      title="About Sudden Impact Agency"
      subtitle={`We help ${description} through revolutionary AI voice technology.`}
    >
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <StyleProvider className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700">
                At Sudden Impact Agency, we're on a mission to revolutionize how {industryTitle.toLowerCase()} communicate with their customers and manage their operations. Our AI Voice Agents are designed to handle routine communications, freeing up your team to focus on what truly matters: delivering exceptional service.
              </p>
              <p className="text-gray-700">
                We understand the unique challenges faced by {industryTitle.toLowerCase()}, from managing appointments to following up with customers. Our solutions are tailored specifically for your industry, ensuring seamless integration with your existing workflows.
              </p>
              <h2 className="text-3xl font-bold mt-12 mb-6">Our Journey</h2>
            </StyleProvider>
            
            <div className="mt-10 space-y-12">
              {timeline.map((item, index) => (
                <StyleProvider key={index} delay={index * 0.1} className="flex">
                  <div className="w-24 flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-pink to-brand-aqua flex items-center justify-center text-white font-semibold">
                      {item.year.slice(2)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </StyleProvider>
              ))}
            </div>
          </div>
        </div>
      </section>
    </NicheLayout>
  );
};

export default NicheAbout;
