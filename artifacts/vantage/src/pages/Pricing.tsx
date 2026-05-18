export default function Pricing() {
  return (
    <div className="w-full">
      <section className="py-24 bg-card border-b border-border">
        <div className="container px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Positioning</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Indicative market positioning for VANTAGE services across the Bristol / BS36 operational area.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4 max-w-4xl">
          <div className="border border-border p-8 md:p-12 space-y-8 bg-card">
            
            <div className="space-y-4 border-b border-border pb-8">
              <h2 className="text-2xl font-serif">Pricing Structure</h2>
              <p className="text-muted-foreground">
                Pricing is determined by two primary variables: physical property size and portfolio volume commitments. 
                We do not publish fixed rate cards as requirements scale non-linearly.
              </p>
            </div>

            <div className="space-y-6 border-b border-border pb-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Market Benchmarking</h3>
              <ul className="space-y-4 text-muted-foreground text-sm">
                <li className="flex gap-4 items-start">
                  <span className="text-primary mt-0.5">›</span>
                  <span><strong>Inventories & Inspections:</strong> Competitively positioned against local Bristol providers, optimized for accuracy over speed.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-primary mt-0.5">›</span>
                  <span><strong>360° Tours:</strong> Premium-tier service offering, priced according to spatial complexity and post-processing requirements.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Agency Engagements</h3>
              <p className="text-muted-foreground text-sm">
                Bespoke retained packages are available for letting agencies and high-volume operators requiring continuous coverage. This includes SLA guarantees and priority dispatch.
              </p>
              
              <div className="pt-4">
                <a href="/#contact" className="inline-flex h-10 items-center justify-center border border-input bg-transparent px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                  Request Commercial Proposal
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
