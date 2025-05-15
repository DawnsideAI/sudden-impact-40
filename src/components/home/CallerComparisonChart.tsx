
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Timer, Clock, ChartBar, DollarSign } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";
import SectionTitle from "../design/SectionTitle";
import StyleProvider from "../design/StyleProvider";
import FeatureCard from "../design/FeatureCard";

const metrics = [
  {
    category: "Availability",
    human: 40,
    ai: 168,
    humanColor: "#CBD5E1",
    aiColor: "#8B5CF6",
    label: "hrs/week",
    description: "AI operates 24/7 while human agents work standard hours",
    percentage: "320% more availability"
  },
  {
    category: "Efficiency",
    human: 8,
    ai: 30,
    humanColor: "#CBD5E1",
    aiColor: "#8B5CF6",
    label: "calls/hour",
    description: "AI handles multiple conversations simultaneously",
    percentage: "275% more efficient"
  },
  {
    category: "Response Time",
    human: 45,
    ai: 1,
    humanColor: "#CBD5E1",
    aiColor: "#8B5CF6",
    label: "seconds",
    description: "Near-instant AI responses vs human processing time",
    percentage: "98% faster"
  },
  {
    category: "Operating Cost",
    human: 25,
    ai: 5,
    humanColor: "#CBD5E1",
    aiColor: "#8B5CF6",
    label: "$/hour",
    description: "Significant cost savings with AI operations",
    percentage: "80% cost reduction"
  },
  {
    category: "Consistency",
    human: 85,
    ai: 100,
    humanColor: "#CBD5E1",
    aiColor: "#8B5CF6",
    label: "%",
    description: "AI maintains perfect consistency in responses",
    percentage: "100% consistent"
  },
  {
    category: "Monthly Cost",
    human: 4000,
    ai: 800,
    humanColor: "#CBD5E1",
    aiColor: "#8B5CF6",
    label: "$",
    description: "Based on 160 hours of operation",
    percentage: "80% monthly savings"
  }
];

// Mobile representation of data as cards instead of a chart
const MobileComparisonView = ({ data }) => {
  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-brand-purple/10 to-brand-aqua/10 px-4 py-3 border-b border-gray-100">
            <h3 className="font-bold text-lg text-brand-dark">{item.category}</h3>
            <p className="text-xs text-brand-gray">{item.description}</p>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-col">
                <span className="text-sm text-brand-gray">Human</span>
                <span className="text-xl font-bold text-brand-dark">
                  {item.human} <span className="text-xs">{item.label}</span>
                </span>
              </div>
              
              <div className="flex flex-col items-end">
                <span className="text-sm text-brand-vibrantPurple">AI Voice Agent</span>
                <span className="text-xl font-bold text-brand-vibrantPurple">
                  {item.ai} <span className="text-xs">{item.label}</span>
                </span>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
              <div 
                className="absolute top-0 left-0 h-2.5 rounded-full bg-gray-400"
                style={{ 
                  width: `${(item.human / Math.max(item.human, item.ai)) * 100}%`,
                  backgroundColor: item.humanColor 
                }}
              ></div>
              <div 
                className="absolute top-0 left-0 h-2.5 rounded-full bg-gradient-to-r from-brand-pink to-brand-aqua"
                style={{ 
                  width: `${(item.ai / Math.max(item.human, item.ai)) * 100}%`,
                  transform: `translateX(${item.human > item.ai ? '0%' : '100%'})`,
                  left: item.human > item.ai ? `${(item.human / Math.max(item.human, item.ai)) * 100}%` : '0'
                }}
              ></div>
            </div>
            
            <div className="mt-2 text-center">
              <span className="text-sm font-medium text-brand-vibrantPurple">
                {item.percentage}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Original chart tooltip
const ChartTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-xl">
        <p className="text-lg font-semibold text-agency-blue mb-2">{data.category || data.name}</p>
        <div className="space-y-1">
          {data.type ? (
            <p className="text-base">
              <span className="font-medium">{data.type}:</span> {data.value} {data.label}
            </p>
          ) : (
            <>
              <p className="text-base">
                <span className="font-medium text-agency-vibrantPurple">AI Voice Agent:</span> {data.ai} {data.label}
              </p>
              <p className="text-base text-gray-600">
                <span className="font-medium">Human Agent:</span> {data.human} {data.label}
              </p>
            </>
          )}
          {data.percentage && (
            <p className="text-sm font-medium text-agency-vibrantPurple mt-2 pt-2 border-t border-gray-200">
              {data.percentage}
            </p>
          )}
        </div>
        <p className="text-xs text-agency-gray mt-2">{data.description}</p>
      </div>
    );
  }
  return null;
};

