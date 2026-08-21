import { useEffect } from 'react';

import PageHero from '@/components/landing/PageHero';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

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
    intro: 'Direkter Draht zu den Fachbereichen der verbundenen Unternehmen — von der Anforderung bis zur Abnahme.',
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
        eyebrow="Team"
        title="Unser"
        highlight="Team"
        subtitle="Die Menschen hinter Vendis Development Services — Entwicklerinnen, Tester und Projektleiter mit Erfahrung in der Auftragsentwicklung."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Team' },
        ]}
      />

      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="space-y-16">
          {departments.map((dept, idx) => (
            <div
              key={dept.title}
              className={`scroll-hidden ${idx > 0 ? 'pt-16 border-t border-border' : ''}`}
            >
              <div className="grid md:grid-cols-[220px_1fr] gap-8 md:gap-12">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground leading-tight">
                    {dept.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {dept.intro}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                  {dept.members.map((member) => (
                    <div key={member.name}>
                      <h3 className="text-lg font-semibold text-foreground leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mt-1">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
};

export default Team;
