
import { useState } from 'react';
import { motion } from 'framer-motion';
import { IndustryCard } from '@/components/solutions/IndustryCard';
import IndustryDetails from '@/components/solutions/IndustryDetails';
import { Calendar, Building, Utensils, Car, Home, Briefcase, BookOpen, Stethoscope } from 'lucide-react';

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
    id: "restaurants",
    icon: <Utensils className="h-5 w-5" />,
    title: "Restaurants",
    description: "Streamline reservations and orders",
    detailsTitle: "AI Voice Agents for Restaurants",
    detailsDescription: "Our AI voice agents handle phone reservations, takeout orders, and answer common questions, allowing your staff to focus on delivering exceptional in-house service.",
    features: [
      "24/7 reservation management",
      "Takeout order processing",
      "Menu and allergen information",
      "Special event bookings",
      "Peak-time call overflow handling"
    ],
    results: [
      "89% reduction in missed calls",
      "32% increase in takeout orders",
      "4.8/5 average customer satisfaction"
    ]
  },
  {
    id: "auto-dealerships",
    icon: <Car className="h-5 w-5" />,
    title: "Auto Dealerships",
    description: "Lead qualification and appointment setting",
    detailsTitle: "AI Voice Agents for Auto Dealerships",
    detailsDescription: "Our AI voice agents qualify leads, schedule test drives, and follow up with potential buyers, helping your sales team focus on closing deals.",
    features: [
      "24/7 vehicle inquiry handling",
      "Test drive scheduling",
      "Pre-qualification of buyers",
      "Trade-in value estimations",
      "Automated follow-ups"
    ],
    results: [
      "45% increase in qualified leads",
      "37% more test drives scheduled",
      "28% improvement in sales team efficiency"
    ]
  },
  {
    id: "professional-services",
    icon: <Briefcase className="h-5 w-5" />,
    title: "Professional Services",
    description: "Client intake and appointment scheduling",
    detailsTitle: "AI Voice Agents for Professional Services",
    detailsDescription: "Our AI voice agents handle initial client inquiries, collect information, and schedule consultations, letting professionals focus on delivering high-value services.",
    features: [
      "24/7 inquiry handling",
      "Client pre-screening",
      "Consultation scheduling",
      "Service information and pricing",
      "Follow-up management"
    ],
    results: [
      "52% reduction in administrative tasks",
      "38% increase in consultation bookings",
      "41% faster client onboarding"
    ]
  },
  {
    id: "education",
    icon: <BookOpen className="h-5 w-5" />,
    title: "Education",
    description: "Student inquiries and enrollment",
    detailsTitle: "AI Voice Agents for Education",
    detailsDescription: "Our AI voice agents handle admissions inquiries, scheduling, and follow-ups, allowing education staff to focus on current students.",
    features: [
      "24/7 program information",
      "Application process assistance",
      "Campus tour scheduling",
      "Financial aid information",
      "Enrollment follow-ups"
    ],
    results: [
      "48% increase in enrollment inquiries handled",
      "35% reduction in administrative workload",
      "42% more campus tours scheduled"
    ]
  },
  {
    id: "healthcare",
    icon: <Stethoscope className="h-5 w-5" />,
    title: "Healthcare",
    description: "Patient scheduling and information",
    detailsTitle: "AI Voice Agents for Healthcare Providers",
    detailsDescription: "Our AI voice agents handle appointment scheduling, insurance verification, and common patient questions, letting your staff focus on in-person care.",
    features: [
      "24/7 appointment scheduling",
      "New patient intake",
      "Insurance verification",
      "Appointment reminders",
      "Post-visit follow-ups"
    ],
    results: [
      "62% reduction in missed appointments",
      "41% decrease in scheduling staff workload",
      "35% faster new patient processing"
    ]
  },
];

const IndustrySolutions = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-agency-dark">
          Industry Solutions
        </h2>
        <p className="text-lg text-agency-gray max-w-2xl mx-auto">
          Our AI voice agents are tailored to meet the specific needs of your industry
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
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
    </div>
  );
};

export default IndustrySolutions;
