import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ChangeBackground from '../images/change-background.jpg'; // Import the image

const faqs = [
  {
    question: "How does SoSA support youth empowerment?",
    answer:
      "SoSA provides mentorship, educational programs, and skills training to empower young individuals.",
  },
  {
    question: "What communities does SoSA work with?",
    answer:
      "We work with underserved communities, youth, women, schools, and local organizations to create sustainable opportunities.",
  },
  {
    question: "How can I get involved with SoSA?",
    answer:
      "You can get involved by volunteering, partnering with us, supporting our programs, or participating in our community initiatives.",
  },
  {
    question: "What impact has SoSA made in society?",
    answer:
      "SoSA has contributed to youth development, education, entrepreneurship, environmental awareness, and community resilience through its programs.",
  },
];

export default function FAQAndCTA() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      {/* ============================================
          FAQ SECTION - Fully Responsive
      ============================================ */}
      <section className="border-b border-gray-200 bg-white px-4 sm:px-6 md:px-8 lg:px-16 py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="mx-auto grid max-w-[1020px] grid-cols-1 gap-8 md:gap-10 lg:grid-cols-[280px_1fr] lg:gap-[75px]">
          
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[27px] font-bold leading-[1.2] sm:leading-[1.3] tracking-[1px] text-black">
              FREQUENTLY
              <br />
              ASKED
              <br />
              QUESTIONS
            </h2>

            <p className="mx-auto mt-3 sm:mt-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[250px] text-[10px] sm:text-[11px] md:text-xs leading-relaxed text-gray-700 lg:mx-0">
              We've gathered answers to the most common questions about Sowing
              Seeds Alliance. Learn how we work, get involved, and support our
              mission of empowering communities and driving positive change.
            </p>
          </div>

          {/* FAQ accordion */}
          <div className="w-full">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-gray-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between py-3 sm:py-4 text-left hover:bg-gray-50 transition-colors duration-200 px-2 sm:px-3 rounded-lg group"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-3 sm:pr-5 text-xs font-medium text-gray-900 group-hover:text-[#e84c20] transition-colors duration-200">
                      {faq.question}
                    </span>

                    {isOpen ? (
                      <ChevronUp
                        size={14}
                        strokeWidth={2.5}
                        className="shrink-0 text-[#e84c20] transition-transform duration-300"
                      />
                    ) : (
                      <ChevronDown
                        size={14}
                        strokeWidth={2.5}
                        className="shrink-0 text-gray-600 group-hover:text-[#e84c20] transition-all duration-300"
                      />
                    )}
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] pb-3 sm:pb-4 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-full md:max-w-[500px] lg:max-w-[550px] text-[10px] sm:text-[11px] md:text-xs leading-relaxed text-gray-500 px-2 sm:px-3">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          BE PART OF THE CHANGE - With Fixed Background
      ============================================ */}
      <section
        className="relative flex min-h-[200px] sm:min-h-[220px] md:min-h-[250px] lg:min-h-[280px] items-center justify-center bg-cover bg-center px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14 lg:py-16"
        style={{
          backgroundImage: `url(${ChangeBackground})`, // ✅ Fixed: Using imported image
        }}
      >
        {/* Orange/red overlay */}
        <div className="absolute inset-0 bg-[#e84c20]/75 sm:bg-[#e84c20]/80" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[700px] text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[27px] font-bold tracking-[1px]">
            Be Part of the Change
          </h2>

          <p className="mx-auto mt-3 sm:mt-4 md:mt-5 max-w-[570px] text-xs leading-relaxed tracking-[0.3px] px-2 sm:px-4">
            Each of these projects and initiatives reflects our commitment to
            creating lasting positive change in the communities we serve,
            empowering individuals to reach their full potential, and fostering
            a more just and sustainable world.
          </p>

          <button
            type="button"
            className="mt-4 sm:mt-5 md:mt-6 rounded-md bg-white px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-xs sm:text-[11px] md:text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Join Us
          </button>
        </div>

        {/* Decorative element - optional */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 opacity-10">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2" />
            <circle cx="20" cy="20" r="12" stroke="white" strokeWidth="2" />
            <circle cx="20" cy="20" r="6" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </section>
    </>
  );
}