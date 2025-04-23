
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Link as LinkIcon, Info } from "lucide-react";

const papers = [
  {
    title: "AI-Augmented Cold Outreach: 3x Connection Rates & Improved Meeting Holds",
    authors: "Case Study: Avantive Solutions",
    source: "Avantive Solutions",
    highlights: [
      "AI + human callers connected on 3x as many calls as human-only teams",
      "20% increase in meeting hold rate",
      "Combined efforts of AI and humans boosted overall outreach effectiveness"
    ],
    summary:
      "In a sales organization, integrating AI with human cold callers led to a tripling of connection rates and improved meeting hold rates, demonstrating the power of AI augmentation in outreach.",
    url: "https://jbai.ai/index.php/jbai/article/view/22/7",
    note: "See the full case study from the Journal of Business AI."
  },
  {
    title: "Voice-Based AI Agents Transform Call Center Service Availability",
    authors: "Case Study: AISEL (AI-Driven Customer Service)",
    source: "ResearchGate",
    highlights: [
      "AI agents provided 24/7 service coverage, eliminating customer wait times",
      "Enabled rapid responses and improved consistency in support",
      "Boosted overall efficiency and service stability"
    ],
    summary:
      "Voice-based AI agents in a large call center allowed the team to move to true 24/7 support, enhancing both speed and operational reliability compared to human-only call handling.",
    url: "https://www.researchgate.net/publication/342983429_Voice-Based_AI_in_Call_Center_Customer_Service_Evidence_from_a_Field_Experiment",
    note: "Read the academic report on ResearchGate."
  },
  {
    title: "AI Outperforms Human Emergency Call Handlers in Stroke Recognition",
    authors: "Danish National Emergency Medical Services & University of Copenhagen",
    source: "Healthcare-in-Europe",
    highlights: [
      "AI better recognized stroke indicators in emergency calls vs. human dispatchers",
      "Outperformed humans across all age groups and sexes",
      "Could enable faster, life-saving interventions"
    ],
    summary:
      "A trained AI model analyzed live emergency calls in Denmark and was significantly more accurate than human call handlers at detecting strokes, illustrating the potential for AI to augment—and sometimes outperform—humans in critical, high-stakes communication.",
    url: "https://healthcare-in-europe.com/en/news/ai-tool-emergency-call-handlers-stroke.html",
    note: "Read the news brief on Healthcare in Europe."
  }
];

export default function AIPapersSection() {
  return (
    <section className="container-custom my-16">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 gradient-text">
          Real-World Results: AI vs. Human Callers
        </h2>
        <p className="text-gray-400 mb-4">
          Explore recent independent studies and case reports showing how AI drives better results in real call and customer service scenarios.
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
                <a href={paper.url} target="_blank" rel="noopener noreferrer" className="ml-4 hover:underline" aria-label="View source">
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
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-2">
                  <span className="font-medium text-white">Summary:</span>
                  <p className="text-gray-300 mt-1">{paper.summary}</p>
                </div>
                <div className="mb-2 text-sm text-blue-300">
                  {paper.note}
                </div>
                <div>
                  <a
                    href={paper.url}
                    className="inline-flex items-center text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Study / Source
                    <LinkIcon className="ml-1" size={16} />
                  </a>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {/* Disclaimer */}
      <div className="mt-8 max-w-3xl mx-auto text-xs flex items-start gap-2 bg-white/5 rounded-lg px-4 py-3 text-left border border-white/10">
        <Info className="text-agency-vibrantPurple mt-0.5" size={18} />
        <span>
          <b>Disclaimer:</b> The above case studies and reports are taken from their respective cited sources.
          Results are provided for informational purposes only to offer a viable idea of AI's impact in select scenarios.
          Actual results may vary and are not guaranteed by Sudden Impact Agency.
        </span>
      </div>
    </section>
  );
}
