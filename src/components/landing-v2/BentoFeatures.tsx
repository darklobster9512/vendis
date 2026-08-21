import { Link } from 'react-router-dom';
import { Lightbulb, ClipboardCheck, FileSpreadsheet, HardHat, UserSearch, Cable, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import codeImage from '@/assets/landing/feature-code.jpg';

const items = [
  { icon: Lightbulb, title: 'Technische Beratung', body: 'Machbarkeitsstudien, Lastenhefte, technische Konzepte — als unabhängiger Sparringspartner für Bauherren und Betreiber.' },
  { icon: ClipboardCheck, title: 'Projektmanagement', body: 'Termine, Kosten, Qualität — wir steuern komplexe Technik­projekte planbar und transparent.' },
  { icon: FileSpreadsheet, title: 'Projekt­controlling', body: 'Wirtschaftliche Steuerung, Soll-Ist-Abgleich, Reporting an Geschäftsführung und Lenkungskreis.' },
  { icon: HardHat, title: 'Ausschreibung & Vergabe', body: 'Leistungs­verzeichnisse, Vergabeverfahren, Bauüberwachung — sauber dokumentiert nach HOAI-Logik.' },
  { icon: UserSearch, title: 'Personalberatung', body: 'Fach- und Führungskräfte für Technik, Projekt­management und Vertrieb — passgenau und diskret.' },
  { icon: Cable, title: 'Elektro- & Fernmelde­technik', body: 'Planung und Vertrieb elektro­technischer und fernmelde­technischer Anlagen aller Art.' },
];

const BentoFeatures = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4 font-semibold">Leistungen</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight max-w-3xl">
              Sechs Disziplinen, ein verantwortliches Team.
            </h2>
          </div>
          <Link to="/leistungen" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary self-start lg:self-end hover:gap-3 transition-all">
            Alle Leistungen <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`group relative p-8 rounded-lg border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all flex flex-col gap-5 min-h-[240px] scroll-hidden delay-${(i % 6) + 1} ${isVisible ? 'scroll-visible' : ''}`}
            >
              <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center">
                <it.icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold leading-tight">{it.title}</h3>
                <p className="mt-2.5 text-[15px] text-muted-foreground leading-relaxed">{it.body}</p>
              </div>
            </div>
          ))}

          {/* Image accent card */}
          <div className={`relative overflow-hidden rounded-lg border border-border min-h-[240px] sm:col-span-2 lg:col-span-2 group scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
            <img
              src={codeImage}
              alt="for.tel Solutions Standort Filderstadt"
              width={1024}
              height={1024}
              loading="lazy"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-foreground/90 via-foreground/55 to-foreground/10" />
            <div className="relative h-full flex flex-col justify-end p-8 sm:p-10 text-background">
              <p className="text-[11px] uppercase tracking-[0.25em] text-primary-glow mb-3 font-semibold">Standort Deutschland</p>
              <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight max-w-md">
                Unabhängiges Beratungshaus in Filderstadt.
              </h3>
              <p className="mt-3 text-sm text-background/80 max-w-md leading-relaxed">
                Festes Team, klare Verantwortlichkeiten, dokumentierte Prozesse. Technik-Projekte,
                die auch in fünf Jahren noch nachvollziehbar sind.
              </p>
            </div>
          </div>

          {/* CTA card */}
          <div className={`p-8 rounded-lg border border-primary bg-primary text-primary-foreground flex flex-col justify-between min-h-[240px] scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
            <p className="text-[11px] uppercase tracking-[0.25em] text-primary-foreground/70 font-semibold">Nächster Schritt</p>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">Unverbindliches Erstgespräch.</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">30 Minuten, ohne Verpflichtungen.</p>
              <Link to="/kontakt" className="mt-5 inline-flex items-center gap-2 font-semibold text-sm group">
                Termin anfragen <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
