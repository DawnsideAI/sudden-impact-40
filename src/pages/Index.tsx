
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServiceFeatures from "@/components/home/ServiceFeatures";
import IndustrySolutions from "@/components/home/IndustrySolutions";
import CallToAction from "@/components/home/CallToAction";
import Faq from "@/components/home/Faq";
import DemoForm from "@/components/home/DemoForm";

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Hero />
      <ServiceFeatures />
      <IndustrySolutions />
      <DemoForm />
      <Faq />
      <CallToAction />
    </Layout>
  );
};

export default Index;
