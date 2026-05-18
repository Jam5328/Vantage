export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row justify-between gap-8">
        <div className="space-y-4 max-w-sm">
          <h2 className="font-serif text-xl font-bold tracking-widest uppercase">VANTAGE</h2>
          <p className="text-sm text-muted-foreground">
            Premium property documentation and visual systems. Added clarity = added confidence.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div className="space-y-4">
            <h3 className="font-bold tracking-wide uppercase text-xs">Operations</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Residential Inventories</li>
              <li>360° Property Tours</li>
              <li>Inspections</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold tracking-wide uppercase text-xs">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>About</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} VANTAGE Property Systems. All rights reserved.</p>
      </div>
    </footer>
  );
}
