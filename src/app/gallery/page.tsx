import Image from "next/image";
import imgAboutHero from "@/assets/images/hero/about-hero.jpg";
import imgAdventure from "@/assets/images/programs/adventure.jpg";
import imgCorporate from "@/assets/images/programs/corporate.jpg";
import imgLeadership from "@/assets/images/programs/leadership.jpg";
import imgSchools from "@/assets/images/programs/schools.jpg";
import imgRecreation from "@/assets/images/programs/recreation.jpg";
import imgCustom from "@/assets/images/programs/custom.jpg";
import imgTallship from "@/assets/images/programs/tallship.jpg";
import imgInstructor from "@/assets/images/programs/instructor.jpg";

export const metadata = {
  title: "Gallery | Wilderness Malaysia",
  description:
    "A glimpse into our programs and expeditions across Malaysia’s forests, rivers, and coasts.",
};

export default function GalleryPage() {
  const photos = [
    { src: imgAboutHero, alt: "Participants hiking through tropical rainforest" },
    { src: imgAdventure, alt: "Adventure expedition on jungle trail" },
    { src: imgCorporate, alt: "Corporate team debrief outdoors" },
    { src: imgLeadership, alt: "Leadership activity with group discussion" },
    { src: imgSchools, alt: "School expedition group at camp" },
    { src: imgRecreation, alt: "Kayaking on calm waters at sunset" },
    { src: imgCustom, alt: "Custom program planning in the field" },
    { src: imgTallship, alt: "Tall ship crew training on deck" },
    { src: imgInstructor, alt: "Instructor demonstrating outdoor skills" },
  ];

  return (
    <main className="flex flex-col items-center">
      <section className="max-w-6xl mx-auto py-20 px-6 w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">Gallery</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Snapshots from recent programs and expeditions across Malaysia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((p, i) => (
            <div key={i} className="relative aspect-[4/3]">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover rounded-xl shadow-sm"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
