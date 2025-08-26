import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-800 text-gray-200 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/Images/Logo/Logo.jpg"
              alt="Logo"
              width={45}
              height={45}
              className="rounded-full"
            />
            <span className="font-bold text-lg">MGM Multipurpose construction Ltd</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            Building meaningful connections and bridging gaps through modern
            technology and innovation.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Our Bridges</h3>
          <div className="flex gap-3">
            <Image
              src="/Images/Bridges/Bridge1.jpeg"
              alt="Bridge1"
              width={60}
              height={40}
              className="rounded-md shadow-md"
            />
            <Image
              src="/Images/Bridges/Bridge2.webp"
              alt="Bridge2"
              width={60}
              height={40}
              className="rounded-md shadow-md"
            />
            <Image
              src="/Images/Bridges/Bridge3.webp"
              alt="Bridge3"
              width={60}
              height={40}
              className="rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-blue-400 transition">
              <Icon icon="mdi:facebook" />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <Icon icon="mdi:twitter" />
            </a>
            <a href="#" className="hover:text-pink-400 transition">
              <Icon icon="mdi:instagram" />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <Icon icon="mdi:linkedin" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} MGM FN. All rights reserved.
      </div>
    </footer>
  );
}
