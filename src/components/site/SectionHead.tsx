import { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadProps {
  index?: string;
  label: string;
  title: ReactNode;
  text?: ReactNode;
  align?: 'left' | 'wide';
  tone?: 'light' | 'dark';
}

const SectionHead = ({
  index,
  label,
  title,
  text,
  align = 'left',
  tone = 'light',
}: SectionHeadProps) => (
  <Reveal className={align === 'wide' ? 'max-w-4xl' : 'max-w-2xl'}>
    <div
      className={`flex items-center gap-4 border-t pt-5 ${
        tone === 'dark' ? 'border-ink-foreground/20' : 'border-border'
      }`}
    >
      {index && (
        <span
          className={`font-mono text-[11px] tracking-[0.22em] ${
            tone === 'dark' ? 'text-primary-glow' : 'text-primary'
          }`}
        >
          {index}
        </span>
      )}
      <span
        className={`font-mono text-[11px] uppercase tracking-[0.22em] ${
          tone === 'dark' ? 'text-ink-foreground/60' : 'text-muted-foreground'
        }`}
      >
        {label}
      </span>
    </div>
    <h2
      className={`mt-6 font-display text-[2rem] sm:text-[2.6rem] lg:text-[3.1rem] font-semibold leading-[1.04] ${
        tone === 'dark' ? 'text-ink-foreground' : 'text-foreground'
      }`}
    >
      {title}
    </h2>
    {text && (
      <p
        className={`mt-5 text-base sm:text-lg leading-relaxed ${
          tone === 'dark' ? 'text-ink-foreground/70' : 'text-muted-foreground'
        }`}
      >
        {text}
      </p>
    )}
  </Reveal>
);

export default SectionHead;
