import { motion } from "framer-motion";
import { Link } from "wouter";
import bristolAerial from "@/assets/images/bristol-aerial.jpg";
import LeadForm from "@/components/forms/LeadForm";

export default function Home() {
  return (
    <div className="w-full">

      {/* Hero — Bristol aerial photography */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={bristolAerial}
            alt="Bristol residential properties"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D2A]/90 via-[#16163F]/60 to-[#16163F]/20" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-24 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl space-y-7"
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
              Bristol Property Documentation
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
              Evidence.<br />Not aesthetics.
            </h1>
            <p className="text-lg md:text-xl text-white/65 font-light leading-relaxed max-w-xl">
              Added clarity = added confidence. Audit-ready documentation and professional reporting systems for letting agencies and property managers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gradient-bg text-white px-8 text-sm font-medium tracking-wide transition-opacity hover:opacity-90"
                data-testid="link-book-call"
              >
                Book a Call
              </a>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center border border-white/30 text-white px-8 text-sm font-medium tracking-wide transition-colors hover:border-white/70 hover:bg-white/5"
                data-testid="link-services"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-white/10" style={{ backgroundColor: "#0D0D2A" }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x divide-white/10">
            {[
              { stat: "6", unit: "Years", label: "Direct property management and lettings agency experience" },
              { stat: "100%", unit: "Audit-ready", label: "Documentation built to withstand DPS and Property Redress Scheme scrutiny" },
              { stat: "24h", unit: "Turnaround", label: "Rapid delivery of inventory and inspection reporting" },
            ].map(({ stat, unit, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="md:px-12 first:pl-0 last:pr-0 space-y-2"
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-serif gradient-text">{stat}</span>
                  <span className="text-xs font-medium uppercase tracking-widest text-white/40">{unit}</span>
                </div>
                <p className="text-sm text-white/50 font-light leading-relaxed">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24" style={{ backgroundColor: "#16163F" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/40 mb-4">Why VANTAGE</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white">Problems We Solve</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {[
              {
                heading: "For Letting Agencies",
                items: [
                  "Inconsistent inventory reporting across properties and branches.",
                  "Disputes failing due to insufficient photographic or documented evidence.",
                  "Inefficient check-in and check-out workflows consuming staff time.",
                  "Fragmented documentation systems with no standardisation.",
                  "Lack of uniformity across contractor-produced reports.",
                ],
              },
              {
                heading: "For Landlords & SA Operators",
                items: [
                  "Damage disputes with no baseline condition evidence to refer to.",
                  "Unclear property condition tracking across mid-tenancy periods.",
                  "Poor quality listing visuals limiting platform conversion rates.",
                  "Inefficient and reactive reporting processes.",
                  "Reactive maintenance responses due to lack of documented evidence.",
                ],
              },
            ].map(({ heading, items }, col) => (
              <motion.div
                key={col}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: col * 0.1 }}
                className="space-y-8"
              >
                <h3 className="text-xs font-medium uppercase tracking-widest text-white/40 border-b border-white/10 pb-4">
                  {heading}
                </h3>
                <ul className="space-y-5">
                  {items.map((item, i) => (
                    <li key={i} className="flex gap-4 text-sm text-white/65 font-light leading-relaxed">
                      <span className="gradient-text mt-0.5 shrink-0 font-medium">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24" style={{ backgroundColor: "#0D0D2A" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/40 mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white">Core Services</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
            {[
              {
                title: "Residential Inventories",
                tag: "Primary",
                desc: "Comprehensive, legally robust condition reporting establishing the baseline state of a property. DPS-compliant format, high-resolution evidence, meter reading verification.",
              },
              {
                title: "360° Property Tours",
                tag: "Primary",
                desc: "Immersive spatial documentation capturing every angle simultaneously. Undeniable spatial context, reduced physical viewing requirements, and a premium marketing asset.",
              },
              {
                title: "Check-In / Check-Out Reports",
                tag: "Secondary",
                desc: "Detailed comparative analysis against baseline inventories. Clear delineation of fair wear and tear with rapid turnaround for tenancy transitions.",
              },
              {
                title: "Mid-Term Inspections",
                tag: "Secondary",
                desc: "Periodic operational checks to monitor compliance, condition, and maintenance requirements. Early issue detection and asset preservation.",
              },
            ].map(({ title, tag, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                className="p-10 space-y-4 group transition-colors"
                style={{ backgroundColor: "#16163F" }}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium uppercase tracking-widest ${tag === "Primary" ? "gradient-text" : "text-white/35"}`}>
                    {tag}
                  </span>
                  <span className="text-xs text-white/20 font-light">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-serif text-white">{title}</h3>
                <p className="text-sm text-white/55 font-light leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center border border-white/20 text-white/70 px-8 text-sm font-medium tracking-wide transition-colors hover:border-white/50 hover:text-white"
            >
              View Full Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 border-y border-white/10" style={{ backgroundColor: "#16163F" }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/40 mb-4">Process</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white">How It Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { step: "Book", desc: "Schedule via our portal. Parameters and access requirements established upfront." },
              { step: "Capture", desc: "On-site execution. Comprehensive visual and contextual data gathering." },
              { step: "Document", desc: "Data structured into standardised, audit-compliant formats." },
              { step: "Deliver", desc: "Reports transferred within agreed SLAs, ready for immediate use." },
            ].map(({ step, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="space-y-4"
              >
                <span className="text-6xl font-serif text-white/10 block">0{i + 1}</span>
                <div className="h-px w-10 gradient-bg" />
                <h4 className="text-xs font-medium uppercase tracking-widest text-white">{step}</h4>
                <p className="text-sm text-white/50 font-light leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-24" style={{ backgroundColor: "#0D0D2A" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">Credibility</p>
              <h2 className="text-3xl md:text-4xl font-serif text-white">Built on operational experience</h2>
              <p className="text-sm text-white/55 font-light leading-relaxed max-w-md">
                VANTAGE is not a photography service with a new name. It is a documentation system built by someone who has worked inside property management and understands the consequences of poor evidence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              {[
                "6 years direct property management experience",
                "Extensive lettings agency operational exposure",
                "Inventories, check-ins, check-outs, and dispute resolution experience",
                "Deep familiarity with DPS and Property Redress Scheme standards",
                "Maintenance coordination and landlord-facing communication",
              ].map((point, i) => (
                <div key={i} className="flex gap-4 items-start text-sm text-white/60 font-light">
                  <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-2 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-white/10" style={{ backgroundColor: "#16163F" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">Get in Touch</p>
              <h2 className="text-3xl md:text-4xl font-serif text-white">Make an Enquiry</h2>
              <p className="text-sm text-white/55 font-light leading-relaxed max-w-sm">
                Tell us about your portfolio and requirements. We will respond within one business day with a proposal tailored to your operation.
              </p>
              <div className="pt-4 space-y-3 text-sm text-white/45 font-light">
                <p>Serving: Bristol & BS36 area</p>
                <p>Turnaround: 24–48 hours</p>
                <p>Agency packages available</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
