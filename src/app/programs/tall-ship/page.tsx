import type { Metadata } from "next";

import Image from "next/image";
import CTASection from "@/components/CTASection";
import imgTallship from "@/assets/images/programs/tallship.jpg";
import imgTallshipCrew from "@/assets/images/programs/tallship-crew.jpg";

export const metadata: Metadata = {
    title: "Tall Ship Program | Wilderness Malaysia",
    description:
        "A life-changing maritime adventure — learn teamwork, leadership, and resilience while sailing Malaysia’s tropical waters.",
};

export default function TallShipPage() {
    return (
        <main className="flex flex-col items-center">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center">
                <Image
                    src={imgTallship}
                    alt="Tall Ship at sea"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Tall Ship Program
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">
                        Set sail on a voyage of discovery — where teamwork, adventure, and reflection come together on the open sea.
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="max-w-5xl mx-auto py-20 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">
                    Leadership, Teamwork, and Adventure — Under Sail
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                    The Tall Ship Program is a unique outdoor education and leadership experience conducted entirely aboard a sailing vessel.
                    Participants become part of the ship’s crew, learning seamanship, navigation, and cooperation while sailing Malaysia’s
                    coastal waters and islands. It’s more than an adventure — it’s an immersive journey in resilience and shared responsibility.
                </p>
            </section>

            {/* Life on Board */}
            <section className="bg-gray-50 w-full py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-green-800">
                            Life on Board
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Active participation in sailing tasks — hoisting sails, steering, and navigation.</li>
                            <li>Team rotations for daily duties, including galley, deck, and watch shifts.</li>
                            <li>Morning reflections, evening debriefs, and facilitated learning sessions.</li>
                            <li>Anchoring near remote islands for snorkeling, exploration, or conservation activities.</li>
                            <li>Emphasis on leadership, teamwork, and environmental stewardship.</li>
                        </ul>
                    </div>
                    <div className="relative w-full h-80 md:h-96">
                        <Image
                            src={imgTallshipCrew}
                            alt="Tall ship crew working together"
                            fill
                            className="object-cover rounded-2xl shadow-md"
                        />
                    </div>
                </div>
            </section>

            {/* Program Highlights */}
            <section className="max-w-6xl mx-auto py-20 px-6 text-center">
                <h3 className="text-3xl font-bold mb-8 text-green-800">
                    Program Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {[
                        {
                            title: "Hands-On Seamanship",
                            text: "Participants learn the essentials of sailing, from ropework and navigation to managing sails and steering under the captain’s guidance.",
                        },
                        {
                            title: "Leadership Under Challenge",
                            text: "Life at sea brings teamwork and decision-making to life — a dynamic environment that builds trust and resilience.",
                        },
                        {
                            title: "Connection to Nature",
                            text: "Experience the rhythm of the ocean, starry night skies, and the beauty of Malaysia’s island ecosystems.",
                        },
                    ].map((p, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
                        >
                            <h4 className="text-xl font-semibold mb-2 text-green-800">
                                {p.title}
                            </h4>
                            <p className="text-gray-700">{p.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-green-700 text-white w-full py-20 px-6 text-center">
                <h3 className="text-3xl font-bold mb-8">What Participants Say</h3>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            quote:
                                "Being part of the crew changed how I see teamwork — we relied on each other for everything, and it built real trust.",
                            name: "Daniel K., Participant",
                        },
                        {
                            quote:
                                "The sea challenges you in ways the land cannot. I learned to lead, follow, and stay calm even in rough conditions.",
                            name: "Nurul A., Youth Leader",
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

            {/* CTA */}
            <CTASection
                title="Join the Tall Ship Adventure"
                subtitle="Take the helm, hoist the sails, and discover what you’re capable of at sea. Leadership, teamwork, and adventure — all in one unforgettable voyage."
                buttonText="Enquire Now"
                buttonLink="/contact"
            />
        </main>
    );
}
