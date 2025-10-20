import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import GlobalReachPage from "./pages/GlobalReachPage";
import ContactPage from "./pages/ContactPage";
import LocalRecruitmentPage from "./pages/LocalRecruitmentPage";
import HeadhuntingPage from "./pages/HeadhuntingPage";
import TrainingPage from "./pages/TrainingPage";
import ConsultancyPage from "./pages/ConsultancyPage";
import ExpatriateServicesPage from "./pages/ExpatriateServicesPage";
import PayrollPage from "./pages/PayrollPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import CookiePolicyPage from "./pages/CookiePolicyPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/global-reach" element={<GlobalReachPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/local-recruitment" element={<LocalRecruitmentPage />} />
          <Route path="/services/headhunting" element={<HeadhuntingPage />} />
          <Route path="/services/training" element={<TrainingPage />} />
          <Route path="/services/consultancy" element={<ConsultancyPage />} />
          <Route path="/services/expatriate" element={<ExpatriateServicesPage />} />
          <Route path="/services/payroll" element={<PayrollPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
