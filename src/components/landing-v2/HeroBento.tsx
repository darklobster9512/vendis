import { Link } from 'react-router-dom';
import { ArrowRight, Building2, ShieldCheck, Cable, Users, CalendarDays, Lightbulb, CheckCircle2 } from 'lucide-react';

const HeroBento = () => {
  return (
    <section className="relative w-full flex items-start justify-center bg-muted/40 pt-24 sm:pt-28 pb-24 px-4 sm:px-6 md:px-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[520px] rounded-full bg-primary/[0.06] blur-[120px] pointer-events-none -z-0" />

      <div className="relative max-w-7xl w-full grid grid-cols-12 gap-5 lg:gap-6 items-start">
        {/* ───── LEFT: STICKY MAIN CONTENT (transparent) ───── */}
        <div className="hero-animate hero-animate-1 col-span-12 lg:col-span-7 lg:sticky lg:top-24 lg:self-start flex flex-col justify-between relative">
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-8">
              <ShieldCheck size={13} className="text-primary" />
              <span className="text-primary text-xs font-semibold tracking-wide uppercase">
                Gegründet 2006 · Filderstadt
              </span>
            </div>

            <h1 className="font-display text-[2.25rem] sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.08] mb-8">
              Technische Beratung &amp;
              <br />
              <span className="text-primary">Anlagenplanung.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10 lg:mb-12">
              Wir beraten, steuern und planen technische Projekte — von der Machbarkeitsstudie
              über Projektmanagement und Personalberatung bis zur Planung elektro- und
              fernmeldetechnischer Anlagen.{' '}
              <span className="text-foreground font-medium">Verlässlich. Unabhängig. Aus einer Hand.</span>
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                to="/kontakt"
                className="group/btn inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground font-semibold rounded-md transition-all shadow-sm hover:bg-primary/90 hover:-translate-y-0.5"
              >
                Projekt anfragen
                <ArrowRight size={17} className="transition-transform group-hover/btn:translate-x-1" />
              </Link>
              <Link
                to="/leistungen"
                className="inline-flex items-center px-7 py-4 bg-background text-foreground border border-border font-semibold rounded-md hover:border-primary/40 hover:bg-muted transition-all"
              >
                Unsere Leistungen
              </Link>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-16 grid grid-cols-2 gap-8 border-t border-border pt-8">
            <div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-foreground tabular-nums">
                20<span className="text-foreground/40">+</span>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">
                Jahre Erfahrung
              </div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-foreground tabular-nums">
                150<span className="text-foreground/40">+</span>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">
                Projekte realisiert
              </div>
            </div>
          </div>
        </div>

        {/* ───── RIGHT: VISUAL COLUMN ───── */}
        <div className="col-span-12 lg:col-span-5 grid grid-rows-[auto_auto] gap-5 lg:gap-6">
          {/* Expertise-Quadrant Card */}
          <div className="hero-animate hero-animate-2 bg-background rounded-lg p-7 sm:p-8 shadow-sm border border-border relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/[0.06] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 mb-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[2px] w-8 bg-primary rounded-full" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
                  Expertise &amp; Wertschöpfung
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground leading-tight mb-2.5">
                Ganzheitliche Engineering-<br />Lösungen aus Filderstadt.
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Seit 2006 begleiten wir komplexe Infrastrukturprojekte mit
                unabhängiger Präzision und tiefem technischen Verständnis.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-3">
              {[
                { Icon: Cable, label: 'Anlagenplanung', sub: 'Elektro & Fernmelden' },
                { Icon: Users, label: 'Personalberatung', sub: 'Experten-Recruiting' },
                { Icon: CalendarDays, label: 'Management', sub: 'Projektsteuerung' },
                { Icon: Lightbulb, label: 'Beratung', sub: 'Strategie & Technik' },
              ].map(({ Icon, label, sub }) => (
                <div
                  key={label}
                  className="p-3.5 rounded-md bg-muted/50 border border-border transition-all duration-300 hover:bg-background hover:shadow-sm hover:border-primary/20"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon size={15} className="text-primary" />
                  </div>
                  <div className="text-xs font-semibold text-foreground">{label}</div>
                  <div className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider leading-tight">
                    {sub}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-7 pt-5 border-t border-border flex items-center justify-between">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-[9px] font-bold flex items-center justify-center ring-2 ring-background">MK</div>
                <div className="w-7 h-7 rounded-full bg-indigo-500 text-white text-[9px] font-bold flex items-center justify-center ring-2 ring-background">TS</div>
                <div className="w-7 h-7 rounded-full bg-emerald-500 text-white text-[9px] font-bold flex items-center justify-center ring-2 ring-background">AL</div>
                <div className="w-7 h-7 rounded-full bg-muted text-foreground text-[9px] font-bold flex items-center justify-center ring-2 ring-background border border-border">+18</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-bold text-foreground uppercase tracking-tight">Verlässlichkeit</div>
                <div className="text-[10px] text-muted-foreground">Seit 2006 am Markt</div>
              </div>
            </div>
          </div>


          {/* Two smaller info tiles */}
          <div className="grid grid-cols-2 gap-5 lg:gap-6">
            <div className="hero-animate hero-animate-3 bg-background rounded-lg p-6 sm:p-8 border border-border shadow-sm hover:shadow transition-shadow group flex flex-col">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Building2 size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="font-display font-bold text-foreground">Branchen</div>
              <div className="text-[11px] text-muted-foreground mt-1 uppercase tracking-tight leading-snug">
                Industrie, TK, Energie &amp; Öff. Hand
              </div>
            </div>

            <div className="hero-animate hero-animate-4 bg-primary rounded-lg p-6 sm:p-8 shadow-sm flex flex-col justify-end relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 sm:p-8">
                <ShieldCheck size={28} className="text-primary-foreground/25" />
              </div>
              <div className="font-display font-bold text-primary-foreground">Verlässlich.</div>
              <div className="text-primary-foreground/75 text-sm leading-snug">
                Unabhängig.
                <br />
                Aus einer Hand.
              </div>
            </div>
          </div>

          {/* Extra "Branchen-Fokus" tile — adds scroll length so sticky effect is visible */}
          <div className="hero-animate hero-animate-4 bg-background rounded-lg p-7 sm:p-8 border border-border shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-8 bg-primary rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
                Branchen-Fokus
              </span>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-foreground leading-tight mb-4">
              Wo wir Mehrwert schaffen.
            </h3>
            <ul className="space-y-3">
              {[
                'Telekommunikation & Fernmeldenetze',
                'Energie- & Verteilnetzbetreiber',
                'Industrie & öffentliche Hand',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBento;
