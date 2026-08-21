import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import aboutImage from '@/assets/landing/about-building.jpg';

const points = [
  'Contract-Developer ausschließlich für verbundene Unternehmen',
  'Vollständiger Lebenszyklus: Analyse, Design, Implementierung, Test',
  'Wartung und Betriebs-Support für bestehende Softwarelösungen',
  'Keine eigene Vermarktung oder Verwertung der Arbeitsergebnisse',
];

const AboutSnapshot = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4 font-semibold">Über uns</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
            Entwicklungsteam im Unternehmensverbund.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Die Vendis Development Services GmbH erbringt Softwareentwicklungs- und damit
            zusammenhängende technische Dienstleistungen als Auftragsentwickler für verbundene
            Unternehmen. Genehmigungspflichtige Tätigkeiten sind ausgenommen.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link to="/team" className="group inline-flex items-center justify-center gap-2 px-6 h-12 rounded-md bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all">
              Team kennenlernen <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
            </Link>
            <Link to="/prozess" className="group inline-flex items-center justify-center gap-2 px-6 h-12 rounded-md border border-border font-semibold hover:border-primary/40 transition-all">
              Unser Prozess <ArrowUpRight size={16} className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
            </Link>
          </div>
        </div>

        <div className={`relative scroll-hidden delay-2 ${isVisible ? 'scroll-visible' : ''}`}>
          <div className="absolute -inset-6 bg-gradient-to-br from-primary/25 via-primary-glow/15 to-transparent rounded-lg blur-3xl opacity-40" />
          <div className="relative rounded-lg overflow-hidden border border-border shadow-sm aspect-[4/5] bg-muted">
            <img
              src={aboutImage}
              alt="Büro der Vendis Development Services GmbH in Berlin"
              width={1080}
              height={1350}
              loading="lazy"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 sm:left-7 sm:right-auto inline-flex flex-col gap-1 px-5 py-4 rounded-md bg-background/95 backdrop-blur-xl border border-border shadow-lg">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Standort</span>
              <span className="font-display font-bold text-base">Berlin · DE</span>
              <span className="text-xs text-muted-foreground">Neue Schönhauser Str. 2, 10178 Berlin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
