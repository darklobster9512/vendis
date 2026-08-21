import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { photos } from '@/assets/photos';
import Photo from '@/components/site/Photo';
import Reveal from '@/components/site/Reveal';

const CTASection = () => (
  <section className="bg-surface">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal>
          <Photo
            src={photos.teamMeeting}
            alt="Entwicklungsteam bespricht einen Auftrag im Besprechungsraum"
            ratio="aspect-[4/3]"
          />
        </Reveal>
        <Reveal delay={2}>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
            Nächster Schritt
          </p>
          <h2 className="mt-6 font-display text-[2rem] sm:text-[2.8rem] font-semibold leading-[1.05]">
            Umfang klären, Aufwand einschätzen, starten.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">
            Beschreiben Sie das Vorhaben und die bestehende Systemlandschaft. Wir bewerten
            Machbarkeit und Aufwand und schlagen ein Vorgehen für den Entwicklungsauftrag vor.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Anfrage stellen
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              to="/prozess"
              className="inline-flex items-center h-12 px-6 rounded-full border border-border text-foreground font-semibold hover:border-primary/50 hover:text-primary transition-colors"
            >
              Ablauf ansehen
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default CTASection;
