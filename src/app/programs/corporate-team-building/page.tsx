import Image from "next/image";
import CTASection from "@/components/CTASection";
import imgCorporate from "@/assets/images/programs/corporate.jpg";
import imgCorporateActivity from "@/assets/images/programs/corporate-activity.jpg";

export const metadata = {
    title: "Corporate Team-Building | Wilderness Malaysia",
    description:
        "Transform your team with outdoor experiential challenges that build trust, communication, and leadership.",
};

export default function CorporateTeamBuildingPage() {
    return (
        <main className="flex flex-col items-center">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center">
                <Image
                    src={imgCorporate}
                    alt="Corporate Team Building"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Corporate Team-Building
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">
                        Outdoor challenges that drive teamwork, communication, and leadership in a
                        natural, engaging environment.
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="max-w-5xl mx-auto py-20 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">
                    Build Stronger, Smarter, and More Connected Teams
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                    Our corporate team-building programs combine physical challenges, strategic
                    problem-solving, and reflective learning to strengthen collaboration and
                    resilience. Through outdoor experiential learning, participants gain practical
                    leadership insights that translate directly into workplace performance.
                </p>
            </section>

            {/* Benefits Section */}
            <section className="bg-gray-50 w-full py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-green-800">
                            Key Benefits
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Develop trust, communication, and accountability within teams.</li>
                            <li>Encourage creative problem-solving through real-world outdoor scenarios.</li>
                            <li>Identify and nurture leadership potential in dynamic situations.</li>
                            <li>Break down organizational silos and promote cross-department collaboration.</li>
                            <li>Boost morale, motivation, and a sense of shared purpose.</li>
                        </ul>
                    </div>

                    <div className="relative w-full h-80 md:h-96">
                        <Image
                            src={imgCorporateActivity}
                            alt="Corporate outdoor activity"
                            fill
                            className="object-cover rounded-2xl shadow-md"
                        />
                    </div>
                </div>
            </section>

            {/* Sample Activities */}
            <section className="max-w-6xl mx-auto py-20 px-6 text-center">
                <h3 className="text-3xl font-bold mb-8 text-green-800">
                    Sample Activities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {[
                        {
                            title: "Expedition Challenge",
                            text: "Teams navigate through jungle trails or coastal routes to achieve shared objectives, enhancing communication and trust.",
                        },
                        {
                            title: "Problem-Solving Missions",
                            text: "Teams face complex outdoor challenges requiring strategy, innovation, and clear leadership under time pressure.",
                        },
                        {
                            title: "Raft Building or High Ropes",
                            text: "Collaborative technical challenges designed to test group planning, delegation, and confidence.",
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
                <h3 className="text-3xl font-bold mb-8">What Our Corporate Clients Say</h3>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            quote:
                                "Our leadership retreat with Wilderness Malaysia was eye-opening. The activities built real teamwork and clarity in how we communicate.",
                            name: "Farah A., HR Director, TechFirm Asia",
                        },
                        {
                            quote:
                                "The facilitators were exceptional — professional, engaging, and insightful. Our team came back stronger and more connected.",
                            name: "Daniel Lim, Operations Manager, Global Logistics",
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
                title="Let’s Build Your Next Team Experience"
                subtitle="Talk to our facilitators today and design a program that fits your corporate goals and culture."
                buttonText="Get in Touch"
                buttonLink="/contact"
            />
        </main>
    );
}
