import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Search, PenTool, Code2, TestTube2, Wrench, LifeBuoy } from 'lucide-react';

const items = [
  {
    icon: Search,
    title: 'Analyse',
    desc: 'Aufnahme fachlicher Anforderungen, Schnittstellen und Rahmenbedingungen der beauftragenden Gesellschaft.',
  },
  {
    icon: PenTool,
    title: 'Design',
    desc: 'Softwarearchitektur, Datenmodelle, Schnittstellendefinition und technische Spezifikation.',
  },
  {
    icon: Code2,
    title: 'Implementierung',
    desc: 'Umsetzung in iterativen Zyklen mit Versionskontrolle, Code-Reviews und dokumentierten Releases.',
  },
  {
    icon: TestTube2,
    title: 'Test',
    desc: 'Unit-, Integrations- und Abnahmetests, Testautomatisierung sowie strukturierte Fehlerdokumentation.',
  },
  {
    icon: Wrench,
    title: 'Wartung',
    desc: 'Fehlerbehebung, Updates, Refactoring und Weiterentwicklung bestehender Softwarelösungen.',
  },
  {
    icon: LifeBuoy,
    title: 'Betriebs-Support',
    desc: 'Technischer Support im laufenden Betrieb, Monitoring-Begleitung und Incident-Bearbeitung.',
  },
];

const ImpactGrid = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`max-w-3xl mb-14 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4 font-semibold">Leistungsumfang</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
            Der komplette Lebenszyklus einer Softwarelösung.
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-2xl">
            Wir übernehmen einzelne Phasen oder den gesamten Ablauf — je nach Auftrag
            des verbundenen Unternehmens.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {items.map((s, i) => (
            <div
              key={s.title}
              className={`p-7 rounded-md border border-border bg-card hover:border-primary/40 transition-colors scroll-hidden delay-${(i % 4) + 1} ${isVisible ? 'scroll-visible' : ''}`}
            >
              <s.icon size={20} className="text-primary" />
              <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactGrid;
