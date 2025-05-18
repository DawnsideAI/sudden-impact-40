
import { lazy, Suspense, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import ServiceFeatures from "@/components/home/ServiceFeatures";
import TrustedBy from "@/components/home/TrustedBy";
import WhiteSection from "@/components/layout/WhiteSection";
import StyleProvider from "@/components/design/StyleProvider";
import { useIsMobile } from "@/hooks/use-mobile";

// Import IndustrySolutions directly instead of using lazy loading
import IndustrySolutions from "@/components/home/IndustrySolutions";

// Continue lazy loading other non-critical components
const CallerComparisonChart = lazy(() => import("@/components/home/CallerComparisonChart"));
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
    
    // Apply enhanced smooth scroll behavior for mobile
    if (isMobile) {
      // Apply optimized touch handling
      document.documentElement.style.setProperty('scroll-behavior', 'smooth');
      document.documentElement.style.setProperty('word-break', 'break-word');
      document.documentElement.style.setProperty('overflow-wrap', 'break-word');
      
      // Ensure smooth scrolling by preventing any scroll hijacking
      const handleTouchStart = (e: TouchEvent) => {
        if (e.touches.length > 1) {
          e.preventDefault(); // Prevent zooming which can cause scroll issues
        }
      };
      
      document.addEventListener('touchstart', handleTouchStart, { passive: false });
      
      return () => {
        document.removeEventListener('touchstart', handleTouchStart);
        document.documentElement.style.removeProperty('scroll-behavior');
        document.documentElement.style.removeProperty('word-break');
        document.documentElement.style.removeProperty('overflow-wrap');
      };
    }
  }, [isMobile]);

  // Add optimized section spacing for mobile
  const mobileSectionClass = isMobile ? "py-3 md:py-12" : "py-6 md:py-12";
  const mobileGradientSectionClass = isMobile ? "py-3 md:py-12" : "py-6 md:py-12";

  return (
    <Layout lightMode={true}>
      <div className="flex flex-col gap-0">
        {/* Hero - White background with gradient accents */}
        <Hero />
        
        {/* Stats Section - White Background */}
        <WhiteSection className={`bg-white border-b border-gray-100 ${mobileSectionClass}`}>
          <Stats />
        </WhiteSection>
        
        {/* Service Features - Gradient Background */}
        <WhiteSection className={`bg-gradient-to-br from-brand-pink/5 via-white to-brand-aqua/5 border-b border-gray-100 ${mobileGradientSectionClass}`}>
          <ServiceFeatures />
        </WhiteSection>
        
        {/* Trusted By - White Background */}
        <WhiteSection className={`bg-white border-b border-gray-100 ${mobileSectionClass}`}>
          <TrustedBy />
        </WhiteSection>
        
        <Suspense fallback={<div className="h-40 md:h-96 flex items-center justify-center">Loading...</div>}>
          {/* Comparison Chart - Gradient Background */}
          <WhiteSection className={`bg-gradient-to-br from-brand-aqua/5 via-white to-brand-pink/5 border-b border-gray-100 ${mobileGradientSectionClass}`}>
            <CallerComparisonChart />
          </WhiteSection>
          
          {/* Case Studies - White Background */}
          <WhiteSection className={`bg-white border-b border-gray-100 ${mobileSectionClass}`}>
            <CaseStudies />
          </WhiteSection>
        </Suspense>
        
        {/* Industry Solutions - Gradient Background - Import directly */}
        <WhiteSection className={`bg-gradient-to-br from-brand-purple/5 via-white to-brand-pink/5 border-b border-gray-100 ${mobileGradientSectionClass}`}>
          <IndustrySolutions />
        </WhiteSection>
        
        <Suspense fallback={<div className="h-40 md:h-96 flex items-center justify-center">Loading...</div>}>
          {/* Testimonials - White Background */}
          <WhiteSection className={`bg-white border-b border-gray-100 ${mobileSectionClass}`}>
            <Testimonials />
          </WhiteSection>
          
          {/* AI Papers - Gradient Background */}
          <WhiteSection className={`bg-gradient-to-br from-brand-pink/5 via-white to-brand-aqua/5 border-b border-gray-100 ${mobileGradientSectionClass}`}>
            <AIPapersSection />
          </WhiteSection>
          
          {/* Demo Form - White Background */}
          <WhiteSection className={`bg-white border-b border-gray-100 ${mobileSectionClass}`}>
            <DemoForm />
          </WhiteSection>
          
          {/* FAQ - Gradient Background */}
          <WhiteSection className={`bg-gradient-to-br from-brand-aqua/5 via-white to-brand-pink/5 border-b border-gray-100 ${mobileGradientSectionClass}`}>
            <Faq />
          </WhiteSection>
          
          {/* Call to Action - Bold Gradient Background */}
          <WhiteSection className={`bg-gradient-to-br from-brand-purple/5 via-white to-brand-aqua/5 ${mobileSectionClass}`}>
            <CallToAction />
          </WhiteSection>
        </Suspense>
      </div>
    </Layout>
  );
};

export default Index;
