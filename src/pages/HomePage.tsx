import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { HeroSection } from '../components/HeroSection';
import { CompanyIntroSection } from '../components/CompanyIntroSection';
import { ServicesSection } from '../components/ServicesSection';
import { TechnologyExpertiseSection } from '../components/TechnologyExpertiseSection';
import { ValuePropositionSection } from '../components/ValuePropositionSection';
import { IndustriesSection } from '../components/IndustriesSection';
import { ContactCtaSection } from '../components/ContactCtaSection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Engineering Intelligence. Enabling Transformation."
        description="Kundhana Sai IT Solutions helps businesses unlock new possibilities through intelligent AI, modern data platforms, cloud engineering and enterprise technology solutions."
        canonicalPath="/"
      />
      <HeroSection />
      <CompanyIntroSection />
      <ServicesSection />
      <TechnologyExpertiseSection />
      <ValuePropositionSection />
      <IndustriesSection />
      <ContactCtaSection />
    </div>
  );
};
