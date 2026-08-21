const projectTypes = [
  'Web-Applikationen',
  'Backend- & API-Services',
  'Schnittstellen & Integration',
  'Anforderungsanalyse',
  'Test & Qualitätssicherung',
  'Wartung & Betriebs-Support',
  'CI/CD & Automatisierung',
  'Datenmodellierung',
];

const ProjectTypesMarquee = () => {
  const track = [...projectTypes, ...projectTypes];

  return (
    <section className="border-y border-border bg-background">
      <div
        className="group relative overflow-hidden py-6"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%)',
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-10 group-hover:[animation-play-state:paused]">
          {track.map((label, i) => (
            <div
              key={`${label}-${i}`}
              className="flex shrink-0 items-center gap-10"
              aria-hidden={i >= projectTypes.length ? 'true' : undefined}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/55 whitespace-nowrap">
                {label}
              </span>
              <span className="text-primary text-[8px]">◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTypesMarquee;
