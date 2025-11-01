import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProgramCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
};

export default function ProgramCard({ title, description, image, link }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
      <Image src={image} alt={title} width={400} height={250} className="w-full h-52 object-cover" />
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link} className="text-green-700 font-semibold hover:underline">
          Learn More →
        </Link>
      </div>
    </div>
  );
}
