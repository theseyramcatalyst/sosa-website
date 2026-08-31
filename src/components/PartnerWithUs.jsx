import React from "react";
import PartnerWithUsImage from "../images/partner-with-us.png"

export default function PartnerWithUs() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Beige background */}
      <div className="absolute left-0 top-0 h-full w-[42%] bg-[#e5d9bd]" />

      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-6">
        <div className="flex w-full max-w-[900px] flex-col items-center gap-10 lg:flex-row lg:gap-10">
          
          {/* Image */}
          <div className="relative z-10 w-full max-w-[440px] lg:w-[440px] lg:flex-shrink-0">
            <img
              src={PartnerWithUsImage}
              alt="Community members working together"
              className="w-full rounded-[9px] object-cover"
            />
          </div>

          {/* Content Card */}
          <div className="relative z-20 -mt-4 w-full max-w-[350px] bg-white lg:-ml-1 lg:mt-0">
            <div className="border border-gray-300 px-7 py-6 shadow-sm">
              <h2 className="mx-auto mb-3 max-w-[270px] text-center text-[21px] font-medium leading-[1.15] tracking-[1px] text-gray-900">
                Partner With Us To
                <br />
                Nurture Minds
              </h2>

              <div className="text-center text-sm leading-[1.35] text-gray-800">
                <p className="mb-4">
                  We invite like-minded organizations to join us in this
                  mission. By partnering with us, you can help expand our reach,
                  enhance our programs, and make a greater impact in the
                  communities we serve. Together, we can nurture minds, foster
                  innovation, and drive sustainable development.
                </p>

                <p>
                  If you share our vision and are interested in exploring
                  partnership opportunities, we would love to connect with you.
                  Let's work together to create a brighter future for all.
                </p>
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  className="bg-[#d90000] px-9 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#b80000]"
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}