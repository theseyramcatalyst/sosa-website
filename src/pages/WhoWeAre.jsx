import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import CoreValues from "../components/CoreValues";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import WhoWeAreHero from "../images/who-we-are-hero.jpg"

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />

      <main>
        <PageHero
          title="Who We Are"
          image={WhoWeAreHero}
          description="Sowing Seeds Alliance (SoSA) is an initiative of the Sprinkle4AGrowth Foundation, committed to empowering youth, children, and marginalized communities. We believe in nurturing minds not only through education but also through impactful actions that create lasting positive change."
        />

        <CoreValues />

        <TeamSection />
      </main>

      <Footer />
    </div>
  );
};

export default WhoWeAre;