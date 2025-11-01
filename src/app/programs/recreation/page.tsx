import Image from "next/image";
import CTASection from "@/components/CTASection";
import imgRecreation from "@/assets/images/programs/recreation.jpg";
import imgRecreationActivity from "@/assets/images/programs/recreation-activity.jpg";

export const metadata = {
    title: "Recreation Programs | Wilderness Malaysia",
    description:
        "Reconnect with nature through guided outdoor experiences — designed for relaxation, wellbeing, and simple adventure.",
};

export default function RecreationPage() {
    return (
        <main className="flex flex-col items-center">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center">
                <Image
                    src={imgRecreation}
                    alt="Recreation in nature"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Recreation Programs
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">
                        Step outdoors, slow down, and rediscover joy in nature through guided experiences that restore energy and balance.
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="max-w-5xl mx-auto py-20 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">
                    Reconnect, Recharge, and Rebalance
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                    Our recreation programs are designed for individuals, families, and groups
                    who want to experience the outdoors in a relaxed and meaningful way.
                    From forest walks to kayaking retreats, each experience blends light adventure
                    with the restorative qualities of nature.
                </p>
            </section>

            {/* Activities Overview */}
            <section className="bg-gray-50 w-full py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-green-800">
                            Activities You’ll Enjoy
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                            <li>Guided forest walks and eco-trails</li>
                            <li>Kayaking, stand-up paddleboarding, or light river rafting</li>
                            <li>Nature photography and mindfulness sessions</li>
                            <li>Family-friendly camping or picnic programs</li>
                            <li>Corporate or community wellness retreats</li>
                        </ul>
                    </div>
                    <div className="relative w-full h-80 md:h-96">
                        <Image
                            src={imgRecreationActivity}
                            alt="Outdoor recreation activity"
                            fill
                            className="object-cover rounded-2xl shadow-md"
                        />
                    </div>
                </div>
            </section>

            {/* Program Options */}
            <section className="max-w-6xl mx-auto py-20 px-6 text-center">
                <h3 className="text-3xl font-bold mb-8 text-green-800">
                    Program Options
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {[
                        {
                            title: "Weekend Nature Escapes",
                            text: "2-day retreats combining light adventure, rest, and mindfulness — perfect for busy professionals or families.",
                        },
                        {
                            title: "Wellness in the Wild",
                            text: "Gentle outdoor movement, reflection, and nature connection sessions led by our experienced facilitators.",
                        },
                        {
                            title: "Eco-Adventure Days",
                            text: "Fun day programs combining soft adventure with environmental appreciation and community learning.",
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
                <h3 className="text-3xl font-bold mb-8">
                    What Participants Say
                </h3>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            quote:
                                "I never realised how much I needed to disconnect — this weekend was pure peace and laughter.",
                            name: "Siti N., Kuala Lumpur",
                        },
                        {
                            quote:
                                "Beautiful setting, great guides, and an easy pace that helped me recharge. Highly recommended!",
                            name: "Ben L., Penang",
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
                title="Join a Recreation Program"
                subtitle="Slow down, breathe deep, and rediscover your connection with nature. Join one of our upcoming recreational adventures."
                buttonText="Get Started"
                buttonLink="/contact"
            />
        </main>
    );
}
