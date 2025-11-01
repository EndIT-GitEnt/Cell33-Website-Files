import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Wilderness Malaysia",
  description:
    "Guides, checklists, and recommended reading to help you prepare for outdoor programs in Malaysia.",
};

export default function ResourcesPage() {
  const resources = [
    {
      title: "Leave No Trace (7 Principles)",
      href: "https://lnt.org/why/7-principles/",
    },
    {
      title: "Malaysia Meteorological Department — Weather",
      href: "https://www.met.gov.my/",
    },
    {
      title: "Packing List: Tropical Expeditions (email us to receive)",
      href: "mailto:info@wildernessmalaysia.com?subject=Packing%20List%20Request",
    },
    {
      title: "Risk Management Overview (email us to receive)",
      href: "mailto:info@wildernessmalaysia.com?subject=Risk%20Management%20Overview",
    },
  ];

  return (
    <main className="flex flex-col items-center">
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-green-800 text-center">Resources</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resources.map((r) => {
            const external = r.href.startsWith("http");
            return (
              <li key={r.title}>
                <a
                  href={r.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="block bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
                >
                  <span className="text-green-800 font-semibold">{r.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
