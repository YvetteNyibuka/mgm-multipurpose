import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-700 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <Image
            src="/Images/Logo/Bridge3.webp"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-bold text-lg">MGM FN</span>
        </div>
        <div className="flex gap-4">
          <Image
            src="/Images/Bridges/Bridge1.jpeg"
            alt="Bridge1"
            width={40}
            height={28}
            className="rounded"
          />
          <Image
            src="/Images/Bridges/Bridge2.webp"
            alt="Bridge2"
            width={40}
            height={28}
            className="rounded"
          />
          <Image
            src="/Images/Bridges/Bridge3.webp"
            alt="Bridge3"
            width={40}
            height={28}
            className="rounded"
          />
        </div>
        <div className="text-sm mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} MGM FN. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
