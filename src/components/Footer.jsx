import React from "react";
import Logo from "../images/logo.png"
export default function Footer() {
  return (
    <footer className="bg-[#292929] text-white">
      <div className="mx-auto max-w-[1020px] px-6 py-7 sm:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-16">

          {/* Brand */}
          <div>
            <div className="leading-none">
              <img src={Logo} className="w-[12rem]"/>
            </div>

            <p className="mt-4 max-w-[210px] text-xs leading-[1.45] text-gray-300">
              It's not about how much you know
              <br />
              it's about how best you can impact
              <br />
              others.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-4">

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-300 transition hover:text-white"
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.57V8.99H3.56v11.46z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-300 transition hover:text-white"
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.55.45-1 1-1z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="#"
                aria-label="WhatsApp"
                className="text-gray-300 transition hover:text-white"
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L4 20l1.2-3.7A8.5 8.5 0 1 1 20.5 11.5z" />
                  <path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.5.6c.7 1.3 1.8 2.3 3.1 3l.6-.5c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.5.3-1.2.5-1.8.3-3.1-.8-5.5-3.2-6.3-6.3-.2-.6 0-1.3.3-1.8z" />
                </svg>
              </a>

              {/* X */}
              <a
                href="#"
                aria-label="X"
                className="text-[10px] text-gray-300 transition hover:text-white"
              >
                𝕏
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-[16px] font-medium tracking-wide">
              Quick Links
            </h3>

            <nav className="flex flex-col gap-[6px]">
              <a
                href="#home"
                className="text-xs text-gray-300 transition hover:text-white"
              >
                Home
              </a>

              <a
                href="#who-we-are"
                className="text-xs text-gray-300 transition hover:text-white"
              >
                Who We Are
              </a>

              <a
                href="#what-we-do"
                className="text-xs text-gray-300 transition hover:text-white"
              >
                What We Do
              </a>

              <a
                href="#partner"
                className="text-xs text-gray-300 transition hover:text-white"
              >
                Partner With Us
              </a>

              <a
                href="#join-us"
                className="text-xs text-gray-300 transition hover:text-white"
              >
                Join Us
              </a>
            </nav>
          </div>

          {/* Address */}
          <div>
            <h3 className="mb-3 text-[16px] font-medium tracking-wide">
              Our Address
            </h3>

            <div className="flex flex-col gap-3">

              {/* Phone */}
              <div className="flex items-center gap-2">
                <span className="text-sm">☎</span>

                <span className="text-sm text-gray-300">
                  0501078367
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2">
                <span className="text-sm">●</span>

                <span className="text-sm text-gray-300">
                  Kumasi, Ghana
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <span className="text-sm">✉</span>

                <a
                  href="mailto:info@sowingseedsalliance.org"
                  className="text-sm text-gray-300 transition hover:text-white"
                >
                  info@sowingseedsalliance.org
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 border-t border-gray-600" />

        {/* Copyright */}
        <div className="pt-4 text-center">
          <p className="text-sm text-gray-300">
            Copyright © 2025 Sowing Seeds Alliance
          </p>
        </div>

      </div>
    </footer>
  );
}