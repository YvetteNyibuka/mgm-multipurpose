"use client";

import Image from "next/image";
import { Button } from "./Button";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative min-h-screen text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/Images/Bridges/canpy.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20 dark:bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-primary">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white dark:text-text-dark">
          Innovating today for the resilient infrastructure of tomorrow.
        </h1>
        <p className="max-w-xl sm:max-w-2xl font-medium text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white dark:text-text-dark">
          MGM Multipurpose Ltd is a private construction company based in
          Rwanda, serving East Africa with innovative, sustainable, and
          affordable infrastructure solutions.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
          <Button
            href="/services"
            variant="outline"
            size="lg"
            shape="rounded"
            className="text-white border-white hover:bg-white hover:text-primary-500 transition-colors duration-200 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
          >
            Explore Our Services
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            shape="rounded"
            className="bg-white text-primary-500 hover:bg-primary-700 hover:border-white hover:text-white transition-colors duration-200 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
