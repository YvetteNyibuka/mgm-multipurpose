"use client";

import SectionTitle from "../SectionTitle";
import { Icon } from "@iconify/react";

const reasons = [
  {
    icon: "mdi:shield-check",
    title: "Resilient & Sustainable",
    description:
      "Our solutions withstand time, climate, and environmental challenges.",
  },
  {
    icon: "mdi:cash-multiple",
    title: "Cost-Effective",
    description: "Projects delivered efficiently without compromising quality.",
  },
  {
    icon: "mdi:account-tie",
    title: "Experienced Team",
    description: "Professional architects, engineers, and project managers.",
  },
  {
    icon: "mdi:map-marker-radius",
    title: "Local & Regional Expertise",
    description: "Strong knowledge of East African contexts and regulations.",
  },
  {
    icon: "mdi:handshake",
    title: "Client-Focused",
    description: "Your satisfaction and goals are always our priority.",
  },
  {
    icon: "mdi:lightbulb-on-outline",
    title: "Innovative Solutions",
    description:
      "We implement cutting-edge technologies and creative approaches to ensure future-ready infrastructure.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-primary-50 text-text-light dark:text-text-dark">
      <SectionTitle
        title="Why Choose Us?"
        subtitle="Discover why MGM Multipurpose Ltd is trusted across the region for resilient and sustainable infrastructure."
      />

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {reasons.map((reason, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="text-primary-500 dark:text-primary-400 text-4xl mb-4">
              <Icon icon={reason.icon} />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-primary dark:text-primary-400">
              {reason.title}
            </h3>
            <p className="text-text-light dark:text-text-dark text-sm md:text-base">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
