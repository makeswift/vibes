import Image, { ImageProps } from 'next/image'

import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: ({ alt = 'An Image', ...rest }) => (
      <Image alt={alt} width={1024} height={640} {...(rest as Omit<ImageProps, 'alt'>)} />
    ),
  }
}
