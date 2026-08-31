import React from "react";
import WhatWeDoImage from '../images/what-we-do.png';

const features = [
  "Advocate for the rights and well-being of youth, children, and marginalized groups.",
  "Educate communities about environmental sustainability, equity, and human rights.",
  "Empower individuals through capacity building and the development of ICT skills.",
  "Inspire and motivate young people to become leaders and agents of change.",
  "Collaborate with partners to create sustainable and impactful programs.",
];

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-24">
      {/* Peach background block - responsive positioning */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-[42%] bg-[#efb3a3]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 px-4 sm:gap-10 md:gap-12 lg:flex-row lg:gap-16 xl:px-6">
        
        {/* Content Card */}
        <div className="z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[370px] xl:max-w-[420px] px-3 sm:px-0">
          <div className="border border-gray-300 bg-white px-5 py-6 sm:px-6 sm:py-7 md:px-8 md:py-8 shadow-sm">
            <h2 className="mb-2 sm:mb-3 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
              What We Do
            </h2>

            <p className="mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed text-gray-700">
              Our mission is to unlock the potential within every individual,
              fostering environments where growth and positive change can thrive.
            </p>

            <p className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold text-gray-800">
              Sowing Seeds Alliance works to:
            </p>

            <ul className="space-y-2 sm:space-y-2.5">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-xs sm:text-sm leading-relaxed text-gray-700"
                >
                  <span className="mt-[1px] flex h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 items-center justify-center rounded-full border border-[#008c8c] text-[10px] sm:text-sm text-[#008c8c]">
                    ✓
                  </span>
                  <span className="flex-1">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="mt-4 sm:mt-5 bg-[#d90000] px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white transition-all duration-300 hover:bg-[#b80000] hover:scale-105 active:scale-95"
            >
              Know More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[390px] xl:max-w-[440px] px-3 sm:px-0">
          <div className="relative aspect-[0.82] overflow-hidden rounded-tl-[2px] rounded-tr-[2px] rounded-br-[8px] rounded-bl-[2px] shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={WhatWeDoImage}
              alt="Children participating in a community activity"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Decorative dots - optional enhancement */}
      <div className="absolute bottom-4 left-4 hidden sm:block opacity-20">
        <div className="grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-gray-400" />
          ))}
        </div>
      </div>
    </section>
  );
}