import { motion } from "framer-motion";
import { Link } from "wouter";
import heroImg from "@/assets/images/hero.png";
import LeadForm from "@/components/forms/LeadForm";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Home() {
  return (
    <div className="w-full">

      {/* Hero */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="VANTAGE property exterior"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/10" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-24 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl space-y-7"
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/60">
              Property Documentation Systems
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
              Evidence.<br />Not aesthetics.
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-xl">
              Added clarity = added confidence. Audit-ready documentation and professional reporting systems for letting agencies and property managers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center bg-white text-neutral-900 px-8 text-sm font-medium tracking-wide transition-colors hover:bg-white/90"
                data-testid="link-book-call"
              >
                Book a Call
              </a>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center border border-white/60 text-white px-8 text-sm font-medium tracking-wide transition-colors hover:bg-white/10"
                data-testid="link-services"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x divide-neutral-200">
            {[
              { stat: "6", unit: "Years", label: "Direct property management and lettings agency experience" },
              { stat: "100%", unit: "Audit-ready", label: "Documentation built to withstand DPS and Property Redress Scheme scrutiny" },
              { stat: "24h", unit: "Turnaround", label: "Rapid delivery of inventory and inspection reporting" },
            ].map(({ stat, unit, label }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="md:px-12 first:pl-0 last:pr-0 space-y-2"
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-serif text-neutral-200">{stat}</span>
                  <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">{unit}</span>
                </div>
                <p className="text-sm text-neutral-500 font-light leading-relaxed">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-neutral-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400 mb-4">Why VANTAGE</p>
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Problems We Solve</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-xs font-medium uppercase tracking-widest text-neutral-400 border-b border-neutral-200 pb-4">
                For Letting Agencies
              </h3>
              <ul className="space-y-5">
                {[
                  "Inconsistent inventory reporting across properties and branches.",
                  "Disputes failing due to insufficient photographic or documented evidence.",
                  "Inefficient check-in and check-out workflows consuming staff time.",
                  "Fragmented documentation systems with no standardisation.",
                  "Lack of uniformity across contractor-produced reports.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-sm text-neutral-600 font-light leading-relaxed">
                    <span className="text-neutral-300 mt-0.5 shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-8"
            >
              <h3 className="text-xs font-medium uppercase tracking-widest text-neutral-400 border-b border-neutral-200 pb-4">
                For Landlords & SA Operators
              </h3>
              <ul className="space-y-5">
                {[
                  "Damage disputes with no baseline condition evidence to refer to.",
                  "Unclear property condition tracking across mid-tenancy periods.",
                  "Poor quality listing visuals limiting platform conversion rates.",
                  "Inefficient and reactive reporting processes.",
                  "Reactive maintenance responses due to lack of documented evidence.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-sm text-neutral-600 font-light leading-relaxed">
                    <span className="text-neutral-300 mt-0.5 shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400 mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Core Services</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-neutral-200">
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
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-10 space-y-4 group hover:bg-neutral-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">{tag}</span>
                  <span className="text-xs text-neutral-300 font-light">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-serif text-neutral-900">{title}</h3>
                <p className="text-sm text-neutral-500 font-light leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center border border-neutral-300 text-neutral-700 px-8 text-sm font-medium tracking-wide transition-colors hover:border-neutral-900 hover:text-neutral-900"
            >
              View Full Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-neutral-50 py-24 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400 mb-4">Process</p>
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">How It Works</h2>
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
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <span className="text-6xl font-serif text-neutral-200 block">0{i + 1}</span>
                <div className="h-px w-10 bg-neutral-400" />
                <h4 className="text-xs font-medium uppercase tracking-widest text-neutral-900">{step}</h4>
                <p className="text-sm text-neutral-500 font-light leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">Credibility</p>
              <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Built on operational experience</h2>
              <p className="text-sm text-neutral-500 font-light leading-relaxed max-w-md">
                VANTAGE is not a photography service with a new name. It is a documentation system built by someone who has worked inside property management and understands the consequences of poor evidence.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {[
                "6 years direct property management experience",
                "Extensive lettings agency operational exposure",
                "Inventories, check-ins, check-outs, and dispute resolution experience",
                "Deep familiarity with DPS and Property Redress Scheme standards",
                "Maintenance coordination and landlord-facing communication",
              ].map((point, i) => (
                <div key={i} className="flex gap-4 items-start text-sm text-neutral-600 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-neutral-50 py-24 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">Get in Touch</p>
              <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Make an Enquiry</h2>
              <p className="text-sm text-neutral-500 font-light leading-relaxed max-w-sm">
                Tell us about your portfolio and requirements. We will respond within one business day with a proposal tailored to your operation.
              </p>
              <div className="pt-4 space-y-3 text-sm text-neutral-500 font-light">
                <p>Serving: Bristol & BS36 area</p>
                <p>Turnaround: 24–48 hours</p>
                <p>Agency packages available</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
