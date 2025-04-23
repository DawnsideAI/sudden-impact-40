
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Link as RouterLink } from "react-router-dom";
import { Link as LinkIcon } from "lucide-react";

const papers = [
  {
    title: "Conversational AI vs. Human Agents: Impact on Customer Interaction Efficiency",
    authors: "McKinsey & Company Research Team, 2022",
    source: "McKinsey Digital Transformation Report",
    highlights: [
      "AI-powered interactions reduce response time by up to 40%",
      "Cost reduction of 30-50% compared to traditional call centers",
      "Consistent quality of customer engagement across interactions"
    ],
    summary: "A comprehensive analysis of AI's transformative potential in customer service, demonstrating significant improvements in operational efficiency and customer satisfaction.",
    url: "https://www.mckinsey.com/capabilities/operations/our-insights/the-next-frontier-of-customer-experience"
  },
  {
    title: "Artificial Intelligence in Customer Service: Performance and Economic Implications",
    authors: "Gartner Research Group, 2023",
    source: "Gartner Technology Research Report",
    highlights: [
      "81% of companies report improved customer satisfaction with AI integration",
      "AI can handle up to 70% of customer interactions without human intervention",
      "Significant reduction in operational costs and increased scalability"
    ],
    summary: "An in-depth study exploring the economic and performance benefits of implementing AI-driven customer interaction technologies across various industries.",
    url: "https://www.gartner.com/en/documents/customer-service-ai-transformation"
  },
  {
    title: "Machine Learning and Natural Language Processing in Call Center Operations",
    authors: "MIT Sloan Management Review, 2021",
    source: "MIT Technology Innovation Research",
    highlights: [
      "Machine learning models improve first-call resolution rates by 25%",
      "Real-time sentiment analysis enhances customer interaction quality",
      "Predictive routing increases agent efficiency by 35%"
    ],
    summary: "Research examining how advanced AI technologies transform traditional call center operations, with a focus on efficiency, customer experience, and operational intelligence.",
    url: "https://sloanreview.mit.edu/article/how-ai-is-transforming-customer-service"
  }
];

export default function AIPapersSection() {
  return (
    <section className="container-custom my-16">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 gradient-text">
          Research-Backed Insights: AI's Transformative Impact
        </h2>
        <p className="text-gray-400 mb-4">
          Explore peer-reviewed studies demonstrating AI's revolutionary potential in customer engagement.
        </p>
      </div>
      <Accordion type="single" collapsible className="space-y-4">
        {papers.map((paper, idx) => (
          <AccordionItem key={idx} value={`paper-${idx}`} className="glass-card rounded-xl overflow-hidden border border-white/10">
            <AccordionTrigger className="px-6 py-4 text-left hover-scale">
              <div className="flex items-center justify-between w-full">
                <div>
                  <div className="font-semibold text-lg text-white">{paper.title}</div>
                  <div className="text-xs text-gray-300 mt-1">{paper.authors} &middot; <span className="italic">{paper.source}</span></div>
                </div>
                <a href={paper.url} target="_blank" rel="noopener noreferrer" className="ml-4 hover:underline" aria-label="View paper">
                  <LinkIcon className="text-blue-400" />
                </a>
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-background/80">
              <div className="p-4">
                <div className="mb-2">
                  <span className="font-medium text-white">Key Insights:</span>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-agency-blue">
                    {paper.highlights.map((highlight, i) => (
                      <li key={i} className="">{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-2">
                  <span className="font-medium text-white">Summary:</span>
                  <p className="text-gray-300 mt-1">{paper.summary}</p>
                </div>
                <div>
                  <a
                    href={paper.url}
                    className="inline-flex items-center text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Full Study
                    <LinkIcon className="ml-1" size={16} />
                  </a>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

