import React from "react";

const partners = [
  {
    name: "Dr. Nana Kankam Gyimah",
    expertise: "Data Scientist, ML Engineer, DevOps, MLOps, (South Carolina – USA)",
    role: "Tutor, SoSA Innovation Accelerator",
  },
  {
    name: "Bernard Amevor",
    expertise: "Development Engineer, Rolls-Royce Solutions GmbH (Germany)",
    role: "Tutor, SoSA Innovation Accelerator",
  },
  {
    name: "Ms. Amli Judith Wetsa",
    expertise: "Researcher, Water Resources Commission",
    role: "Team Lead, SoSA SHS Outreach",
  },
  {
    name: "Ms. Hajara Alhassan Mohamed",
    expertise: "Data Scientist, ML Engineer, DevOps, MLOps, (South Carolina – USA)",
    role: "Tutor, SoSA Innovation Accelerator",
  },
];

const CurrentPartners = () => {
  return (
    <section className="bg-white px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-[900px]">

        <div className="mb-14 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Current <span className="text-[#d40000]">Partners</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[400px] text-sm text-gray-600">
            Explore the solutions we offer to create positive change.
          </p>

          <div className="mx-auto mt-3 h-[1px] w-14 bg-[#d40000]" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <PartnerCard
              key={partner.name}
              {...partner}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnerCard = ({
  name,
  expertise,
  role,
}) => {
  return (
    <article className="overflow-hidden rounded-md border border-gray-300">

      {/* Header */}
      <div className="bg-[#00557b] px-6 py-5">
        <div className="text-[10px] font-bold leading-none text-white">
          Sowing Seeds
          <br />
          Alliance{" "}
          <span className="text-[#ef0000]">
            (SoSA)
          </span>
        </div>

        <p className="mt-1 text-[8px] italic text-white/80">
          Kusiɛse, Nurturing Minds
        </p>
      </div>

      {/* Body */}
      <div className="flex min-h-[260px] flex-col p-5">

        <div>
          <p className="text-xs text-gray-400">
            Name
          </p>

          <h3 className="mt-2 text-base font-medium leading-tight">
            {name}
          </h3>
        </div>

        <div className="mt-5">
          <p className="text-xs text-gray-400">
            Expertise
          </p>

          <p className="mt-2 text-xs italic leading-[1.5]">
            {expertise}
          </p>
        </div>

        <div className="mt-5">
          <p className="text-xs text-gray-400">
            Role
          </p>

          <p className="mt-2 text-xs font-semibold leading-[1.3]">
            {role}
          </p>
        </div>

        <div className="mt-auto pt-6 text-right">
          <button
            type="button"
            className="rounded-full bg-[#00557b] px-5 py-2.5 text-xs text-white transition hover:bg-[#003e5a]"
          >
            View Profile
          </button>
        </div>

      </div>
    </article>
  );
};

export default CurrentPartners;