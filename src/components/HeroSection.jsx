import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import Hero from "../images/hero.png";

const slides = [
  {
    image: Hero,
    subtitle: "Sowing Seeds",
    title: "Kutse - Nurturing Minds",
    description:
      "It's not about how much you know, it's about how best you can impact others.",
  },
  {
    image: Hero,
    subtitle: "Sowing Seeds",
    title: "Empowering Communities",
    description:
      "Creating opportunities, inspiring growth, and building stronger communities.",
  },
  {
    image: Hero,
    subtitle: "Sowing Seeds",
    title: "Growing Together",
    description:
      "Planting seeds of knowledge, character, and purpose for a better tomorrow.",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Add this state

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Previous slide
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navigation links
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Who We Are", to: "/who-we-are" },
    { name: "What We Do", to: "/what-we-do" },
    { name: "Partner With Us", to: "/partner-with-us" },
    { name: "Our Projects", to: "/projects" },
    { name: "Join Us", to: "/join-us" },
  ];

  return (
    <section className="relative h-screen min-h-[650px] w-full overflow-hidden">
      {/* ================= BACKGROUND CAROUSEL ================= */}
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Extra gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        </div>
      ))}

      {/* ================= NAVBAR ================= */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl flex-col px-6 py-5 lg:px-10">
          {/* Top row: Logo + Menu Button */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-none">
              <img src={Logo} alt="Sowing Seeds Alliance Logo" className="h-10 w-auto" />
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-sm text-white transition hover:text-red-400"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md md:hidden"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </>
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu - now inside the header and below the top row */}
          {mobileMenuOpen && (
            <nav className="mt-4 flex flex-col gap-4 border-t border-white/20 pt-4 md:hidden">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-white transition hover:text-red-400"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 flex h-[calc(100%-90px)] items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            
            {/* Title */}
            <h1
              key={slides[currentSlide].title}
              className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {slides[currentSlide].title}
            </h1>

            {/* Description */}
            <p
              key={`description-${currentSlide}`}
              className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg"
            >
              {slides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/campaign"
                className="rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                About the campaign
              </Link>

              <Link
                to="/partner"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-red-500 transition hover:bg-gray-100"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CAROUSEL CONTROLS ================= */}

      {/* Previous */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-black sm:flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-black sm:flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* ================= DOT INDICATORS ================= */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* ================= SLIDE COUNTER ================= */}
      <div className="absolute bottom-8 right-6 z-20 hidden text-sm text-white/80 sm:block">
        <span className="font-semibold text-white">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>
        <span className="mx-2 text-white/40">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
};

export default HeroSection;