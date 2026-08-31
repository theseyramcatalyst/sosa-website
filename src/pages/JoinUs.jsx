import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JoinHero from "../components/JoinHero";
import VolunteerForm from "../components/VolunteerForm";

const JoinUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />

      <main>
        <JoinHero />

        <VolunteerForm />
      </main>

      <Footer />
    </div>
  );
};

export default JoinUs;