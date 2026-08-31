import React from "react";
import whoWeAreImage from "../images/who-we-are.png";

const WhoWeAre = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:min-h-[430px] lg:py-8"
    >
      {/* Left background panel */}
      <div className="absolute left-0 top-0 hidden h-full w-[43%] bg-[#c9dce2] lg:block" />

      {/* Mobile background */}
      <div className="absolute inset-x-0 top-0 h-[45%] bg-[#c9dce2] lg:hidden" />

      <div className="relative mx-auto flex max-w-[1000px] flex-col items-center gap-10 px-6 lg:min-h-[400px] lg:flex-row lg:gap-0 lg:px-0">
        
        {/* ================= IMAGE ================= */}
        <div className="relative z-10 w-full max-w-[420px] lg:w-[55%] lg:max-w-none">
          <div className="overflow-hidden rounded-b-lg rounded-t-[7px]">
            <img
              src={whoWeAreImage}
              alt="Sowing Seeds Alliance team members"
              className="w-full object-cover object-center"
            />
          </div>
        </div>

        {/* ================= CONTENT CARD ================= */}
        <div className="relative z-20 w-full max-w-[420px] lg:-ml-[-35px] lg:w-[43%] lg:max-w-none">
          <div className="flex min-h-[240px] flex-col rounded-[3px] border border-[#d4d4d4] bg-white px-7 py-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] sm:px-9 sm:py-7">
            
            {/* Heading */}
            <h2 className="text-center text-2xl font-medium tracking-wide text-[#111] sm:text-[25px]">
              Who We Are
            </h2>

            {/* Content */}
            <div className="mx-auto mt-7 max-w-[310px] text-center text-sm leading-[1.3] text-[#111]">
              <p>
                Sowing Seeds Alliance (SoSA) is an initiative of the
                Sprinkle4AGrowth Foundation, committed to empowering youth,
                children, and marginalized communities. We believe in nurturing
                minds not only through education but also through impactful
                actions that create lasting positive change.
              </p>

              <p className="mt-1">
                Our organization is driven by a vision to spark positive change
                and create ripples of progress in society.
              </p>
            </div>

            {/* Button */}
            <div className="mt-auto flex justify-end pt-6">
              <a
                href="#about-more"
                className="inline-flex h-[3rem] items-center bg-[#d40000] px-[2rem] text-sm font-medium text-white transition hover:bg-[#b80000]"
              >
                Get to know us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;