import { photos } from '@/lib/photos';
import Reveal from '@/components/site/Reveal';
import SectionHead from '@/components/site/SectionHead';
import Photo from '@/components/site/Photo';

const steps = [
  {
    n: '01',
    title: 'Analyse',
    desc: 'Aufnahme der fachlichen Anforderungen, Klärung von Schnittstellen, Rahmenbedingungen und Risiken.',
    dur: 'je Auftrag',
  },
  {
    n: '02',
    title: 'Design',
    desc: 'Softwarearchitektur, Datenmodell, Schnittstellen- und Sicherheitskonzept. Aufwands- und Umsetzungsplanung.',
    dur: 'je Auftrag',
  },
  {
    n: '03',
    title: 'Implementierung & Test',
    desc: 'Iterative Entwicklung mit Code-Reviews, automatisierten Tests, Abnahmetests und dokumentierten Releases.',
    dur: 'iterativ',
  },
  {
    n: '04',
    title: 'Wartung & Support',
    desc: 'Fehlerbehebung, Weiterentwicklung, Updates und technischer Support im laufenden Betrieb.',
    dur: 'fortlaufend',
  },
];

const ProcessFlow = () => (
  <section className="bg-ink text-ink-foreground">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <SectionHead
          tone="dark"
          index="§ 02"
          label="Vorgehen"
          title={
            <>
              Vier Phasen — von der
              <br className="hidden sm:block" /> Anforderung bis zum Betrieb.
            </>
          }
          text="Jede Phase liefert ein definiertes Ergebnis. Alle Arbeitsergebnisse gehen an das beauftragende verbundene Unternehmen über — eine eigene Vermarktung oder Verwertung findet nicht statt."
        />
        <Reveal delay={2}>
          <Photo
            src={photos.codeReview}
            alt="Entwicklerteam bei einem Code-Review am Bildschirm"
            ratio="aspect-[4/3]"
          />
        </Reveal>
      </div>

      <ol className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.n} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
            <div className="border-t border-ink-foreground/20 pt-6 h-full flex flex-col">
              <span className="font-mono text-[11px] tracking-[0.22em] text-primary-glow">{s.n}</span>
              <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-ink-foreground/65 leading-relaxed flex-1">{s.desc}</p>
              <span className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-foreground/40">
                {s.dur}
              </span>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default ProcessFlow;
