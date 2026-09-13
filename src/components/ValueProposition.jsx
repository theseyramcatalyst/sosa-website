import React from "react";
import {
  Users,
  HandHeart,
  Handshake,
} from "lucide-react";

const values = [
  {
    title: "Youth Empowerment",
    description:
      "We are dedicated to empowering youth for a brighter future.",
    icon: Users,
  },
  {
    title: "Community Impact",
    description:
      "Our actions aim to make a tangible difference in communities.",
    icon: HandHeart,
  },
  {
    title: "Inclusive Support",
    description:
      "We prioritize marginalized groups to ensure no one is left behind.",
    icon: Handshake,
  },
];

const ValueProposition = () => {
  return (
    <section className="bg-[#1c1f2e] px-6 py-12">
      <div className="mx-auto max-w-[900px]">

        <div className="mb-12 text-center text-white">
          <h2 className="text-xl font-bold sm:text-2xl">
            Our Unique Value Proposition
          </h2>

          <p className="mt-2 text-sm text-gray-300">
            Discover what sets Sowing Seeds Alliance apart from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {values.map((value) => (
            <ValueCard
              key={value.title}
              {...value}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="relative mt-5 rounded-md bg-gray-200 px-5 pb-6 pt-12 text-center">

      <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200 shadow-md">
        <Icon
          size={27}
          strokeWidth={2}
          className="text-black"
        />
      </div>

      <h3 className="text-sm font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 text-xs leading-[1.5] text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default ValueProposition;