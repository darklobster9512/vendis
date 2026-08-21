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
        name: 'Manfred Beutel',
        role: 'Geschäftsführer',
        description:
          'Gründer von for.tel Solutions mit langjähriger Erfahrung im Aufbau digitaler Test- und Service-Teams. Verantwortet die strategische Ausrichtung.',
      },
    ],
  },
  {
    title: 'Betrieb & Finanzen',
    intro: 'Operative Steuerung und verlässliche Abwicklung aller Aufträge und Auszahlungen.',
    members: [
      {
        name: 'Sabine Vogt',
        role: 'Leiterin Operations',
        description:
          'Sorgt dafür, dass jeder Auftrag reibungslos läuft und unsere Tester pünktlich ihre Vergütung erhalten.',
      },
      {
        name: 'Andrea Wenzel',
        role: 'Leiterin Finanzen',
        description:
          'Hält alle Zahlen im Blick und stellt sicher, dass Auszahlungen zuverlässig und transparent erfolgen.',
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
          'Erste Anlaufstelle für neue Bewerber. Begleitet dich vom ersten Klick bis zum erfolgreichen Onboarding.',
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
    intro: 'Sichere, stabile und schnelle Prozesse als Fundament unserer Plattform.',
    members: [
      {
        name: 'Michael Schreiber',
        role: 'Projektleiter',
        description:
          'Leitet komplexe Kundenprojekte und sorgt dafür, dass Anforderungen, Zeitpläne und Qualität zuverlässig zusammenkommen.',
      },
      {
        name: 'Stefan Lindner',
        role: 'Softwareentwickler',
        description:
          'Entwickelt interne Tools und Schnittstellen, mit denen unsere Tester effizient und nachvollziehbar arbeiten können.',
      },
    ],
  },
  {
    title: 'Qualitätssicherung & Testing',
    intro: 'Das Herzstück unserer Arbeit — strukturierte Tests und belastbare Ergebnisse.',
    members: [
      {
        name: 'Daniel Krüger',
        role: 'Lead Quality Assurance',
        description:
          'Verantwortet Teststrategien für Kundenprojekte und stellt einheitliche Qualitätsstandards über alle Tester-Teams hinweg sicher.',
      },
      {
        name: 'Lena Bachmann',
        role: 'Testkoordinatorin',
        description:
          'Plant Testzyklen, verteilt Aufgaben an unsere Tester-Community und wertet Ergebnisse strukturiert aus.',
      },
    ],
  },
  {
    title: 'Kunden & Beratung',
    intro: 'Direkter Draht zu unseren Kunden — von der ersten Idee bis zur langfristigen Partnerschaft.',
    members: [
      {
        name: 'Tobias Reinhardt',
        role: 'Senior Consultant',
        description:
          'Berät Kunden bei der Optimierung digitaler Prozesse und übersetzt Geschäftsanforderungen in messbare Testkonzepte.',
      },
      {
        name: 'Carolin Maier',
        role: 'Key Account Managerin',
        description:
          'Erste Ansprechpartnerin für unsere Großkunden — von der ersten Anfrage bis zur langfristigen Partnerschaft.',
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
        subtitle="Die Menschen hinter for.tel Solutions — Berater, Projektleiter und Planer mit Branchenerfahrung."
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
