
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";

const Legal = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Legal | Sudden Impact Agency";
    
    // Check if URL has a hash and scroll to the section
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
      <div className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-12 border-b border-gray-200 pb-4">Legal Information</h1>
          
          {/* Privacy Policy */}
          <section id="privacy" className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                At Sudden Impact Agency, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h3>
              <p className="mb-4">
                We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on our services, or otherwise when you contact us.
              </p>
              <p className="mb-4">
                The personal information we collect may include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business information</li>
                <li>Content of communications</li>
                <li>Usage data and interaction with our services</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h3>
              <p className="mb-4">
                We use the information we collect for various business purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Providing, personalizing, and improving our services</li>
                <li>Communicating with you about our services</li>
                <li>Analyzing how you use our services</li>
                <li>Preventing fraud and security monitoring</li>
                <li>Complying with legal obligations</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Information Sharing and Disclosure</h3>
              <p className="mb-4">
                We may share information in the following situations:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>With service providers and business partners</li>
                <li>For business transfers</li>
                <li>With your consent</li>
                <li>When required by law</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Data Security</h3>
              <p className="mb-4">
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no electronic transmission or storage of information can be entirely secure.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Your Privacy Rights</h3>
              <p className="mb-4">
                Depending on your location, you may have rights concerning your personal information, such as the right to access, correct, delete, or restrict processing of your personal information.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Updates to This Policy</h3>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              
              <p className="mt-6 text-sm text-gray-600">Last Updated: April 2025</p>
            </div>
          </section>
          
          {/* Terms & Conditions */}
          <section id="terms" className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Terms & Conditions</h2>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                These Terms and Conditions govern your use of Sudden Impact Agency's services and constitute a binding legal agreement between you and Sudden Impact Agency.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Service Description</h3>
              <p className="mb-4">
                Sudden Impact Agency provides AI voice agent solutions and business automation services through various subscription plans. Our services include, but are not limited to, AI voice agents, CRM tools, booking systems, and automation tools.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">User Accounts</h3>
              <p className="mb-4">
                When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Subscription and Billing</h3>
              <p className="mb-4">
                We offer subscription-based services with various plans. By subscribing to our services:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>You agree to pay all fees associated with your chosen plan</li>
                <li>You authorize us to charge your payment method on file</li>
                <li>Subscriptions automatically renew unless canceled before the renewal date</li>
                <li>A one-time setup fee of $197 will be charged after the trial period</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Free Trial</h3>
              <p className="mb-4">
                We offer a 7-day free trial for new users. A valid payment method is required to start the trial, but you will not be charged until the trial period ends. If you do not cancel before the trial ends, you will be automatically enrolled in your chosen plan.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Refund Policy</h3>
              <p className="mb-4">
                We do not offer refunds for subscription fees or setup fees once billing begins. Please use the 7-day trial period to ensure our service meets your needs.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Acceptable Use</h3>
              <p className="mb-4">
                You agree not to use our services for any illegal purposes or in any manner that could damage, disable, overburden, or impair our services.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Intellectual Property</h3>
              <p className="mb-4">
                All content, features, and functionality of our services are owned by Sudden Impact Agency and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Limitation of Liability</h3>
              <p className="mb-4">
                To the maximum extent permitted by law, Sudden Impact Agency shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Changes to Terms</h3>
              <p className="mb-4">
                We may modify these Terms and Conditions at any time. We will notify you of significant changes and, where required by law, obtain your consent.
              </p>
              
              <p className="mt-6 text-sm text-gray-600">Last Updated: April 2025</p>
            </div>
          </section>
          
          {/* Overage Disclaimer */}
          <section id="overage" className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Overage Disclaimer</h2>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                This Overage Disclaimer explains our policies regarding usage beyond your plan's allocated AI Engagement Minutes.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">AI Engagement Minutes</h3>
              <p className="mb-4">
                AI Engagement Minutes are the amount of time your AI agent spends actively engaging with your leads or customers. This includes live calls, demo sessions, and appointment workflows.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Overage Rates</h3>
              <p className="mb-4">
                If you exceed your plan's allocated AI Engagement Minutes in a billing cycle, you will be charged an overage fee per minute. The current overage rate is $0.15 per minute.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Billing for Overages</h3>
              <p className="mb-4">
                Overage charges will be automatically billed to the payment method on file. These charges are calculated based on actual usage beyond your plan's limit and will appear on your next invoice.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Usage Notifications</h3>
              <p className="mb-4">
                We provide usage notifications via email and SMS at the following thresholds:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>80% of your monthly allocation - Warning notification</li>
                <li>95% of your monthly allocation - Urgent reminder</li>
                <li>100% of your monthly allocation - Overage notification and billing alert</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Plan Upgrades</h3>
              <p className="mb-4">
                If you consistently exceed your current plan's limits, we recommend upgrading to a higher tier plan. Plan upgrades take effect immediately and provide additional AI Engagement Minutes for the current and future billing cycles.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Changes to Overage Rates</h3>
              <p className="mb-4">
                We reserve the right to modify overage rates with notice to our users. Any changes to overage rates will be communicated via email and will take effect in the next billing cycle.
              </p>
              
              <p className="mt-6 text-sm text-gray-600">Last Updated: April 2025</p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Legal;
