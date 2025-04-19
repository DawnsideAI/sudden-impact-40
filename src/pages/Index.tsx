
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServiceFeatures from "@/components/home/ServiceFeatures";
import IndustrySolutions from "@/components/home/IndustrySolutions";
import CallToAction from "@/components/home/CallToAction";
import Faq from "@/components/home/Faq";
import DemoForm from "@/components/home/DemoForm";
import CallerComparisonChart from "@/components/home/CallerComparisonChart";
import Stats from "@/components/home/Stats";
import TrustedBy from "@/components/home/TrustedBy";

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
        <CallerComparisonChart />
        <IndustrySolutions />
        <DemoForm />
        <Faq />
        <CallToAction />
      </div>
    </Layout>
  );
};

export default Index;
