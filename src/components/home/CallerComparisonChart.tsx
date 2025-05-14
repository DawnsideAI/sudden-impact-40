
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

// Transform data for mobile view to show side-by-side comparison
const transformDataForMobile = (data) => {
  const result = [];
  data.forEach(item => {
    result.push({
      name: item.category,
      type: 'Human',
      value: item.human,
      color: item.humanColor,
      label: item.label,
      description: item.description
    });
    result.push({
      name: item.category,
      type: 'AI',
      value: item.ai,
      color: item.aiColor,
      label: item.label,
      description: item.description,
      percentage: item.percentage
    });
  });
  return result;
};

const CallerComparisonChart = () => {
  const isMobile = useIsMobile();
  const mobileData = transformDataForMobile(metrics);

  // Safe formatter function that checks for undefined values
  const safeLabelFormatter = (value, entry) => {
    if (entry && entry.payload && entry.payload.label) {
      return `${value} ${entry.payload.label}`;
    }
    return value;
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-agency-blue via-agency-blue to-agency-vibrantPurple bg-clip-text text-transparent">
            AI Voice Agents vs Human Agents
          </h2>
          <p className="text-xl text-agency-gray max-w-3xl mx-auto">
            Experience the future of customer service with our AI voice agents - delivering unmatched efficiency, 
            availability, and cost savings compared to traditional human call handlers
          </p>
        </div>

        <Card className="p-6 bg-white shadow-lg border border-gray-100 relative overflow-hidden">
          {/* Mobile Chart View */}
          {isMobile && (
            <div className="overflow-x-auto pb-4">
              <div className="h-[500px] min-w-[600px] relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={mobileData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, bottom: 20, left: 120 }}
                    barGap={0}
                    barSize={25}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} horizontal={true} vertical={false} />
                    <XAxis 
                      type="number" 
                      tick={{ fill: '#333', fontSize: 13 }}
                    />
                    <YAxis 
                      type="category"
                      dataKey="name"
                      tick={{ fill: '#333', fontSize: 14, fontWeight: 'bold' }}
                      width={110}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-xl">
                              <p className="text-lg font-semibold text-agency-blue mb-2">{data.name}</p>
                              <div className="space-y-1">
                                <p className="text-base">
                                  <span className="font-medium">{data.type}:</span> {data.value} {data.label}
                                </p>
                                {data.percentage && (
                                  <p className="text-sm font-medium text-agency-vibrantPurple mt-2">
                                    {data.percentage}
                                  </p>
                                )}
                              </div>
                              <p className="text-xs text-agency-gray mt-2">{data.description}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar 
                      dataKey="value" 
                      fill="#CBD5E1"
                      radius={[4, 4, 4, 4]}
                    >
                      {mobileData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.color} 
                          fillOpacity={entry.type === 'Human' ? 0.8 : 1}
                          stroke={entry.type === 'AI' ? '#7C3AED' : 'none'}
                          strokeWidth={entry.type === 'AI' ? 1 : 0}
                        />
                      ))}
                      <LabelList 
                        dataKey="value" 
                        position="right" 
                        fill="#333" 
                        fontSize={14}
                        fontWeight="bold"
                        formatter={(value, entry) => {
                          if (entry && entry.payload) {
                            return `${value} ${entry.payload.label}`;
                          }
                          return value;
                        }}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center items-center gap-6 mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#CBD5E1] rounded-sm"></div>
                  <span className="text-agency-gray">Human Agents</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-agency-vibrantPurple rounded-sm"></div>
                  <span className="text-agency-gray">AI Voice Agents</span>
                </div>
              </div>
            </div>
          )}

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
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-xl">
                            <p className="text-lg font-semibold text-agency-blue mb-2">{data.category}</p>
                            <div className="space-y-1">
                              <p className="text-base">
                                <span className="font-medium text-agency-vibrantPurple">AI Voice Agent:</span> {data.ai} {data.label}
                              </p>
                              <p className="text-base text-gray-600">
                                <span className="font-medium">Human Agent:</span> {data.human} {data.label}
                              </p>
                              <p className="text-sm font-medium text-agency-vibrantPurple mt-2 pt-2 border-t border-gray-200">
                                {data.percentage}
                              </p>
                            </div>
                            <p className="text-xs text-agency-gray mt-2">{data.description}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <feature.icon className="w-6 h-6 text-agency-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-agency-dark">{feature.title}</h3>
              <p className="text-agency-gray">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CallerComparisonChart;
