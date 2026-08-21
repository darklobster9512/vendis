import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { photos } from '@/lib/photos';
import SectionHead from '@/components/site/SectionHead';
import SplitRow from '@/components/site/SplitRow';
import TickList from '@/components/site/TickList';

const rows = [
  {
    index: '01',
    label: 'Analyse & Spezifikation',
    title: 'Erst verstehen, dann bauen.',
    text: 'Wir nehmen fachliche Anforderungen, Schnittstellen und Rahmenbedingungen der beauftragenden Gesellschaft auf und übersetzen sie in eine belastbare technische Spezifikation.',
    items: [
      'Anforderungsworkshops',
      'Schnittstellen-Inventar',
      'Machbarkeit & Aufwand',
      'Technische Risiken',
    ],
    image: photos.workshopPlanning,
    alt: 'Team plant Anforderungen an einem Whiteboard',
  },
  {
    index: '02',
    label: 'Design & Architektur',
    title: 'Architektur, die Änderungen aushält.',
    text: 'Softwarearchitektur, Datenmodelle, Schnittstellen- und Sicherheitskonzept — dokumentiert und abgestimmt, bevor die erste Zeile Produktivcode entsteht.',
    items: ['Systemarchitektur', 'Datenmodellierung', 'API-Design', 'Sicherheitskonzept'],
    image: photos.designSession,
    alt: 'Zwei Personen entwerfen gemeinsam ein Software-Design',
  },
  {
    index: '03',
    label: 'Implementierung & Test',
    title: 'Iterativ, geprüft, dokumentiert.',
    text: 'Umsetzung in kurzen Zyklen mit Versionskontrolle, Code-Reviews und automatisierten Tests. Jedes Release ist nachvollziehbar dokumentiert und abnahmefähig.',
    items: [
      'Code-Reviews & Pair Programming',
      'Unit-, Integrations- & Abnahmetests',
      'CI/CD-Pipelines',
      'Release-Dokumentation',
    ],
    image: photos.pairProgramming,
    alt: 'Entwicklerinnen und Entwickler beim Pair Programming',
  },
  {
    index: '04',
    label: 'Wartung & Betriebs-Support',
    title: 'Auch nach dem Go-live erreichbar.',
    text: 'Fehlerbehebung, Updates, Refactoring und technischer Support im laufenden Betrieb — inklusive Monitoring-Begleitung und strukturierter Incident-Bearbeitung.',
    items: [
      'Fehlerbehebung & Hotfixes',
      'Updates & Refactoring',
      'Monitoring-Begleitung',
      'Incident-Bearbeitung',
    ],
    image: photos.infrastructureOps,
    alt: 'Technikerin prüft Systeme im laufenden Betrieb',
  },
];

const ServicesTabs = () => (
  <section className="bg-background">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <SectionHead
          index="§ 01"
          label="Leistungen"
          title={
            <>
              Der komplette Lebenszyklus
              <br className="hidden sm:block" /> einer Softwarelösung.
            </>
          }
          text="Wir übernehmen einzelne Phasen oder den gesamten Ablauf — je nach Auftrag des verbundenen Unternehmens."
        />
        <Link
          to="/entwicklung"
          className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-primary shrink-0"
        >
          Alle Leistungen
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>

      <div className="mt-20 space-y-20 sm:space-y-28">
        {rows.map((row, i) => (
          <SplitRow
            key={row.index}
            index={row.index}
            label={row.label}
            title={row.title}
            text={row.text}
            image={row.image}
            alt={row.alt}
            reverse={i % 2 === 1}
          >
            <TickList items={row.items} columns={2} />
          </SplitRow>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesTabs;
