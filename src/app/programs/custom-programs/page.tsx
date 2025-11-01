import type { Metadata } from "next";

import Image from "next/image";
import CTASection from "@/components/CTASection";
import imgCustom from "@/assets/images/programs/custom.jpg";
import imgCustomActivity from "@/assets/images/programs/custom-activity.jpg";

export const metadata: Metadata = {
    title: "Custom Programs | Wilderness Malaysia",
    description:
        "Design a tailored outdoor experience that matches your goals — from corporate retreats to youth journeys and adventure expeditions.",
};

export default function CustomProgramsPage() {
    return (
        <main className="flex flex-col items-center">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center">
                <Image
                    src={imgCustom}
                    alt="Custom Programs"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Custom Programs
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">
                        Your objectives, our expertise — fully personalized outdoor experiences designed around your team, group, or school.
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="max-w-5xl mx-auto py-20 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">
                    Designed for You, Built in Nature
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                    Every group is different — which is why we offer complete flexibility in creating
                    your own wilderness program. Whether it’s a corporate leadership retreat,
                    international school journey, or specialized expedition, our facilitators and
                    guides will design a program that meets your outcomes, comfort level, and adventure style.
                </p>
            </section>

            {/* What We Can Customize */}
            <section className="bg-gray-50 w-full py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-green-800">
                            What We Can Customize
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Program duration — from one day to multi-week expeditions.</li>
                            <li>Location — mountains, rainforest, islands, or coastal areas across Malaysia.</li>
                            <li>Learning focus — leadership, environmental education, adventure, or wellness.</li>
                            <li>Accommodation style — camping, eco-lodges, or hybrid comfort options.</li>
                            <li>Activity level — from low-impact reflection programs to high-intensity expeditions.</li>
                        </ul>
                    </div>

                    <div className="relative w-full h-80 md:h-96">
                        <Image
                            src={imgCustomActivity}
                            alt="Custom outdoor program"
                            fill
                            className="object-cover rounded-2xl shadow-md"
                        />
                    </div>
                </div>
            </section>

            {/* Example Custom Packages */}
            <section className="max-w-6xl mx-auto py-20 px-6 text-center">
                <h3 className="text-3xl font-bold mb-8 text-green-800">
                    Example Custom Experiences
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {[
                        {
                            title: "Corporate Leadership Retreat",
                            text: "A 3-day nature-based retreat combining team-building, mindfulness, and outdoor challenges to reset focus and collaboration.",
                        },
                        {
                            title: "School Environmental Expedition",
                            text: "Educational journey through Malaysia’s ecosystems with conservation projects, field learning, and community engagement.",
                        },
                        {
                            title: "Adventure Wellness Camp",
                            text: "Blend of trekking, yoga, and reflection sessions in a serene wilderness setting for rejuvenation and connection.",
                        },
                    ].map((a, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
                        >
                            <h4 className="text-xl font-semibold mb-2 text-green-800">
                                {a.title}
                            </h4>
                            <p className="text-gray-700">{a.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-green-700 text-white w-full py-20 px-6 text-center">
                <h3 className="text-3xl font-bold mb-8">
                    What Our Clients Say
                </h3>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            quote:
                                "Wilderness Malaysia designed a fully customized program for our leadership team — it was impactful, smooth, and truly transformative.",
                            name: "Joanne C., HR Director, Inspire Holdings",
                        },
                        {
                            quote:
                                "They listened to what we wanted and created a unique expedition for our students that fit perfectly with our learning goals.",
                            name: "Mr. Tan, International School Coordinator",
                        },
                    ].map((t, i) => (
                        <div
                            key={i}
                            className="bg-white text-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition"
                        >
                            <p className="italic mb-4">“{t.quote}”</p>
                            <p className="font-semibold text-green-700">— {t.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <CTASection
                title="Create Your Custom Program"
                subtitle="Tell us your goals — we’ll build a tailored outdoor experience that fits your group’s objectives and spirit of adventure."
                buttonText="Start Planning"
                buttonLink="/contact"
            />
        </main>
    );
}
