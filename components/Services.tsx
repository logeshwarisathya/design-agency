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
      className="py-24 bg-gray-100 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-16">
          We provide complete digital solutions for businesses.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <Icon
                  className="text-blue-600 mb-5"
                  size={40}
                />

                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}