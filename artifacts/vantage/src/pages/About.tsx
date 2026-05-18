import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const sections = [
  {
    label: "Background",
    items: [
      "6 years direct property management experience.",
      "Extensive lettings agency operational exposure.",
      "Deep familiarity with DPS and Property Redress Scheme standards and requirements.",
      "Thousands of inventories, inspections, and check-in/out reports completed.",
      "Maintenance coordination and contractor management.",
      "Landlord-facing communication and dispute resolution.",
    ],
  },
  {
    label: "Strengths",
    items: [
      "Forensic attention to detail in documentation and condition assessment.",
      "Risk-aware approach — built around protecting asset and operator.",
      "Unemotional, factual reporting with no subjective language.",
      "Clear understanding of the end-to-end lifecycle of a tenancy.",
      "Experience in both agency and independent landlord operational contexts.",
    ],
  },
  {
    label: "Working Style",
    items: [
      "Autonomous execution with minimal oversight required.",
      "Systems-driven methodology — process before personality.",
      "Clear, concise communication at all stages.",
      "Punctual, prepared, and professional on-site presence.",
    ],
  },
  {
    label: "Motivation",
    items: [
      "Observed too many disputes lost due to poor or absent documentation.",
      "Recognised a gap between the documentation standard agencies need and what the market provides.",
      "Built VANTAGE to bring operational rigour — not creative flair — to property documentation.",
    ],
  },
];

export default function About() {
  return (
    <div className="w-full">

      {/* Header */}
      <section className="bg-white border-b border-neutral-200 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="space-y-5"
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">The Operator</p>
            <h1 className="text-4xl md:text-6xl font-serif text-neutral-900">Operator Profile</h1>
            <p className="text-lg text-neutral-500 font-light max-w-2xl leading-relaxed">
              VANTAGE is founded on direct operational experience within the UK lettings and property management sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile sections */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-0">
            {sections.map(({ label, items }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-12 gap-8 py-16 border-b border-neutral-200 last:border-0"
              >
                <div className="md:col-span-3">
                  <h3 className="text-xs font-medium uppercase tracking-widest text-neutral-400 pt-1">
                    {label}
                  </h3>
                </div>
                <div className="md:col-span-9">
                  <ul className="space-y-4">
                    {items.map((item, j) => (
                      <li key={j} className="flex gap-4 text-sm text-neutral-600 font-light leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50 border-t border-neutral-200 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif text-neutral-900">Ready to standardise your documentation?</h2>
          <p className="text-sm text-neutral-500 font-light">Contact us to discuss your portfolio requirements.</p>
          <a
            href="/#contact"
            className="inline-flex h-11 items-center justify-center bg-neutral-900 text-white px-8 text-sm font-medium tracking-wide transition-colors hover:bg-neutral-800"
          >
            Make an Enquiry
          </a>
        </div>
      </section>
    </div>
  );
}
