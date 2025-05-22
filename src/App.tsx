
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import IndustryPage from "./components/industries/IndustryPage";
import Demo from "./pages/Demo";
import Legal from "./pages/Legal";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Import industry-specific pages
import HealthcareNiche from "./pages/industries/Healthcare";
import RealEstateNiche from "./pages/industries/RealEstate";
import RestaurantsNiche from "./pages/industries/Restaurants";
import ServiceContractorsNiche from "./pages/industries/ServiceContractors";
import MusicNiche from "./pages/industries/Music";

// Import common industry pages
import IndustryAbout from "./pages/industries/common/IndustryAbout";
import IndustryBooking from "./pages/industries/common/IndustryBooking";

import "./styles/iframe-container.css";

// Import the Music industry component
import MusicIndustry from "./components/industries/MusicIndustry";

// Create the query client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:industryId" element={<IndustryPage />} />
          <Route path="/industries/music" element={<MusicIndustry />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Industry-specific page routes */}
          <Route path="/industries/healthcare" element={<HealthcareNiche />} />
          <Route path="/industries/real-estate" element={<RealEstateNiche />} />
          <Route path="/industries/restaurants" element={<RestaurantsNiche />} />
          <Route path="/industries/service-contractors" element={<ServiceContractorsNiche />} />
          <Route path="/industries/music" element={<MusicNiche />} />
          
          {/* Common industry page routes */}
          <Route path="/industries/:industry/about" element={<IndustryAbout />} />
          <Route path="/industries/:industry/booking" element={<IndustryBooking />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
