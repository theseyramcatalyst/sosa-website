import React from "react";

const PageHero = ({ title, image, description }) => {
  return (
    <section className="relative h-[25rem] overflow-hidden">
      {/* Background */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1000px] flex-col items-center justify-center px-6 text-center text-white">
        
        {/* Breadcrumb */}
        <div className="absolute left-6 top-5 text-sm sm:left-8">
          <a href="/" className="hover:underline">
            Home
          </a>

          <span className="mx-1.5">›</span>

          <span className="text-white/70">Who We Are</span>
        </div>

        <h1 className="text-3xl font-bold tracking-wide sm:text-4xl">
          {title}
        </h1>

        <p className="mt-5 max-w-[650px] text-[9px] leading-[1.8] text-white sm:text-sm">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHero;