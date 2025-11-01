import type { Metadata } from "next";

import Image from "next/image";
import CTASection from "@/components/CTASection";
import imgAdventure from "@/assets/images/programs/adventure.jpg";
import imgAdventureActivity from "@/assets/images/programs/adventure-activity.jpg";

export const metadata: Metadata = {
    title: "Adventure Expeditions | Wilderness Malaysia",
    description:
        "Join thrilling guided adventures across Malaysia — from jungle treks to mountain expeditions and river journeys.",
};

export default function AdventureExpeditionsPage() {
    return (
        <main className="flex flex-col items-center">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center">
                <Image
                    src={imgAdventure}
                    alt="Adventure Expeditions"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Adventure Expeditions
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">
                        Explore Malaysia’s most breathtaking landscapes through guided trekking,
                        paddling, and expedition challenges.
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="max-w-5xl mx-auto py-20 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">
                    Adventure with a Purpose
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                    Our expeditions combine exploration, endurance, and discovery. Led by
                    experienced wilderness guides, these adventures challenge both body and mind
                    — helping participants connect deeply with Malaysia’s wild places while
                    building teamwork and resilience.
                </p>
            </section>

            {/* Highlights Section */}
            <section className="bg-gray-50 w-full py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-green-800">
                            What You’ll Experience
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Expert-guided outdoor adventures in diverse natural settings.</li>
                            <li>Safe and sustainable exploration of mountains, rivers, and forests.</li>
                            <li>Opportunities for self-discovery, leadership, and teamwork.</li>
                            <li>Authentic cultural encounters with local communities.</li>
                            <li>Unforgettable moments that test endurance and build character.</li>
                        </ul>
                    </div>

                    <div className="relative w-full h-80 md:h-96">
                        <Image
                            src={imgAdventureActivity}
                            alt="Jungle trekking adventure"
                            fill
                            className="object-cover rounded-2xl shadow-md"
                        />
                    </div>
                </div>
            </section>

            {/* Featured Expeditions */}
            <section className="max-w-6xl mx-auto py-20 px-6 text-center">
                <h3 className="text-3xl font-bold mb-8 text-green-800">
                    Featured Expeditions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {[
                        {
                            title: "Mount Tahan Summit Challenge",
                            text: "A multi-day trek to Peninsular Malaysia’s highest peak — testing endurance and teamwork in pristine rainforest.",
                        },
                        {
                            title: "Belum Rainforest Trek",
                            text: "Navigate ancient forest trails, waterfalls, and hidden lakes while learning survival and environmental awareness.",
                        },
                        {
                            title: "River Rafting & Camp Expedition",
                            text: "Combine water-based adventure with wilderness camping and outdoor cooking along Malaysia’s scenic rivers.",
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
                    What Adventurers Say
                </h3>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            quote:
                                "An unforgettable experience — challenging, beautiful, and deeply rewarding. The guides were outstanding.",
                            name: "Irfan M., Expedition Participant",
                        },
                        {
                            quote:
                                "Every moment pushed me out of my comfort zone in the best way possible. I learned so much about myself and teamwork.",
                            name: "Melissa T., Group Leader",
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
                title="Join Your Next Adventure"
                subtitle="Experience Malaysia’s wildest and most rewarding outdoor expeditions — guided by professionals who care about safety and sustainability."
                buttonText="Book Now"
                buttonLink="/contact"
            />
        </main>
    );
}
