import React from "react";
import Logo from "../images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#292929] text-white">
      <div className="mx-auto max-w-[1020px] px-6 py-7 sm:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <div className="leading-none">
              <img src={Logo} className="w-[12rem]" alt="Sowing Seeds Alliance" />
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
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 transition hover:text-white"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-300 transition hover:text-white"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/233501078367"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-gray-300 transition hover:text-white"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.19 4.23-9.42 9.43-9.42 2.52 0 4.88.98 6.66 2.76a9.36 9.36 0 0 1 2.76 6.67c0 5.19-4.23 9.42-9.43 9.42Zm8.02-17.44A11.31 11.31 0 0 0 12.05 0C5.83 0 .77 5.06.77 11.28c0 1.99.52 3.93 1.51 5.64L.67 24l7.24-1.9a11.27 11.27 0 0 0 5.4 1.38h.01c6.22 0 11.28-5.06 11.28-11.28 0-3.01-1.17-5.85-3.3-7.98Z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-gray-300 transition hover:text-white"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.48l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z" />
                </svg>
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
                <svg
                  className="h-3.5 w-3.5 shrink-0 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                </svg>

                <a
                  href="tel:0501078367"
                  className="text-sm text-gray-300 transition hover:text-white"
                >
                  0501078367
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2">
                <svg
                  className="h-3.5 w-3.5 shrink-0 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                </svg>

                <span className="text-sm text-gray-300">Kumasi, Ghana</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <svg
                  className="h-3.5 w-3.5 shrink-0 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
                </svg>

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