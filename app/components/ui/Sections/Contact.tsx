"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "../Button";
import SectionTitle from "../SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-8 sm:py-12 lg:py-20 px-4 sm:px-6 bg-primary-50 "
    >
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
      <div className="w-[90%] sm:w-[85%] max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-6 md:p-8 bg-white rounded-3xl shadow-xl">
        {/* Contact Info */}
        <div className="space-y-4 sm:space-y-6">
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
            {
              icon: "mdi:clock",
              title: "Working Hours",
              text: "Mon - Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 1:00 PM",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 sm:gap-4 bg-primary-50/70  p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-full bg-primary-100 text-primary">
                <Icon icon={item.icon} className="text-xl sm:text-2xl" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-primary-700">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base text-text-light ">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-xl">
          <form className="grid gap-7">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 sm:p-4 rounded-xl w-full focus:ring-2 focus:ring-primary-400 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 sm:p-4 rounded-xl w-full focus:ring-2 focus:ring-primary-400 transition"
            />
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 p-3 sm:p-4 rounded-xl w-full h-32 sm:h-40 focus:ring-2 focus:ring-primary-400 transition"
            ></textarea>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full text-sm sm:text-base"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
