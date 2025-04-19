import { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Legal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Legal | Sudden Impact Agency";
    
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <Layout>
      <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background text-foreground">
        <div className="container-custom">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 border-b border-gray-700 pb-4"
          >
            Legal Information
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="overage-policy">
                <AccordionTrigger className="text-2xl font-semibold hover:bg-accent/20 px-4 py-2 rounded-lg">
                  Overage Policy Disclaimer
                </AccordionTrigger>
                <AccordionContent className="px-4 py-6 bg-secondary/10 rounded-lg">
                  <div className="prose dark:prose-invert max-w-none">
                    <h3>AI Engagement Minutes Overage</h3>
                    <ul>
                      <li>Each subscription plan includes a set number of monthly AI Engagement Minutes.</li>
                      <li>Exceeding plan minutes triggers automatic billing to the card on file.</li>
                      <li>Current overage rate: $0.15 per minute (subject to change with notice).</li>
                      <li>Overage charges invoiced at billing cycle end, along with regular subscription.</li>
                      <li>Usage notifications sent at 80%, 95%, and 100% of plan limit.</li>
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground">
                      For questions or plan upgrades, contact our support team.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="terms-conditions">
                <AccordionTrigger className="text-2xl font-semibold hover:bg-accent/20 px-4 py-2 rounded-lg">
                  Terms & Conditions
                </AccordionTrigger>
                <AccordionContent className="px-4 py-6 bg-secondary/10 rounded-lg">
                  <div className="prose dark:prose-invert max-w-none">
                    <h3>1. Introduction</h3>
                    <p>These Terms govern your use of Sudden Impact Agency services, including AI voice agents and Automation Suite.</p>
                    
                    <h3>2. Free Trial & Billing</h3>
                    <ul>
                      <li>7-day free trial on all subscription plans.</li>
                      <li>Valid credit card required at sign-up.</li>
                      <li>No charge during trial period.</li>
                      <li>Automatic subscription start if not canceled within 7 days.</li>
                    </ul>
                    
                    <h3>3. One-Time Setup Fee</h3>
                    <ul>
                      <li>$197 setup fee applies to all plans.</li>
                      <li>Charged automatically after trial period.</li>
                    </ul>
                    
                    <h3>4. Subscriptions & Renewals</h3>
                    <ul>
                      <li>Monthly or annual billing options.</li>
                      <li>Automatic renewals unless canceled.</li>
                      <li>Cancel anytime via account dashboard or support.</li>
                    </ul>
                    
                    <h3>5. Overage Charges</h3>
                    <ul>
                      <li>Plan includes monthly AI Engagement Minutes.</li>
                      <li>Overages billed per minute.</li>
                      <li>Credit card must be on file.</li>
                    </ul>
                    
                    <h3>6. Refunds</h3>
                    <p>No refunds for subscription or setup fees after trial.</p>
                    
                    <h3>7. Service Usage</h3>
                    <p>You agree not to misuse the platform. We reserve the right to suspend accounts.</p>
                    
                    <h3>8. Changes to Terms</h3>
                    <p>Terms may update; notifications will be sent via email/account dashboard.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="privacy-policy">
                <AccordionTrigger className="text-2xl font-semibold hover:bg-accent/20 px-4 py-2 rounded-lg">
                  Privacy Policy
                </AccordionTrigger>
                <AccordionContent className="px-4 py-6 bg-secondary/10 rounded-lg">
                  <div className="prose dark:prose-invert max-w-none">
                    <h3>1. Information We Collect</h3>
                    <ul>
                      <li>Name, email, phone number</li>
                      <li>Billing and payment information</li>
                      <li>Website usage and AI interaction analytics</li>
                      <li>Business-related onboarding data</li>
                    </ul>
                    
                    <h3>2. How We Use Your Information</h3>
                    <ul>
                      <li>Deliver and improve AI voice agent services</li>
                      <li>Billing and account management</li>
                      <li>Send transactional communications</li>
                      <li>Support request responses</li>
                      <li>Optional promotional updates</li>
                    </ul>
                    
                    <h3>3. Data Sharing & Security</h3>
                    <ul>
                      <li>No selling or renting of user data</li>
                      <li>Limited sharing with service providers</li>
                      <li>Secure, encrypted data storage</li>
                      <li>PCI-compliant payment processing</li>
                    </ul>
                    
                    <h3>4. Data Retention</h3>
                    <p>Retain data only as needed for service delivery and legal obligations.</p>
                    
                    <h3>5. Your Rights</h3>
                    <p>Request data access, updates, or deletion by contacting support.</p>
                    
                    <h3>6. Contact</h3>
                    <p>Questions? Email: support@suddenimpactagency.io</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Legal;
