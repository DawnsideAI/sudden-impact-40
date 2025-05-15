
import { motion } from "framer-motion";
import StyleProvider from "../design/StyleProvider";
import SectionTitle from "../design/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";

const statsData = [
  { value: '98%', label: 'Caller Satisfaction' },
  { value: '80%', label: 'Cost Reduction' },
  { value: '24/7', label: 'Availability' },
  { value: '90%', label: 'Booking Rate' },
];

const Stats = () => {
  return (
    <div className="py-16">
      <SectionTitle
        title="Proven Results"
        subtitle="Our AI voice agents consistently deliver exceptional performance metrics"
        centered={true}
        maxWidth="max-w-4xl"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12">
        {statsData.map((stat, index) => (
          <StyleProvider
            key={index}
            delay={index * 0.1}
          >
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="h-1 bg-gradient-to-r from-agency-blue to-agency-vibrantPurple"></div>
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-br from-agency-blue to-agency-vibrantPurple bg-clip-text text-transparent">{stat.value}</span>
                  <span className="text-agency-gray text-sm md:text-base font-medium">{stat.label}</span>
                </div>
              </CardContent>
            </Card>
          </StyleProvider>
        ))}
      </div>
    </div>
  );
};

export default Stats;
