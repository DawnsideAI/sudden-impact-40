
import { lazy, Suspense, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import ServiceFeatures from "@/components/home/ServiceFeatures";
import TrustedBy from "@/components/home/TrustedBy";
import WhiteSection from "@/components/layout/WhiteSection";
import StyleProvider from "@/components/design/StyleProvider";
import { useIsMobile } from "@/hooks/use-mobile";

// Lazy load non-critical components
const CallerComparisonChart = lazy(() => import("@/components/home/CallerComparisonChart"));
const IndustrySolutions = lazy(() => import("@/components/home/IndustrySolutions"));
const Testimonials = lazy(() => import("@/components/home/Testimonials"));
const CaseStudies = lazy(() => import("@/components/home/CaseStudies"));
const AIPapersSection = lazy(() => import("@/components/pricing/AIPapersSection"));
const DemoForm = lazy(() => import("@/components/home/DemoForm"));
const Faq = lazy(() => import("@/components/home/Faq"));
const CallToAction = lazy(() => import("@/components/home/CallToAction"));

const Index = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout lightMode={true}>
      <div className="flex flex-col gap-0">
        {/* Hero - White background with gradient accents */}
        <Hero />
        
        {/* Stats Section - White Background */}
        <WhiteSection className="bg-white border-b border-gray-100">
          <Stats />
        </WhiteSection>
        
        {/* Service Features - Gradient Background */}
        <WhiteSection className="bg-gradient-to-br from-brand-pink/5 via-white to-brand-aqua/5 border-b border-gray-100">
          <ServiceFeatures />
        </WhiteSection>
        
        {/* Trusted By - White Background */}
        <WhiteSection className="bg-white border-b border-gray-100 py-6 md:py-12">
          <TrustedBy />
        </WhiteSection>
        
        <Suspense fallback={<div className="h-40 md:h-96 flex items-center justify-center">Loading...</div>}>
          {/* Comparison Chart - Gradient Background */}
          <WhiteSection className="bg-gradient-to-br from-brand-aqua/5 via-white to-brand-pink/5 border-b border-gray-100">
            <CallerComparisonChart />
          </WhiteSection>
          
          {/* Case Studies - White Background */}
          <WhiteSection className="bg-white border-b border-gray-100">
            <CaseStudies />
          </WhiteSection>
          
          {/* Industry Solutions - Gradient Background */}
          <WhiteSection className="bg-gradient-to-br from-brand-purple/5 via-white to-brand-pink/5 border-b border-gray-100">
            <IndustrySolutions />
          </WhiteSection>
          
          {/* Testimonials - White Background */}
          <WhiteSection className="bg-white border-b border-gray-100">
            <Testimonials />
          </WhiteSection>
          
          {/* AI Papers - Gradient Background */}
          <WhiteSection className="bg-gradient-to-br from-brand-pink/5 via-white to-brand-aqua/5 border-b border-gray-100">
            <AIPapersSection />
          </WhiteSection>
          
          {/* Demo Form - White Background */}
          <WhiteSection className="bg-white border-b border-gray-100">
            <DemoForm />
          </WhiteSection>
          
          {/* FAQ - Gradient Background */}
          <WhiteSection className="bg-gradient-to-br from-brand-aqua/5 via-white to-brand-pink/5 border-b border-gray-100">
            <Faq />
          </WhiteSection>
          
          {/* Call to Action - Bold Gradient Background */}
          <WhiteSection className="bg-gradient-to-br from-brand-purple/5 via-white to-brand-aqua/5">
            <CallToAction />
          </WhiteSection>
        </Suspense>
      </div>
    </Layout>
  );
};

export default Index;
