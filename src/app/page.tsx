"use client";

import HeroSection from "@/components/HeroSection";
import ProgramCard from "@/components/ProgramCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTASection from "@/components/CTASection";
import ClientLogoGrid from "@/components/ClientLogoGrid";
import heroPrograms from "@/assets/images/hero/programs-hero.jpg";
import imgCorporate from "@/assets/images/programs/corporate.jpg";
import imgSchools from "@/assets/images/programs/schools.jpg";
import imgLeadership from "@/assets/images/programs/leadership.jpg";
import wmLogo from "@/assets/images/WM_Logo_130x80.png";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <HeroSection
        title="Challenge. Explore. Discover."
        subtitle="Outdoor experiential learning and team-building programs that inspire growth and leadership."
        image={heroPrograms}
        ctaText="Explore Our Programs"
        ctaLink="/programs"
      />

      {/* About Preview */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Wilderness Malaysia?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          For over 25 years, Wilderness Malaysia has designed transformative outdoor programs that build confidence, teamwork, and leadership. From school expeditions to corporate challenges, every journey with us helps participants grow beyond comfort zones.
        </p>
        <a href="/about" className="inline-block px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition">
          Learn More

        </a>
      </section>
      {/* Client Logos */}
      <ClientLogoGrid
        title="Trusted by teams and schools"
        logos={[
          { src: wmLogo, alt: "Wilderness Malaysia" },
          { src: "/vercel.svg", alt: "Vercel" },
          { src: "/next.svg", alt: "Next.js" },
          { src: "/globe.svg", alt: "Global" },
          { src: "/window.svg", alt: "Window" },
        ]}
      />


      {/* Programs Overview */}
      <section className="bg-gray-50 w-full py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
          <p className="text-gray-600">Designed for corporate teams, schools, and individuals seeking personal growth.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ProgramCard
            title="Corporate Team Building"
            description="Dynamic team challenges and outdoor problem-solving for business teams."
            image={imgCorporate}
            link="/programs/corporate-team-building"
          />
          <ProgramCard
            title="Schools & Youth Expeditions"
            description="Experiential learning for youth that develops resilience and leadership."
            image={imgSchools}
            link="/programs/schools-youth"
          />
          <ProgramCard
            title="Leadership & Skills Training"
            description="Build critical leadership, communication, and survival skills outdoors."
            image={imgLeadership}
            link="/programs/leadership-skills"
          />
        </div>

        <div className="text-center mt-10">
          <a href="/programs" className="inline-block px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition">
            View All Programs
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">What Our Clients Say</h2>
        <TestimonialCarousel />
      </section>

      {/* Call to Action */}
      <CTASection
        title="Ready to plan your next adventure?"
        subtitle="Talk to our team today and discover how we can design a custom program for your group."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </main>
  );
}
