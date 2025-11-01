import type { Metadata } from "next";

import Image from "next/image";
import CTASection from "@/components/CTASection";
import aboutHero from "@/assets/images/hero/about-hero.jpg";
import missionImg from "@/assets/images/about/mission.jpg";

export const metadata: Metadata = {
  title: "About Us | Wilderness Malaysia",
  description:
    "Discover Wilderness Malaysia’s story — 25+ years of outdoor experiential learning, leadership, and adventure programs.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Banner */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <Image src={aboutHero} alt="About Wilderness Malaysia" fill className="object-cover brightness-50" priority />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">Building leadership, teamwork, and confidence through outdoor experiences since 1997.</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">Who We Are</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          Wilderness Malaysia is a pioneer in outdoor experiential learning and adventure-based development. For more than 25 years, we’ve delivered programs that empower individuals and teams to grow through challenge, exploration, and discovery.
        </p>
      </section>

      {/* Mission + Vision */}
      <section className="bg-gray-50 w-full py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-green-800">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">To provide meaningful outdoor experiences that foster leadership, self-awareness, and teamwork — helping participants reach their full potential in life and work.</p>
            <h2 className="text-3xl font-bold mt-10 mb-4 text-green-800">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">To be Malaysia’s leading provider of experiential outdoor programs that build strong, capable, and compassionate leaders.</p>
          </div>
          <div className="relative w-full h-80 md:h-96">
            <Image src={missionImg} alt="Outdoor teamwork" fill className="object-cover rounded-2xl shadow-md" />
          </div>
        </div>
      </section>

      {/* Experience & Credentials */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-800">25+ Years of Experience</h2>
        <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
          From the rainforests of Malaysia to the open seas, our programs are led by certified outdoor professionals with backgrounds in education, psychology, and leadership development. Safety, inclusivity, and sustainability guide everything we do.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {[
            { title: "25+ Years", text: "of continuous operation since 1997" },
            { title: "10,000+", text: "participants trained" },
            { title: "Certified", text: "facilitators and instructors" },
            { title: "Safety First", text: "internationally aligned protocols" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-green-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Commitment */}
      <section className="bg-green-700 text-white w-full py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Safety & Quality at Our Core</h2>
          <p className="text-lg leading-relaxed mb-8">
            Every Wilderness Malaysia program is built on internationally recognized standards of safety, risk management, and outdoor education. Our facilitators are trained in first aid, water rescue, and incident response to ensure every experience remains both adventurous and secure.
          </p>
          <a href="/safety" className="inline-block px-6 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition">
            Learn About Our Safety Standards
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection
        title="Join Us Outdoors"
        subtitle="Discover how Wilderness Malaysia can design a transformative outdoor experience for your team, school, or group."
        buttonText="Explore Programs"
        buttonLink="/programs"
      />
    </main>
  );
}
