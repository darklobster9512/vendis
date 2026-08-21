import { useEffect } from 'react';
import HeroSplit from '@/components/landing-v2/HeroSplit';
import TrustLogos from '@/components/landing-v2/TrustLogos';
import ServicesTabs from '@/components/landing-v2/ServicesTabs';
import ProcessFlow from '@/components/landing-v2/ProcessFlow';
import ImpactGrid from '@/components/landing-v2/ImpactGrid';
import AboutSnapshot from '@/components/landing-v2/AboutSnapshot';
import VoicesSection from '@/components/landing-v2/VoicesSection';
import FinalCTA from '@/components/landing-v2/FinalCTA';
import Footer from '@/components/landing/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'for.tel Solutions – Technische Beratung, Projektmanagement & Anlagenplanung';
  }, []);

  return (
    <>
      <HeroSplit />
      <TrustLogos />
      <ServicesTabs />
      <ProcessFlow />
      <ImpactGrid />
      <AboutSnapshot />
      <VoicesSection />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default Index;
