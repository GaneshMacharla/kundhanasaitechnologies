import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { TrustStrip } from '../components/TrustStrip';
import { FeaturedCourses } from '../components/FeaturedCourses';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TrainingJourney } from '../components/TrainingJourney';
import { PlacementSection } from '../components/PlacementSection';
import { BatchSection } from '../components/BatchSection';
import { StudentBenefits } from '../components/StudentBenefits';
import { TechnologyGrid } from '../components/TechnologyGrid';
import { AboutSnippet } from '../components/AboutSnippet';
import { SolutionsSnippet } from '../components/SolutionsSnippet';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { CtaBanner } from '../components/CtaBanner';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustStrip />
      <FeaturedCourses />
      <WhyChooseUs />
      <TrainingJourney />
      <PlacementSection />
      <BatchSection />
      <StudentBenefits />
      <TechnologyGrid />
      <AboutSnippet />
      <SolutionsSnippet />
      <TestimonialsSection />
      <FAQSection />
      <CtaBanner />
    </div>
  );
};
