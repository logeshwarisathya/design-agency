import { Palette, Code2, Megaphone, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful and user-friendly interfaces that improve customer experience.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, responsive, and modern websites built with the latest technologies.",
  },
  {
    icon: Megaphone,
    title: "Branding",
    description:
      "Build a strong brand identity with creative designs and strategies.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description:
      "Increase your online presence and reach more customers effectively.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gray-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#6EC1D1] dark:text-[#6EC1D1] mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-16">
          We provide complete digital solutions for businesses.
        </p>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(110,193,209,0.4)]"
              >
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6EC1D1]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Icon */}
                <div className="relative z-10 mb-5 inline-flex p-4 rounded-xl bg-[#6EC1D1]/10 group-hover:bg-[#6EC1D1]/20 transition duration-500">
                  <Icon
                    className="text-[#6EC1D1] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125"
                    size={40}
                  />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl font-semibold text-black dark:text-white mb-3 group-hover:text-[#6EC1D1] transition duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#6EC1D1] transition-all duration-500 group-hover:w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}