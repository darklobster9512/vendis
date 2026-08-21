import { useEffect } from 'react';

import PageHero from '@/components/landing/PageHero';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Search, PenTool, Code2, LifeBuoy, CheckCircle2, Users, Shield, Scale, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Analyse',
    subtitle: 'Anforderungen & Rahmen',
    description:
      'Wir nehmen die Anforderungen der beauftragenden Gesellschaft auf, sichten bestehende Systeme und legen Ziele sowie Abnahmekriterien fest.',
    details: [
      'Workshops mit Fachbereich und IT',
      'Analyse bestehender Systeme & Schnittstellen',
      'Anforderungs- und Risikoanalyse',
      'Technische Spezifikation & User Stories',
      'Aufwandsschätzung und Abnahmekriterien',
    ],
    duration: '1–4 Wochen',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Design',
    subtitle: 'Architektur & Datenmodell',
    description:
      'Auf Basis der Spezifikation entsteht die technische Lösung: Architektur, Datenmodell, Schnittstellen und Sicherheitskonzept.',
    details: [
      'Softwarearchitektur & Komponentenschnitt',
      'Datenmodell und Migrationsstrategie',
      'API- und Schnittstellendefinition',
      'Berechtigungs- und Sicherheitskonzept',
      'Release- und Meilensteinplanung',
    ],
    duration: '1–4 Wochen',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Implementierung & Test',
    subtitle: 'Umsetzung in Iterationen',
    description:
      'Entwicklung in kurzen Zyklen mit Code-Reviews, automatisierten Tests und lauffähigen Zwischenständen zur laufenden Abstimmung.',
    details: [
      'Iterative Umsetzung mit Sprint-Reviews',
      'Code-Reviews & statische Analyse',
      'Unit-, Integrations- und E2E-Tests',
      'CI/CD-Pipelines und Testumgebungen',
      'Abnahmeunterstützung & Fehlerdokumentation',
    ],
    duration: 'projektspezifisch',
  },
  {
    icon: LifeBuoy,
    number: '04',
    title: 'Wartung & Betriebs-Support',
    subtitle: 'Nach dem Go-live',
    description:
      'Wir halten die Lösung betriebsfähig: Fehlerbehebung, Updates, Weiterentwicklung und technischer Support im laufenden Betrieb.',
    details: [
      'Fehleranalyse und Bugfixing',
      'Sicherheits- und Abhängigkeits-Updates',
      'Refactoring & Weiterentwicklung',
      'Deployment- und Release-Begleitung',
      'Monitoring-Begleitung & Incident-Bearbeitung',
    ],
    duration: 'laufend',
  },
];

const principles = [
  {
    icon: Users,
    title: 'Im Verbund',
    description:
      'Wir arbeiten ausschließlich im Auftrag verbundener Unternehmen — eng abgestimmt mit deren Fachbereichen und IT.',
  },
  {
    icon: Scale,
    title: 'Ergebnisse beim Auftraggeber',
    description:
      'Alle Arbeitsergebnisse stehen dem beauftragenden Unternehmen zu. Eine eigene Vermarktung findet nicht statt.',
  },
  {
    icon: Shield,
    title: 'Nachvollziehbar',
    description:
      'Versionskontrolle, dokumentierte Releases und technische Dokumentation gehören zu jedem Auftrag.',
  },
  {
    icon: RefreshCw,
    title: 'Langlebig',
    description: 'Wartbarer Code, Tests und Refactoring statt kurzfristiger Zwischenlösungen.',
  },
];

const Prozess = () => {
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    document.title = 'Prozess | Vendis Development Services GmbH';
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('scroll-visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-hidden').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Prozess"
        title="Unser"
        highlight="Entwicklungsprozess"
        subtitle="Von Analyse und Design über Implementierung und Test bis zu Wartung und Betriebs-Support — strukturiert und nachvollziehbar je Auftrag."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Prozess' },
        ]}
      />

      <section ref={ref} className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 1;
            return (
              <div
                key={step.number}
                className={`scroll-hidden delay-${Math.min(i + 1, 3)} ${isVisible ? 'scroll-visible' : ''}`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-md bg-gradient-blue flex items-center justify-center">
                        <Icon size={26} className="text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-muted-foreground tracking-wider">PHASE {step.number}</span>
                        <h2 className="text-3xl font-extrabold tracking-tight">{step.title}</h2>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">{step.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{step.description}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] border border-primary/20 text-sm font-medium text-primary">
                      Dauer: {step.duration}
                    </div>
                  </div>
                  <div className={isEven ? 'lg:order-1' : ''}>
                    <div className="rounded-md border border-border/60 bg-white p-8">
                      <h3 className="text-sm font-bold text-foreground mb-6">Ergebnisse & Aktivitäten</h3>
                      <div className="space-y-4">
                        {step.details.map((detail) => (
                          <div key={detail} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 scroll-hidden">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Prinzipien</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              So arbeiten <span className="text-gradient-blue">wir</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="scroll-hidden rounded-md border border-border/60 bg-white p-6 text-center hover:border-primary/20 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-md bg-gradient-blue flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-base font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
};

export default Prozess;
