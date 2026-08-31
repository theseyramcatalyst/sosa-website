// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import EmpoweringSection from "../components/EmpoweringSection";
import WhoWeAre from "../components/WhoWeAre";
import WhatWeDo from "../components/WhatWeDo";
import PartnerWithUs from "../components/PartnerWithUs";
import ImpactfulSolutions from "../components/ImpactfulSolutions";
import FAQAndCTA from "../components/FAQAndCTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <EmpoweringSection />
      <WhoWeAre />
      <WhatWeDo />
      <PartnerWithUs />
      <ImpactfulSolutions />
      <FAQAndCTA />
      <Footer />
    </div>
  );
};

export default Home;