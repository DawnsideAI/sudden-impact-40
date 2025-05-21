
import { ReactNode, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: ReactNode;
  showBgEffects?: boolean;
  lightMode?: boolean;
}

const Layout = ({ children, showBgEffects = true, lightMode = false }: LayoutProps) => {
  const isMobile = useIsMobile();
  
  // Prevent horizontal scrolling and optimize mobile experience
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    
    // Apply mobile-specific optimizations
    if (isMobile) {
      document.body.classList.add('mobile-optimized');
      document.documentElement.style.wordBreak = 'break-word';
    } else {
      document.body.classList.remove('mobile-optimized');
      document.documentElement.style.wordBreak = '';
    }
    
    return () => {
      document.body.style.overflowX = '';
      document.body.classList.remove('mobile-optimized');
      document.documentElement.style.wordBreak = '';
    };
  }, [isMobile]);
  
  return (
    <div className={`flex flex-col min-h-screen ${lightMode ? 'bg-white' : 'bg-background'} overflow-x-hidden`}>
      {/* Background effects - only shown when requested, not in light mode, and reduced on mobile */}
      {showBgEffects && !lightMode && (
        <>
          <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center opacity-70 md:opacity-100 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div 
            className="fixed inset-0 bg-background [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#7C3AED_100%)]" 
            style={{ opacity: isMobile ? 0.1 : 0.15 }}
          />
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen w-full overflow-x-hidden">
        {/* Even thinner header bar */}
        <div className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
          <Navbar />
        </div>
        
        {/* Further reduced padding to account for thinner header while maintaining logo size */}
        <div className={isMobile ? "pt-26" : "pt-40"}>
          <main className="flex-grow overflow-x-hidden pt-4 md:pt-8">
            {children}
          </main>
        </div>
        
        <Footer lightMode={lightMode} />
      </div>
    </div>
  );
};

export default Layout;
