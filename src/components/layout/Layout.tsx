
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

interface LayoutProps {
  children: ReactNode;
  showBgEffects?: boolean;
  lightMode?: boolean;
}

const Layout = ({ children, showBgEffects = true, lightMode = false }: LayoutProps) => {
  return (
    <div className={`flex flex-col min-h-screen ${lightMode ? 'bg-white' : 'bg-background'}`}>
      <CustomCursor lightMode={lightMode} />
      
      {/* Background effects - only shown when requested and not in light mode */}
      {showBgEffects && !lightMode && (
        <>
          <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div 
            className="fixed inset-0 bg-background [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#8B5CF6_100%)]" 
            style={{ opacity: 0.15 }}
          />
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar isSolid={false} lightMode={lightMode} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer lightMode={lightMode} />
      </div>
    </div>
  );
};

export default Layout;
