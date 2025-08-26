"use client";

import SectionTitle from "../SectionTitle";
import Image from "next/image";

const projects = [
  {
    title: "20 km Feeder Road Rehabilitation",
    location: "Gakenke District, Rwanda",
    image: "/Images/Bridges/road.jpg",
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
    <section id="projects" className="py-20 px-6 bg-background-light">
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
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={i === 0} // optimize first image
              />
            </div>

            {/* Project Info */}
            <div className="p-6 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-primary dark:text-primary-400">
                {project.title}
              </h3>
              <p className="text-text-light font-medium">{project.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
