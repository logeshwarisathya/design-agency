import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Website",
    category: "Web Development",
    image: "/images/Project1.jpg",
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
      className="py-24 bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#6EC1D1] dark:text-[#6EC1D1] mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-16">
          A selection of our recent work.
        </p>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_60px_rgba(110,193,209,0.35)]"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-500"></div>

                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#6EC1D1]/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                
                {/* Category Badge */}
                <span className="inline-block px-4 py-2 rounded-full bg-[#6EC1D1]/10 text-[#6EC1D1] text-sm font-medium mb-4 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(110,193,209,0.5)]">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-black dark:text-white transition-all duration-300 group-hover:text-[#6EC1D1] group-hover:translate-x-2">
                  {project.title}
                </h3>

                {/* Sliding line */}
                <div className="mt-4 h-1 w-0 bg-[#6EC1D1] transition-all duration-500 group-hover:w-24"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}