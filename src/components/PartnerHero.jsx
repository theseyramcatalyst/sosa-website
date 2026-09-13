import React from "react";
import PartnerHeroImage from "../images/partner-hero.jpg";

const PartnerHero = () => {
  return (
    <section className="relative min-h-[340px] overflow-hidden">
      <img
        src={PartnerHeroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex min-h-[340px] max-w-[1080px] flex-col justify-center px-6 text-center text-white">

        <div className="absolute left-6 top-7 text-sm">
          Home <span className="mx-1">&gt;</span>{" "}
          <span className="underline">
            Partner With Us
          </span>
        </div>

        <h1 className="text-3xl font-bold sm:text-4xl">
          Partner With Us
        </h1>

        <p className="mx-auto mt-5 max-w-[600px] text-sm leading-[1.7]">
          We are seeking passionate individuals and organizations to join us
          in our mission to create lasting positive change within
          communities.
        </p>

        <a
          href="#partnership"
          className="mx-auto mt-7 bg-[#d40000] px-7 py-3 text-sm font-medium text-white hover:bg-[#b80000]"
        >
          Become a partner
        </a>
      </div>
    </section>
  );
};

export default PartnerHero;