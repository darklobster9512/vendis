import Reveal from './Reveal';

interface Stat {
  value: string;
  label: string;
}

interface StatBandProps {
  stats: Stat[];
  note?: string;
}

const StatBand = ({ stats, note }: StatBandProps) => (
  <section className="bg-ink text-ink-foreground">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
            <div className="border-t border-ink-foreground/20 pt-5">
              <div className="font-display text-3xl sm:text-[2.6rem] font-semibold leading-none tabular-nums">
                {s.value}
              </div>
              <p className="mt-3 text-sm text-ink-foreground/60 leading-relaxed">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
      {note && (
        <Reveal delay={4}>
          <p className="mt-12 max-w-2xl text-sm text-ink-foreground/50 leading-relaxed">{note}</p>
        </Reveal>
      )}
    </div>
  </section>
);

export default StatBand;