// Safe formatter function that checks for undefined values
const safeLabelFormatter = (value, entry) => {
  if (entry && entry.payload && entry.payload.label) {
    return `${value} ${entry.payload.label}`;
  }
  return value;
};

const CallerComparisonChart = () => {
  const isMobile = useIsMobile();

  return (
    <StyleProvider
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <SectionTitle
          title="AI Voice Agents vs Human Agents"
          subtitle="Experience the future of customer service with our AI voice agents - delivering unmatched efficiency, availability, and cost savings compared to traditional human call handlers"
          centered={true}
          className="mb-12"
        />

        <Card className="p-6 bg-white shadow-lg border border-gray-100 relative overflow-hidden">
          {/* Mobile View - Card-based comparison */}
          {isMobile && <MobileComparisonView data={metrics} />}

          {/* Desktop Chart View */}
          {!isMobile && (
            <div className="h-[600px] w-full relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={metrics}
                  margin={{ top: 50, right: 30, bottom: 50, left: 30 }}
                  barGap={8}
                  barSize={40}
                >
                  <defs>
                    <linearGradient id="aiGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis 
                    dataKey="category" 
                    tick={{ fill: '#333', fontSize: 14, fontWeight: 'bold' }}
                    height={60}
                    interval={0}
                  />
                  <YAxis 
                    tick={{ fill: '#333', fontSize: 13 }}
                    axisLine={{ stroke: '#e5e7eb' }}
                    tickLine={{ stroke: '#e5e7eb' }}
                  />
                  <Tooltip content={ChartTooltip} />
                  <Legend 
                    verticalAlign="top" 
                    height={36}
                    formatter={(value) => (
                      <span style={{ color: '#333', fontSize: '14px', fontWeight: '500' }}>
                        {value === 'human' ? 'Human Agents' : 'AI Voice Agents'}
                      </span>
                    )}
                  />
                  <Bar 
                    dataKey="human" 
                    name="human" 
                    fill="#CBD5E1"
                    radius={[6, 6, 0, 0]}
                  >
                    <LabelList 
                      dataKey="human" 
                      position="top" 
                      fill="#555" 
                      fontSize={14}
                      fontWeight="bold"
                      formatter={safeLabelFormatter}
                    />
                  </Bar>
                  <Bar 
                    dataKey="ai" 
                    name="ai" 
                    fill="url(#aiGradient)"
                    radius={[6, 6, 0, 0]}
                  >
                    <LabelList 
                      dataKey="ai" 
                      position="top" 
                      fill="#7C3AED"
                      fontSize={14}
                      fontWeight="bold"
                      formatter={safeLabelFormatter}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            {
              icon: Clock,
              title: "24/7 Availability",
              description: "Always online, never tired. 168 hours of continuous operation vs 40 hours of human availability."
            },
            {
              icon: ChartBar,
              title: "Superior Efficiency",
              description: "Process 30 calls simultaneously while maintaining perfect accuracy and consistency."
            },
            {
              icon: DollarSign,
              title: "Cost Efficiency",
              description: "Save up to 80% on operational costs with our AI voice agents compared to human agents."
            },
            {
              icon: Timer,
              title: "Lightning Fast",
              description: "Instant responses in under 1 second, compared to 45-second average human response time."
            }
          ].map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </StyleProvider>
  );
};

export default CallerComparisonChart;
