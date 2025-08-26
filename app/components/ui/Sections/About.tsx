"use client";

import Image from "next/image";
import SectionTitle from "../SectionTitle";

export default function About() {
  return (
    <section id="about" className="relative py-20 px-6 bg-primary-50 dark:bg-background-dark text-text-light dark:text-text-dark">

      {/* Section Title */}
      <SectionTitle
        title="About Us"
        subtitle="Delivering safe, sustainable, and climate-resilient infrastructure."
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row items-center gap-12">
        {/* Text content */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <p className="text-md md:text-lg font-medium">
            MGM Multipurpose Ltd is a private construction company headquartered
            in Rwanda and operating across the East African region.
          </p>
          <p className="text-md md:text-lg font-medium">
            Our mission is to deliver safe, sustainable, and climate-resilient
            infrastructure that improves lives, strengthens communities, and
            promotes long-term development.
          </p>
          <div className="mt-4">
            <h3 className="text-primary-500 font-semibold text-lg mb-2">
              We specialize in:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>Architectural and engineering design</li>
              <li>Infrastructure construction and development</li>
              <li>Technical consultancy and project management</li>
            </ul>
          </div>
          <p className="mt-4 text-lg font-medium">
            At MGM, we combine innovation, technical expertise, and local
            knowledge to create infrastructure that is not only cost-effective
            but also future-ready.
          </p>
        </div>
        <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg h-auto md:h-[480px] relative">
          <Image
            src="/Images/Bridges/Bridge3.webp"
            alt="Bridge Illustration"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
