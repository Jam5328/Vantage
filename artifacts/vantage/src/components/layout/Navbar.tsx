import { useState } from "react";
import { Link } from "wouter";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/images/vantage-icon.png"
            alt="VANTAGE icon"
            className="w-7 h-7 object-contain"
          />
          <Link href="/" className="font-serif text-lg tracking-[0.2em] uppercase text-foreground">
            VANTAGE
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/50 font-light tracking-wide">
          <Link href="/services" className="hover:text-foreground transition-colors duration-200">Services</Link>
          <Link href="/about" className="hover:text-foreground transition-colors duration-200">About</Link>
          <Link href="/pricing" className="hover:text-foreground transition-colors duration-200">Pricing</Link>
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
          className="md:hidden text-foreground/60 hover:text-foreground"
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
        <div className="md:hidden border-t border-border px-6 py-6 space-y-4 bg-background">
          <Link href="/services" className="block text-sm text-foreground/60 hover:text-foreground" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/about" className="block text-sm text-foreground/60 hover:text-foreground" onClick={() => setOpen(false)}>About</Link>
          <Link href="/pricing" className="block text-sm text-foreground/60 hover:text-foreground" onClick={() => setOpen(false)}>Pricing</Link>
          <a href="/#contact" className="block text-sm text-foreground/60 hover:text-foreground" onClick={() => setOpen(false)}>Enquire</a>
        </div>
      )}
    </header>
  );
}
