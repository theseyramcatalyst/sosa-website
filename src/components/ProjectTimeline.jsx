import React from "react";

const ProjectTimeline = ({ projects = [] }) => {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 md:py-16">
      <div className="mx-auto w-full max-w-[850px]">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-2xl font-bold tracking-wide sm:text-3xl">
            Upcoming{" "}
            <span className="text-[#d40000]">Projects</span>
          </h2>

          <div className="mx-auto mt-2 h-[1px] w-14 bg-[#d40000]" />
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="relative hidden md:block">

          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-300" />

          <div className="space-y-12">
            {projects.map((project, index) => (
              <DesktopTimelineItem
                key={`${project.title}-${index}`}
                project={project}
              />
            ))}
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="relative md:hidden">

          {/* Left timeline line */}
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-gray-300" />

          <div className="space-y-10">
            {projects.map((project, index) => (
              <MobileTimelineItem
                key={`${project.title}-${index}`}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   DESKTOP TIMELINE
========================================================= */

const DesktopTimelineItem = ({ project }) => {
  return (
    <div className="relative grid min-h-[130px] grid-cols-2">

      {/* Center dot */}
      <div className="absolute left-1/2 top-1 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-red-200 bg-[#d40000] shadow-[0_0_5px_rgba(212,0,0,0.5)]" />

      {project.side === "left" ? (
        <>
          {/* Left card */}
          <div className="flex justify-end pr-8">
            <TimelineCard project={project} />
          </div>

          {/* Right date */}
          <div className="flex items-start pl-8">
            <DateBadge date={project.date} />
          </div>
        </>
      ) : (
        <>
          {/* Left date */}
          <div className="flex items-start justify-end pr-8">
            <DateBadge date={project.date} />
          </div>

          {/* Right card */}
          <div className="pl-8">
            <TimelineCard project={project} />
          </div>
        </>
      )}
    </div>
  );
};

/* =========================================================
   MOBILE TIMELINE
========================================================= */

const MobileTimelineItem = ({ project }) => {
  return (
    <div className="relative pl-7">

      {/* Timeline dot */}
      <div className="absolute left-0 top-1 z-10 h-[15px] w-[15px] rounded-full border-2 border-red-200 bg-[#d40000] shadow-[0_0_5px_rgba(212,0,0,0.5)]" />

      {/* Date */}
      <DateBadge date={project.date} />

      {/* Card */}
      <div className="mt-4">
        <TimelineCard project={project} />
      </div>
    </div>
  );
};

/* =========================================================
   DATE BADGE
========================================================= */

const DateBadge = ({ date }) => {
  return (
    <div className="inline-flex min-h-7 max-w-full items-center rounded-full bg-[#b90000] px-3 py-1 text-[10px] font-medium leading-tight text-white sm:px-4 sm:text-xs">
      {date}
    </div>
  );
};

/* =========================================================
   TIMELINE CARD
========================================================= */

const TimelineCard = ({ project }) => {
  return (
    <div className="w-full rounded-md border border-gray-200 bg-white p-3 shadow-sm sm:p-4">

      <h3 className="mb-3 text-sm font-medium leading-snug text-[#333] sm:text-base">
        {project.title}
      </h3>

      <div>
        <p className="mb-2 text-[8px] uppercase tracking-wide text-gray-300 sm:text-[9px]">
          Project Overview
        </p>

        <p className="text-[10px] leading-[1.6] text-gray-800 sm:text-xs sm:leading-[1.5]">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectTimeline;