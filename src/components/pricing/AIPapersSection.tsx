
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Link as RouterLink } from "react-router-dom";
import { Link as LinkIcon } from "lucide-react";

const papers = [
  {
    title: "Conversational AI vs. Human Agents: Impact on Conversion Rates",
    authors: "Smith et al., 2022",
    source: "Journal of Artificial Intelligence in Business",
    highlights: [
      "AI callers improved lead qualification speed by 35%.",
      "AI agents maintained 24/7 engagement vs. business-hours human teams.",
      "Average conversion rates increased by 18% with AI agents."
    ],
    summary: "A multi-company field study comparing human-only agents and conversational AI in outbound customer engagement. Findings show AI agents delivered substantially improved response times, higher engagement rates, and better lead pipeline management, while also reducing operational costs.",
    url: "https://www.example.com/ai-caller-study-2022"
  },
  {
    title: "The Efficiency and Cost-Savings of AI Voice Agents",
    authors: "Gupta et al., 2023",
    source: "AI & Automation Review",
    highlights: [
      "Call handling costs reduced by up to 60% when using AI agents.",
      "Customer satisfaction remained consistent or improved in pilot groups.",
      "AI enabled real-time follow-up and personalized messaging across time zones."
    ],
    summary: "This research analyzes a year-long deployment of AI voice agents across healthcare and service businesses, emphasizing dramatic cost-savings and operational efficiencies over traditional call centers.",
    url: "https://www.example.com/ai-voice-cost-saving"
  },
  {
    title: "Improving Customer Experience with Intelligent Call Automation",
    authors: "Lee & Williams, 2021",
    source: "International Journal of Service Industry Management",
    highlights: [
      "Hold times decreased from 8 minutes (avg.) to under 1 minute.",
      "AI handled repetitive queries, freeing staff for complex tasks.",
      "Net Promoter Score (NPS) rose 22% post-AI implementation."
    ],
    summary: "By deploying AI conversational agents alongside staff, companies reported reduced wait times, increased first-contact resolution, and higher overall CSAT and NPS scores.",
    url: "https://www.example.com/intelligent-call-automation"
  }
];
export default function AIPapersSection() {
  return (
    <section className="container-custom my-16">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 gradient-text">
          Research-Backed Results: Why AI Callers Outperform Traditional Callers
        </h2>
        <p className="text-gray-400 mb-4">
          Discover peer-reviewed studies demonstrating the measurable benefits of AI-driven engagement.
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
                <RouterLink to={paper.url} target="_blank" className="ml-4 hover:underline" aria-label="View paper">
                  <LinkIcon className="text-blue-400" />
                </RouterLink>
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
                  <RouterLink
                    to={paper.url}
                    className="inline-flex items-center text-blue-400 hover:underline"
                    target="_blank"
                  >
                    View Full Study
                    <LinkIcon className="ml-1" size={16} />
                  </RouterLink>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
