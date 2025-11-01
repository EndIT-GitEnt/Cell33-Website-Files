"use client";

import Image, { type StaticImageData } from "next/image";
import wmLogo from "@/assets/images/WM_Logo_130x80.png";

type Logo = { src: string | StaticImageData; alt: string };

interface ClientLogoGridProps {
  title?: string;
  logos?: Logo[];
  className?: string;
}

const defaultLogos: Logo[] = [
  { src: wmLogo, alt: "Wilderness Malaysia" },
  { src: "/vercel.svg", alt: "Vercel" },
  { src: "/next.svg", alt: "Next.js" },
  { src: "/globe.svg", alt: "Global" },
  { src: "/window.svg", alt: "Window" },
];

export default function ClientLogoGrid({ title = "Trusted by teams and schools", logos = defaultLogos, className = "" }: ClientLogoGridProps) {
  return (
    <section className={`w-full py-12 md:py-16 ${className}`}
      aria-label="Client and partner logos">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-gray-700 text-sm font-medium tracking-wide mb-8">
          {title}
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {logos.map((logo, idx) => (
            <li key={idx} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={130}
                height={80}
                className="opacity-70 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0 object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
