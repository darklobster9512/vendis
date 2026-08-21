import { Link } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  highlight?: string;
  subtitle: string;
  breadcrumb: { label: string; href?: string }[];
  eyebrow?: string;
}

const PageHero = ({ title, highlight, subtitle, breadcrumb, eyebrow }: PageHeroProps) => {
  return (
    <section className="relative bg-background border-b border-border pt-20 md:pt-28 pb-12 md:pb-16 px-4 sm:px-6">
      <div className="relative max-w-5xl mx-auto text-center">
        {/* Breadcrumb */}
        <nav className="hero-animate hero-animate-1 flex items-center justify-center gap-2 mb-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-muted-foreground/40">›</span>}
              {item.href ? (
                <Link to={item.href} className="hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-semibold">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        {/* Eyebrow: thin violet bar + label */}
        {eyebrow && (
          <div className="hero-animate hero-animate-1 flex flex-col items-center gap-3 mb-6">
            <span className="h-[2px] w-10 bg-primary" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold">
              {eyebrow}
            </span>
          </div>
        )}

        {/* Headline — rein typografisch, einziger Akzent: violetter Punkt */}
        <h1 className="hero-animate hero-animate-2 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-foreground mb-6">
          {title}
          {highlight && <> {highlight}</>}
          <span className="text-primary">.</span>
        </h1>

        <p className="hero-animate hero-animate-3 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
