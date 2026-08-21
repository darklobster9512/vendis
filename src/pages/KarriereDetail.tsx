import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

import PageHero from '@/components/landing/PageHero';
import Footer from '@/components/landing/Footer';
import Reveal from '@/components/site/Reveal';
import TickList from '@/components/site/TickList';
import { stellen } from '@/data/karriereStellen';

const KarriereDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const stelle = stellen.find((s) => s.slug === slug);

  if (!stelle) return <Navigate to="/karriere" replace />;

  const contentSections = [
    { index: '§ 01', title: 'Deine Aufgaben', items: stelle.aufgaben },
    { index: '§ 02', title: 'Dein Profil', items: stelle.voraussetzungen },
    { index: '§ 03', title: 'Was wir bieten', items: stelle.benefits },
  ];

  const meta = [
    { label: 'Standort', value: stelle.standort },
    { label: 'Arbeitsmodell', value: stelle.modell },
    ...(stelle.arbeitszeit ? [{ label: 'Arbeitszeit', value: stelle.arbeitszeit }] : []),
    ...(stelle.stundenlohn ? [{ label: 'Stundenlohn', value: stelle.stundenlohn }] : []),
  ];

  return (
    <>
      <PageHero
        eyebrow="Offene Position"
        title={stelle.titel}
        subtitle={stelle.kurzbeschreibung}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Karriere', href: '/karriere' },
          { label: stelle.titel },
        ]}
      />

      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-14 lg:gap-20">
            {/* Inhalt */}
            <div>
              <Reveal>
                <p className="border-t border-border pt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Über die Position
                </p>
                <p className="mt-6 text-lg sm:text-xl leading-relaxed text-foreground/80">
                  {stelle.beschreibung}
                </p>
              </Reveal>

              <div className="mt-16 space-y-14">
                {contentSections.map((section, i) => (
                  <Reveal key={section.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                    <div className="flex items-center gap-4 border-t border-border pt-5">
                      <span className="font-mono text-[11px] tracking-[0.22em] text-primary">
                        {section.index}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                        {section.title}
                      </span>
                    </div>
                    <div className="mt-6">
                      <TickList items={section.items} />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="lg:sticky lg:top-28 space-y-10">
                <Reveal>
                  <dl className="border-t border-border">
                    {meta.map((m) => (
                      <div
                        key={m.label}
                        className="flex items-baseline justify-between gap-4 border-b border-border py-4"
                      >
                        <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                          {m.label}
                        </dt>
                        <dd className="text-sm font-medium text-foreground text-right">
                          {m.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>

                <Reveal delay={2} className="bg-ink text-ink-foreground rounded-lg p-8">
                  <h3 className="font-display text-2xl font-semibold leading-tight">
                    Interessiert?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-foreground/70">
                    Bewirb dich in wenigen Minuten — wir melden uns innerhalb von 24 Stunden
                    an Werktagen.
                  </p>
                  <Link
                    to={`/karriere/bewerbung?stelle=${encodeURIComponent(stelle.titel)}`}
                    className="mt-6 inline-flex w-full items-center justify-between gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Jetzt bewerben
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/kontakt"
                    className="mt-3 inline-flex w-full items-center justify-between gap-2 rounded-md border border-ink-foreground/20 px-6 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
                  >
                    Fragen zur Stelle
                    <Mail size={16} />
                  </Link>
                </Reveal>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default KarriereDetail;
