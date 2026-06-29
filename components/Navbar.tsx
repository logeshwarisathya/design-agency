import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-slate-900 shadow-md z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          PixelCraft
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link href="#services" className="hover:text-blue-600 transition">
            Services
          </Link>

          <Link href="#portfolio" className="hover:text-blue-600 transition">
            Portfolio
          </Link>

          <Link href="#contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <DarkModeToggle />

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}