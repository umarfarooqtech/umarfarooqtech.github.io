'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProjectImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspect?: 'video' | 'wide' | 'square';
  rounded?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
  priority?: boolean;
}

const aspects = {
  video: 'aspect-video',
  wide: 'aspect-[2/1]',
  square: 'aspect-square',
};

export function ProjectImage({
  src,
  alt,
  caption,
  aspect = 'video',
  rounded = true,
  clickable = false,
  onClick,
  className,
  priority = false,
}: ProjectImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) return null;

  return (
    <figure className={cn('group', className)}>
      <div
        className={cn(
          'relative overflow-hidden border border-border bg-muted',
          aspects[aspect],
          rounded && 'rounded-lg',
          clickable && 'cursor-pointer'
        )}
        onClick={clickable ? onClick : undefined}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
        onKeyDown={
          clickable
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onClick?.();
                }
              }
            : undefined
        }
        aria-label={clickable ? `View ${alt} full size` : undefined}
      >
        {/* Shimmer */}
        {!loaded && <div className="img-loading absolute inset-0" />}

        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
            loaded ? 'opacity-100' : 'opacity-0',
            clickable &&
              'transition-transform duration-300 group-hover:scale-[1.02]'
          )}
        />

        {/* Enlarge hint */}
        {clickable && loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
            <span className="rounded-full bg-black/60 px-3 py-1.5 font-mono text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              Click to enlarge
            </span>
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="mt-2.5 text-center text-sm text-muted-foreground/70">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}