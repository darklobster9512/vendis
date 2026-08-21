import { useEffect } from 'react';

import PageHero from '@/components/landing/PageHero';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import SectionHead from '@/components/site/SectionHead';
import SplitRow from '@/components/site/SplitRow';
import TickList from '@/components/site/TickList';
import Reveal from '@/components/site/Reveal';
import { photos } from '@/lib/photos';

const steps = [
  {
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
    image: photos.workshopPlanning,
    alt: 'Workshop zur Aufnahme fachlicher Anforderungen',
  },
  {
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
    image: photos.designSession,
    alt: 'Designsession mit Skizzen zur Softwarearchitektur',
  },
  {
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
    image: photos.codeReview,
    alt: 'Entwicklungsteam bei Code-Review und Tests',
  },
  {
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
    image: photos.infrastructureOps,
    alt: 'Betriebsunterstützung im laufenden Systembetrieb',
  },
];

const principles = [
  {
    title: 'Im Verbund',
    description:
      'Wir arbeiten ausschließlich im Auftrag verbundener Unternehmen — eng abgestimmt mit deren Fachbereichen und IT.',
  },
  {
    title: 'Ergebnisse beim Auftraggeber',
    description:
      'Alle Arbeitsergebnisse stehen dem beauftragenden Unternehmen zu. Eine eigene Vermarktung findet nicht statt.',
  },
  {
    title: 'Nachvollziehbar',
    description:
      'Versionskontrolle, dokumentierte Releases und technische Dokumentation gehören zu jedem Auftrag.',
  },
  {
    title: 'Langlebig',
    description: 'Wartbarer Code, Tests und Refactoring statt kurzfristiger Zwischenlösungen.',
  },
];

const Prozess = () => {
  useEffect(() => {
    document.title = 'Prozess | Vendis Development Services GmbH';
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Prozess"
        title="Unser"
        highlight="Entwicklungsprozess"
        subtitle="Von Analyse und Design über Implementierung und Test bis zu Wartung und Betriebs-Support — strukturiert und nachvollziehbar je Auftrag."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Prozess' }]}
        image={photos.teamMeeting}
        imageAlt="Projektbesprechung im Entwicklungsteam"
      />

      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28 space-y-20 sm:space-y-28">
          {steps.map((step, i) => (
            <SplitRow
              key={step.number}
              index={`Phase ${step.number}`}
              label={step.subtitle}
              title={step.title}
              text={step.description}
              image={step.image}
              alt={step.alt}
              reverse={i % 2 === 1}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
                Ergebnisse & Aktivitäten
              </p>
              <TickList items={step.details} />
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                Dauer · {step.duration}
              </div>
            </SplitRow>
          ))}
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <SectionHead
            tone="dark"
            index="§ 05"
            label="Prinzipien"
            title="So arbeiten wir."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="border-t border-ink-foreground/20 pt-5">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-primary-glow">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm text-ink-foreground/60 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
};

export default Prozess;
