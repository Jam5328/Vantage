import { motion } from "framer-motion";
import interiorImg from "@/assets/images/interior.png";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const services = [
  {
    title: "Residential Inventories",
    tag: "Primary Service",
    desc: "Comprehensive, legally robust condition reporting establishing the baseline state of a property at the commencement of a tenancy. Each report is structured to serve as admissible evidence in dispute resolution proceedings.",
    useCases: ["New tenancy commencements", "Portfolio acquisition handovers", "HMO and multi-unit properties"],
    benefits: ["DPS-compliant format and structure", "High-resolution photographic evidence", "Meter reading verification", "Room-by-room item logging"],
  },
  {
    title: "360° Property Tours",
    tag: "Primary Service",
    desc: "Immersive spatial documentation capturing every angle of an environment simultaneously. Used for remote marketing, high-value condition evidence, and permanent spatial records of a property's condition.",
    useCases: ["Remote letting and marketing", "High-value condition evidence", "Pre-refurbishment baseline capture"],
    benefits: ["Undeniable spatial context", "Reduced physical viewing requirements", "Premium marketing asset", "Permanent spatial record"],
  },
  {
    title: "Check-In / Check-Out Reports",
    tag: "Secondary Service",
    desc: "Detailed comparative analysis against baseline inventories to definitively establish liability at the point of tenancy transition. Designed to withstand adjudicator scrutiny.",
    useCases: ["Tenancy transitions", "Dispute resolution proceedings", "Deposit deduction justification"],
    benefits: ["Clear delineation of fair wear and tear", "Immediate liability highlighting", "Rapid turnaround on request", "Structured for adjudication use"],
  },
  {
    title: "Mid-Term Inspections",
    tag: "Secondary Service",
    desc: "Periodic operational checks conducted during active tenancies to monitor condition, compliance, and maintenance requirements. Proactive rather than reactive.",
    useCases: ["Ongoing tenancy management", "Preventative maintenance planning", "Compliance verification"],
    benefits: ["Early issue detection before escalation", "Tenant compliance verification", "Asset condition preservation", "Structured maintenance reporting"],
  },
  {
    title: "Documentation Systems",
    tag: "Secondary Service",
    desc: "Bespoke documentation frameworks for letting agencies and property managers requiring consistency across their portfolios. Standardised reporting templates and workflows.",
    useCases: ["Multi-branch agency standardisation", "Portfolio management", "Contractor briefing materials"],
    benefits: ["Consistent report standards across portfolio", "Reduced contractor variation", "Clear operational workflows"],
  },
];

export default function Services() {
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
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">Our Capabilities</p>
            <h1 className="text-4xl md:text-6xl font-serif text-neutral-900">Services</h1>
            <p className="text-lg text-neutral-500 font-light max-w-2xl leading-relaxed">
              Rigorous documentation systems designed to protect assets, reduce risk, and eliminate ambiguity across the full tenancy lifecycle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service list */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-0">
            {services.map((srv, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-12 gap-8 py-16 border-b border-neutral-200 last:border-0 items-start"
              >
                <div className="md:col-span-1">
                  <span className="text-2xl font-serif text-neutral-200">0{i + 1}</span>
                </div>
                <div className="md:col-span-4 space-y-4">
                  <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">{srv.tag}</span>
                  <h2 className="text-2xl font-serif text-neutral-900 leading-snug">{srv.title}</h2>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">{srv.desc}</p>
                </div>
                <div className="md:col-span-7 grid sm:grid-cols-2 gap-8 md:pl-8">
                  <div className="space-y-4">
                    <h4 className="text-xs font-medium uppercase tracking-widest text-neutral-400 border-b border-neutral-200 pb-3">
                      Use Cases
                    </h4>
                    <ul className="space-y-3">
                      {srv.useCases.map((uc, j) => (
                        <li key={j} className="flex gap-3 text-sm text-neutral-600 font-light">
                          <span className="text-neutral-300 shrink-0">—</span>
                          <span>{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-medium uppercase tracking-widest text-neutral-400 border-b border-neutral-200 pb-3">
                      Benefits
                    </h4>
                    <ul className="space-y-3">
                      {srv.benefits.map((b, j) => (
                        <li key={j} className="flex gap-3 text-sm text-neutral-600 font-light">
                          <span className="text-neutral-300 shrink-0">—</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing media CTA — full-width image */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <img
          src={interiorImg}
          alt="VANTAGE interior documentation"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/60">Additional</p>
          <h2 className="text-3xl md:text-4xl font-serif text-white">Marketing Media Support</h2>
          <p className="max-w-xl mx-auto text-base text-white/70 font-light leading-relaxed">
            Beyond compliance documentation, we provide precision-engineered visual assets for high-end property marketing.
          </p>
          <a
            href="/#contact"
            className="inline-flex h-11 items-center justify-center bg-white text-neutral-900 px-8 text-sm font-medium tracking-wide transition-colors hover:bg-white/90"
          >
            Enquire
          </a>
        </div>
      </section>
    </div>
  );
}
