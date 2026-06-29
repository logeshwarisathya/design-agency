import { FaGithubAlt } from "react-icons/fa6";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-4">
        
        <h2 className="text-2xl font-bold text-white">
          PixelCraft
        </h2>

        <p className="text-gray-400 dark:text-gray-300">
          Building modern digital experiences.
        </p>

        <div className="flex gap-6">
          <a
            href="#"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            <FaGithubAlt />
          </a>

          <a
            href="#"
            className="text-gray-300 hover:text-blue-400 transition"
          >
           <TbBrandLinkedinFilled />
          </a>

          <a
            href="mailto:hello@pixelcraft.com"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            <MdEmail />
          </a>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2026 PixelCraft. All rights reserved.
        </p>

      </div>
    </footer>
  );
}