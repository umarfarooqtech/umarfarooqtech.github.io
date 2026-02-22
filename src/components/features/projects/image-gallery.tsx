'use client';

import { useState } from 'react';
import { ProjectImage } from '@/components/common';
import { ImageLightbox } from './image-lightbox';
import type { ProjectImage as ProjectImageType } from '@/types';

interface ImageGalleryProps {
  images: ProjectImageType[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((image, i) => (
          <ProjectImage
            key={image.src}
            src={image.src}
            alt={image.alt}
            caption={image.caption}
            clickable
            onClick={() => setLightboxIndex(i)}
            aspect={i === 0 && images.length % 2 !== 0 ? 'video' : 'video'}
            className={
              i === 0 && images.length % 2 !== 0 ? 'sm:col-span-2' : ''
            }
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}