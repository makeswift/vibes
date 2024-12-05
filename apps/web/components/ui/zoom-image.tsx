'use client';

import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';

import { Times16 } from '@/icons/generated';

interface Props {
  src: string;
  alt: string;
}

export function ZoomImage({ alt = 'An Image', src = 'https://placehold.it/1024x640' }: Props) {
  return (
    <Zoom IconUnzoom={Times16} zoomMargin={48}>
      <div className="not-prose relative aspect-video w-full border border-dashed border-contrast-200 bg-contrast-100">
        <Image alt={alt} className="object-cover" fill sizes="100vw" src={src} />
      </div>
    </Zoom>
  );
}
