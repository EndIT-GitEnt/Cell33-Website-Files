export const metadata = {
    title: "FAQ | Wilderness Malaysia",
    description: "Answers to common questions about our programs, safety, and logistics.",
};

export default function FAQPage() {
    const faqs = [
        {
            q: "Who are your programs for?",
            a: "We work with schools, universities, corporate teams, and youth groups across Malaysia and the region.",
        },
        {
            q: "Do I need prior outdoor experience?",
            a: "No. We tailor challenge levels for each group. Safety briefings and skill training are provided.",
        },
        {
            q: "Where do programs take place?",
            a: "Across Peninsular Malaysia and Borneo — forests, rivers, coasts, and islands, selected to fit your goals.",
        },
        {
            q: "What about safety and risk management?",
            a: "Our facilitators are trained in outdoor risk management and first aid. We use detailed SOPs and contingency plans.",
        },
    ];

    return (
        <main className="flex flex-col items-center">
            <section className="max-w-5xl mx-auto py-20 px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-green-800 text-center">Frequently Asked Questions</h1>
                <div className="space-y-6">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-white rounded-2xl shadow-md p-6">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">{f.q}</h2>
                            <p className="text-gray-700">{f.a}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
