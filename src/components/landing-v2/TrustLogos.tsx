import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Network,
  Server,
  Cable,
  PhoneCall,
  Users,
  ShieldCheck,
  Radio,
  Building2,
} from 'lucide-react';

const projectTypes = [
  { icon: Network, label: 'Netzwerkmodernisierung' },
  { icon: Server, label: 'Rechenzentrumsplanung' },
  { icon: Cable, label: 'Glasfaser-Outsourcing' },
  { icon: PhoneCall, label: 'TK-Beschaffung' },
  { icon: Users, label: 'Personalberatung' },
  { icon: ShieldCheck, label: 'IT-Sicherheitskonzepte' },
  { icon: Radio, label: 'Mobilfunk-Rollouts' },
  { icon: Building2, label: 'Standortvernetzung' },
];

const ProjectTypesMarquee = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  // Doppelte Liste für nahtlose Endlos-Animation
  const track = [...projectTypes, ...projectTypes];

  return (
    <section ref={ref} className="relative py-16 sm:py-20 px-4 sm:px-6 border-y border-border bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center max-w-2xl mx-auto mb-12 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4 font-semibold">Projekttypen</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
            Worin wir Tag für Tag liefern.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Ein Auszug konkreter Projektarten, die unsere Teams planen, umsetzen und betreiben.
          </p>
        </div>

        <div
          className={`group relative overflow-hidden scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)',
          }}
        >
          <div className="flex w-max animate-marquee gap-6 sm:gap-8 group-hover:[animation-play-state:paused]">
            {track.map(({ icon: Icon, label }, i) => (
              <div
                key={`${label}-${i}`}
                className="flex h-14 shrink-0 items-center gap-3 rounded-md border border-border bg-background/60 px-5"
                aria-hidden={i >= projectTypes.length ? 'true' : undefined}
              >
                <Icon className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                <span className="font-display text-sm sm:text-base font-semibold tracking-tight text-foreground/80 whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTypesMarquee;
