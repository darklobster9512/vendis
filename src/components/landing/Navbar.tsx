import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Entwicklung', href: '/entwicklung' },
  { label: 'Technologien', href: '/technologien' },
  { label: 'Prozess', href: '/prozess' },
  { label: 'Team', href: '/team' },
  { label: 'Karriere', href: '/karriere' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-5 sm:px-8 flex items-center gap-8 transition-all duration-300 ${
            scrolled ? 'h-16' : 'h-20 sm:h-24'
          }`}
        >
          <Link to="/" className="shrink-0 flex items-baseline gap-1" aria-label="Vendis Development Services — Startseite">
            <span
              className={`font-display font-semibold tracking-[-0.03em] leading-none transition-all duration-300 ${
                scrolled ? 'text-xl' : 'text-[1.6rem]'
              }`}
            >
              vendis
            </span>
            <span className="text-primary text-2xl leading-none">.</span>
          </Link>


          <nav className="hidden lg:flex items-center gap-9 mx-auto">
            {navLinks.map((link) => {
              const active = location.pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`group relative font-mono text-[12px] uppercase tracking-[0.16em] transition-colors ${
                    active ? 'text-primary' : 'text-foreground/60 hover:text-foreground'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 right-0 h-px bg-primary origin-left transition-transform duration-300 ${
                      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto lg:ml-0 flex items-center gap-3">
            <Link
              to="/kontakt"
              className="hidden md:inline-flex items-center gap-2 h-10 px-5 rounded-full bg-primary text-primary-foreground text-[13px] font-semibold hover:bg-primary/90 transition-colors group"
            >
              Projekt anfragen
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <button
              className="lg:hidden p-2 -mr-2 text-foreground"
              onClick={() => setMobileOpen(true)}
              aria-label="Menü öffnen"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[80] bg-ink text-ink-foreground transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between h-20 px-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-foreground/50">
            Menü
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 -mr-2 text-ink-foreground"
            aria-label="Menü schließen"
          >
            <X size={26} />
          </button>
        </div>

        <nav className="px-5 pt-6 flex flex-col">
          {navLinks.concat({ label: 'Kontakt', href: '/kontakt' }).map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="group flex items-baseline gap-4 border-b border-ink-foreground/15 py-5"
            >
              <span className="font-mono text-[11px] text-primary-glow">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-display text-3xl font-semibold tracking-tight">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="px-5 pt-10 space-y-1 text-sm text-ink-foreground/60">
          <a href="tel:+4930123456789" className="block hover:text-ink-foreground transition-colors">
            030 123456789
          </a>
          <a
            href="mailto:kontakt@vendis-development.de"
            className="block hover:text-ink-foreground transition-colors"
          >
            kontakt@vendis-development.de
          </a>
          <p>Neue Schönhauser Str. 2 · 10178 Berlin</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
