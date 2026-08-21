import { ReactNode } from 'react';
import Photo from './Photo';
import Reveal from './Reveal';

interface SplitRowProps {
  image: string;
  alt: string;
  reverse?: boolean;
  index?: string;
  label?: string;
  title: ReactNode;
  text?: ReactNode;
  children?: ReactNode;
  ratio?: string;
  tone?: 'light' | 'dark';
}

const SplitRow = ({
  image,
  alt,
  reverse = false,
  index,
  label,
  title,
  text,
  children,
  ratio = 'aspect-[4/3]',
  tone = 'light',
}: SplitRowProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
    <Reveal className={reverse ? 'lg:order-2' : ''}>
      <Photo src={image} alt={alt} ratio={ratio} />
    </Reveal>

    <Reveal delay={2} className={reverse ? 'lg:order-1' : ''}>
      {(index || label) && (
        <div
          className={`flex items-center gap-4 border-t pt-5 ${
            tone === 'dark' ? 'border-ink-foreground/20' : 'border-border'
          }`}
        >
          {index && (
            <span className="font-mono text-[11px] tracking-[0.22em] text-primary">{index}</span>
          )}
          {label && (
            <span
              className={`font-mono text-[11px] uppercase tracking-[0.22em] ${
                tone === 'dark' ? 'text-ink-foreground/60' : 'text-muted-foreground'
              }`}
            >
              {label}
            </span>
          )}
        </div>
      )}
      <h3
        className={`mt-6 font-display text-[1.75rem] sm:text-[2.25rem] font-semibold leading-[1.08] ${
          tone === 'dark' ? 'text-ink-foreground' : 'text-foreground'
        }`}
      >
        {title}
      </h3>
      {text && (
        <p
          className={`mt-5 leading-relaxed ${
            tone === 'dark' ? 'text-ink-foreground/70' : 'text-muted-foreground'
          }`}
        >
          {text}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </Reveal>
  </div>
);

export default SplitRow;
