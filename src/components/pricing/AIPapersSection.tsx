
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Link as LinkIcon } from "lucide-react";

const papers = [
  {
    title: "The Economic Value of Conversational AI in Customer Service",
    authors: "Deloitte Digital Research Team",
    source: "Deloitte Insights Digital Transformation Report",
    highlights: [
      "AI-powered interactions reduce operational costs by up to 30%",
      "Increased first-contact resolution rates by 25%",
      "Significant improvement in customer satisfaction scores"
    ],
    summary: "A comprehensive analysis demonstrating the tangible economic benefits of implementing AI-driven customer service solutions across various industries.",
    url: "https://www2.deloitte.com/us/en/insights/industry/technology/digital-transformation-in-customer-service.html"
  },
  {
    title: "AI and Machine Learning: Revolutionizing Customer Experience",
    authors: "Harvard Business Review Research",
    source: "HBR Technology Insights",
    highlights: [
      "81% of companies report improved customer engagement with AI",
      "Reduction in average handling time by 40%",
      "Enhanced personalization through intelligent routing"
    ],
    summary: "An in-depth study exploring how artificial intelligence transforms customer interaction strategies and operational efficiency.",
    url: "https://hbr.org/2023/06/how-ai-is-changing-customer-service"
  },
  {
    title: "Artificial Intelligence in Contact Centers: Performance Metrics and ROI",
    authors: "Gartner Research Group",
    source: "Gartner Technology Innovation Report",
    highlights: [
      "AI can handle up to 70% of customer interactions autonomously",
      "Significant cost savings through automated customer support",
      "Improved scalability and consistent service quality"
    ],
    summary: "Research investigating the transformative potential of AI technologies in modernizing contact center operations and customer engagement.",
    url: "https://www.gartner.com/en/documents/4019964/artificial-intelligence-in-customer-service-transforming-"
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
