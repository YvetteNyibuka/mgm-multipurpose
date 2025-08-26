"use client";

import SectionTitle from "../SectionTitle";
import Image from "next/image";

const team = [
  {
    name: "Founder & CEO",
    role: "Senior Engineer",
    image: "/Images/Team/Profile1.webp",
  },
  {
    name: "Technical Lead",
    role: "Project Manager",
    image: "/Images/Team/pmanager.avif",
  },
  {
    name: "Architect",
    role: "Design Specialist",
    image: "/Images/Team/Profile2.jpg",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 px-6 bg-background-light">
      <SectionTitle
        title="Our Team"
        subtitle="We are a diverse team of skilled architects, engineers, and project managers driven by innovation, collaboration, and a shared vision for sustainable infrastructure."
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-12">
        {team.map((member, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105 duration-300 p-6 flex flex-col items-center text-center"
          >
            {/* Profile Image */}
            <div className="h-32 w-32 mb-4 relative overflow-hidden rounded-full shadow-md">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="128px"
                priority={i === 0} // optimize first image
              />
            </div>

            {/* Name & Role */}
            <h3 className="text-xl font-semibold text-primary dark:text-primary-400">
              {member.name}
            </h3>
            <p className="text-text-light dark:text-text-dark font-medium mt-1">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
