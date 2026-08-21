import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";
import SiteLayout from "@/components/layout/SiteLayout";
import Index from "./pages/Index.tsx";
import Entwicklung from "./pages/Entwicklung.tsx";
import Technologien from "./pages/Technologien.tsx";
import Prozess from "./pages/Prozess.tsx";
import Kontakt from "./pages/Kontakt.tsx";
import Impressum from "./pages/Impressum.tsx";
import Datenschutz from "./pages/Datenschutz.tsx";
import Karriere from "./pages/Karriere.tsx";
import KarriereDetail from "./pages/KarriereDetail.tsx";
import Bewerbung from "./pages/Bewerbung.tsx";
import Team from "./pages/Team.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/entwicklung" element={<Entwicklung />} />
            <Route path="/technologien" element={<Technologien />} />
            <Route path="/prozess" element={<Prozess />} />
            <Route path="/leistungen" element={<Navigate to="/entwicklung" replace />} />
            <Route path="/software" element={<Navigate to="/technologien" replace />} />
            <Route path="/methodik" element={<Navigate to="/prozess" replace />} />
            <Route path="/team" element={<Team />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/karriere" element={<Karriere />} />
            <Route path="/karriere/bewerbung" element={<Bewerbung />} />
            <Route path="/karriere/onlineprozess-tests" element={<Navigate to="/karriere/onlineprozess-tester" replace />} />
            <Route path="/karriere/:slug" element={<KarriereDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
