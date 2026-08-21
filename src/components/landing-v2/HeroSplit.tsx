import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { photos } from '@/lib/photos';

const facts = [
  { k: 'Rolle', v: 'Contract-Developer' },
  { k: 'Auftraggeber', v: 'Verbundene Unternehmen' },
  { k: 'Standort', v: 'Berlin, DE' },
];

const HeroSplit = () => (
  <section className="relative bg-surface overflow-hidden">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 pb-0 sm:pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
        {/* Text */}
        <div className="pb-14 sm:pb-20">
          <p className="hero-animate hero-animate-1 font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
            Auftragsentwicklung im Unternehmensverbund
          </p>

          <h1 className="hero-animate hero-animate-2 mt-6 font-display text-[2.6rem] sm:text-[3.6rem] lg:text-[4.6rem] font-semibold leading-[0.98] tracking-[-0.02em] text-foreground">
            Software, die
            <br />
            im Verbund
            <br />
            <span className="text-primary">entsteht.</span>
          </h1>

          <p className="hero-animate hero-animate-3 mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Wir erbringen Softwareentwicklungs- und damit zusammenhängende technische
            Dienstleistungen als Contract-Developer für verbundene Unternehmen: Analyse,
            Design, Implementierung, Test, Wartung und Betriebs-Support.
          </p>

          <div className="hero-animate hero-animate-4 mt-10 flex flex-wrap gap-3">
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-2 h-13 px-7 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Entwicklungsauftrag anfragen
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              to="/entwicklung"
              className="inline-flex items-center px-7 py-4 rounded-full border border-border text-foreground font-semibold hover:border-primary/50 hover:text-primary transition-colors"
            >
              Leistungen ansehen
            </Link>
          </div>

          <dl className="hero-animate hero-animate-5 mt-14 grid grid-cols-1 sm:grid-cols-3 gap-x-8">
            {facts.map((f) => (
              <div key={f.k} className="border-t border-border pt-4">
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {f.k}
                </dt>
                <dd className="mt-2 text-sm font-semibold text-foreground">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Photo */}
        <div className="hero-animate hero-animate-3 relative lg:h-[min(84vh,780px)]">
          <div className="relative h-[62vw] sm:h-[46vw] lg:h-full min-h-[340px] overflow-hidden rounded-t-lg lg:rounded-none lg:rounded-tl-lg bg-muted photo-tint">
            <img
              src={photos.teamHero}
              alt="Entwicklungsteam bei der gemeinsamen Arbeit an einer Softwarelösung"
              loading="eager"
              fetchPriority="high"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSplit;
