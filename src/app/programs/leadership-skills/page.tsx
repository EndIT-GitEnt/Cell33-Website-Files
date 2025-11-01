import Image from "next/image";
import CTASection from "@/components/CTASection";
import imgLeadership from "@/assets/images/programs/leadership.jpg";
import imgLeadershipActivity from "@/assets/images/programs/leadership-activity.jpg";

export const metadata = {
    title: "Leadership Skills | Wilderness Malaysia",
    description:
        "Develop resilience, communication, and decision-making through our nature-based leadership programs.",
};

export default function LeadershipSkillsPage() {
    return (
        <main className="flex flex-col items-center">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center">
                <Image
                    src={imgLeadership}
                    alt="Leadership Skills Program"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Leadership Skills
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">
                        Strengthen your ability to lead, adapt, and inspire — in the classroom, boardroom, or the wilderness.
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="max-w-5xl mx-auto py-20 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">
                    Leadership Begins in Challenge
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                    Our leadership programs blend outdoor experiences with structured reflection
                    to help participants discover their authentic leadership style.
                    Each challenge — whether it’s navigating a river crossing or guiding a team through a forest trek —
                    becomes an opportunity to learn decision-making, communication, and trust.
                </p>
            </section>

            {/* Core Focus Areas */}
            <section className="bg-gray-50 w-full py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-green-800">
                            Core Focus Areas
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Resilience and adaptability under pressure.</li>
                            <li>Team communication and collaboration.</li>
                            <li>Decision-making and situational awareness.</li>
                            <li>Empathy and emotional intelligence in leadership.</li>
                            <li>Reflection and personal growth through nature.</li>
                        </ul>
                    </div>
                    <div className="relative w-full h-80 md:h-96">
                        <Image
                            src={imgLeadershipActivity}
                            alt="Leadership development activity"
                            fill
                            className="object-cover rounded-2xl shadow-md"
                        />
                    </div>
                </div>
            </section>

            {/* Program Formats */}
            <section className="max-w-6xl mx-auto py-20 px-6 text-center">
                <h3 className="text-3xl font-bold mb-8 text-green-800">
                    Program Formats
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {[
                        {
                            title: "Outdoor Leadership Journey",
                            text: "Multi-day wilderness expedition focused on self-leadership and team roles under real challenge conditions.",
                        },
                        {
                            title: "Facilitated Leadership Workshops",
                            text: "Short, interactive sessions combining outdoor challenges with reflection and group coaching.",
                        },
                        {
                            title: "Educator & Youth Leader Training",
                            text: "Programs designed for teachers, facilitators, and youth mentors to enhance their leadership practice.",
                        },
                    ].map((f, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
                        >
                            <h4 className="text-xl font-semibold mb-2 text-green-800">
                                {f.title}
                            </h4>
                            <p className="text-gray-700">{f.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-green-700 text-white w-full py-20 px-6 text-center">
                <h3 className="text-3xl font-bold mb-8">Participant Reflections</h3>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            quote:
                                "This program helped me understand how I respond to uncertainty and how to lead others with confidence and care.",
                            name: "Aiman R., University Student",
                        },
                        {
                            quote:
                                "The challenges pushed us beyond comfort — but the lessons on communication and empathy stayed with me long after.",
                            name: "Michelle T., Team Manager",
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
                title="Ready to Lead Differently?"
                subtitle="Join our next leadership skills program and build the confidence to lead with clarity, empathy, and courage."
                buttonText="Join Now"
                buttonLink="/contact"
            />
        </main>
    );
}
