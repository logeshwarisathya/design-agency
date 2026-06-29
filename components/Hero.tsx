import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-black dark:to-slate-950 text-white min-h-screen flex items-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>

          <p className="text-blue-400 font-semibold mb-3">
            Creative Design Agency
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Build Digital
            <br />
            Experiences
            <span className="text-blue-500"> That Inspire</span>
          </h1>

          <p className="mt-6 text-gray-300 dark:text-gray-200 text-lg">
            We help startups and businesses create modern,
            responsive, and beautiful websites that users love.
          </p>

          <div className="flex gap-4 mt-8">

            <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              View Work
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">

          <Image
            src="/images/hero.jpg"
            alt="Design Agency"
            width={550}
            height={550}
            priority
            className="rounded-2xl shadow-2xl w-full h-auto max-w-[550px]"
          />

        </div>

      </div>
    </section>
  );
}