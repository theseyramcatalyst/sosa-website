import React from "react";

const ProjectTimeline = ({ projects }) => {
  return (
    <section className="bg-white px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-[850px]">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-wide sm:text-3xl">
            Upcoming <span className="text-[#d40000]">Projects</span>
          </h2>

          <div className="mx-auto mt-2 h-[1px] w-14 bg-[#d40000]" />
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gray-300 md:block" />

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="relative grid grid-cols-1 md:grid-cols-2"
              >

                {/* Center dot */}
                <div className="absolute left-1/2 top-2 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-red-200 bg-[#d40000] shadow-[0_0_5px_rgba(212,0,0,0.5)] md:block" />

                {project.side === "left" ? (
                  <>
                    {/* Left */}
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
                    <div className="flex justify-end pr-8">
                      <DateBadge date={project.date} />
                    </div>

                    {/* Right */}
                    <div className="pl-8">
                      <TimelineCard project={project} />
                    </div>
                  </>
                )}

                {/* Mobile */}
                <div className="mt-5 md:hidden">
                  <DateBadge date={project.date} />

                  <TimelineCard project={project} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DateBadge = ({ date }) => {
  return (
    <div className="inline-flex h-7 items-center rounded-full bg-[#b90000] px-4 text-xs font-medium text-white">
      {date}
    </div>
  );
};

const TimelineCard = ({ project }) => {
  return (
    <div className="w-full max-w-[380px] rounded-md border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="mb-4 font-medium text-[#333]">
        {project.title}
      </h3>

      <div className="text-sm leading-[1.5]">
        <p className="mb-2 uppercase text-gray-300">
          Project Overview
        </p>

        <p className="text-gray-800 text-xs">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectTimeline;