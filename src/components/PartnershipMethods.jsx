import React from "react";
import {
  HandCoins,
  HandHeart,
  UserRoundCheck,
  Megaphone,
} from "lucide-react";

const methods = [
  {
    title: "Financial Support",
    description:
      "Your contribution can help us fund our programs and initiatives.",
    icon: HandCoins,
  },
  {
    title: "In-Kind Donations",
    description:
      "Provide resources such as equipment, supplies, or volunteer hours.",
    icon: HandHeart,
  },
  {
    title: "Expertise",
    description:
      "Share your knowledge and skills to strengthen our programs.",
    icon: UserRoundCheck,
  },
  {
    title: "Advocacy",
    description:
      "Raise awareness of our cause and support our advocacy efforts. Together, we can create a brighter future for generations to come.",
    icon: Megaphone,
  },
];

const PartnershipMethods = () => {
  return (
    <section
      id="partnership"
      className="bg-white px-6 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-[900px]">

        <div className="mb-14 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            How can you partner with us?
          </h2>

          <div className="mx-auto mt-3 h-[1px] w-14 bg-[#d40000]" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((method) => (
            <MethodCard
              key={method.title}
              {...method}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const MethodCard = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="relative mt-8 rounded-md border border-gray-200 px-5 pb-7 pt-12 text-center">

      <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
        <Icon
          size={27}
          strokeWidth={1.8}
        />
      </div>

      <h3 className="text-base font-semibold">
        {title}
      </h3>

      <p className="mt-4 text-xs leading-[1.5] text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default PartnershipMethods;