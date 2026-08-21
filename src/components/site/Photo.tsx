interface PhotoProps {
  src: string;
  alt: string;
  /** aspect ratio utility, e.g. 'aspect-[4/3]' */
  ratio?: string;
  className?: string;
  tint?: boolean;
  priority?: boolean;
}

const Photo = ({
  src,
  alt,
  ratio = 'aspect-[4/3]',
  className = '',
  tint = true,
  priority = false,
}: PhotoProps) => (
  <figure
    className={`group relative overflow-hidden rounded-lg bg-muted ${ratio} ${tint ? 'photo-tint' : ''} ${className}`}
  >
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
    />
  </figure>
);

export default Photo;
