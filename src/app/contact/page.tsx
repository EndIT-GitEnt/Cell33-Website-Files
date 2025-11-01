import type { Metadata } from "next";

import CTASection from "@/components/CTASection";
import InquiryForm from "@/components/InquiryForm";


export const metadata: Metadata = {
    title: "Contact | Wilderness Malaysia",
    description:
        "Get in touch with Wilderness Malaysia to enquire about programs, partnerships, or general questions.",
};

export default function ContactPage() {
    return (
        <main className="flex flex-col items-center">
            <section className="max-w-4xl mx-auto py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">Contact Us</h1>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    We’d love to hear from you. For enquiries about programs, custom proposals, or media, reach out anytime.
                </p>
                <div className="bg-white rounded-2xl shadow-md p-6 text-left">
                    <p className="mb-2"><span className="font-semibold">Email:</span> info@wildernessmalaysia.com</p>
                    <p className="mb-2"><span className="font-semibold">Phone:</span> +60 12-345 6789</p>
                    <p><span className="font-semibold">Hours:</span> Mon–Fri, 9:00–17:00 (MYT)</p>
                </div>

            <section className="max-w-4xl mx-auto pb-20 px-6 w-full">
                <h2 className="text-2xl font-semibold mb-4 text-green-800 text-center">Send us an enquiry</h2>
                <InquiryForm />
            </section>

            </section>
            <CTASection
                title="Ready to plan your program?"
                subtitle="Tell us about your goals and we’ll recommend the best pathway."
                buttonText="Start a Conversation"
                buttonLink="mailto:info@wildernessmalaysia.com"
            />
        </main>
    );
}
