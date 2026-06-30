import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section w-full bg-gradient-to-r from-slate-900 to-slate-800 dark:from-black dark:to-slate-950 text-white min-h-screen flex items-center transition-colors duration-300 pt-24 md:pt-28 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

        {/* Left Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">

          <p className="text-[#6EC1D1] font-semibold mb-3 text-sm sm:text-base">
            Creative Design Agency
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Build Digital
            <br />
            Experiences
            <span className="block text-[#6EC1D1]">
              That Inspire
            </span>
          </h1>

          <p className="mt-6 text-gray-300 dark:text-gray-200 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            We help startups and businesses create modern,
            responsive, and beautiful websites that users love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

            <button
              className="relative px-6 py-3 rounded-full bg-[#6EC1D1] text-black font-semibold
              transition-all duration-300 transform hover:-translate-y-1
              hover:shadow-[0_0_25px_rgba(110,193,209,0.6)]
              active:translate-y-0 active:shadow-md"
            >
              Get Started
            </button>

            <button
              className="relative px-6 py-3 rounded-full bg-[#6EC1D1] text-black font-semibold
              transition-all duration-300 transform hover:-translate-y-2 hover:scale-105
              hover:shadow-[0_15px_35px_rgba(110,193,209,0.4)]
              active:scale-95"
            >
              View Work
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center order-1 lg:order-2">

          <Image
            src="/images/hero.jpg"
            alt="Design Agency"
            width={550}
            height={550}
            priority
            className="w-full h-auto max-w-[260px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[550px] rounded-2xl shadow-2xl object-cover"
          />

        </div>

      </div>
    </section>
  );
}