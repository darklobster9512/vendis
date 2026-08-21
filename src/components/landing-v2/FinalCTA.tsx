import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FinalCTA = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className={`max-w-7xl mx-auto relative rounded-md overflow-hidden bg-foreground text-background p-10 sm:p-14 lg:p-20 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
        {/* subtle glow */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px]" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.25em] text-primary-glow mb-5 font-semibold">Erstgespräch</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
              Sprechen Sie mit uns über Ihr nächstes Technik-Projekt.
            </h2>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-background/75 leading-relaxed">
              30 Minuten, unverbindlich. Wir hören zu, stellen die richtigen Fragen und
              sagen Ihnen ehrlich, ob und wie wir als Berater, Projektsteuerer oder Planer
              der passende Partner sind.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link to="/kontakt" className="group inline-flex items-center justify-between gap-4 px-6 h-14 rounded-md bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all">
              <span>Termin anfragen</span>
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link to="/karriere" className="group inline-flex items-center justify-between gap-4 px-6 h-14 rounded-md border border-background/25 text-background font-semibold text-base hover:bg-background/5 transition-all">
              <span>Karriere bei for.tel</span>
              <ArrowUpRight size={18} className="text-background/60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <div className="mt-3 grid grid-cols-2 gap-3 text-[12px]">
              <div className="rounded-md border border-background/15 p-3">
                <p className="text-background/55 uppercase tracking-widest text-[10px]">Telefon</p>
                <p className="mt-1 text-background font-semibold">+49 211-86943272</p>
              </div>
              <div className="rounded-md border border-background/15 p-3">
                <p className="text-background/55 uppercase tracking-widest text-[10px]">E-Mail</p>
                <p className="mt-1 text-background font-semibold">kontakt@for-tel.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
