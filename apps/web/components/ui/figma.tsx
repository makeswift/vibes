import React from 'react';

import { IntersectionLoader } from './intersection-loader';

export interface Props {
  aspectRatio?: number;
  url: string;
}

export function Figma({ aspectRatio = 16 / 9, url }: Props) {
  return (
    <IntersectionLoader aspectRatio={aspectRatio}>
      <iframe
        allowFullScreen
        className="border-contrast-400 bg-contrast-100 mt-6 mb-10 h-full w-full overflow-hidden border border-dashed"
        src={`https://www.figma.com/embed?embed_host=vibes&url=${url}`}
        title="Figma Embed"
      />
    </IntersectionLoader>
  );
}
