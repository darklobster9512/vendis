import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import processBg from '@/assets/landing/process-bg.jpg';

const steps = [
  { n: '01', title: 'Analyse', desc: 'Bestandsaufnahme, Stakeholder-Interviews und Zieldefinition. Wir verstehen Auftrag, Rahmenbedingungen und Risiken bevor wir planen.', dur: '1 – 3 Wochen' },
  { n: '02', title: 'Konzept', desc: 'Technisches Konzept, Lastenheft, Kostenschätzung. Optional Machbarkeitsstudie und Vergleichsvarianten.', dur: '2 – 6 Wochen' },
  { n: '03', title: 'Ausschreibung & Realisierung', desc: 'Leistungsverzeichnis, Vergabe, Bauüberwachung. Wir steuern Termine, Kosten und Qualität bis zur Abnahme.', dur: '3 – 18 Monate' },
  { n: '04', title: 'Betrieb & Übergabe', desc: 'Inbetriebnahme, Dokumentation, Schulung. Auf Wunsch weiterführendes Projektcontrolling oder Service-Begleitung.', dur: 'fortlaufend' },
];

const ProcessFlow = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-4 sm:px-6 bg-foreground text-background overflow-hidden">
      <img
        src={processBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        loading="lazy"
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/85 to-foreground pointer-events-none" />
      {/* grid */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full bg-primary/12 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className={`max-w-3xl mb-14 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="text-xs uppercase tracking-[0.25em] text-primary-glow mb-4 font-semibold">Vorgehen</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
            Vier Phasen — strukturiert, transparent, planbar.
          </h2>
          <p className="mt-5 text-base text-background/70 leading-relaxed max-w-2xl">
            Jede Phase mit klarem Ergebnis, definiertem Aufwand und Festpreis.
            Keine Überraschungen, keine versteckten Kosten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`relative rounded-lg border border-background/15 bg-background/[0.04] backdrop-blur p-7 hover:bg-background/[0.08] transition-colors scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''}`}
            >
              <div className="font-display text-5xl font-bold text-primary-glow/90 leading-none">{s.n}</div>
              <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm text-background/70 leading-relaxed">{s.desc}</p>
              <div className="mt-5 pt-4 border-t border-background/10 text-[11px] uppercase tracking-widest text-background/60 font-semibold">{s.dur}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessFlow;
