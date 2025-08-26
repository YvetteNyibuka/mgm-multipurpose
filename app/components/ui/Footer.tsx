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
            <span className="font-bold text-lg">MGM</span>
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
        {/* Contact info */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-semibold">
                {/*  Iconify icon*/}
                <Icon icon="mdi:map-marker" className="inline mr-2 text-2xl" />
              </span>{" "}
              Kigali, Rwanda
            </li>
            <li>
              <span className="font-semibold">
                <Icon icon="mdi:phone" className="inline mr-2 text-2xl" />
              </span>{" "}
              +250 788 595 731
            </li>
            <li>
              <span className="font-semibold">
                <Icon icon="mdi:email" className="inline mr-2 text-2xl" />
              </span>{" "}
              mgmgasoreltd@gmail.com
            </li>
            <li>
              <span className="font-semibold">
                <Icon icon="mdi:clock" className="inline mr-2 text-2xl" />
              </span>{" "}
              Mon - Fri: 8:00 AM - 6:00 PM, <br />
              <span className="ml-9">Sat: 9:00 AM - 1:00 PM</span>
            </li>
          </ul>
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
            <a
              href="https://www.instagram.com/mgm_multipurpose_construction/"
              className="hover:text-pink-400 transition"
            >
              <Icon icon="mdi:instagram" />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="hover:text-blue-600 transition"
            >
              <Icon icon="mdi:linkedin" />
            </a>
            {/* whatsapp */}
            <a
              href="https://web.whatsapp.com/"
              className="hover:text-green-500 transition"
            >
              <Icon icon="mdi:whatsapp" />
            </a>
            {/* twitter */}
            <a href="#" className="hover:text-blue-400 transition">
              <Icon icon="mdi:twitter" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} MGM Multipurpose Construction Ltd. All
        rights reserved.
      </div>
    </footer>
  );
}
