interface TickListProps {
  items: string[];
  columns?: 1 | 2;
  tone?: 'light' | 'dark';
}

const TickList = ({ items, columns = 1, tone = 'light' }: TickListProps) => (
  <ul className={`grid gap-x-8 gap-y-0 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}>
    {items.map((item) => (
      <li
        key={item}
        className={`flex items-baseline gap-3 border-b py-3 text-sm ${
          tone === 'dark'
            ? 'border-ink-foreground/15 text-ink-foreground/80'
            : 'border-border text-foreground/80'
        }`}
      >
        <span className="text-primary text-[10px] leading-none translate-y-[-1px]">◆</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default TickList;
