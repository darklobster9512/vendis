import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageHero from '@/components/landing/PageHero';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Lightbulb, ClipboardCheck, Users, Cable, ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    id: 'beratung',
    title: 'Technische Unternehmensberatung',
    headline: 'Beratung',
    description:
      'Wir analysieren technische Vorhaben unabhängig und herstellerneutral — von der Machbarkeitsstudie über die Variantenbewertung bis zum belastbaren Lastenheft.',
    longDescription:
      'Unsere Berater bringen jahrzehntelange Erfahrung aus Industrie, Telekommunikation und öffentlicher Hand mit. Wir liefern Entscheidungsgrundlagen, die wirtschaftlich und technisch tragen.',
    features: [
      'Machbarkeitsstudien & Variantenvergleiche',
      'Technische Konzepte & Lastenhefte',
      'Wirtschaftlichkeitsbewertung & Business Case',
      'Risiko- und Schnittstellenanalyse',
      'Strategische Technologie-Roadmap',
      'Unabhängige Gutachten & Second Opinions',
    ],
  },
  {
    icon: ClipboardCheck,
    id: 'projektmanagement',
    title: 'Projektmanagement & Controlling',
    headline: 'Projektsteuerung',
    description:
      'Technische und wirtschaftliche Projektleitung über alle Gewerke hinweg — planbar in Termin, Budget und Qualität.',
    longDescription:
      'Wir übernehmen die Steuerung komplexer Technik-Projekte von der Initiierung bis zur Abnahme. Mit klarem Reporting, sauberer Dokumentation und belastbarer Kosten- und Terminkontrolle.',
    features: [
      'Projektleitung & Projektsteuerung (PMI / IPMA)',
      'Termin-, Kosten- und Qualitätscontrolling',
      'Ausschreibung & Vergabe (auch VOB/VOL)',
      'Bauüberwachung & Abnahme',
      'Stakeholder- & Lenkungskreis-Reporting',
      'Claim- und Nachtragsmanagement',
    ],
  },
  {
    icon: Users,
    id: 'personalberatung',
    title: 'Personalberatung',
    headline: 'Personal',
    description:
      'Fach- und Führungskräfte für Technik, Projektmanagement und Vertrieb — passgenau besetzt, diskret begleitet.',
    longDescription:
      'Wir kennen die Branche und die Profile. Unsere Personalberatung verbindet technisches Verständnis mit langjährigem Netzwerk in Telekommunikation, Elektrotechnik und Anlagenbau.',
    features: [
      'Direktansprache von Fach- und Führungskräften',
      'Besetzung von Projekt- und Bauleitungen',
      'Recruiting für Vertrieb & Technik',
      'Sonstige Akquisitionsdienstleistungen',
      'Diskretion & Branchen-Netzwerk',
      'Garantie- und Nachbesetzungsklauseln',
    ],
  },
  {
    icon: Cable,
    id: 'anlagenplanung',
    title: 'Elektro- & Fernmeldetechnik',
    headline: 'Anlagenplanung',
    description:
      'Planung und Vertrieb elektrotechnischer und fernmeldetechnischer Anlagen aller Art — von der Vorplanung bis zur Inbetriebnahme.',
    longDescription:
      'Wir planen Anlagen nach geltenden Normen und gängiger HOAI-Logik. Vom Konzept über Leistungsverzeichnis und Vergabe bis zur Bauüberwachung und Übergabe an den Betreiber.',
    features: [
      'Vorplanung & Entwurfsplanung',
      'Ausführungs- & Detailplanung',
      'Fernmelde-, Daten- und Sicherheitstechnik',
      'Elektrotechnische Anlagen (Stark- & Schwachstrom)',
      'Bauüberwachung & Inbetriebnahme',
      'Vertrieb & Lieferung passender Komponenten',
    ],
  },
];

const Leistungen = () => {
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    document.title = 'Leistungen | for.tel Solutions';
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
        eyebrow="Leistungen"
        title="Unsere"
        highlight="Leistungen"
        subtitle="Vier Säulen: Technische Beratung, Projektmanagement, Personalberatung und Anlagenplanung — aus einer Hand."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Leistungen' },
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
                className={`scroll-hidden delay-${Math.min(i + 1, 4)} ${isVisible ? 'scroll-visible' : ''}`}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:direction-rtl' : ''}`}>
                  <div className={isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-blue flex items-center justify-center">
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
                      Projekt besprechen
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                  <div className={isEven ? 'lg:order-1' : ''}>
                    <div className="rounded-2xl border border-border/60 bg-white p-8">
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

export default Leistungen;
