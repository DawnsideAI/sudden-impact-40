import { useState } from 'react';
import Layout from "@/components/layout/Layout";
import WhiteSection from "@/components/layout/WhiteSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { IndustryCard } from '@/components/solutions/IndustryCard';
import IndustryDetails from '@/components/solutions/IndustryDetails';
import { Building, Home, Utensils, Car, Briefcase, BookOpen, Stethoscope } from 'lucide-react';

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
    icon: <FiTool size={24} />,
    title: "Service Contractors",
    description: "AI voice agents designed specifically for plumbers, electricians, HVAC technicians, and other service contractors.",
    color: "bg-blue-50",
    accentColor: "text-blue-600",
    features: [
      {
        title: "24/7 Availability",
        description: "Never miss a call or appointment opportunity with always-on AI voice agents."
      },
      {
        title: "Appointment Scheduling",
        description: "Automate bookings and integrate seamlessly with your existing calendar systems."
      },
      {
        title: "Lead Qualification",
        description: "Pre-screen potential clients to focus your efforts on high-quality leads."
      },
      {
        title: "Seamless Integration",
        description: "Compatible with your existing systems and workflows for a friction-free experience."
      }
    ],
    benefits: [
      "Reduce missed call opportunities",
      "Automate routine scheduling tasks",
      "Improve customer response times",
      "Focus resources on service delivery",
      "Enhance customer satisfaction with responsive communication"
    ]
  },
  {
    id: "restaurants",
    icon: <RiRestaurantLine size={24} />,
    title: "Restaurants & Hospitality",
    description: "Streamline reservations, handle menu inquiries, and process orders with our specialized AI voice agents.",
    color: "bg-amber-50",
    accentColor: "text-amber-600",
    features: [
      {
        title: "Reservation Management",
        description: "Handle bookings efficiently, even during peak hours when staff are busy."
      },
      {
        title: "Menu Assistance",
        description: "Provide instant answers to menu inquiries, special offerings, and dietary concerns."
      },
      {
        title: "Order Processing",
        description: "Streamline takeout and delivery orders with precision and accuracy."
      },
      {
        title: "Special Events & Promotions",
        description: "Automated information and booking for special events, private dining, and promotions."
      }
    ],
    benefits: [
      "Never miss a reservation or takeout order",
      "Free up staff to focus on in-person guests",
      "Reduce hold times during rush periods",
      "Capture accurate order details",
      "Improve customer satisfaction with responsive service"
    ]
  },
  {
    id: "healthcare",
    icon: <FiHeart size={24} />,
    title: "Healthcare Providers",
    description: "HIPAA-compliant voice agents to improve patient care, scheduling, and information sharing.",
    color: "bg-blue-50",
    accentColor: "text-blue-600",
    features: [
      {
        title: "Patient Scheduling",
        description: "Automate appointment bookings and reminders to reduce no-shows."
      },
      {
        title: "Information Dissemination",
        description: "Provide answers to common patient queries about services, insurance, and procedures."
      },
      {
        title: "Post-Care Follow-Up",
        description: "Ensure patients receive timely post-treatment information and check-ins."
      },
      {
        title: "HIPAA Compliance",
        description: "Our healthcare solutions are fully HIPAA-compliant for secure patient interactions."
      }
    ],
    benefits: [
      "Reduce administrative burden on healthcare staff",
      "Improve patient communication and follow-up",
      "Decrease appointment no-shows",
      "Enhance patient satisfaction with responsive care",
      "Maintain HIPAA compliance with secure communications"
    ]
  },
  {
    id: "callcenters",
    icon: <FiPhoneCall size={24} />,
    title: "Call Centers",
    description: "Enhance operational efficiency with intelligent call routing, support, and data collection.",
    color: "bg-purple-50",
    accentColor: "text-purple-600",
    features: [
      {
        title: "Call Routing",
        description: "Direct calls to the appropriate departments or personnel based on customer needs."
      },
      {
        title: "Customer Support",
        description: "Handle FAQs and common issues without human intervention."
      },
      {
        title: "Data Collection",
        description: "Gather customer feedback and insights seamlessly for business intelligence."
      },
      {
        title: "Call Overflow Management",
        description: "Manage high call volume periods without long wait times or dropped calls."
      }
    ],
    benefits: [
      "Reduce wait times for customers",
      "Optimize agent utilization for complex issues",
      "Ensure 24/7 customer support coverage",
      "Improve first-call resolution rates",
      "Enhance customer satisfaction with efficient service"
    ]
  }
];

const Solutions = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const [activeTab, setActiveTab] = useState("industries");

  return (
    <Layout lightMode={true}>
      <div className="pt-24 bg-white">
        <WhiteSection className="bg-gray-50 border-b border-gray-200">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-agency-dark">Solutions</h1>
            <p className="text-lg text-agency-gray max-w-2xl mx-auto">
              Discover how our AI voice agents and automation tools can transform your business
            </p>
          </div>

          <Tabs
            defaultValue="industries"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2">
              <TabsTrigger value="industries">By Industry</TabsTrigger>
              <TabsTrigger value="features">By Feature</TabsTrigger>
            </TabsList>

            <TabsContent value="industries" className="mt-8">
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
                        lightMode={true}
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
                    <IndustryDetails industry={selectedIndustry} lightMode={true} />
                  </motion.div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-agency-dark">Coming Soon</h2>
                <p className="text-agency-gray">
                  Our features section is currently being developed.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </WhiteSection>
      </div>
    </Layout>
  );
};

export default Solutions;
