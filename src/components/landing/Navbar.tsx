import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { Menu, X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Anlagenplanung', href: '/software' },
  { label: 'Methodik', href: '/methodik' },
  { label: 'Team', href: '/team' },
  { label: 'Karriere', href: '/karriere' },
  { label: 'Kontakt', href: '/kontakt' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Contact top bar */}
      <div className="relative z-[60] hidden md:block bg-muted/60 border-b border-border text-muted-foreground">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a href="tel:+4921186943272" className="hover:text-primary transition-colors flex items-center gap-1.5">
              <Phone size={12}/> +49 211-86943272
            </a>
            <a href="mailto:kontakt@for-tel.com" className="hover:text-primary transition-colors flex items-center gap-1.5">
              <Mail size={12}/> kontakt@for-tel.com
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><MapPin size={12}/> Filderstadt · DE</span>
            <span className="hidden lg:inline">Mo – Fr · 08:00 – 18:00</span>
          </div>
        </div>
      </div>


      {/* Main header bar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border'
            : 'bg-background border-b border-border/60'
        }`}
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-20' : 'h-24'}`}>
          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center">
            <img
              src={logo}
              alt="for.tel Solutions"
              loading="eager"
              fetchPriority="high"
              className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-6' : 'h-7'}`}
            />
          </Link>


          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative text-sm font-medium transition-colors group ${
                    active ? 'text-primary' : 'text-foreground/70 hover:text-primary'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-2 left-0 right-0 h-0.5 bg-primary transition-transform origin-left ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </Link>
              );
            })}
          </nav>


          {/* Right side: CTA */}
          <div className="flex items-center gap-3">
            <Link
              to="/kontakt"
              className="hidden md:inline-flex items-center gap-2 px-6 h-11 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all whitespace-nowrap group"
            >
              Projekt anfragen
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>

            {/* Mobile burger */}
            <button
              className="lg:hidden p-2.5 rounded-full border border-border bg-background text-foreground"
              onClick={() => setMobileOpen(true)}
              aria-label="Menü öffnen"
            >
              <Menu size={22} />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile sidebar */}
      <div
        className={`lg:hidden fixed inset-0 z-[80] transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute inset-y-0 right-0 w-[88%] max-w-[360px] bg-background shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border">
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <img src={logo} alt="for.tel Solutions" className="h-5" />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Menü schließen"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col px-6 pt-6 gap-1 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-3.5 text-lg font-display font-semibold border-b border-border/60 flex items-center justify-between group transition-colors ${
                  location.pathname === link.href ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </nav>

          <div className="px-6 py-6 border-t border-border bg-muted/40 space-y-3">
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="tel:+4921186943272" className="flex items-center gap-2.5 hover:text-foreground transition-colors"><Phone size={14} className="text-primary"/> +49 211-86943272</a>
              <a href="mailto:kontakt@for-tel.com" className="flex items-center gap-2.5 hover:text-foreground transition-colors"><Mail size={14} className="text-primary"/> kontakt@for-tel.com</a>
              <div className="flex items-center gap-2.5"><MapPin size={14} className="text-primary"/> Filderstadt, DE</div>
            </div>
            <Link
              to="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold"
            >
              Projekt anfragen
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
