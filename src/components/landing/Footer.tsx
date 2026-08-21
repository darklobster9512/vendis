import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="relative border-t-2 border-primary/20 bg-gradient-blue-subtle">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
          {/* Logo + Tagline */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="Vendis Development Services" className="h-5 hover:scale-105 transition-transform duration-200" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Auftragsentwicklung für verbundene Unternehmen — Analyse, Design,
              Implementierung, Test, Wartung und Betriebs-Support von Softwarelösungen.
            </p>
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Unternehmen</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Prozess', href: '/prozess' },
                { label: 'Team', href: '/team' },
                { label: 'Karriere', href: '/karriere' },
                { label: 'Kontakt', href: '/kontakt' },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Leistungen</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Analyse & Spezifikation', href: '/entwicklung#analyse' },
                { label: 'Architektur & Implementierung', href: '/entwicklung#implementierung' },
                { label: 'Test & Qualitätssicherung', href: '/entwicklung#test' },
                { label: 'Wartung & Betriebs-Support', href: '/entwicklung#betrieb' },
                { label: 'Technologien', href: '/technologien' },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Kontakt */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Kontakt</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:kontakt@vendis-development.de" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 text-primary/70 shrink-0" />
                  kontakt@vendis-development.de
                </a>
              </li>
              <li>
                <a href="tel:+4930123456789" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary/70 shrink-0" />
                  030 123456789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary/70 shrink-0 mt-0.5" />
                <span>Neue Schönhauser Str. 2<br />10178 Berlin</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="border-t border-border/50 bg-muted/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vendis Development Services GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/impressum" className="text-xs text-muted-foreground hover:text-primary transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-xs text-muted-foreground hover:text-primary transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
