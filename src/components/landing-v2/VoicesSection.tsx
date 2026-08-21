import { photos } from '@/lib/photos';
import Photo from '@/components/site/Photo';
import Reveal from '@/components/site/Reveal';
import SectionHead from '@/components/site/SectionHead';

const principles = [
  {
    n: '01',
    title: 'Auftragsbezogen',
    text: 'Wir werden ausschließlich im Auftrag verbundener Unternehmen tätig. Umfang, Ziele und Abnahmekriterien werden je Auftrag schriftlich festgelegt.',
  },
  {
    n: '02',
    title: 'Ergebnisse bleiben beim Auftraggeber',
    text: 'Alle Arbeitsergebnisse stehen dem beauftragenden Unternehmen zu. Eine eigene Vermarktung oder Verwertung durch uns findet nicht statt.',
  },
  {
    n: '03',
    title: 'Klar abgegrenzter Rahmen',
    text: 'Genehmigungspflichtige Tätigkeiten sind vom Leistungsspektrum ausdrücklich ausgenommen.',
  },
];

const VoicesSection = () => (
  <section className="bg-surface">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHead
            index="§ 04"
            label="Zusammenarbeit"
            title="Drei Prinzipien, die jeden Auftrag rahmen."
            text="Klarheit über Rolle, Rechte und Grenzen — vor dem ersten Sprint."
          />
          <Reveal delay={3} className="mt-10">
            <Photo
              src={photos.collaborationHands}
              alt="Hände über Unterlagen bei einer gemeinsamen Abstimmung"
              ratio="aspect-[16/10]"
            />
          </Reveal>
        </div>

        <ol>
          {principles.map((p, i) => (
            <Reveal as="li" key={p.n} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="border-t border-border py-8 first:pt-0 sm:py-10">
                <span className="font-mono text-[11px] tracking-[0.22em] text-primary">{p.n}</span>
                <h3 className="mt-4 font-display text-2xl sm:text-[1.75rem] font-semibold leading-tight">
                  {p.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default VoicesSection;
