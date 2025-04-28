
import { lazy, Suspense, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import ServiceFeatures from "@/components/home/ServiceFeatures";
import TrustedBy from "@/components/home/TrustedBy";

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
    <Layout>
      <div className="flex flex-col gap-0">
        <Hero />
        <Stats />
        <ServiceFeatures />
        <TrustedBy />
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
          <CallerComparisonChart />
          <IndustrySolutions />
          <AIPapersSection />
          <DemoForm />
          <Faq />
          <CallToAction />
        </Suspense>
      </div>
    </Layout>
  );
};

export default Index;
