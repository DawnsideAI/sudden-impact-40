
import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";
import { motion } from "framer-motion";
import { Timer, Clock, ChartBar, DollarSign } from "lucide-react";

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

const CallerComparisonChart = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="section-padding bg-gradient-to-b from-background/50 to-background"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
            AI Voice Agents vs Human Agents
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of customer service with our AI voice agents - delivering unmatched efficiency, 
            availability, and cost savings compared to traditional human call handlers
          </p>
        </div>

        <Card className="p-6 glass-card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent" />
          <div className="h-[600px] w-full relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={metrics}
                margin={{ top: 50, right: 30, bottom: 50, left: 30 }}
                barGap={0}
              >
                <defs>
                  <linearGradient id="aiGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis 
                  dataKey="category" 
                  tick={{ fill: 'white', fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={100}
                  interval={0}
                />
                <YAxis 
                  tick={{ fill: 'white', fontSize: 12 }}
                  label={{ 
                    value: 'Value', 
                    angle: -90, 
                    position: 'insideLeft',
                    fill: 'white',
                    fontSize: 14
                  }}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-black/90 backdrop-blur-sm border border-purple-500/20 p-4 rounded-lg shadow-xl">
                          <p className="text-lg font-semibold text-purple-400 mb-2">{data.category}</p>
                          <div className="space-y-1">
                            <p className="text-sm text-gray-300">
                              <span className="font-medium text-purple-400">AI Voice Agent:</span> {data.ai} {data.label}
                            </p>
                            <p className="text-sm text-gray-400">
                              <span className="font-medium">Human Agent:</span> {data.human} {data.label}
                            </p>
                            <p className="text-sm font-medium text-purple-400 mt-2 pt-2 border-t border-purple-500/20">
                              {data.percentage}
                            </p>
                          </div>
                          <p className="text-xs text-gray-400 mt-2">{data.description}</p>
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
                    <span style={{ color: 'white', fontSize: '14px' }}>
                      {value === 'human' ? 'Human Agents' : 'AI Voice Agents'}
                    </span>
                  )}
                />
                <Bar 
                  dataKey="human" 
                  name="human" 
                  fill="#CBD5E1"
                  radius={[4, 4, 0, 0]}
                  opacity={0.3}
                >
                  <LabelList 
                    dataKey="human" 
                    position="inside" 
                    fill="#fff" 
                    fontSize={12}
                  />
                </Bar>
                <Bar 
                  dataKey="ai" 
                  name="ai" 
                  fill="url(#aiGradient)"
                  radius={[4, 4, 0, 0]}
                >
                  <LabelList 
                    dataKey="ai" 
                    position="top" 
                    fill="#A78BFA"
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
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
              className="feature-card hover:bg-purple-500/10 hover:border-purple-500/30"
            >
              <feature.icon className="w-6 h-6 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CallerComparisonChart;
