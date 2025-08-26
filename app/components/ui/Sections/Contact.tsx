"use client";

import Image from "next/image";
import SectionTitle from "../SectionTitle";
import { Button } from "../Button";
import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <section className="relative py-20 px-6 bg-primary-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Images/Bridges/Bridge1.jpeg"
          alt="Background Bridge"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-primary-50/90" />
      </div>

      <SectionTitle
        title="Contact Us"
        subtitle="Reach out to MGM Multipurpose Ltd for inquiries, consultations, or project discussions. We’re here to help!"
      />

      {/* Combined Contact Info & Form */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 p-8 bg-white rounded-3xl shadow-xl">
        {/* Contact Info */}
        <div className="space-y-6">
          {[
            {
              icon: "mdi:map-marker",
              title: "Our Location",
              text: "Kigali, Rwanda – Serving East Africa",
            },
            {
              icon: "mdi:phone",
              title: "Phone",
              text: "+250 788 595 731",
            },
            {
              icon: "mdi:email",
              title: "Email",
              text: "mgmgasoreltd@gmail.com",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-primary-50/70 p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary">
                <Icon icon={item.icon} className="text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary">
                  {item.title}
                </h4>
                <p className="text-text-light">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-3xl shadow-xl">
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-4 rounded-xl w-full focus:ring-2 focus:ring-primary-400 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-4 rounded-xl w-full focus:ring-2 focus:ring-primary-400 transition"
            />
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 p-4 rounded-xl w-full h-40 focus:ring-2 focus:ring-primary-400 transition"
            ></textarea>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
