import React from "react";

const TopBar = () => {
  return (
    <div className="bg-[#292929] text-white">
      <div className="mx-auto flex h-7 max-w-[1080px] items-center justify-between px-5 text-xs">
        {/* Location */}
        <div className="flex items-center gap-1.5">
          <svg
            className="h-3 w-3"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
          </svg>

          <span>Kumasi, Ghana</span>
        </div>

        <div className="flex items-center gap-14">
          {/* Email */}
          <div className="flex items-center gap-1.5">
            <svg
              className="h-3 w-3"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
            </svg>

            <span>info@sowingseedsalliance.org</span>
          </div>

          {/* Socials */}
          <div className="hidden items-center gap-4 sm:flex">
            <span className="font-bold">in</span>
            <span>●</span>
            <span>◉</span>
            <span>𝕏</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;