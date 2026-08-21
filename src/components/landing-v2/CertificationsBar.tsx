import { ShieldCheck, FileCheck2, MapPin, Award, Building2, Scale } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const items = [
  { icon: ShieldCheck, label: 'DSGVO-konform', sub: 'Auftragsverarbeitung & TOM' },
  { icon: Scale, label: 'HOAI-orientiert', sub: 'Planungs- & Beratungsleistungen' },
  { icon: Building2, label: 'VOB/VOL-konform', sub: 'Vergabeverfahren öffentlich & privat' },
  { icon: FileCheck2, label: 'Verträge nach BGB', sub: 'Werkvertrag, AGB, NDA' },
  { icon: MapPin, label: 'Made in Germany', sub: 'Festes Team in Filderstadt' },
  { icon: Award, label: 'Herstellerneutral', sub: 'Keine Provisionen, keine Lock-Ins' },
];

const CertificationsBar = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <section ref={ref} className="relative py-16 sm:py-20 px-4 sm:px-6 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className={`max-w-2xl mb-10 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Standards &amp; Compliance</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
            Verlässliche Rahmen­bedingungen für Ihr Projekt.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {items.map((it, i) => (
            <div
              key={it.label}
              className={`flex flex-col gap-3 p-5 rounded-lg border border-border bg-background hover:border-primary/40 transition-colors scroll-hidden delay-${(i % 6) + 1} ${isVisible ? 'scroll-visible' : ''}`}
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                <it.icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm leading-tight">{it.label}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-snug">{it.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsBar;
