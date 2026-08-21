import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

import PageHero from '@/components/landing/PageHero';
import Footer from '@/components/landing/Footer';
import Reveal from '@/components/site/Reveal';
import SectionHead from '@/components/site/SectionHead';
import { photos } from '@/assets/photos';
import { stellen } from '@/data/karriereStellen';

const Karriere = () => {
  useEffect(() => {
    document.title = 'Karriere | Vendis Development Services GmbH';
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Karriere"
        title="Karriere bei"
        highlight="Vendis Development Services"
        subtitle="Werde Teil unseres Teams in Softwareentwicklung, Qualitätssicherung oder Betrieb. Wir suchen Menschen, die Softwarelösungen zuverlässig umsetzen und weiterentwickeln."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Karriere' }]}
        image={photos.officeOpenSpace}
        imageAlt="Arbeitsatmosphäre im Berliner Büro"
      />

      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <SectionHead
            index="§ 01"
            label="Offene Stellen"
            title="Aktuelle Positionen."
            text="Alle Rollen sind Teil unserer Auftragsentwicklung für verbundene Unternehmen."
          />

          <ul className="mt-14">
            {stellen.map((stelle, i) => (
              <Reveal as="li" key={stelle.slug} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <Link
                  to={`/karriere/${stelle.slug}`}
                  className="group grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)_auto] items-start gap-6 border-t border-border py-8 transition-colors hover:bg-surface/60"
                >
                  <div>
                    <span className="font-mono text-[11px] tracking-[0.22em] text-primary">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-3 font-display text-xl sm:text-2xl font-semibold leading-tight group-hover:text-primary transition-colors">
                      {stelle.titel}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      <span>{stelle.standort}</span>
                      <span>{stelle.modell}</span>
                      {stelle.stundenlohn && <span>{stelle.stundenlohn}/h</span>}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed lg:pt-9">
                    {stelle.kurzbeschreibung}
                  </p>

                  <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-primary lg:pt-10">
                    Details
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>

          <Reveal className="border-t border-border pt-8">
            <p className="max-w-2xl text-sm text-muted-foreground leading-relaxed">
              Keine passende Position dabei? Initiativbewerbungen sind jederzeit willkommen —
              schreiben Sie uns an{' '}
              <a
                href="mailto:kontakt@vendis-development.de"
                className="text-primary hover:underline"
              >
                kontakt@vendis-development.de
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Karriere;
