import { useEffect } from 'react';

import PageHero from '@/components/landing/PageHero';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CheckCircle2, Cable, Radio, Shield, Network, Zap, ServerCog } from 'lucide-react';

const capabilities = [
  {
    icon: Cable,
    title: 'Elektrotechnische Anlagen',
    description:
      'Planung von Starkstrom- und Schwachstromanlagen — Niederspannung, USV, Beleuchtung, Verteilungen und Erdung nach geltenden Normen (DIN VDE).',
  },
  {
    icon: Radio,
    title: 'Fernmelde- & Kommunikationstechnik',
    description:
      'Telekommunikations-, Daten- und Übertragungstechnik. Von strukturierter Verkabelung über LWL-Trassen bis zu aktiven Netzwerk- und VoIP-Komponenten.',
  },
  {
    icon: Shield,
    title: 'Sicherheits- & Gefahrenmeldetechnik',
    description:
      'Brandmeldeanlagen, Einbruchmeldetechnik, Videoüberwachung und Zutrittskontrolle — geplant und ausgeschrieben nach den einschlägigen Richtlinien.',
  },
  {
    icon: Network,
    title: 'Rechenzentrums- & Serverraum-Infrastruktur',
    description:
      'Kühlung, Stromversorgung, Brandschutz, Verkabelung und Monitoring für Serverräume und kleine bis mittlere Rechenzentren.',
  },
];

const phases = [
  { name: 'Grundlagen­ermittlung', desc: 'Bestand, Anforderungen, Randbedingungen' },
  { name: 'Vorplanung', desc: 'Lösungs­ansätze, Variantenvergleich, Kostenrahmen' },
  { name: 'Entwurfs­planung', desc: 'Berechnungen, Schemata, Kostenberechnung' },
  { name: 'Genehmigungs­planung', desc: 'Unterlagen für Behörden & Betreiber' },
  { name: 'Ausführungs­planung', desc: 'Werk- und Detailpläne, Stücklisten' },
  { name: 'Ausschreibung & Vergabe', desc: 'LV, Submission, Vergabeempfehlung' },
  { name: 'Bauüberwachung', desc: 'Termine, Qualität, Abnahme, Dokumentation' },
];

const references = [
  {
    title: 'Fernmeldetechnik Verwaltungsneubau',
    category: 'Öffentliche Hand',
    description: 'Planung und Bauüberwachung der gesamten Daten-, Telefon- und Sicherheitstechnik über alle Leistungsphasen.',
    tags: ['Fernmeldetechnik', 'Sicherheitstechnik', 'LPH 1–9'],
  },
  {
    title: 'Modernisierung Werksinfrastruktur',
    category: 'Industrie',
    description: 'Konzept und Ausschreibung der elektrotechnischen Anlagen für eine Produktionsstandort-Erweiterung.',
    tags: ['Elektrotechnik', 'Ausschreibung', 'Bauüberwachung'],
  },
  {
    title: 'Glasfaser-Rollout Versorger',
    category: 'TK / Energie',
    description: 'Technische und wirtschaftliche Projektsteuerung eines mehrjährigen FTTH-Ausbaus.',
    tags: ['Projektsteuerung', 'LWL', 'Controlling'],
  },
];

const Software = () => {
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    document.title = 'Anlagenplanung | for.tel Solutions';
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
        eyebrow="Anlagenplanung"
        title="Planung &"
        highlight="Anlagentechnik"
        subtitle="Planung und Vertrieb elektrotechnischer und fernmeldetechnischer Anlagen aller Art — von der Grundlagenermittlung bis zur Inbetriebnahme."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Anlagenplanung' },
        ]}
      />

      {/* Capabilities */}
      <section ref={ref} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Kompetenzen</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Was wir <span className="text-gradient-blue">planen</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className={`scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''} group rounded-2xl border border-border/60 bg-white p-8 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.05] transition-all duration-500`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-blue flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
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

      {/* Leistungsphasen */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 scroll-hidden">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Leistungsphasen</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Planung nach <span className="text-gradient-blue">HOAI-Logik</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Wir übernehmen einzelne Leistungsphasen oder die gesamte Planung von LPH 1 bis 9.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {phases.map((p, i) => (
              <div key={p.name} className="rounded-2xl border border-border/60 bg-white p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary font-display font-bold text-sm flex items-center justify-center shrink-0">
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

      {/* Referenzen */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 scroll-hidden">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Projekte</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Ausgewählte <span className="text-gradient-blue">Referenzen</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {references.map((project) => (
              <div key={project.title} className="scroll-hidden rounded-2xl border border-border/60 bg-white p-8 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.05] transition-all duration-500">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl font-bold tracking-tight mt-2 mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-accent text-xs font-medium text-accent-foreground">{tag}</span>
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

export default Software;
