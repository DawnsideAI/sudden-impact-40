
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import StyleProvider from "@/components/design/StyleProvider";
import SectionTitle from "@/components/design/SectionTitle";

const Legal = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Legal | Sudden Impact Agency";
    
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <Layout lightMode={true}>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-brand-darkPurple via-brand-purple to-black border-b border-white/10">
        <StyleProvider className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <SectionTitle
              title="Legal Information"
              subtitle="Important policies and terms for our services"
              centered={true}
              light={true}
            />
          </div>
        </StyleProvider>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <StyleProvider delay={0.2} className="mb-12">
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              {['overage-policy', 'terms-conditions', 'privacy-policy'].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section);
                    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeSection === section
                      ? 'bg-gradient-to-r from-brand-pink to-brand-aqua text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {section === 'overage-policy' ? 'Overage Policy' : 
                   section === 'terms-conditions' ? 'Terms & Conditions' : 'Privacy Policy'}
                </button>
              ))}
            </div>
          </StyleProvider>
          
          <StyleProvider delay={0.3}>
            <Accordion 
              type="single" 
              collapsible 
              className="space-y-6"
              value={activeSection || undefined}
              onValueChange={(value) => setActiveSection(value)}
            >
              <AccordionItem 
                value="overage-policy" 
                id="overage-policy"
                className="border rounded-xl overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-brand-dark hover:bg-gray-50 hover:no-underline">
                  Overage Policy Disclaimer
                </AccordionTrigger>
                <AccordionContent className="px-6 py-6 bg-gray-50 border-t">
                  <div className="prose max-w-none">
                    <h3 className="text-brand-dark text-lg font-medium mb-4">AI Engagement Minutes Overage</h3>
                    <ul className="space-y-2 text-gray-700 list-disc pl-5">
                      <li>Each subscription plan includes a set number of monthly AI Engagement Minutes.</li>
                      <li>Exceeding plan minutes triggers automatic billing to the card on file.</li>
                      <li>Current overage rate: $0.15 per minute (subject to change with notice).</li>
                      <li>Overage charges invoiced at billing cycle end, along with regular subscription.</li>
                      <li>Usage notifications sent at 80%, 95%, and 100% of plan limit.</li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-600">
                      For questions or plan upgrades, contact our support team.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="terms-conditions" 
                id="terms-conditions"
                className="border rounded-xl overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-brand-dark hover:bg-gray-50 hover:no-underline">
                  Terms & Conditions
                </AccordionTrigger>
                <AccordionContent className="px-6 py-6 bg-gray-50 border-t">
                  <div className="prose max-w-none">
                    <h3 className="text-brand-dark text-lg font-medium mb-4">1. Introduction</h3>
                    <p className="text-gray-700 mb-4">These Terms govern your use of Sudden Impact Agency services, including AI voice agents and Automation Suite.</p>
                    
                    <h3 className="text-brand-dark text-lg font-medium mb-4">2. Free Trial & Billing</h3>
                    <ul className="space-y-2 text-gray-700 list-disc pl-5">
                      <li>7-day free trial on all subscription plans.</li>
                      <li>Valid credit card required at sign-up.</li>
                      <li>No charge during trial period.</li>
                      <li>Automatic subscription start if not canceled within 7 days.</li>
                    </ul>
                    
                    <h3 className="text-brand-dark text-lg font-medium mb-4">3. One-Time Setup Fee</h3>
                    <ul className="space-y-2 text-gray-700 list-disc pl-5">
                      <li>$197 setup fee applies to all plans.</li>
                      <li>Charged automatically after trial period.</li>
                    </ul>
                    
                    <h3 className="text-brand-dark text-lg font-medium mb-4">4. Subscriptions & Renewals</h3>
                    <ul className="space-y-2 text-gray-700 list-disc pl-5">
                      <li>Monthly or annual billing options.</li>
                      <li>Automatic renewals unless canceled.</li>
                      <li>Cancel anytime via account dashboard or support.</li>
                    </ul>
                    
                    <h3 className="text-brand-dark text-lg font-medium mb-4">5. Overage Charges</h3>
                    <ul className="space-y-2 text-gray-700 list-disc pl-5">
                      <li>Plan includes monthly AI Engagement Minutes.</li>
                      <li>Overages billed per minute.</li>
                      <li>Credit card must be on file.</li>
                    </ul>
                    
                    <h3 className="text-brand-dark text-lg font-medium mb-4">6. Refunds</h3>
                    <p className="text-gray-700 mb-4">No refunds for subscription or setup fees after trial.</p>
                    
                    <h3 className="text-brand-dark text-lg font-medium mb-4">7. Service Usage</h3>
                    <p className="text-gray-700 mb-4">You agree not to misuse the platform. We reserve the right to suspend accounts.</p>
                    
                    <h3 className="text-brand-dark text-lg font-medium mb-4">8. Changes to Terms</h3>
                    <p className="text-gray-700">Terms may update; notifications will be sent via email/account dashboard.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="privacy-policy" 
                id="privacy-policy"
                className="border rounded-xl overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-brand-dark hover:bg-gray-50 hover:no-underline">
                  Privacy Policy
                </AccordionTrigger>
                <AccordionContent className="px-6 py-6 bg-gray-50 border-t">
                  <div className="prose max-w-none">
                    <h3 className="text-brand-dark text-lg font-medium mb-4">1. Information We Collect</h3>
                    <ul className="space-y-2 text-gray-700 list-disc pl-5">
                      <li>Name, email, phone number</li>
                      <li>Billing and payment information</li>
                      <li>Website usage and AI interaction analytics</li>
                      <li>Business-related onboarding data</li>
                    </ul>
                    
                    <h3 className="text-brand-dark text-lg font-medium mb-4">2. How We Use Your Information</h3>
                    <ul className="space-y-2 text-gray-700 list-disc pl-5">
                      <li>Deliver and improve AI voice agent services</li>
                      <li>Billing and account management</li>
                      <li>Send transactional communications</li>
                      <li>Support request responses</li>
                      <li>Optional promotional updates</li>
                    </ul>
                    
                    <h3 className="text-brand-dark text-lg font-medium mb-4">3. Data Sharing & Security</h3>
                    <ul className="space-y-2 text-gray-700 list-disc pl-5">
                      <li>No selling or renting of user data</li>
                      <li>Limited sharing with service providers</li>
                      <li>Secure, encrypted data storage</li>
                      <li>PCI-compliant payment processing</li>
                    </ul>
                    
                    <h3 className="text-brand-dark text-lg font-medium mb-4">4. Data Retention</h3>
                    <p className="text-gray-700 mb-4">Retain data only as needed for service delivery and legal obligations.</p>
                    
                    <h3 className="text-brand-dark text-lg font-medium mb-4">5. Your Rights</h3>
                    <p className="text-gray-700 mb-4">Request data access, updates, or deletion by contacting support.</p>
                    
                    <h3 className="text-brand-dark text-lg font-medium mb-4">6. Contact</h3>
                    <p className="text-gray-700">Questions? Email: support@suddenimpactagency.io</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </StyleProvider>

          <StyleProvider delay={0.4} className="mt-10">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Last Updated:</span> May 1, 2023<br/>
                This document represents the full legal agreement between you and Sudden Impact Agency. By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
            </div>
          </StyleProvider>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
