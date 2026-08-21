import { useEffect } from 'react';

import PageHero from '@/components/landing/PageHero';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Search, PenTool, FileSignature, HardHat, CheckCircle2, Users, Shield, Scale, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Analyse',
    subtitle: 'Verstehen & Bewerten',
    description: 'Bestandsaufnahme, Stakeholder-Interviews und technische Bewertung. Wir verstehen Auftrag, Rahmenbedingungen und Risiken vor jeder Planung.',
    details: [
      'Stakeholder-Interviews & Workshops',
      'Bestandsaufnahme & technische Bewertung',
      'Anforderungs- und Rahmenanalyse',
      'Risiko- und Schnittstellenanalyse',
      'Priorisierte Handlungsempfehlungen',
    ],
    duration: '1–4 Wochen',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Konzept & Planung',
    subtitle: 'Lösung & Kostenrahmen',
    description: 'Technisches Konzept, Variantenvergleich und Lastenheft. Mit belastbarem Kostenrahmen und klarem Terminplan.',
    details: [
      'Technisches Konzept & Lastenheft',
      'Variantenvergleich & Wirtschaftlichkeit',
      'Vor- und Entwurfsplanung',
      'Kostenschätzung & -berechnung',
      'Termin- und Meilensteinplanung',
    ],
    duration: '2–8 Wochen',
  },
  {
    icon: FileSignature,
    number: '03',
    title: 'Ausschreibung & Vergabe',
    subtitle: 'LV, Submission, Vergabe',
    description: 'Leistungsverzeichnis, Vergabeverfahren und Vergabeempfehlung — auch öffentlich nach VOB/VOL. Wir begleiten Verhandlungen und Beauftragung.',
    details: [
      'Leistungsverzeichnis & Ausschreibungsunterlagen',
      'Vergabeverfahren (privat & öffentlich)',
      'Angebotsprüfung & Preisspiegel',
      'Vergabeempfehlung & Vergabegespräche',
      'Vertragsgestaltung & Beauftragung',
    ],
    duration: '4–12 Wochen',
  },
  {
    icon: HardHat,
    number: '04',
    title: 'Realisierung & Betrieb',
    subtitle: 'Bauüberwachung & Abnahme',
    description: 'Bauüberwachung, Termin- und Kostenkontrolle, Abnahme und Übergabe. Auf Wunsch begleiten wir den Betrieb weiter.',
    details: [
      'Bauüberwachung & Qualitätssicherung',
      'Termin- und Kostencontrolling',
      'Claim- und Nachtragsmanagement',
      'Abnahme & Mängelmanagement',
      'Übergabe, Dokumentation & Schulung',
    ],
    duration: 'projektspezifisch',
  },
];

const principles = [
  {
    icon: Users,
    title: 'Partnerschaftlich',
    description: 'Wir arbeiten Seite an Seite mit Ihrem Team — keine Black Box, volle Transparenz.',
  },
  {
    icon: Scale,
    title: 'Herstellerneutral',
    description: 'Keine Provisionen, keine Lock-Ins. Empfehlungen rein nach Auftrag und Anforderung.',
  },
  {
    icon: Shield,
    title: 'Normenkonform',
    description: 'Planung nach DIN VDE, HOAI, VOB/VOL und einschlägigen Branchenrichtlinien.',
  },
  {
    icon: RefreshCw,
    title: 'Nachhaltig',
    description: 'Langfristig betreibbare Anlagen statt Quick-Fixes. Ihr Investment trägt dauerhaft.',
  },
];

const Methodik = () => {
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    document.title = 'Methodik | for.tel Solutions';
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
        eyebrow="Methodik"
        title="Unsere"
        highlight="Methodik"
        subtitle="Ein bewährter Vier-Phasen-Prozess für technische Projekte — strukturiert, transparent, planbar."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Methodik' },
        ]}
      />

      <section ref={ref} className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 1;
            return (
              <div
                key={step.number}
                className={`scroll-hidden delay-${Math.min(i + 1, 3)} ${isVisible ? 'scroll-visible' : ''}`}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
                  <div className={isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-blue flex items-center justify-center">
                        <Icon size={26} className="text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-muted-foreground tracking-wider">PHASE {step.number}</span>
                        <h2 className="text-3xl font-extrabold tracking-tight">{step.title}</h2>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">{step.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{step.description}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] border border-primary/20 text-sm font-medium text-primary">
                      Dauer: {step.duration}
                    </div>
                  </div>
                  <div className={isEven ? 'lg:order-1' : ''}>
                    <div className="rounded-2xl border border-border/60 bg-white p-8">
                      <h3 className="text-sm font-bold text-foreground mb-6">Ergebnisse & Aktivitäten</h3>
                      <div className="space-y-4">
                        {step.details.map((detail) => (
                          <div key={detail} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
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
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 scroll-hidden">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Prinzipien</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              So arbeiten <span className="text-gradient-blue">wir</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="scroll-hidden rounded-2xl border border-border/60 bg-white p-6 text-center hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.05] transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-gradient-blue flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-base font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
};

export default Methodik;
