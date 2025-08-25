"use client";

import SectionTitle from "../SectionTitle";

const projects = [
  {
    title: "20 km Feeder Road Rehabilitation",
    location: "Gakenke District, Rwanda",
    image: "/Images/Bridges/road.jpg", // replace with your project image
  },
  {
    title: "Bridge Design & Construction Supervision",
    location: "East Africa",
    image: "/Images/Bridges/bridgecons.jpg",
  },
  {
    title: "Urban Drainage Systems Development",
    location: "Regional",
    image: "/Images/Bridges/drainage.jpg",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-background-light">
      <SectionTitle
        title="Our Projects"
        subtitle="Transforming landscapes with sustainable infrastructure"
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-12">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105 duration-300 overflow-hidden"
          >
            {/* Project Image */}
            <div className="w-full h-56 md:h-64 relative">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Project Info */}
            <div className="p-6 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-primary dark:text-primary-400">
                {project.title}
              </h3>
              <p className="text-text-light font-medium">
                {project.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
