import React, { useEffect, useState } from "react";

const ProjectShowcase = ({
  title,
  projects,
  background = "#fff",
  bordered = false,
}) => {
  return (
    <section
      className={`px-6 py-14 sm:py-16 ${
        bordered ? "border-t border-gray-200" : ""
      }`}
      style={{ background }}
    >
      <div className="mx-auto max-w-[850px]">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-wide sm:text-3xl">
            {title}
          </h2>

          <div className="mx-auto mt-2 h-[1px] w-14 bg-[#d40000]" />
        </div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project) => (
            <ProjectRow
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectRow = ({ project }) => {
  const textFirst = project.layout === "text-left";

  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10">

      {/* Text */}
      <div className={textFirst ? "md:order-1" : "md:order-2"}>
        <ProjectInfo project={project} />
      </div>

      {/* Gallery */}
      <div className={textFirst ? "md:order-2" : "md:order-1"}>
        <ProjectGallery
          images={project.images}
          title={project.title}
        />
      </div>
    </div>
  );
};

const ProjectInfo = ({ project }) => {
  return (
    <div className="relative rounded-md border border-gray-200 bg-white p-5">
      {/* Year */}
      <div className="absolute right-3 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#d40000] text-xs font-bold text-white">
        {project.year}
      </div>

      <h3 className="max-w-[190px] text-sm font-semibold leading-[1.2] text-[#333]">
        {project.title}
      </h3>

      <p className="mt-5 text-xs leading-[1.6] text-gray-800">
        {project.description}
      </p>
    </div>
  );
};

const ProjectGallery = ({ images, title }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length]);

  const previous = () => {
    setCurrent(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative">

      {/* Image */}
      <div className="h-[180px] overflow-hidden rounded-md">
        <img
          src={images[current]}
          alt={title}
          className="h-full w-full object-cover transition-all duration-700"
        />
      </div>

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={previous}
            className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow"
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow"
            aria-label="Next image"
          >
            ›
          </button>
        </>
      )}

      {/* Indicators */}
      <div className="mt-2 flex justify-center gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition ${
              index === current
                ? "bg-gray-500"
                : "bg-gray-300"
            }`}
            aria-label={`Show image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;