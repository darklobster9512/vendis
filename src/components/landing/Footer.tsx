import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const columns = [
  {
    title: 'Leistungen',
    links: [
      { label: 'Analyse & Spezifikation', href: '/entwicklung#analyse' },
      { label: 'Design & Implementierung', href: '/entwicklung#implementierung' },
      { label: 'Test & Qualitätssicherung', href: '/entwicklung#test' },
      { label: 'Wartung & Betriebs-Support', href: '/entwicklung#betrieb' },
    ],
  },
  {
    title: 'Unternehmen',
    links: [
      { label: 'Technologien', href: '/technologien' },
      { label: 'Prozess', href: '/prozess' },
      { label: 'Team', href: '/team' },
      { label: 'Karriere', href: '/karriere' },
    ],
  },
];

const Footer = () => (
  <footer className="bg-ink text-ink-foreground">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-20 pb-10 sm:pt-28">
      {/* Closing headline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 pb-16 border-b border-ink-foreground/15">
        <h2 className="font-display text-[2.1rem] sm:text-[3rem] lg:text-[3.6rem] font-semibold leading-[1.02]">
          Entwicklungsauftrag
          <br />
          im Verbund?
        </h2>
        <div className="flex flex-col items-start justify-end gap-6">
          <p className="text-ink-foreground/60 leading-relaxed max-w-md">
            Schildern Sie uns Umfang und Zielsystem — wir melden uns innerhalb von 24 Stunden
            an Werktagen mit einer ersten technischen Einschätzung.
          </p>
          <Link
            to="/kontakt"
            className="group inline-flex items-center gap-3 h-12 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Kontakt aufnehmen
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      {/* Link grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
        <div>
          <Link to="/" className="inline-flex items-baseline gap-[1px]" aria-label="Vendis Development Services — Startseite">
            <span className="font-display text-2xl font-semibold tracking-[-0.03em] leading-none text-ink-foreground">
              vendis
            </span>
            <span className="text-primary text-2xl leading-none">.</span>
          </Link>

          <p className="mt-5 text-sm text-ink-foreground/55 leading-relaxed max-w-xs">
            Auftragsentwicklung für verbundene Unternehmen — Analyse, Design, Implementierung,
            Test, Wartung und Betriebs-Support.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-foreground/40">
              {col.title}
            </p>
            <ul className="mt-5 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-ink-foreground/70 hover:text-primary-glow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-foreground/40">
            Kontakt
          </p>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/70">
            <li>
              <a
                href="mailto:kontakt@vendis-development.de"
                className="hover:text-primary-glow transition-colors break-words"
              >
                kontakt@vendis-development.de
              </a>
            </li>
            <li>
              <a href="tel:+4930123456789" className="hover:text-primary-glow transition-colors">
                030 123456789
              </a>
            </li>
            <li className="text-ink-foreground/55 leading-relaxed">
              Neue Schönhauser Str. 2
              <br />
              10178 Berlin
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-ink-foreground/15">
        <p className="font-mono text-[11px] text-ink-foreground/40">
          © {new Date().getFullYear()} Vendis Development Services GmbH
        </p>
        <div className="flex items-center gap-6">
          <Link
            to="/impressum"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-foreground/50 hover:text-ink-foreground transition-colors"
          >
            Impressum
          </Link>
          <Link
            to="/datenschutz"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-foreground/50 hover:text-ink-foreground transition-colors"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
