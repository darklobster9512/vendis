import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageHero from '@/components/landing/PageHero';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, CheckCircle2, Search, PenTool, TestTube2, LifeBuoy } from 'lucide-react';

const services = [
  {
    icon: Search,
    id: 'analyse',
    title: 'Analyse & Spezifikation',
    headline: 'Analyse',
    description:
      'Wir nehmen die fachlichen Anforderungen des beauftragenden Unternehmens auf und überführen sie in eine belastbare technische Spezifikation.',
    longDescription:
      'Am Anfang jedes Auftrags steht das gemeinsame Verständnis: Welche Prozesse werden abgebildet, welche Systeme sind angebunden, welche Randbedingungen gelten. Ergebnis ist eine umsetzbare Spezifikation inklusive Aufwandsschätzung und Abnahmekriterien.',
    features: [
      'Aufnahme fachlicher Anforderungen',
      'Analyse bestehender Systeme & Schnittstellen',
      'Technische Spezifikation und User Stories',
      'Aufwands- und Machbarkeitsbewertung',
      'Risiko- und Abhängigkeitsanalyse',
      'Definition von Abnahmekriterien',
    ],
  },
  {
    icon: PenTool,
    id: 'implementierung',
    title: 'Design & Implementierung',
    headline: 'Entwicklung',
    description:
      'Softwarearchitektur, Datenmodell und Umsetzung — in iterativen Zyklen, versioniert, dokumentiert und nachvollziehbar.',
    longDescription:
      'Wir entwerfen die Architektur und setzen sie um: Backend-Services, Web-Frontends, Datenbanken und Schnittstellen. Die Entwicklung erfolgt in kurzen Zyklen mit Code-Reviews, automatisierten Builds und lauffähigen Zwischenständen.',
    features: [
      'Softwarearchitektur & technisches Design',
      'Datenmodellierung und Datenbankentwicklung',
      'Backend-Services und REST-/GraphQL-APIs',
      'Web-Frontends und interne Anwendungen',
      'Schnittstellen- und Systemintegration',
      'Code-Reviews, Versionskontrolle, CI/CD',
    ],
  },
  {
    icon: TestTube2,
    id: 'test',
    title: 'Test & Qualitätssicherung',
    headline: 'Qualität',
    description:
      'Automatisierte und manuelle Tests über alle Ebenen — damit Releases planbar und reproduzierbar bleiben.',
    longDescription:
      'Qualitätssicherung ist fester Bestandteil jedes Auftrags: von Unit- und Integrationstests über End-to-End-Tests bis zur strukturierten Abnahmeunterstützung und Fehlerdokumentation.',
    features: [
      'Unit- und Integrationstests',
      'End-to-End- und Regressionstests',
      'Testautomatisierung in der CI-Pipeline',
      'Last- und Performancetests',
      'Strukturierte Fehlerdokumentation',
      'Unterstützung bei der Abnahme',
    ],
  },
  {
    icon: LifeBuoy,
    id: 'betrieb',
    title: 'Wartung & Betriebs-Support',
    headline: 'Betrieb',
    description:
      'Nach dem Go-live geht es weiter: Fehlerbehebung, Updates, Weiterentwicklung und technischer Support im laufenden Betrieb.',
    longDescription:
      'Wir halten bestehende Softwarelösungen betriebsfähig und entwickeln sie weiter — mit definierten Reaktionswegen, dokumentierten Änderungen und nachvollziehbaren Releases.',
    features: [
      'Fehleranalyse und Bugfixing',
      'Sicherheits- und Abhängigkeits-Updates',
      'Refactoring und technische Weiterentwicklung',
      'Release- und Deployment-Begleitung',
      'Monitoring-Begleitung und Incident-Bearbeitung',
      'Technische Dokumentation und Wissenstransfer',
    ],
  },
];

const Entwicklung = () => {
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    document.title = 'Entwicklung | Vendis Development Services GmbH';
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
        eyebrow="Entwicklung"
        title="Unsere"
        highlight="Entwicklungsleistungen"
        subtitle="Analyse, Design, Implementierung, Test, Wartung und Betriebs-Support von Softwarelösungen — als Auftragsentwicklung für verbundene Unternehmen."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Entwicklung' },
        ]}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-24">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-hidden delay-${Math.min(i + 1, 4)} ${isVisible ? 'scroll-visible' : ''}`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-md bg-gradient-blue flex items-center justify-center">
                        <Icon size={22} className="text-primary-foreground" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground tracking-wider">
                        0{i + 1}/04
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{service.title}</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">{service.headline}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8">{service.longDescription}</p>
                    <Link
                      to="/kontakt"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors"
                    >
                      Anfrage stellen
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                  <div className={isEven ? 'lg:order-1' : ''}>
                    <div className="rounded-md border border-border/60 bg-white p-8">
                      <h3 className="text-sm font-bold text-foreground mb-6">Was wir liefern</h3>
                      <div className="grid gap-4">
                        {service.features.map((f) => (
                          <div key={f} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                            <span className="text-sm text-muted-foreground">{f}</span>
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
      </div>

      <CTASection />
      <Footer />
    </>
  );
};

export default Entwicklung;
