import { Link } from 'react-router-dom';
import Photo from '@/components/site/Photo';

interface PageHeroProps {
  title: string;
  highlight?: string;
  subtitle: string;
  breadcrumb: { label: string; href?: string }[];
  eyebrow?: string;
  image?: string;
  imageAlt?: string;
}

const PageHero = ({
  title,
  highlight,
  subtitle,
  breadcrumb,
  eyebrow,
  image,
  imageAlt = '',
}: PageHeroProps) => (
  <section className="relative bg-surface">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24">
      <nav className="hero-animate hero-animate-1 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {breadcrumb.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-border">/</span>}
            {item.href ? (
              <Link to={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </span>
        ))}
      </nav>

      <div className={`mt-10 grid gap-10 lg:gap-16 items-end ${image ? 'lg:grid-cols-[1.15fr_1fr]' : ''}`}>
        <div>
          {eyebrow && (
            <p className="hero-animate hero-animate-1 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
              {eyebrow}
            </p>
          )}
          <h1 className="hero-animate hero-animate-2 mt-5 font-display text-[2.4rem] sm:text-[3.4rem] lg:text-[4.2rem] font-semibold leading-[1.02] text-foreground">
            {title}
            {highlight && (
              <>
                {' '}
                <span className="text-primary">{highlight}</span>
              </>
            )}
          </h1>
          <p className="hero-animate hero-animate-3 mt-7 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </div>

        {image && (
          <div className="hero-animate hero-animate-4">
            <Photo src={image} alt={imageAlt} ratio="aspect-[5/4]" priority />
          </div>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;
