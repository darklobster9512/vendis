import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface RevealProps {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article';
}

const delayClass: Record<number, string> = {
  1: 'delay-1',
  2: 'delay-2',
  3: 'delay-3',
  4: 'delay-4',
  5: 'delay-5',
  6: 'delay-6',
};

const Reveal = ({ children, delay, className = '', as = 'div' }: RevealProps) => {
  const { ref, isVisible } = useScrollAnimation(0.08);
  const Tag = as as any;

  return (
    <Tag
      ref={ref}
      className={`scroll-hidden ${delay ? delayClass[delay] : ''} ${isVisible ? 'scroll-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
