import { useEffect } from 'react';

import PageHero from '@/components/landing/PageHero';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import Reveal from '@/components/site/Reveal';
import Photo from '@/components/site/Photo';
import SectionHead from '@/components/site/SectionHead';
import { photos } from '@/assets/photos';

const departments = [
  {
    title: 'Geschäftsführung',
    intro: 'Strategische Ausrichtung und unternehmerische Verantwortung.',
    members: [
      {
        name: 'Sebastian Andre Deutsch, Thomas Friedrich Witt',
        role: 'Geschäftsführer',
        description:
          'Verantworten die strategische Ausrichtung der Gesellschaft und die Steuerung der Entwicklungsaufträge im Unternehmensverbund.',
      },
    ],
  },
  {
    title: 'Betrieb & Finanzen',
    intro: 'Operative Steuerung und verlässliche Abwicklung aller Entwicklungsaufträge.',
    members: [
      {
        name: 'Sabine Vogt',
        role: 'Leiterin Operations',
        description:
          'Sorgt dafür, dass Entwicklungsaufträge planbar laufen — von der Beauftragung bis zur Abnahme.',
      },
      {
        name: 'Andrea Wenzel',
        role: 'Leiterin Finanzen',
        description:
          'Hält Aufwände und Abrechnung im Blick und sorgt für transparente Leistungsnachweise gegenüber den Auftraggebern.',
      },
    ],
  },
  {
    title: 'People & Community',
    intro: 'Erste Ansprechpartner für Bewerber und Mitarbeitende — vom Onboarding bis zur Kultur.',
    members: [
      {
        name: 'Jonas Beckmann',
        role: 'Recruiting & Community',
        description:
          'Erste Anlaufstelle für neue Bewerberinnen und Bewerber — vom ersten Kontakt bis zum Onboarding.',
      },
      {
        name: 'Katrin Hofmann',
        role: 'Head of People & Culture',
        description:
          'Verantwortlich für ein wertschätzendes Miteinander — intern wie auch in der Zusammenarbeit mit unseren Mitarbeitenden.',
      },
    ],
  },
  {
    title: 'Technologie',
    intro: 'Architektur, Implementierung und Betrieb der beauftragten Softwarelösungen.',
    members: [
      {
        name: 'Michael Schreiber',
        role: 'Projektleiter',
        description:
          'Leitet Entwicklungsaufträge und sorgt dafür, dass Anforderungen, Zeitpläne und Qualität zusammenkommen.',
      },
      {
        name: 'Stefan Lindner',
        role: 'Softwareentwickler',
        description:
          'Entwickelt Backend-Services und Schnittstellen und verantwortet Code-Qualität und Releases.',
      },
    ],
  },
  {
    title: 'Qualitätssicherung & Testing',
    intro: 'Strukturierte Tests und belastbare Ergebnisse vor jeder Abnahme.',
    members: [
      {
        name: 'Daniel Krüger',
        role: 'Lead Quality Assurance',
        description:
          'Verantwortet Teststrategien je Auftrag und stellt einheitliche Qualitätsstandards über alle Projekte hinweg sicher.',
      },
      {
        name: 'Lena Bachmann',
        role: 'Testkoordinatorin',
        description:
          'Plant Testzyklen, betreut die Testautomatisierung und wertet Ergebnisse strukturiert aus.',
      },
    ],
  },
  {
    title: 'Anforderungen & Abstimmung',
    intro:
      'Direkter Draht zu den Fachbereichen der verbundenen Unternehmen — von der Anforderung bis zur Abnahme.',
    members: [
      {
        name: 'Tobias Reinhardt',
        role: 'Requirements Engineer',
        description:
          'Übersetzt fachliche Anforderungen der Auftraggeber in technische Spezifikationen und prüfbare Abnahmekriterien.',
      },
      {
        name: 'Carolin Maier',
        role: 'Auftragskoordinatorin',
        description:
          'Koordiniert Aufträge aus dem Unternehmensverbund und hält Umfang, Termine und Abstimmungen zusammen.',
      },
    ],
  },
];

const Team = () => {
  useEffect(() => {
    document.title = 'Team | Vendis Development Services GmbH';
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Team"
        title="Unser"
        highlight="Team"
        subtitle="Die Menschen hinter Vendis Development Services — Entwicklerinnen, Tester und Projektleiter mit Erfahrung in der Auftragsentwicklung."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Team' }]}
        image={photos.teamMeeting}
        imageAlt="Teambesprechung im Berliner Büro"
      />

      {/* Photo band */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 sm:pt-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Reveal>
              <Photo src={photos.officeOpenSpace} alt="Offener Arbeitsbereich" ratio="aspect-[3/4]" />
            </Reveal>
            <Reveal delay={2}>
              <Photo
                src={photos.collaborationHands}
                alt="Gemeinsame Abstimmung am Tisch"
                ratio="aspect-[3/4]"
              />
            </Reveal>
            <Reveal delay={3}>
              <Photo
                src={photos.pairProgramming}
                alt="Pair Programming im Entwicklungsteam"
                ratio="aspect-[3/4]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <SectionHead
            index="§ 01"
            label="Organisation"
            title="Sechs Bereiche, ein Auftrag."
            text="Von Anforderungsaufnahme über Entwicklung und Test bis zu Betrieb und People."
          />

          <div className="mt-16 space-y-14">
            {departments.map((dept, idx) => (
              <Reveal key={dept.title}>
                <div className="grid md:grid-cols-[minmax(0,260px)_1fr] gap-8 md:gap-14 border-t border-border pt-8">
                  <div>
                    <span className="font-mono text-[11px] tracking-[0.22em] text-primary">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-semibold leading-tight">
                      {dept.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {dept.intro}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                    {dept.members.map((member) => (
                      <div key={member.name}>
                        <h3 className="font-display text-lg font-semibold leading-tight">
                          {member.name}
                        </h3>
                        <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                          {member.role}
                        </p>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    ))}
                  </div>
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

export default Team;
