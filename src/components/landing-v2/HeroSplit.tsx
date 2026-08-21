import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const HeroSplit = () => {
  return (
    <section className="relative w-full bg-background overflow-hidden pt-28 sm:pt-32 pb-20 md:pb-28 px-4 sm:px-6 md:px-8">
      <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/[0.05] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* ─────────────────────── LEFT: CONTENT ─────────────────────── */}
        <div className="flex flex-col items-start">
          <div className="hero-animate hero-animate-1 inline-flex items-center gap-2 py-1.5 px-3 rounded-md bg-muted border border-border mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-muted-foreground">
              Software &amp; Web aus Filderstadt · seit 2006
            </span>
          </div>

          <h1 className="hero-animate hero-animate-2 font-display text-foreground text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
            Maßgeschneiderte Software.{' '}
            <span className="text-primary">Exzellente Webentwicklung.</span>
          </h1>

          <p className="hero-animate hero-animate-3 text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Wir begleiten mittelständische Unternehmen bei der digitalen
            Transformation. Von performanten Web-Applikationen bis hin zu
            komplexen Software-Architekturen — verlässlich, individuell und
            technologisch auf höchstem Niveau.
          </p>

          <div className="hero-animate hero-animate-3 flex flex-wrap gap-4">
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground font-semibold rounded-md shadow-sm hover:bg-primary/90 transition-all"
            >
              Projekt starten
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/leistungen"
              className="inline-flex items-center px-7 py-4 bg-background text-foreground border border-border font-semibold rounded-md shadow-sm hover:bg-muted transition-all"
            >
              Referenzen ansehen
            </Link>
          </div>

          <div className="hero-animate hero-animate-4 mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/70">
              <CheckCircle2 size={15} className="text-primary" />
              Maßgeschneidert
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/70">
              <CheckCircle2 size={15} className="text-primary" />
              Skalierbar
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/70">
              <CheckCircle2 size={15} className="text-primary" />
              Langlebig
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/70">
              <CheckCircle2 size={15} className="text-primary" />
              Made in Germany
            </span>
          </div>
        </div>

        {/* ─────────────────────── RIGHT: UI MOCKUP ─────────────────────── */}
        <div className="hero-animate hero-animate-3 relative">
          <div className="relative bg-background border border-border rounded-md shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/40">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
              </div>
              <div className="ml-3 px-3 py-1 bg-background border border-border rounded-md text-[10px] text-muted-foreground/70 w-full max-w-xs truncate font-mono">
                app.for-tel.solutions/dashboard
              </div>
            </div>

            <div className="p-6 bg-background min-h-[420px]">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-muted/40 rounded-md border border-border p-4">
                  <div className="h-1.5 w-10 bg-primary/30 rounded-full mb-3" />
                  <div className="text-lg font-bold text-foreground tabular-nums">12.847</div>
                  <div className="h-1.5 w-16 bg-border rounded-full mt-2" />
                </div>
                <div className="bg-muted/40 rounded-md border border-border p-4">
                  <div className="h-1.5 w-10 bg-border rounded-full mb-3" />
                  <div className="text-lg font-bold text-foreground tabular-nums">98,4%</div>
                  <div className="h-1.5 w-12 bg-border rounded-full mt-2" />
                </div>
                <div className="bg-muted/40 rounded-md border border-border p-4">
                  <div className="h-1.5 w-10 bg-border rounded-full mb-3" />
                  <div className="text-lg font-bold text-foreground tabular-nums">€ 42k</div>
                  <div className="h-1.5 w-20 bg-border rounded-full mt-2" />
                </div>
              </div>

              <div className="h-44 bg-muted/30 rounded-md border border-border relative overflow-hidden p-4">
                <div className="absolute top-3 left-4 flex items-center gap-2">
                  <div className="h-1.5 w-16 bg-border rounded-full" />
                  <div className="h-1.5 w-8 bg-border rounded-full" />
                </div>
                <div className="absolute inset-x-4 bottom-4 flex items-end gap-2 h-28">
                  {[40, 70, 55, 88, 62, 95, 48, 78, 100, 64].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-[2px]"
                      style={{
                        height: `${h}%`,
                        backgroundColor:
                          i === 8
                            ? 'hsl(var(--primary))'
                            : `hsl(var(--primary) / ${0.15 + (h / 100) * 0.25})`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mt-5 px-1">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-24 bg-border rounded-full" />
                  <div className="h-2 w-12 bg-border rounded-full" />
                </div>
                <div className="h-2 w-14 bg-primary/30 rounded-full" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-4 sm:-left-6 p-4 bg-background border border-border rounded-md shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-md">
                <CheckCircle2 size={18} className="text-primary" />
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                  System Status
                </div>
                <div className="text-sm font-semibold text-foreground">100% Verfügbar</div>
              </div>
            </div>
          </div>

          <div className="absolute -top-4 -right-3 sm:-right-5 px-3 py-2 bg-background border border-border rounded-md shadow-sm hidden sm:flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-[11px] font-mono text-foreground/80">deploy · prod</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSplit;
