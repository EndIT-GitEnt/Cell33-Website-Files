import Image from "next/image";
import ProgramCard from "@/components/ProgramCard";
import CTASection from "@/components/CTASection";
import programsHero from "@/assets/images/hero/programs-hero.jpg";
import imgCorporate from "@/assets/images/programs/corporate.jpg";
import imgSchools from "@/assets/images/programs/schools.jpg";
import imgLeadership from "@/assets/images/programs/leadership.jpg";
import imgTallship from "@/assets/images/programs/tallship.jpg";
import imgRecreation from "@/assets/images/programs/recreation.jpg";

export const metadata = {
  title: "Our Programs | Wilderness Malaysia",
  description:
    "Explore our outdoor experiential learning programs — from corporate team-building to youth expeditions and leadership training.",
};

export default function ProgramsPage() {
  const programs = [
    {
      title: "Corporate Team Building",
      description:
        "Custom-designed outdoor challenges to strengthen teamwork, trust, and communication within business teams.",
      image: imgCorporate,
      link: "/programs/corporate-team-building",
    },
    {
      title: "Schools & Youth Expeditions",
      description:
        "Outdoor learning adventures that help students develop leadership, resilience, and empathy through experience.",
      image: imgSchools,
      link: "/programs/schools-youth",
    },
    {
      title: "Leadership & Skills Training",
      description:
        "Professional and personal development through wilderness-based leadership and technical skill-building.",
      image: imgLeadership,
      link: "/programs/leadership-skills",
    },
    {
      title: "Tall Ship Leadership Program",
      description:
        "A transformative voyage aboard a tall ship, teaching navigation, seamanship, and leadership through real-world teamwork.",
      image: imgTallship,
      link: "/programs/tall-ship",
    },
    {
      title: "Recreation & Team Outings",
      description:
        "Fun and engaging outdoor recreation for companies, families, and groups seeking adventure and connection.",
      image: imgRecreation,
      link: "/programs/recreation",
    },
  ];

  return (
    <main className="flex flex-col items-center">
      {/* Hero Banner */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <Image src={programsHero} alt="Our Programs" fill className="object-cover brightness-50" priority />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Outdoor Programs That Inspire Growth</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Experiential learning for corporate teams, schools, and individuals — designed to challenge, connect, and transform.
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <p className="text-gray-700 text-lg leading-relaxed">
          Every Wilderness Malaysia program is carefully structured to combine adventure with reflection and teamwork. Whether you’re a business leader, educator, or student, our outdoor environments provide the ideal setting for growth and discovery.
        </p>
      </section>

      {/* Programs Grid */}
      <section className="w-full bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <ProgramCard key={i} title={p.title} description={p.description} image={p.image} link={p.link} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Not sure which program fits your needs?"
        subtitle="Talk to our experienced facilitators — we’ll help you design a custom outdoor experience for your team or group."
        buttonText="Contact Our Team"
        buttonLink="/contact"
      />
    </main>
  );
}
