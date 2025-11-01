import Link from "next/link";

type CTASectionProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
};

export default function CTASection({ title, subtitle, buttonText, buttonLink }: CTASectionProps) {
  return (
    <section className="bg-green-700 text-white py-16 px-6 w-full text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="max-w-3xl mx-auto text-lg mb-8">{subtitle}</p>
      <Link
        href={buttonLink}
        className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition"
      >
        {buttonText}
      </Link>
    </section>
  );
}
