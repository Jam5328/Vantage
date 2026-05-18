import { motion } from "framer-motion";
import { Link } from "wouter";
import heroImg from "@/assets/images/hero.png";
import LeadForm from "@/components/forms/LeadForm";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Vantage Property Exterior" className="w-full h-full object-cover object-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 pt-20 pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight">
              Evidence. <br/>Not aesthetics.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl">
              Added clarity = added confidence. Audit-ready documentation and professional reporting systems for letting agencies and property managers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="inline-flex h-12 items-center justify-center bg-primary text-primary-foreground px-8 text-sm font-medium transition-colors hover:bg-primary/90">
                Book a Call
              </a>
              <Link href="/services" className="inline-flex h-12 items-center justify-center border border-input bg-transparent px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                Request Information
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="space-y-4">
              <h3 className="text-4xl font-serif text-muted-foreground">06</h3>
              <p className="text-sm font-medium uppercase tracking-wider">Years Experience</p>
              <p className="text-sm text-muted-foreground">Deep roots in property management and lettings agency operations.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-4xl font-serif text-muted-foreground">100%</h3>
              <p className="text-sm font-medium uppercase tracking-wider">Audit-Ready</p>
              <p className="text-sm text-muted-foreground">Documentation systems built to withstand DPS and Property Redress Scheme scrutiny.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-4xl font-serif text-muted-foreground">24h</h3>
              <p className="text-sm font-medium uppercase tracking-wider">Turnaround</p>
              <p className="text-sm text-muted-foreground">Rapid delivery of core inventory and inspection reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24">
        <div className="container px-4 max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-serif tracking-tight mb-4">Problems We Solve</h2>
            <p className="text-muted-foreground">Targeted risk reduction for operators managing scale.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 border border-border p-8 bg-card">
              <h3 className="text-xl font-medium tracking-wide uppercase border-b border-border pb-4">For Letting Agencies</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">-</span>
                  <span>Dispute resolution failures due to insufficient photographic evidence.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">-</span>
                  <span>Inconsistent check-in/out reporting across different branches or staff.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">-</span>
                  <span>Time lost to administrative documentation instead of active management.</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6 border border-border p-8 bg-card">
              <h3 className="text-xl font-medium tracking-wide uppercase border-b border-border pb-4">For Landlords & SA Operators</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">-</span>
                  <span>Lack of baseline condition reports leading to unrecoverable damage costs.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">-</span>
                  <span>Poor quality marketing media limiting platform conversion rates.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">-</span>
                  <span>Blind spots in mid-tenancy condition tracking.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container px-4 max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-serif tracking-tight mb-4">Methodology</h2>
            <p className="text-muted-foreground">A rigorous, repeatable process.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Book', 'Capture', 'Document', 'Deliver'].map((step, idx) => (
              <div key={step} className="relative">
                <div className="text-5xl font-serif text-muted/20 absolute -top-6 -left-4 z-0">
                  0{idx + 1}
                </div>
                <div className="relative z-10 space-y-2">
                  <h4 className="font-bold tracking-widest uppercase text-sm">{step}</h4>
                  <div className="h-px w-12 bg-primary my-4" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {idx === 0 && "Schedule via our secure portal. Clear parameters established upfront."}
                    {idx === 1 && "On-site execution. Comprehensive visual and contextual data gathering."}
                    {idx === 2 && "Data structured into standardized, audit-compliant formats."}
                    {idx === 3 && "Encrypted transfer of final reports within agreed SLAs."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container px-4 max-w-3xl">
          <div className="mb-12 text-center space-y-4">
            <h2 className="text-3xl font-serif tracking-tight">Initiate Coverage</h2>
            <p className="text-muted-foreground">Secure your property data systems. Contact us to establish parameters.</p>
          </div>
          <div className="bg-card border border-border p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </div>
  );
}
