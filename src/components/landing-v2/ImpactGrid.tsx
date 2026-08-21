import { useScrollAnimation, useCounterAnimation } from '@/hooks/useScrollAnimation';
import { TrendingDown, TrendingUp, Clock, Euro } from 'lucide-react';

const ImpactGrid = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const c1 = useCounterAnimation(150, 2000, isVisible);
  const c2 = useCounterAnimation(80, 1800, isVisible);
  const c3 = useCounterAnimation(85, 1600, isVisible);
  const c4 = useCounterAnimation(20, 1400, isVisible);

  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`max-w-3xl mb-14 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4 font-semibold">Kennzahlen</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
            Belastbare Zahlen aus 20 Jahren Projektpraxis.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-3 sm:gap-4">
          {[
            { v: c1, suffix: '+', label: 'Projekte begleitet', sub: 'Beratung, Steuerung, Planung', icon: TrendingUp },
            { v: c2, suffix: '+', label: 'Kunden', sub: 'Mittelstand bis Konzern', icon: Euro },
            { v: c3, suffix: '%', label: 'Kosteneinsparung', sub: 'durch Prozessoptimierung', icon: TrendingUp },
            { v: c4, suffix: '', label: 'Jahre Erfahrung', sub: 'seit 2006, ein Team', icon: Clock },
          ].map((s, i) => (
            <div key={i} className={`p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors flex flex-col justify-between scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''}`}>
              <s.icon size={18} className="text-primary" />
              <div>
                <div className="font-display text-5xl sm:text-6xl font-bold tabular-nums leading-none text-foreground">
                  {s.v}<span className="text-primary">{s.suffix}</span>
                </div>
                <p className="mt-3 text-sm font-semibold">{s.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactGrid;
