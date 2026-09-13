import React from "react";

import PartnerHero from "../components/PartnerHero";
import PartnershipMethods from "../components/PartnershipMethods";
import CurrentPartners from "../components/CurrentPartners";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";

const PartnerWithUs = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <PartnerHero />

      <PartnershipMethods />

      <CurrentPartners />
      <Footer />
    </>
  );
};

export default PartnerWithUs;