import { useEffect } from 'react';

import PageHero from '@/components/landing/PageHero';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Server, Layout, Database, Cloud } from 'lucide-react';

const capabilities = [
  {
    icon: Server,
    title: 'Backend & Services',
    description:
      'Serverseitige Anwendungen, REST- und GraphQL-APIs, Hintergrundjobs und Integrationen — mit TypeScript/Node.js, Python, Java und .NET.',
  },
  {
    icon: Layout,
    title: 'Frontend & Web-Apps',
    description:
      'Interne Anwendungen, Portale und Oberflächen mit React, TypeScript und Tailwind CSS — barrierearm, performant und wartbar.',
  },
  {
    icon: Database,
    title: 'Daten & Persistenz',
    description:
      'Datenmodellierung, Migrationen und Auswertungen mit PostgreSQL, MySQL, Redis und Objektspeichern — inklusive Altsystem-Ablösungen.',
  },
  {
    icon: Cloud,
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
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    document.title = 'Technologien | Vendis Development Services GmbH';
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
        eyebrow="Technologien"
        title="Unser"
        highlight="Technologie-Stack"
        subtitle="Womit wir arbeiten: bewährte Sprachen, Frameworks und Werkzeuge für langlebige, wartbare Softwarelösungen."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Technologien' },
        ]}
      />

      {/* Kompetenzen */}
      <section ref={ref} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Kompetenzen</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Was wir <span className="text-gradient-blue">bauen</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className={`scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''} group rounded-md border border-border/60 bg-white p-8 hover:border-primary/20 transition-all duration-500`}
                >
                  <div className="w-12 h-12 rounded-md bg-gradient-blue flex items-center justify-center mb-5">
                    <Icon size={22} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-3">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 scroll-hidden">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Stack</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Werkzeuge & <span className="text-gradient-blue">Frameworks</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Die Technologieauswahl richtet sich nach den Vorgaben und der bestehenden Systemlandschaft des Auftraggebers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stacks.map((p, i) => (
              <div key={p.name} className="rounded-md border border-border/60 bg-white p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 text-primary font-display font-bold text-sm flex items-center justify-center shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{p.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Praxis */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 scroll-hidden">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Praxis</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Entwicklungs<span className="text-gradient-blue">praxis</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {practices.map((project) => (
              <div
                key={project.title}
                className="scroll-hidden rounded-md border border-border/60 bg-white p-8 hover:border-primary/20 transition-all duration-500"
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl font-bold tracking-tight mt-2 mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-accent text-xs font-medium text-accent-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
};

export default Technologien;
