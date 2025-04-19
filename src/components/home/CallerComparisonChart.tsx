
import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const metrics = [
  {
    category: "Availability",
    human: 40, // 40 hours/week
    ai: 168, // 24/7 = 168 hours/week
    humanColor: "#E5DEFF",
    aiColor: "#8B5CF6",
  },
  {
    category: "Calls/Hour",
    human: 8, // Average human calls per hour
    ai: 30, // AI can handle multiple calls simultaneously
    humanColor: "#E5DEFF",
    aiColor: "#8B5CF6",
  },
  {
    category: "Response Time (sec)",
    human: 45, // Average human response time
    ai: 1, // Near-instant AI response
    humanColor: "#E5DEFF",
    aiColor: "#8B5CF6",
  },
  {
    category: "Cost/Hour ($)",
    human: 25, // Average human agent cost
    ai: 5, // AI operational cost
    humanColor: "#E5DEFF",
    aiColor: "#8B5CF6",
  },
  {
    category: "Consistency (%)",
    human: 85, // Human consistency in responses
    ai: 100, // AI consistency in following protocols
    humanColor: "#E5DEFF",
    aiColor: "#8B5CF6",
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
            See how our AI voice agents compare to traditional human call handlers
          </p>
        </div>

        <Card className="p-6 glass-card">
          <div className="h-[400px] w-full">
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
                        return (
                          <ChartTooltip>
                            <ChartTooltipContent>
                              {payload.map((entry, index) => (
                                <div 
                                  key={`tooltip-${index}`} 
                                  style={{ color: entry.color }}
                                >
                                  {entry.name === "human" ? "Human Agents" : "AI Voice Agents"}: {entry.value}
                                </div>
                              ))}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "24/7 Availability",
              description: "AI agents work around the clock without breaks, providing consistent service at any time."
            },
            {
              title: "Cost Efficiency",
              description: "Significantly lower operational costs compared to maintaining a team of human agents."
            },
            {
              title: "Scalable Operations",
              description: "Handle multiple calls simultaneously with consistent quality and response times."
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CallerComparisonChart;
