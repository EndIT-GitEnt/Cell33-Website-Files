import Image from "next/image";
import CTASection from "@/components/CTASection";
import imgSchools from "@/assets/images/programs/schools.jpg";
import imgSchoolsActivity from "@/assets/images/programs/schools-activity.jpg";

export const metadata = {
    title: "Schools & Youth Expeditions | Wilderness Malaysia",
    description:
        "Empowering young people through outdoor education, adventure, and leadership development in Malaysia’s most inspiring natural landscapes.",
};

export default function SchoolsYouthExpeditionsPage() {
    return (
        <main className="flex flex-col items-center">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center">
                <Image
                    src={imgSchools}
                    alt="Schools and Youth Expeditions"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Schools & Youth Expeditions
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">
                        Outdoor learning experiences that inspire confidence, teamwork, and leadership
                        in young people.
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="max-w-5xl mx-auto py-20 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">
                    Adventure with Purpose
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                    Our youth expeditions are designed to help students grow beyond the classroom
                    through real-world challenges. From mountain treks to coastal expeditions,
                    participants learn resilience, empathy, and leadership — all while developing a
                    deeper connection to nature and their peers.
                </p>
            </section>

            {/* Learning Outcomes Section */}
            <section className="bg-gray-50 w-full py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-green-800">
                            Learning Outcomes
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Enhance leadership, communication, and teamwork skills.</li>
                            <li>Build resilience and adaptability through experiential challenges.</li>
                            <li>Encourage environmental awareness and respect for nature.</li>
                            <li>Foster self-confidence and independence.</li>
                            <li>Develop empathy and a sense of social responsibility.</li>
                        </ul>
                    </div>

                    <div className="relative w-full h-80 md:h-96">
                        <Image
                            src={imgSchoolsActivity}
                            alt="Youth outdoor learning"
                            fill
                            className="object-cover rounded-2xl shadow-md"
                        />
                    </div>
                </div>
            </section>

            {/* Sample Expeditions */}
            <section className="max-w-6xl mx-auto py-20 px-6 text-center">
                <h3 className="text-3xl font-bold mb-8 text-green-800">
                    Sample Expeditions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {[
                        {
                            title: "Mountain Trek Leadership Camp",
                            text: "Students take on a multi-day trek focusing on teamwork, endurance, and decision-making in real outdoor conditions.",
                        },
                        {
                            title: "Coastal Conservation Expedition",
                            text: "Hands-on exploration combining adventure with marine ecosystem education and sustainability projects.",
                        },
                        {
                            title: "Jungle Navigation Challenge",
                            text: "Groups learn survival skills, map reading, and leadership through guided challenges in tropical rainforest settings.",
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
                    What Schools and Students Say
                </h3>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            quote:
                                "Our students returned inspired and full of confidence. The experience encouraged teamwork and leadership in ways no classroom could.",
                            name: "Principal, Horizon International School",
                        },
                        {
                            quote:
                                "The facilitators connected so well with the students. They made learning fun, challenging, and meaningful.",
                            name: "Teacher, Greenfield Academy",
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
                title="Plan Your School Expedition"
                subtitle="Our team will design a safe, educational, and unforgettable adventure for your students."
                buttonText="Get in Touch"
                buttonLink="/contact"
            />
        </main>
    );
}
