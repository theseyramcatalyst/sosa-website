import React from "react";
import JoinUsHero from "../images/join-us-hero.jpg"

const JoinHero = () => {
  return (
    <section className="relative min-h-[315px] overflow-hidden">
      {/* Background */}
      <img
        src={JoinUsHero}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex min-h-[315px] max-w-[1080px] items-center px-6 sm:px-10">
        <div className="max-w-[760px] text-white">

          {/* Breadcrumb */}
          <div className="mb-12 text-xs">
            <a href="/" className="hover:underline">
              Home
            </a>

            <span className="mx-2">›</span>

            <span className="text-white/70">
              Join Us
            </span>
          </div>

          <h1 className="text-3xl font-bold sm:text-4xl">
            Join Us
          </h1>

          <p className="mt-3 text-xs leading-[1.8] sm:text-[11px]">
            Do you have a passion for making a difference in the lives of
            young people and marginalized communities? Sowing Seeds Alliance
            is seeking dedicated individuals to join our team of volunteers.
          </p>

          <p className="mt-5 text-xs leading-[1.8] sm:text-[11px]">
            Your time and talents can help us create lasting positive change.
            Whether you have a knack for teaching, a heart for advocacy, or a
            passion for technology, there's a role for you at Sowing Seeds
            Alliance.
          </p>

          <a
            href="#volunteer"
            className="mt-5 inline-flex bg-[#d40000] px-5 py-3 text-xs font-medium text-white transition hover:bg-[#b80000]"
          >
            Become a volunteer
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinHero;