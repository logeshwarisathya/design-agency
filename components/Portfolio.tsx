import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Website",
    category: "Web Development",
    image: "/images/project1.jpg",
  },
  {
    title: "Finance Dashboard",
    category: "UI/UX Design",
    image: "/images/project4.jpg",
  },
  {
    title: "Travel Landing Page",
    category: "Branding",
    image: "/images/project3.jpg",
  },
  {
    title: "Restaurant Website",
    category: "Digital Marketing",
    image: "/images/project2.jpg",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-16">
          A selection of our recent work.
        </p>

        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-slate-800 transition duration-300"
            >
              <div className="overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto max-h-72 object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-semibold text-black dark:text-white">
                  {project.title}
                </h3>

                <p className="text-blue-600 mt-2">
                  {project.category}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}