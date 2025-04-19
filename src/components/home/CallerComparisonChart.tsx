
import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { Timer, Clock, Speed, DollarSign } from "lucide-react";

const metrics = [
  {
    category: "Availability (hrs/week)",
    human: 40,
    ai: 168,
    humanColor: "#E5DEFF",
    aiColor: "#8B5CF6",
    description: "AI operates 24/7 while human agents work standard hours"
  },
  {
    category: "Calls/Hour",
    human: 8,
    ai: 30,
    humanColor: "#E5DEFF",
    aiColor: "#8B5CF6",
    description: "AI handles multiple conversations simultaneously"
  },
  {
    category: "Response Time (sec)",
    human: 45,
    ai: 1,
    humanColor: "#E5DEFF",
    aiColor: "#8B5CF6",
    description: "Near-instant AI responses vs human processing time"
  },
  {
    category: "Cost/Hour ($)",
    human: 25,
    ai: 5,
    humanColor: "#E5DEFF",
    aiColor: "#8B5CF6",
    description: "Significant cost savings with AI operations"
  },
  {
    category: "Consistency (%)",
    human: 85,
    ai: 100,
    humanColor: "#E5DEFF",
    aiColor: "#8B5CF6",
    description: "AI maintains perfect consistency in responses"
  },
  {
    category: "Monthly Cost ($)",
    human: 4000,
    ai: 800,
    humanColor: "#E5DEFF",
    aiColor: "#8B5CF6",
    description: "Based on 160 hours of operation"
  }
];

const CallerComparisonChart = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="section-padding"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            Human vs AI Caller Comparison
          </h2>
          <p className="text-xl text-muted-foreground">
            Detailed comparison of AI voice agents versus traditional human call handlers
          </p>
        </div>

        <Card className="p-6 glass-card">
          <div className="h-[500px] w-full">
            <ChartContainer
              config={{
                human: {
                  label: "Human Agents",
                  color: "#E5DEFF",
                },
                ai: {
                  label: "AI Voice Agents",
                  color: "#8B5CF6",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={metrics}
                  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis 
                    dataKey="category" 
                    tick={{ fill: 'white' }}
                    angle={-45}
                    textAnchor="end"
                    height={70}
                  />
                  <YAxis tick={{ fill: 'white' }} />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <ChartTooltip>
                            <ChartTooltipContent>
                              <div className="p-2 space-y-2">
                                <div className="font-medium">{data.category}</div>
                                {payload.map((entry, index) => (
                                  <div 
                                    key={`tooltip-${index}`} 
                                    className="flex items-center gap-2"
                                    style={{ color: entry.color }}
                                  >
                                    <span className="font-medium">
                                      {entry.name === "human" ? "Human Agents" : "AI Voice Agents"}:
                                    </span>
                                    <span>{entry.value}</span>
                                  </div>
                                ))}
                                <div className="text-sm text-gray-300 mt-2 border-t border-gray-700 pt-2">
                                  {data.description}
                                </div>
                              </div>
                            </ChartTooltipContent>
                          </ChartTooltip>
                        );
                      }
                      return null;
                    }}
                  />
                  <Legend />
                  <Bar 
                    dataKey="human" 
                    name="Human Agents" 
                    fill="#E5DEFF" 
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    dataKey="ai" 
                    name="AI Voice Agents" 
                    fill="#8B5CF6" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            {
              icon: Clock,
              title: "24/7 Availability",
              description: "168 hours of weekly operation compared to 40 hours with human agents."
            },
            {
              icon: Speed,
              title: "Faster Response",
              description: "1-second response time versus 45-second average human response."
            },
            {
              icon: DollarSign,
              title: "Cost Efficiency",
              description: "80% reduction in operational costs compared to human agents."
            },
            {
              icon: Timer,
              title: "Perfect Consistency",
              description: "100% consistent responses and service quality at all times."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card"
            >
              <feature.icon className="w-6 h-6 text-agency-vibrantPurple mb-4" />
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
