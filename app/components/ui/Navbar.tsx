"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Team", href: "#team" },
  { name: "Why", href: "#why" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ className }: { className?: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${className} transition-all duration-300 ${
        scrolled
          ? "bg-primary text-white shadow-lg"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/">
          <Image
            src="/Images/Logo/Logo.jpg"
            alt="Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-semibold hover:text-secondary-light transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

