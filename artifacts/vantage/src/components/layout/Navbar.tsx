import { Link } from "wouter";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-serif text-xl font-bold tracking-widest uppercase">
            VANTAGE
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/#contact" className="text-sm font-medium hover:text-foreground transition-colors hidden sm:block">
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
