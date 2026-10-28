
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="max-w-[1152px] mx-auto px-6 md:px-12 py-6">
      <div className="flex justify-end items-center">
        <div className="hidden md:flex gap-8 text-[20px] font-medium">
          <a href="#works">Works</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-7 h-0.5 bg-black"></span>
          <span className="w-7 h-0.5 bg-black"></span>
          <span className="w-7 h-0.5 bg-black"></span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-5 py-6 text-lg font-medium">
          <a href="#works" onClick={() => setMenuOpen(false)}>
            Works
          </a>
          <a href="#blog" onClick={() => setMenuOpen(false)}>
            Blog
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
