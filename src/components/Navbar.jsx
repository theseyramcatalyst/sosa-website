import React, { useState } from "react";
import { Link } from "react-router-dom"; // Add this import

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "Who We Are", to: "/who-we-are" },
    { name: "What We Do", to: "/what-we-do" },
    { name: "Partner With Us", to: "/partner" },
    { name: "Our Projects", to: "/projects" },
    { name: "Join Us", to: "/join-us" },
  ];

  return (
    <header className="relative z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-[58px] max-w-[1080px] items-center justify-between px-5">
        
        {/* Logo */}
        <Link to="/" className="leading-none">
          <div className="text-[15px] font-bold leading-[13px] text-[#222]">
            Sowing Seeds
          </div>

          <div className="text-[15px] font-bold leading-[13px] text-[#222]">
            Alliance <span className="text-[#d40000]">(SoSA)</span>
          </div>

          <div className="mt-1 font-serif text-[6px] italic text-gray-500">
            Kutse, Nurturing Minds
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-xs text-[#111] transition hover:text-[#d40000]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded p-2 md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-sm text-gray-800"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;