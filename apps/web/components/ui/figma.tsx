import React from 'react'

import { IntersectionLoader } from './intersection-loader'

export interface Props {
  height?: number
  title: string
  url: string
}

export function Figma({ title = 'Figma', height = 450, url }: Props) {
  return (
    <IntersectionLoader height={height}>
      <iframe
        title={`figma-${title}`}
        className="h-full w-full"
        src={`https://www.figma.com/embed?embed_host=mdx-embed&url=${url}`}
        allowFullScreen
      />
    </IntersectionLoader>
  )
}
