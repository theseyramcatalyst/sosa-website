import React from "react";
import {
  CheckCircle2,
} from "lucide-react";

const projectGroups = [
  {
    title: "PAST",
    items: [
      "SoSA SHS Outreach 2024 – Ejuram Akan SHS",
      "SoSA Innovation Accelerator I (Design Thinking)",
      "SoSA Sprinkle of Hope Outreach 2024 – New Life Orphanage, Nungua.",
    ],
  },
  {
    title: "UPCOMING",
    active: true,
    items: [
      "SoSA SHS Outreach 2025",
      "SoSA Sprinkle of Hope Outreach 2025",
      "SoSA Innovation Accelerator II",
    ],
  },
  {
    title: "ONGOING",
    items: [
      "SoSA Mentorship Network (M-NET) Program 2025",
      "SoSA Research Publications 2025",
      "SoSA Data Analytics Program 2025",
    ],
  },
];

const ProjectsOverview = () => {
  return (
    <section className="bg-white px-6 py-12">
      <div className="mx-auto max-w-[900px]">

        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Our <span className="text-[#d40000]">Projects</span>
            </h2>

            <div className="mt-2 h-[1px] w-16 bg-[#d40000]" />
          </div>

          <p className="max-w-[300px] text-xs leading-[1.6] text-gray-600">
            Discover what Sowing Seeds Alliance has been a part of and
            experience the innovative ways SoSA is impacting its sphere
            positively.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          {projectGroups.map((group) => (
            <ProjectGroup
              key={group.title}
              {...group}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectGroup = ({
  title,
  items,
  active = false,
}) => {
  return (
    <div
      className={`min-h-[190px] rounded border p-5 shadow-sm ${
        active
          ? "bg-[#37798a] text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <h3 className="border-b border-current/20 pb-3 text-center text-[11px] font-semibold tracking-wide">
        {title} PROJECTS
      </h3>

      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-2"
          >
            <CheckCircle2
              size={11}
              fill="currentColor"
              className="mt-0.5 shrink-0"
            />

            <p className="text-xs leading-[1.4]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsOverview;