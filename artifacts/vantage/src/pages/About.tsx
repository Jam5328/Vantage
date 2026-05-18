export default function About() {
  return (
    <div className="w-full">
      <section className="py-24 bg-card border-b border-border">
        <div className="container px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Operator Profile</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            VANTAGE is founded on direct operational experience within the UK lettings and property management sector.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4 max-w-4xl">
          <div className="space-y-16">
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-border pb-2">Background</h3>
              </div>
              <div className="md:col-span-2">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>6 years direct property management experience.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>Extensive lettings agency exposure and operational insight.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>Deep familiarity with DPS and Property Redress Scheme standards.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>Thousands of inspections and check-in/out reports completed.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-border pb-2">Strengths</h3>
              </div>
              <div className="md:col-span-2">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>Forensic attention to detail.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>Risk-aware approach to documentation.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>Unemotional, factual reporting.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>Understanding of the end-to-end lifecycle of a tenancy.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-border pb-2">Working Style</h3>
              </div>
              <div className="md:col-span-2">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>Autonomous execution with minimal oversight required.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>Systems-driven methodology.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>Clear, concise communication protocols.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
