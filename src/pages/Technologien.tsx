import { useEffect } from 'react';

import PageHero from '@/components/landing/PageHero';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import SectionHead from '@/components/site/SectionHead';
import SplitRow from '@/components/site/SplitRow';
import Reveal from '@/components/site/Reveal';
import TickList from '@/components/site/TickList';
import { photos } from '@/lib/photos';

const capabilities = [
  {
    title: 'Backend & Services',
    description:
      'Serverseitige Anwendungen, REST- und GraphQL-APIs, Hintergrundjobs und Integrationen — mit TypeScript/Node.js, Python, Java und .NET.',
  },
  {
    title: 'Frontend & Web-Apps',
    description:
      'Interne Anwendungen, Portale und Oberflächen mit React, TypeScript und Tailwind CSS — barrierearm, performant und wartbar.',
  },
  {
    title: 'Daten & Persistenz',
    description:
      'Datenmodellierung, Migrationen und Auswertungen mit PostgreSQL, MySQL, Redis und Objektspeichern — inklusive Altsystem-Ablösungen.',
  },
  {
    title: 'Cloud, CI/CD & Betrieb',
    description:
      'Containerisierung, automatisierte Pipelines und Infrastructure-as-Code mit Docker, Kubernetes, GitHub Actions und Terraform.',
  },
];

const stacks = [
  { name: 'Sprachen', desc: 'TypeScript, JavaScript, Python, Java, C#, SQL' },
  { name: 'Backend', desc: 'Node.js, NestJS, FastAPI, Spring Boot, .NET' },
  { name: 'Frontend', desc: 'React, Next.js, Vite, Tailwind CSS' },
  { name: 'Datenbanken', desc: 'PostgreSQL, MySQL, Redis, Elasticsearch' },
  { name: 'Infrastruktur', desc: 'Docker, Kubernetes, Terraform, AWS, Azure' },
  { name: 'Qualität', desc: 'Jest, Vitest, Playwright, SonarQube, GitHub Actions' },
];

const practices = [
  {
    title: 'Versionierte Entwicklung',
    category: 'Arbeitsweise',
    description:
      'Git-basierte Workflows mit Branch-Strategie, Pull Requests und verpflichtenden Code-Reviews vor jedem Merge.',
    tags: ['Git', 'Code-Review', 'Branching'],
  },
  {
    title: 'Automatisierte Auslieferung',
    category: 'CI/CD',
    description:
      'Build, Test und Deployment laufen automatisiert. Releases sind reproduzierbar, dokumentiert und rückrollbar.',
    tags: ['CI/CD', 'Testautomatisierung', 'Releases'],
  },
  {
    title: 'Dokumentation & Übergabe',
    category: 'Ergebnisse',
    description:
      'Technische Dokumentation, Schnittstellenbeschreibungen und Betriebsanleitungen gehören zum Lieferumfang jedes Auftrags.',
    tags: ['Dokumentation', 'API-Specs', 'Wissenstransfer'],
  },
];

const Technologien = () => {
  useEffect(() => {
    document.title = 'Technologien | Vendis Development Services GmbH';
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Technologien"
        title="Unser"
        highlight="Technologie-Stack"
        subtitle="Womit wir arbeiten: bewährte Sprachen, Frameworks und Werkzeuge für langlebige, wartbare Softwarelösungen."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Technologien' }]}
        image={photos.deskTopdown}
        imageAlt="Schreibtisch mit Laptop, Notizen und Skizzen von oben"
      />

      {/* Kompetenzen */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <SplitRow
            index="§ 01"
            label="Kompetenzen"
            title="Was wir bauen."
            text="Vier Kompetenzfelder, die zusammen den technischen Rahmen jedes Entwicklungsauftrags bilden."
            image={photos.pairProgramming}
            alt="Entwicklerinnen und Entwickler arbeiten gemeinsam am Code"
          >
            <dl className="divide-y divide-border border-t border-border">
              {capabilities.map((cap) => (
                <div key={cap.title} className="py-5">
                  <dt className="font-display text-lg font-semibold">{cap.title}</dt>
                  <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {cap.description}
                  </dd>
                </div>
              ))}
            </dl>
          </SplitRow>
        </div>
      </section>

      {/* Stack */}
      <section className="bg-ink text-ink-foreground">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <SectionHead
            tone="dark"
            index="§ 02"
            label="Stack"
            title="Werkzeuge & Frameworks."
            text="Die Technologieauswahl richtet sich nach den Vorgaben und der bestehenden Systemlandschaft des Auftraggebers."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {stacks.map((p, i) => (
              <Reveal key={p.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="border-t border-ink-foreground/20 pt-5">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-primary-glow">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-3 font-display text-lg font-semibold">{p.name}</p>
                  <p className="mt-2 text-sm text-ink-foreground/60 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Praxis */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <SectionHead
            index="§ 03"
            label="Praxis"
            title="Entwicklungspraxis."
            text="Wie wir Qualität, Nachvollziehbarkeit und Übergabefähigkeit im Alltag sicherstellen."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
            {practices.map((project, i) => (
              <Reveal key={project.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="border-t border-border pt-5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-border font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <TickList
              items={[
                'Technologieauswahl nach Vorgaben des Auftraggebers',
                'Keine Bindung an proprietäre Insellösungen',
                'Dokumentierte Abhängigkeiten und Lizenzen',
                'Übergabefähige Repositories und Pipelines',
              ]}
              columns={2}
            />
          </Reveal>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
};

export default Technologien;
