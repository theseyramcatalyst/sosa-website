import React from "react";
import ImpactCTAImage from "../images/impact-cta.jpg";
const ImpactCTA = () => {
  return (
    <section className="relative min-h-[220px] overflow-hidden">
      <img
        src={ImpactCTAImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-red-500/60" />

      <div className="relative z-10 mx-auto flex min-h-[220px] max-w-[700px] flex-col items-center justify-center px-6 text-center text-white">

        <h2 className="text-2xl font-bold">
          Creating Lasting Impact
        </h2>

        <p className="mt-3 max-w-[580px] text-xs leading-[1.6]">
          Each of these projects and initiatives reflects our commitment to
          creating lasting positive change in the communities we serve,
          empowering individuals to reach their full potential, and fostering
          a more just and sustainable world.
        </p>

        <a
          href="/join-us"
          className="mt-5 bg-white px-7 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100"
        >
          Join Us
        </a>
      </div>
    </section>
  );
};

export default ImpactCTA;