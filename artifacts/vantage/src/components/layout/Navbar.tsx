import { useState } from "react";
import { Link } from "wouter";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg tracking-[0.2em] uppercase text-neutral-900">
          VANTAGE
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-500 font-light tracking-wide">
          <Link href="/services" className="hover:text-neutral-900 transition-colors duration-200">Services</Link>
          <Link href="/about" className="hover:text-neutral-900 transition-colors duration-200">About</Link>
          <Link href="/pricing" className="hover:text-neutral-900 transition-colors duration-200">Pricing</Link>
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="/#contact"
            className="text-sm tracking-wide text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
          >
            Enquire
          </a>
        </div>

        <button
          className="md:hidden text-neutral-600 hover:text-neutral-900"
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
        <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-6 space-y-4">
          <Link href="/services" className="block text-sm text-neutral-600 hover:text-neutral-900" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/about" className="block text-sm text-neutral-600 hover:text-neutral-900" onClick={() => setOpen(false)}>About</Link>
          <Link href="/pricing" className="block text-sm text-neutral-600 hover:text-neutral-900" onClick={() => setOpen(false)}>Pricing</Link>
          <a href="/#contact" className="block text-sm text-neutral-600 hover:text-neutral-900" onClick={() => setOpen(false)}>Enquire</a>
        </div>
      )}
    </header>
  );
}
