import interiorImg from "@/assets/images/interior.png";

export default function Services() {
  const services = [
    {
      title: "Residential Inventories",
      desc: "Comprehensive, legally robust condition reporting establishing the baseline state of a property.",
      useCases: ["New tenancies", "Portfolio acquisition handovers"],
      benefits: ["DPS compliant format", "High-res photographic evidence", "Meter reading verification"]
    },
    {
      title: "Check-In / Check-Out Reports",
      desc: "Detailed comparative analysis against baseline inventories to definitively establish liability.",
      useCases: ["Tenancy transitions", "Dispute resolution framing"],
      benefits: ["Clear delineation of fair wear and tear", "Immediate liability highlighting", "Rapid turnaround"]
    },
    {
      title: "Mid-Term Inspections",
      desc: "Periodic operational checks to monitor compliance, condition, and maintenance requirements.",
      useCases: ["Ongoing tenancy management", "Preventative maintenance planning"],
      benefits: ["Early issue detection", "Tenant compliance verification", "Asset preservation"]
    },
    {
      title: "360° Property Tours",
      desc: "Immersive spatial documentation capturing every angle of an environment simultaneously.",
      useCases: ["Remote marketing", "High-value condition evidence"],
      benefits: ["Undeniable spatial context", "Reduced physical viewing requirements", "Premium marketing asset"]
    }
  ];

  return (
    <div className="w-full">
      <section className="py-24 bg-card border-b border-border">
        <div className="container px-4 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Capabilities</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Rigorous documentation systems designed to protect assets and eliminate ambiguity.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4 max-w-5xl">
          <div className="grid gap-16">
            {services.map((srv, i) => (
              <div key={i} className="grid md:grid-cols-12 gap-8 items-start border-b border-border pb-16 last:border-0 last:pb-0">
                <div className="md:col-span-5 space-y-4">
                  <h2 className="text-2xl font-serif tracking-tight">{srv.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{srv.desc}</p>
                </div>
                
                <div className="md:col-span-7 grid sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-border pb-2">Use Cases</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {srv.useCases.map((uc, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-primary/50">›</span> {uc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-border pb-2">Benefits</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {srv.benefits.map((b, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-primary/50">›</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[60vh] flex items-center justify-center border-t border-border overflow-hidden">
        <img src={interiorImg} alt="Vantage Interior Documentation" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" />
        <div className="absolute inset-0 bg-background/50 mix-blend-multiply" />
        <div className="relative z-10 container px-4 text-center">
          <h2 className="text-3xl font-serif mb-6">Marketing Media Support</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            Beyond compliance documentation, we provide precision-engineered visual assets for high-end property marketing.
          </p>
          <a href="/#contact" className="inline-flex h-10 items-center justify-center bg-primary text-primary-foreground px-8 text-sm font-medium transition-colors hover:bg-primary/90">
            Enquire
          </a>
        </div>
      </section>
    </div>
  );
}
