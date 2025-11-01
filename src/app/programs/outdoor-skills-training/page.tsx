import Image from "next/image";
import CTASection from "@/components/CTASection";
import imgInstructor from "@/assets/images/programs/instructor.jpg";
import imgInstructorActivity from "@/assets/images/programs/instructor-activity.jpg";

export const metadata = {
    title: "Outdoor Skills & Instructor Training | Wilderness Malaysia",
    description:
        "Gain the technical expertise, leadership confidence, and certification to guide and teach in outdoor environments.",
};

export default function OutdoorSkillsTrainingPage() {
    return (
        <main className="flex flex-col items-center">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center">
                <Image
                    src={imgInstructor}
                    alt="Outdoor Skills and Instructor Training"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Outdoor Skills & Instructor Training
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">
                        Develop your competence and confidence as an outdoor leader, instructor, or
                        facilitator through immersive hands-on training.
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="max-w-5xl mx-auto py-20 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">
                    Learn. Lead. Inspire.
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                    Our instructor and outdoor skills programs are built for those who want to
                    elevate their technical ability and leadership in nature. Whether you’re
                    preparing for professional facilitation, school leadership, or expedition
                    guiding, our training emphasizes safety, adaptability, and self-awareness.
                </p>
            </section>

            {/* Core Competencies Section */}
            <section className="bg-gray-50 w-full py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-green-800">
                            Core Competencies
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Risk management, group safety, and outdoor emergency response.</li>
                            <li>Leadership and facilitation in outdoor environments.</li>
                            <li>Navigation, campcraft, and expedition logistics.</li>
                            <li>Environmental ethics and sustainability principles.</li>
                            <li>Coaching, debriefing, and reflective learning techniques.</li>
                        </ul>
                    </div>

                    <div className="relative w-full h-80 md:h-96">
                        <Image
                            src={imgInstructorActivity}
                            alt="Outdoor instructor training"
                            fill
                            className="object-cover rounded-2xl shadow-md"
                        />
                    </div>
                </div>
            </section>

            {/* Course Options */}
            <section className="max-w-6xl mx-auto py-20 px-6 text-center">
                <h3 className="text-3xl font-bold mb-8 text-green-800">
                    Training Pathways
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {[
                        {
                            title: "Outdoor Leadership Fundamentals",
                            text: "A 3–5 day introduction covering core outdoor competencies and group management for aspiring leaders.",
                        },
                        {
                            title: "Advanced Instructor Program",
                            text: "In-depth technical training with assessment, suitable for those leading expeditions or educational programs.",
                        },
                        {
                            title: "Custom Skills Workshops",
                            text: "Bespoke modules on navigation, campcraft, wilderness first aid, or facilitation skills for teams or individuals.",
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
                <h3 className="text-3xl font-bold mb-8">Participant Reflections</h3>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            quote:
                                "The instructor program completely changed how I approach facilitation. The mix of technical and reflective learning was powerful.",
                            name: "Aiman R., Outdoor Educator",
                        },
                        {
                            quote:
                                "Wilderness Malaysia’s facilitators are world-class. The training gave me the confidence to lead groups safely and meaningfully.",
                            name: "Sophie L., Expedition Leader",
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
                title="Become a Certified Outdoor Leader"
                subtitle="Join a training program that blends skill, reflection, and leadership — designed for outdoor educators, guides, and facilitators."
                buttonText="Enquire Now"
                buttonLink="/contact"
            />
        </main>
    );
}
