import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const faqs = [
  { q: 'Welche Leistungen erbringt for.tel Solutions konkret?', a: 'Technische Unternehmensberatung, technische und wirtschaftliche Projektberatung, Projektcontrolling, Projektmanagement, Personalberatung sowie die Planung und der Vertrieb elektrotechnischer und fernmeldetechnischer Anlagen aller Art.' },
  { q: 'Wie lange dauert ein typisches Projekt?', a: 'Beratungsmandate und Studien: 4 – 10 Wochen. Projektsteuerung über Bauphasen hinweg: 6 – 24 Monate. Anlagenplanungen je nach Leistungsphase nach HOAI-Logik.' },
  { q: 'Sind Sie herstellerneutral?', a: 'Ja. Wir erhalten keine Provisionen von Herstellern oder Lieferanten. Unsere Empfehlungen basieren ausschließlich auf den Anforderungen unserer Auftraggeber.' },
  { q: 'Wie kalkulieren Sie Ihr Honorar?', a: 'Beratung typischerweise auf Tagessatz- oder Festpreisbasis. Planungsleistungen orientieren sich an der HOAI. Personalberatung erfolgsabhängig oder im Retainer.' },
  { q: 'Übernehmen Sie auch Ausschreibungen und Bauüberwachung?', a: 'Ja. Wir erstellen Leistungsverzeichnisse, begleiten Vergabeverfahren (auch öffentlich nach VOB/VOL) und übernehmen die Bauüberwachung bis zur Abnahme.' },
  { q: 'Wo sitzen Sie und wer arbeitet am Projekt?', a: 'Filderstadt bei Stuttgart. Festes Team aus Beratern, Projektleitern und Planern. Sie haben direkten Draht zur Geschäftsführung.' },
];

const FAQTerminal = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className={`mb-12 text-center scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4 font-semibold">Häufige Fragen</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
            Antworten auf das, was Kunden vor dem ersten Gespräch fragen.
          </h2>
        </div>


        <div className={`rounded-lg border border-border bg-card p-2 sm:p-4 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left p-5 sm:p-6 rounded-md hover:bg-muted/40 transition-colors border-b border-border last:border-0"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <span className="text-xs text-primary mt-1.5 font-semibold">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-display text-base sm:text-lg font-semibold leading-snug">{f.q}</h3>
                  </div>
                  <span className={`shrink-0 w-8 h-8 rounded-md border border-border flex items-center justify-center transition-transform ${isOpen ? 'rotate-45 bg-primary text-primary-foreground border-primary' : ''}`}>
                    <Plus size={15} />
                  </span>
                </div>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden pl-8">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQTerminal;
