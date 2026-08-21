import { useState, useRef, type KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Globe,
  Cloud,
  Sparkles,
  Compass,
  ListChecks,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type Service = {
  eyebrow: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  bullets: string[];
  tech: string[];
};

const services: Service[] = [
  {
    eyebrow: '01 / Software',
    title: 'Individualsoftware',
    icon: Code2,
    summary:
      'Maßgeschneiderte Business-Anwendungen, die exakt zu Ihren Prozessen passen — vom Prototyp bis zur produktiven Lösung.',
    bullets: [
      'ERP- & CRM-Integrationen',
      'APIs & Schnittstellen',
      'Datenmigrationen & Altsystem-Ablösungen',
      'Wartung, Support & Weiterentwicklung',
    ],
    tech: ['TypeScript', 'Node.js', 'PostgreSQL', '.NET'],
  },
  {
    eyebrow: '02 / Web',
    title: 'Webentwicklung',
    icon: Globe,
    summary:
      'Performante Websites, Portale und Web-Apps mit modernem Stack — schnell, barrierearm und SEO-ready.',
    bullets: [
      'Corporate Websites & Landingpages',
      'Kundenportale & Web-Apps',
      'Headless CMS & E-Commerce',
      'Core Web Vitals & Accessibility',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    eyebrow: '03 / Infrastruktur',
    title: 'Cloud & DevOps',
    icon: Cloud,
    summary:
      'Belastbare Infrastruktur, automatisierte Deployments und transparentes Monitoring — Hosting in Deutschland möglich.',
    bullets: [
      'CI/CD-Pipelines & Releases',
      'Infrastructure-as-Code',
      'Logging, Tracing & Alerting',
      'Skalierung & Kostenkontrolle',
    ],
    tech: ['AWS', 'Azure', 'Hetzner', 'Terraform'],
  },
  {
    eyebrow: '04 / KI',
    title: 'KI-Integration',
    icon: Sparkles,
    summary:
      'LLM-gestützte Assistenten und Automatisierungen — eingebettet in Ihre Anwendungen, mit klarer DSGVO-Linie.',
    bullets: [
      'Dokumenten- & Wissensassistenten',
      'Prozess- & Workflow-Automatisierung',
      'RAG auf eigenen Datenquellen',
      'On-Premise & EU-Hosting möglich',
    ],
    tech: ['OpenAI', 'Azure AI', 'LangChain', 'pgvector'],
  },
  {
    eyebrow: '05 / Beratung',
    title: 'IT- & Technologieberatung',
    icon: Compass,
    summary:
      'Unabhängige Einschätzung statt Produktverkauf — wir prüfen Architektur, Anbieter und Wirtschaftlichkeit.',
    bullets: [
      'Architektur- & Code-Reviews',
      'Make-or-Buy-Analysen',
      'Lastenhefte & Anbietervergleich',
      'Technische Due Diligence',
    ],
    tech: ['Architektur', 'Audit', 'Strategie'],
  },
  {
    eyebrow: '06 / Steuerung',
    title: 'Projektmanagement',
    icon: ListChecks,
    summary:
      'Termine, Budget, Qualität — verantwortlich gesteuert. Agil oder klassisch, je nach Vorhaben.',
    bullets: [
      'Scrum, Kanban & Hybrid-Modelle',
      'Stakeholder- & Risikomanagement',
      'Reporting an Geschäftsführung',
      'Übergabe & Betriebsführung',
    ],
    tech: ['Scrum', 'Kanban', 'PRINCE2'],
  },
];

const ServicesTabs = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const next = (i + 1) % services.length;
      setActive(next);
      tabRefs.current[next]?.focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = (i - 1 + services.length) % services.length;
      setActive(prev);
      tabRefs.current[prev]?.focus();
    }
  };

  const current = services[active];
  const Icon = current.icon;

  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 scroll-hidden ${
            isVisible ? 'scroll-visible' : ''
          }`}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4 font-semibold">
              Leistungen
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight max-w-3xl">
              Sechs Disziplinen, ein verantwortliches Team.
            </h2>
          </div>
          <Link
            to="/leistungen"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary self-start lg:self-end hover:gap-3 transition-all"
          >
            Alle Leistungen <ArrowUpRight size={16} />
          </Link>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 scroll-hidden ${
            isVisible ? 'scroll-visible' : ''
          }`}
        >
          {/* Left: tablist */}
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label="Leistungen"
            className="lg:col-span-5 flex lg:flex-col gap-0 overflow-x-auto lg:overflow-visible border-b lg:border-b-0 lg:border-l border-border lg:pl-0"
          >
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.title}
                  ref={(el) => (tabRefs.current[i] = el)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`service-panel-${i}`}
                  id={`service-tab-${i}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`group relative text-left shrink-0 lg:shrink py-5 lg:py-6 px-5 lg:px-6 border-b border-border lg:border-b lg:last:border-b-0 transition-colors ${
                    isActive
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {/* Active indicator bar (left on desktop, bottom on mobile) */}
                  <span
                    className={`absolute lg:left-[-1px] lg:top-0 lg:bottom-0 lg:w-[2px] lg:h-auto left-0 bottom-[-1px] right-0 h-[2px] bg-primary transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden="true"
                  />
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`font-mono text-xs tracking-tight ${
                        isActive ? 'text-primary' : 'text-muted-foreground/70'
                      }`}
                    >
                      {s.eyebrow.split(' / ')[0]}
                    </span>
                    <span className="font-display text-lg sm:text-xl font-bold leading-tight whitespace-nowrap lg:whitespace-normal">
                      {s.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: detail panel */}
          <div className="lg:col-span-7">
            <div
              key={active}
              role="tabpanel"
              id={`service-panel-${active}`}
              aria-labelledby={`service-tab-${active}`}
              className="border border-border bg-card rounded-md overflow-hidden shadow-sm animate-in fade-in duration-300"
            >
              {/* Mini visual */}
              <div className="relative h-28 sm:h-32 bg-gradient-blue-subtle border-b border-border flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                </div>
                <div className="relative w-14 h-14 rounded-md bg-background border border-border flex items-center justify-center shadow-sm">
                  <Icon size={24} className="text-primary" strokeWidth={1.75} />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10">
                <p className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-3">
                  {current.eyebrow}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
                  {current.title}
                </h3>
                <p className="mt-4 text-[15px] sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                  {current.summary}
                </p>

                <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {current.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm text-foreground/85"
                    >
                      <span
                        className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0"
                        aria-hidden="true"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-2">
                  {current.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-2.5 py-1 rounded-md border border-border bg-muted/40 text-[11px] font-medium text-muted-foreground tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  to="/leistungen"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  Mehr zu dieser Leistung <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabs;
