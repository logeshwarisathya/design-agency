"use client";

import { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-screen bg-[#2A979B]  shadow-md z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
   <div className="logo-container">
  <h1 className="pixelcraft-title">PixelCraft</h1>

  <div className="orbit orbit1">
    <span className="particle p1"></span>
    <span className="particle p2"></span>
    <span className="particle p3"></span>
    <span className="particle p4"></span>
  </div>

  <div className="orbit orbit2">
    <span className="particle p5"></span>
    <span className="particle p6"></span>
  </div>

  <div className="orbit orbit3">
    <span className="particle p7"></span>
    <span className="particle p8"></span>
  </div>
</div>
        {/* Desktop Links */}
       <div className="hidden md:flex gap-8 text-black-700 dark:text-gray-200">
  <Link
    href="/"
    className="relative font-semibold transition-all duration-300 hover:text-cyan-400 hover:-translate-y-1 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:shadow-[0_0_10px_#6EC1D1] after:transition-all after:duration-300 hover:after:w-full"
  >
    Home
  </Link>

  <Link
    href="#services"
    className="relative font-semibold transition-all duration-300 hover:text-cyan-400 hover:-translate-y-1 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:shadow-[0_0_10px_#6EC1D1] after:transition-all after:duration-300 hover:after:w-full"
  >
    Services
  </Link>

  <Link
    href="#portfolio"
    className="relative font-semibold transition-all duration-300 hover:text-cyan-400 hover:-translate-y-1 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:shadow-[0_0_10px_#6EC1D1] after:transition-all after:duration-300 hover:after:w-full"
  >
    Portfolio
  </Link>

  <Link
    href="#contact"
    className="relative font-semibold transition-all duration-300 hover:text-cyan-400 hover:-translate-y-1 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:shadow-[0_0_10px_#6EC1D1] after:transition-all after:duration-300 hover:after:w-full"
  >
    Contact
  </Link>
</div>

        {/* Right Side */}
        <div className="flex text-black items-center gap-4">
          <DarkModeToggle />

          <button className="uiverse-btn w-full">
  <span className="relative z-10">Get Started</span>
</button>

          {/* Mobile Button */}
          <button
            className="md:hidden text-3xl text-gray-700 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 px-6 pb-4 space-y-4 shadow-md">
          <Link href="/" className="block">Home</Link>
          <Link href="#services" className="block">Services</Link>
          <Link href="#portfolio" className="block">Portfolio</Link>
          <Link href="#contact" className="block">Contact</Link>

          <button className="w-full bg-[#6EC1D1] text-black py-2 rounded-lg">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}