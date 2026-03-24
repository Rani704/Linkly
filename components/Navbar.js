"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-700 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-md">

      {/* LOGO */}
      <div className="text-2xl font-bold">
        <Link href="/">Linkly</Link>
      </div>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-6 items-center">

        <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
        <li><Link href="/about" className="hover:text-gray-200">About</Link></li>
        <li><Link href="/shorten" className="hover:text-gray-200">Shorten</Link></li>
        <li><Link href="/contact" className="hover:text-gray-200">Contact</Link></li>

        <li className="flex gap-3 ml-4">
          <Link href="/shorten">
            <button className="bg-white text-purple-700 px-4 py-2 rounded-lg font-semibold hover:scale-105 transition">
              Try Now
            </button>
          </Link>

          <Link href="https://github.com/Rani704/Linkly">
            <button className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-purple-700 transition">
              GitHub
            </button>
          </Link>
        </li>

      </ul>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-purple-700 flex flex-col items-center gap-4 py-6 md:hidden shadow-lg">

          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/shorten" onClick={() => setMenuOpen(false)}>Shorten</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          <div className="flex gap-3 mt-4">
            <Link href="/shorten">
              <button className="bg-white text-purple-700 px-4 py-2 rounded-lg font-semibold">
                Try Now
              </button>
            </Link>

            <Link href="https://github.com/Rani704/Linkly">
              <button className="border border-white px-4 py-2 rounded-lg">
                GitHub
              </button>
            </Link>
          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;