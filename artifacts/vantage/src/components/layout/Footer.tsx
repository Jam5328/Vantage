import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h2 className="font-serif text-base tracking-[0.2em] uppercase text-neutral-900">VANTAGE</h2>
          <p className="text-sm text-neutral-500 font-light leading-relaxed max-w-xs">
            Property documentation and visual systems for letting agencies and property managers.
          </p>
          <p className="text-xs text-neutral-400 font-light tracking-wide">Bristol, United Kingdom</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-medium uppercase tracking-widest text-neutral-400">Services</h3>
          <ul className="space-y-3 text-sm text-neutral-500 font-light">
            <li><Link href="/services" className="hover:text-neutral-900 transition-colors">Residential Inventories</Link></li>
            <li><Link href="/services" className="hover:text-neutral-900 transition-colors">360° Property Tours</Link></li>
            <li><Link href="/services" className="hover:text-neutral-900 transition-colors">Inspections & Reports</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-medium uppercase tracking-widest text-neutral-400">Company</h3>
          <ul className="space-y-3 text-sm text-neutral-500 font-light">
            <li><Link href="/about" className="hover:text-neutral-900 transition-colors">About</Link></li>
            <li><Link href="/pricing" className="hover:text-neutral-900 transition-colors">Pricing</Link></li>
            <li><a href="/#contact" className="hover:text-neutral-900 transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-100 py-6 text-center">
        <p className="text-xs text-neutral-400 font-light tracking-wide">
          &copy; {new Date().getFullYear()} VANTAGE Property Systems. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
