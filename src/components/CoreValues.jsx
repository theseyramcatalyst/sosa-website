import React from "react";

const VisionIcon = () => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <path d="m14.5 9.5 5-5" />
    <path d="M19 4h-4" />
    <path d="M19 4v4" />
  </svg>
);

const MissionIcon = () => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <path d="M9 18h6" />
    <path d="M10 21h4" />
    <path d="M8 14c-1.3-1.1-2-2.7-2-4.5A6 6 0 0 1 18 9.5c0 1.8-.7 3.4-2 4.5-.8.7-1 1.2-1 2H9c0-.8-.2-1.3-1-2Z" />
    <path d="M12 1v2" />
    <path d="m4.2 4.2 1.4 1.4" />
    <path d="M1 10h2" />
    <path d="m19.8 4.2-1.4 1.4" />
    <path d="M23 10h-2" />
  </svg>
);

const ObjectivesIcon = () => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="m3 6 2 2 3-4" />
    <path d="M10 6h11" />
    <path d="m3 12 2 2 3-4" />
    <path d="M10 12h11" />
    <path d="m3 18 2 2 3-4" />
    <path d="M10 18h11" />
  </svg>
);

const values = [
  {
    icon: <VisionIcon />,
    title: (
      <>
        Our <span>Vision</span>
      </>
    ),
    text: "To touch and ignite the lives of the youth, children, and marginalized groups within communities, sparking positive change that ripples outward.",
  },
  {
    icon: <MissionIcon />,
    title: (
      <>
        Our <span>Mission</span>
      </>
    ),
    text: "Sowing Seeds Alliance exists to empower youth, children, and marginalized groups through the provision of an environment that unlocks potential and creates lasting positive change to enhance living conditions in communities.",
  },
  {
    icon: <ObjectivesIcon />,
    title: (
      <>
        Our <span>Objectives</span>
      </>
    ),
    objectives: [
      "To enhance environmental sustainability through advocacy and targeted stakeholder education.",
      "To promote awareness of equity and human rights.",
      "To facilitate capacity building with a focus on strengthening the implementation of innovative and sustainable ICT solutions.",
    ],
  },
];

const CoreValues = () => {
  return (
    <section className="border-b border-gray-200 bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-[1000px]">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-wide text-[#4a4a4a] sm:text-4xl">
            Our Core{" "}
            <span className="text-[#d40000]">Values</span>
          </h2>

          <p className="mt-1 text-xs text-gray-600">
            Our values guide our mission and actions.
          </p>

          <div className="mx-auto mt-3 h-[2px] w-14 bg-[#d40000]" />
        </div>

        {/* Values */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className={`px-8 text-center ${
                index !== 0
                  ? "border-t border-gray-200 md:border-l md:border-t-0"
                  : ""
              }`}
            >
              {/* Icon */}
              <div className="flex justify-center text-black">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-xl font-medium tracking-wide">
                {value.title}
              </h3>

              {/* Description */}
              {value.text && (
                <p className="mx-auto mt-10 max-w-[210px] text-xs leading-[1.6] text-[#111]">
                  {value.text}
                </p>
              )}

              {/* Objectives */}
              {value.objectives && (
                <div className="mx-auto mt-8 max-w-[230px] text-left text-xs leading-[1.65]">
                  {value.objectives.map((objective, i) => (
                    <p key={i} className="mb-3">
                      <strong>{i + 1}.</strong> {objective}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;