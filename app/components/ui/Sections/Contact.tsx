"use client";

import Image from "next/image";
import SectionTitle from "../SectionTitle";
import { Button } from "../Button";

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
        <div className="space-y-6 bg-primary-50/90">
          <div className="flex items-center gap-4 p-4">
            <span className="text-3xl text-primary-500">📍</span>
            <p className="text-lg font-medium text-text-light">
              Kigali, Rwanda – Serving East Africa
            </p>
          </div>
          <div className="flex items-center gap-4 p-4">
            <span className="text-3xl text-primary-500">📞</span>
            <p className="text-lg font-medium text-text-light">
              +250 788 595 731
            </p>
          </div>
          <div className="flex items-center gap-4 p-4">
            <span className="text-3xl text-primary-500">✉️</span>
            <p className="text-lg font-medium text-text-light">
              mgmgasoreltd@gmail.com
            </p>
          </div>
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
