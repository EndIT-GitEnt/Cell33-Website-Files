import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  image: StaticImageData;
  ctaText: string;
  ctaLink: string;
};

export default function HeroSection({ title, subtitle, image, ctaText, ctaLink }: HeroSectionProps) {
  return (
    <section className="relative w-full h-[80vh] bg-gray-900">
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mb-8">{subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={ctaLink}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            {ctaText}
          </Link>
        </div>

        <div className="absolute bottom-10 animate-bounce text-white">
          <span className="text-2xl">&#8595;</span>
        </div>
      </div>
    </section>
  );
}
