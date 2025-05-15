import { useState } from 'react';
import Layout from "@/components/layout/Layout";
import WhiteSection from "@/components/layout/WhiteSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { IndustryCard } from '@/components/solutions/IndustryCard';
import IndustryDetails from '@/components/solutions/IndustryDetails';
import { 
  Building, 
  Home, 
  Utensils, 
  Car, 
  Briefcase, 
  BookOpen, 
  Stethoscope, 
  Wrench, 
  Heart, 
  PhoneCall 
} from 'lucide-react';
import SectionTitle from '@/components/design/SectionTitle';
import StyleProvider from '@/components/design/StyleProvider';

const industries = [
  {
    id: "real-estate",
    icon: <Home className="h-5 w-5" />,
    title: "Real Estate",
    description: "Property management and real estate agent solutions",
    detailsTitle: "AI Voice Agents for Real Estate",
    detailsDescription: "Our AI agents handle property inquiries, schedule viewings, and follow up with potential buyers, freeing up agents to close more deals.",
    features: [
      "Instant response to property listing inquiries",
      "24/7 qualification of potential buyers",
      "Automated viewing scheduling and reminders",
      "Post-viewing feedback collection",
      "Continuous follow-ups with prospective clients"
    ],
    results: [
      "42% increase in qualified leads",
      "28% reduction in admin workload",
      "35% more properties shown per month"
    ]
  },
  {
    id: "contractors",
    icon: <Wrench className="h-5 w-5" />,
    title: "Service Contractors",
    description: "AI voice agents designed specifically for plumbers, electricians, HVAC technicians, and other service contractors.",
    detailsTitle: "AI Voice Agents for Service Contractors",
    detailsDescription: "Our AI voice agents handle customer calls, schedule appointments, and qualify leads, allowing service contractors to focus on delivering quality service.",
    features: [
      "24/7 Availability",
      "Appointment Scheduling",
      "Lead Qualification",
      "Seamless Integration"
    ],
    results: [
      "35% reduction in missed call opportunities",
      "42% increase in service appointments",
      "28% improvement in customer response times"
    ]
  },
  {
    id: "restaurants",
    icon: <Utensils className="h-5 w-5" />,
    title: "Restaurants & Hospitality",
    description: "Streamline reservations, handle menu inquiries, and process orders with our specialized AI voice agents.",
    detailsTitle: "AI Voice Agents for Restaurants",
    detailsDescription: "Our AI voice agents handle reservations, takeout orders, and menu inquiries, freeing up your staff to focus on in-person guests.",
    features: [
      "Reservation Management",
      "Menu Assistance",
      "Order Processing",
      "Special Events & Promotions"
    ],
    results: [
      "45% reduction in missed calls during peak hours",
      "38% increase in takeout orders",
      "31% improvement in reservation accuracy"
    ]
  },
  {
    id: "healthcare",
    icon: <Heart className="h-5 w-5" />,
    title: "Healthcare Providers",
    description: "HIPAA-compliant voice agents to improve patient care, scheduling, and information sharing.",
    detailsTitle: "AI Voice Agents for Healthcare",
    detailsDescription: "Our HIPAA-compliant AI voice agents handle appointment scheduling, patient inquiries, and follow-ups, allowing your staff to focus on patient care.",
    features: [
      "Patient Scheduling",
      "Information Dissemination",
      "Post-Care Follow-Up",
      "HIPAA Compliance"
    ],
    results: [
      "38% reduction in administrative workload",
      "42% decrease in appointment no-shows",
      "35% improvement in patient satisfaction"
    ]
  },
  {
    id: "callcenters",
    icon: <PhoneCall className="h-5 w-5" />,
    title: "Call Centers",
    description: "Enhance operational efficiency with intelligent call routing, support, and data collection.",
    detailsTitle: "AI Voice Agents for Call Centers",
    detailsDescription: "Our AI voice agents handle routine customer inquiries, route calls efficiently, and collect customer data, improving your call center's efficiency and reducing wait times.",
    features: [
      "Call Routing",
      "Customer Support",
      "Data Collection",
      "Call Overflow Management"
    ],
    results: [
      "45% reduction in average wait times",
      "32% improvement in first-call resolution rates",
      "38% increase in customer satisfaction ratings"
    ]
  }
];

const Solutions = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);

  return (
    <Layout lightMode={true}>
      <div className="pt-24 bg-white">
        <WhiteSection className="bg-gray-50 border-b border-gray-200">
          <StyleProvider className="mb-12">
            <SectionTitle
              title="Solutions"
              subtitle="Discover how our AI voice agents and automation tools can transform your business"
              centered={true}
            />
          </StyleProvider>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <div className="space-y-4">
                {industries.slice(0, 6).map((industry, index) => (
                  <IndustryCard
                    key={industry.id}
                    id={industry.id}
                    icon={industry.icon}
                    title={industry.title}
                    description={industry.description}
                    isActive={selectedIndustry.id === industry.id}
                    onClick={() => setSelectedIndustry(industry)}
                    index={index}
                  />
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <motion.div
                key={selectedIndustry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <IndustryDetails industry={selectedIndustry} />
              </motion.div>
            </div>
          </div>
        </WhiteSection>
      </div>
    </Layout>
  );
};

export default Solutions;
