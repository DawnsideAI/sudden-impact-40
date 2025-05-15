
import { lazy, Suspense, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import ServiceFeatures from "@/components/home/ServiceFeatures";
import TrustedBy from "@/components/home/TrustedBy";
import WhiteSection from "@/components/layout/WhiteSection";
import StyleProvider from "@/components/design/StyleProvider";

// Lazy load non-critical components
const CallerComparisonChart = lazy(() => import("@/components/home/CallerComparisonChart"));
const IndustrySolutions = lazy(() => import("@/components/home/IndustrySolutions"));
const AIPapersSection = lazy(() => import("@/components/pricing/AIPapersSection"));
const DemoForm = lazy(() => import("@/components/home/DemoForm"));
const Faq = lazy(() => import("@/components/home/Faq"));
const CallToAction = lazy(() => import("@/components/home/CallToAction"));

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout lightMode={true}>
      <div className="flex flex-col gap-0">
        <Hero />
        <WhiteSection className="bg-white border-b border-gray-100">
          <Stats />
        </WhiteSection>
        <WhiteSection className="bg-gradient-to-br from-white via-white to-gray-50 border-b border-gray-100">
          <ServiceFeatures />
        </WhiteSection>
        <WhiteSection className="bg-white border-b border-gray-100">
          <TrustedBy />
        </WhiteSection>
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
          <WhiteSection className="bg-gradient-to-br from-white via-white to-gray-50 border-b border-gray-100">
            <CallerComparisonChart />
          </WhiteSection>
          <WhiteSection className="bg-white border-b border-gray-100">
            <IndustrySolutions />
          </WhiteSection>
          <WhiteSection className="bg-gradient-to-br from-white via-white to-gray-50 border-b border-gray-100">
            <AIPapersSection />
          </WhiteSection>
          <WhiteSection className="bg-white border-b border-gray-100">
            <DemoForm />
          </WhiteSection>
          <WhiteSection className="bg-white border-b border-gray-100">
            <Faq />
          </WhiteSection>
          <WhiteSection className="bg-gradient-to-br from-white via-white to-gray-50">
            <CallToAction />
          </WhiteSection>
        </Suspense>
      </div>
    </Layout>
  );
};

export default Index;
