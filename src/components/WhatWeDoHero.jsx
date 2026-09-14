import React from "react";
import WhatWeDoHeroImage from "../images/what-we-do-hero.jpg";

const WhatWeDoHero = () => {
  return (
    <section className="relative min-h-90 overflow-hidden">
      <img
        src={WhatWeDoHeroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto flex min-h-90  max-w-[1080px] items-center px-6">
        <div className="w-full text-center text-white">

          <div className="mb-8 text-left text-sm">
            Home <span className="mx-1">&gt;</span>{" "}
            <span className="underline">What We Do</span>
          </div>

          <h1 className="text-3xl font-bold sm:text-4xl">
            What We Do
          </h1>

          <p className="mx-auto mt-4 max-w-[620px] lg:text-sm text-xs leading-[1.8]">
            We nurture entrepreneurship, provide quality education, and
            conduct impactful research, we create opportunities for
            individuals to thrive and drive positive change in their
            communities.
          </p>

          <p className="mt-4 text-xs font-medium">
            Advocacy Programs&nbsp; · &nbsp;Coding Clubs&nbsp; · &nbsp;
            Entrepreneurship Programs&nbsp; · &nbsp;Capacity Building&nbsp;
            · &nbsp;Education&nbsp; · &nbsp;Research/Publication
          </p>

          <a
            href="#programs"
            className="mt-5 inline-flex bg-white px-8 py-2.5 text-sm font-medium text-[#d40000] transition hover:bg-gray-100"
          >
            Know More
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoHero;