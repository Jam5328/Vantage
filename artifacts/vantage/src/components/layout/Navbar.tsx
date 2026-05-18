import { useState } from "react";
import { Link } from "wouter";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10" style={{ backgroundColor: "#0D0D2A" }}>
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/images/vantage-icon.png"
            alt="VANTAGE icon"
            className="w-7 h-7 object-contain"
          />
          <Link href="/" className="font-serif text-lg tracking-[0.2em] uppercase text-white">
            VANTAGE
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/55 font-light tracking-wide">
          <Link href="/services" className="hover:text-white transition-colors duration-200">Services</Link>
          <Link href="/about" className="hover:text-white transition-colors duration-200">About</Link>
          <Link href="/pricing" className="hover:text-white transition-colors duration-200">Pricing</Link>
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="/#contact"
            className="text-sm font-medium tracking-wide px-5 py-2.5 gradient-bg text-white transition-opacity hover:opacity-90"
            data-testid="link-enquire"
          >
            Enquire
          </a>
        </div>

        <button
          className="md:hidden text-white/60 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          data-testid="button-mobile-menu"
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="0" y1="1" x2="22" y2="1" />
            <line x1="0" y1="8" x2="22" y2="8" />
            <line x1="0" y1="15" x2="22" y2="15" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 px-6 py-6 space-y-4" style={{ backgroundColor: "#0D0D2A" }}>
          <Link href="/services" className="block text-sm text-white/60 hover:text-white" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/about" className="block text-sm text-white/60 hover:text-white" onClick={() => setOpen(false)}>About</Link>
          <Link href="/pricing" className="block text-sm text-white/60 hover:text-white" onClick={() => setOpen(false)}>Pricing</Link>
          <a href="/#contact" className="block text-sm text-white/60 hover:text-white" onClick={() => setOpen(false)}>Enquire</a>
        </div>
      )}
    </header>
  );
}
