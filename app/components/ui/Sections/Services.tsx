"use client";

import SectionTitle from "../SectionTitle";
import { Icon } from "@iconify/react";

// Define services with icons (Iconify names)
const services = [
  {
    title: "Architectural & Engineering Design",
    description:
      "Modern, efficient, and climate-smart designs tailored to client needs.",
    icon: "mdi:design",
  },
  {
    title: "Infrastructure Construction & Development",
    description:
      "Building roads, bridges, drainage systems, and community facilities.",
    icon: "mdi:bridge",
  },
  {
    title: "Technical Consultancy & Project Management",
    description:
      "Guiding projects from design to delivery with precision and efficiency.",
    icon: "mdi:clipboard-text-outline",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-background-light dark:bg-background-dark"
    >
      <SectionTitle
        title="Our Services"
        subtitle="Delivering excellence in every project"
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-12">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105 duration-300 flex flex-col items-center text-center"
          >
            <div className="text-primary-500 text-5xl mb-4">
              <Icon icon={service.icon} />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary dark:text-primary-400">
              {service.title}
            </h3>
            <p className="text-text-light font-medium">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
