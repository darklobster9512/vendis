import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

import PageHero from '@/components/landing/PageHero';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import SplitRow from '@/components/site/SplitRow';
import TickList from '@/components/site/TickList';
import Reveal from '@/components/site/Reveal';
import { photos } from '@/lib/photos';

const services = [
  {
    id: 'analyse',
    title: 'Analyse & Spezifikation',
    headline: 'Anforderungen, die tragen.',
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
    image: photos.workshopPlanning,
    alt: 'Anforderungsworkshop mit Notizen an einer Wand',
  },
  {
    id: 'implementierung',
    title: 'Design & Implementierung',
    headline: 'Architektur und Code aus einer Hand.',
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
    image: photos.pairProgramming,
    alt: 'Zwei Entwickler arbeiten gemeinsam an einer Implementierung',
  },
  {
    id: 'test',
    title: 'Test & Qualitätssicherung',
    headline: 'Releases, die planbar bleiben.',
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
    image: photos.codeReview,
    alt: 'Code-Review am Monitor im Entwicklungsteam',
  },
  {
    id: 'betrieb',
    title: 'Wartung & Betriebs-Support',
    headline: 'Nach dem Go-live geht es weiter.',
    description:
      'Fehlerbehebung, Updates, Weiterentwicklung und technischer Support im laufenden Betrieb.',
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
    image: photos.infrastructureOps,
    alt: 'Betriebs-Support prüft laufende Systeme',
  },
];

const Entwicklung = () => {
  useEffect(() => {
    document.title = 'Entwicklung | Vendis Development Services GmbH';
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Entwicklung"
        title="Unsere"
        highlight="Entwicklungsleistungen"
        subtitle="Analyse, Design, Implementierung, Test, Wartung und Betriebs-Support von Softwarelösungen — als Auftragsentwicklung für verbundene Unternehmen."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Entwicklung' }]}
        image={photos.deskTopdown}
        imageAlt="Arbeitsplatz mit Notizen, Laptop und Skizzen von oben"
      />

      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28 space-y-20 sm:space-y-28">
          {services.map((service, i) => (
            <div key={service.id} id={service.id} className="scroll-mt-28">
              <SplitRow
                index={`0${i + 1} / 04`}
                label={service.title}
                title={service.headline}
                text={service.description}
                image={service.image}
                alt={service.alt}
                reverse={i % 2 === 1}
              >
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.longDescription}
                </p>
                <div className="mt-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
                    Was wir liefern
                  </p>
                  <TickList items={service.features} columns={2} />
                </div>
                <Link
                  to="/kontakt"
                  className="group mt-8 inline-flex items-center gap-2 h-11 px-5 rounded-full bg-ink text-ink-foreground text-sm font-semibold hover:bg-ink/90 transition-colors"
                >
                  Anfrage stellen
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </SplitRow>
            </div>
          ))}

          <Reveal>
            <p className="max-w-3xl border-t border-border pt-6 text-sm text-muted-foreground leading-relaxed">
              Alle Leistungen erbringen wir als Auftragsentwicklung für verbundene Unternehmen.
              Eine eigene Vermarktung oder Verwertung der entstehenden Ergebnisse findet nicht
              statt; genehmigungspflichtige Tätigkeiten sind ausgenommen.
            </p>
          </Reveal>
        </div>
      </div>

      <CTASection />
      <Footer />
    </>
  );
};

export default Entwicklung;
