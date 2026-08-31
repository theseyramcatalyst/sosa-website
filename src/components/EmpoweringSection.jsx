import React from "react";

const FeatureIcon = ({ type }) => {
  if (type === "people") {
    return (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3.5 19c.5-3 2.4-4.5 5.5-4.5s5 1.5 5.5 4.5" />
        <path d="M14 14.5c.8-.5 1.8-.8 3-.8 2.5 0 3.9 1.3 4.5 3.3" />
      </svg>
    );
  }

  if (type === "work") {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <path d="M8 6V4.5C8 3.7 8.7 3 9.5 3h5c.8 0 1.5.7 1.5 1.5V6" />
        <circle cx="16.5" cy="15.5" r="3" />
        <path d="M16.5 14v1.7l1.1.7" />
      </svg>
    );
  }

  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="6" r="3" />
      <circle cx="6" cy="10" r="2.5" />
      <circle cx="18" cy="10" r="2.5" />
      <path d="M7 19c0-3.3 2-5.5 5-5.5s5 2.2 5 5.5H7Z" />
      <path d="M2 19c0-2.7 1.6-4.5 4-4.5 1.1 0 2 .3 2.7.9C7.7 16.3 7 17.6 7 19H2Z" />
      <path d="M22 19c0-2.7-1.6-4.5-4-4.5-1.1 0-2 .3-2.7.9 1 .9 1.7 2.2 1.7 3.6H22Z" />
    </svg>
  );
};

const features = [
  {
    type: "people",
    title: "Who We Are",
    description:
      "Our organization is driven by a vision to spark positive change and create ripples of progress in society.",
    className: "bg-[#d9d9d9] text-black",
  },
  {
    type: "work",
    title: "What We Do",
    description:
      "Ultimately, our goal is to create a ripple effect of positive change that extends far beyond our direct beneficiaries.",
    className: "bg-[#00547a] text-white",
  },
  {
    type: "partner",
    title: "Partner With Us\nto Nurture Minds",
    description:
      "We prioritize marginalized groups to ensure no one is left behind.",
    className: "bg-[#d40000] text-white",
  },
];

const EmpoweringSection = () => {
  return (
    <section className="w-full bg-[#eeeeee] px-6 py-16 sm:px-8 md:py-20 lg:px-12">
      <div className="mx-auto max-w-[1050px]">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-[550px] text-center">
          <h2 className="text-2xl font-bold leading-[1.15] tracking-tight text-[#111111] sm:text-3xl">
            Empowering Communities
            <br />
            Through Positive Change
          </h2>

          <p className="mt-5 text-[11px] leading-5 text-[#222222]">
            Discover what sets Sowing Seeds Alliance apart from the rest.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`flex min-h-[235px] flex-col items-center px-7 py-7 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg ${feature.className}`}
            >
              {/* Icon */}
              <div className="mb-5 flex h-8 items-center justify-center">
                <FeatureIcon type={feature.type} />
              </div>

              {/* Title */}
              <h3 className="whitespace-pre-line text-xl font-semibold leading-[1.15] tracking-wide">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-5 max-w-[190px] text-sm leading-[1.35]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpoweringSection;