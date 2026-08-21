import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Handshake, FileCheck2, ShieldCheck } from 'lucide-react';

const principles = [
  {
    icon: Handshake,
    title: 'Auftragsbezogen',
    text: 'Wir werden ausschließlich im Auftrag verbundener Unternehmen tätig. Umfang, Ziele und Abnahmekriterien werden je Auftrag schriftlich festgelegt.',
  },
  {
    icon: FileCheck2,
    title: 'Ergebnisse bleiben beim Auftraggeber',
    text: 'Alle Arbeitsergebnisse stehen dem beauftragenden Unternehmen zu. Eine eigene Vermarktung oder Verwertung durch uns findet nicht statt.',
  },
  {
    icon: ShieldCheck,
    title: 'Klar abgegrenzter Rahmen',
    text: 'Genehmigungspflichtige Tätigkeiten sind vom Leistungsspektrum ausdrücklich ausgenommen.',
  },
];

const VoicesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`max-w-3xl mb-14 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4 font-semibold">Zusammenarbeit</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
            Wie die Zusammenarbeit im Verbund geregelt ist.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {principles.map((p, i) => (
            <div
              key={p.title}
              className={`p-8 flex flex-col rounded-md border border-border bg-card hover:border-primary/40 transition-all scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''}`}
            >
              <p.icon size={22} className="text-primary mb-5" />
              <h3 className="font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoicesSection;
