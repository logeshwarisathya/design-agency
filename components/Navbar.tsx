"use client";

import { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-slate-900 shadow-md z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          PixelCraft
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="#services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="#portfolio" className="hover:text-blue-600 transition">Portfolio</Link>
          <Link href="#contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <DarkModeToggle />

          <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
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

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}