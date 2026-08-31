import React from "react";
import {
  Users,
  Sprout,
  TrendingUp,
  Building2,
  GraduationCap,
  Lightbulb,
} from "lucide-react";

import BackgroundImage from '../images/impact-background.jpg';

const solutions = [
  {
    icon: Users,
    title: "Empowering Youth Through Coding Clubs",
    description:
      "Our hands-on training in coding, robotics, and digital literacy prepares the next generation to thrive in the digital economy.",
  },
  {
    icon: Sprout,
    title: "Advocating Environmental Sustainability",
    description:
      "Our advocacy programs focus on educating communities about environmental sustainability, equity, and human rights.",
  },
  {
    icon: TrendingUp,
    title: "Nurturing Entrepreneurs",
    description:
      "Our entrepreneurship programs nurture innovation and self-reliance among youth and women.",
  },
  {
    icon: Building2,
    title: "Building Capacity for Community Resilience",
    description:
      "We offer training and support to local leaders and institutions, empowering them to address social, economic, and environmental challenges.",
  },
  {
    icon: GraduationCap,
    title: "Promoting Access to Quality Education",
    description:
      "By collaborating with schools and parents, we create environments that foster academic excellence and holistic personal growth.",
  },
  {
    icon: Lightbulb,
    title: "Driving Positive Change Through Research & Publications",
    description:
      "Our research initiatives provide the evidence base for advocacy and programming.",
  },
];

export default function ImpactfulSolutions() {
  return (
    <section className="relative flex min-h-[520px] w-full flex-col lg:flex-row">
      {/* ========================================
          LEFT SIDE — CTA / IMAGE
      ======================================== */}
      <div
        className="relative flex min-h-[430px] w-full items-center justify-center bg-cover bg-center lg:min-h-[520px] lg:w-[35%]"
        style={{
          backgroundImage: `url(${BackgroundImage})`, // ✅ Fixed: Use template literal with url()
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 max-w-[300px] px-6 text-center text-white">
          <h2 className="mb-8 text-[21px] font-semibold leading-[1.2] tracking-wide">
            Join Us in Making a
            <br />
            Difference
          </h2>

          <p className="mx-auto mb-12 max-w-[250px] text-xs leading-[1.5] text-white/90">
            Take the first step towards creating a positive impact on society.
          </p>

          <button
            type="button"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-100 hover:shadow-md"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* ========================================
          RIGHT SIDE — SOLUTIONS
      ======================================== */}
      <div className="w-full bg-[#075579] px-6 py-10 sm:px-10 lg:w-[65%] lg:px-8 xl:px-12">
        {/* Heading */}
        <div className="mb-6 text-center text-white">
          <h2 className="text-[20px] font-semibold tracking-wide">
            Our Impactful Solutions
          </h2>

          <p className="mt-1 text-xs text-white/80">
            Explore the solutions we offer to create positive change.
          </p>
        </div>

        {/* Solution Grid */}
        <div className="mx-auto grid max-w-[650px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[17px] lg:gap-y-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <div
                key={index}
                className="relative min-h-[128px] bg-white px-4 pb-3 pt-5 shadow-sm"
              >
                {/* Circular icon */}
                <div className="absolute left-1/2 top-0 flex h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-700 bg-white">
                  <Icon
                    size={15}
                    strokeWidth={1.7}
                    className="text-gray-900"
                  />
                </div>

                {/* Card title */}
                <h3 className="pr-1 text-sm font-bold leading-[1.2] text-gray-900">
                  {solution.title}
                </h3>

                {/* Card description */}
                <p className="mt-3 text-xs leading-[1.3] text-gray-700">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}