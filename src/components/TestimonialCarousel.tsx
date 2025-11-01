export default function TestimonialCarousel() {
    const testimonials = [
        {
            name: "Aiman Rahman",
            text: "Our corporate retreat with Wilderness Malaysia was life-changing. The activities were engaging and built real teamwork.",
        },
        {
            name: "Nurul Huda",
            text: "The school expedition helped our students gain confidence and leadership like never before.",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
                <div
                    key={i}
                    className="bg-white p-8 rounded-2xl shadow-md text-gray-700 hover:shadow-lg transition"
                >
                    <p className="italic mb-4">“{t.text}”</p>
                    <p className="font-semibold text-green-700">— {t.name}</p>
                </div>
            ))}
        </div>
    );
}
