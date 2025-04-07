import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TokenomicsSection from '@/components/TokenomicsSection';
import RoadmapSection from '@/components/RoadmapSection';
import CommunitySection from '@/components/CommunitySection';
import ContractSection from '@/components/ContractSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Update title on component mount
  useEffect(() => {
    document.title = "Poop Rocket ($PROCK) - From the toilet to the moon";
  }, []);

  return (
    <div className="min-h-screen bg-space-dark text-white overflow-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ContractSection />
        <AboutSection />
        <TokenomicsSection />
        <RoadmapSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
