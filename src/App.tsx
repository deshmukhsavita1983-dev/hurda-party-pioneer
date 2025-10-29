import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import GuestExperiences from "./pages/GuestExperiences";
import HurdaPartySolapur from "./pages/HurdaPartySolapur";
import FamilyPackage from "./pages/FamilyPackage";
import Gallery from "./pages/Gallery";
import NearbyAttractions from "./pages/NearbyAttractions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hurda-party-solapur" element={<HurdaPartySolapur />} />
          <Route path="/family-package" element={<FamilyPackage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/reviews" element={<GuestExperiences />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/nearby-attractions" element={<NearbyAttractions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
