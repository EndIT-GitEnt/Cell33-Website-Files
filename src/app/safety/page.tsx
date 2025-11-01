export const metadata = {
    title: "Safety | Wilderness Malaysia",
    description: "Our approach to safety, risk management, and facilitator qualifications for all programs.",
};

export default function SafetyPage() {
    return (
        <main className="flex flex-col items-center">
            <section className="max-w-5xl mx-auto py-20 px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-800 text-center">Safety & Risk Management</h1>
                <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
                    Safety is our first priority. We plan, brief, and operate with robust SOPs, certified facilitators, and appropriate ratios.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Qualified Team",
                            text: "Facilitators hold relevant outdoor, first aid, and safeguarding certifications.",
                        },
                        {
                            title: "Risk Assessments",
                            text: "Site- and activity-specific risk assessments with dynamic reviews on program.",
                        },
                        {
                            title: "Emergency Response",
                            text: "Clear escalation paths, comms plans, and evacuation procedures where needed.",
                        },
                    ].map((c) => (
                        <div key={c.title} className="bg-white rounded-2xl shadow-md p-6">
                            <h2 className="text-xl font-semibold mb-2 text-green-800">{c.title}</h2>
                            <p className="text-gray-700">{c.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
