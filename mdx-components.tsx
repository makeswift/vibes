import Image, { ImageProps } from 'next/image'

import type { MDXComponents } from 'mdx/types'

import { Img } from '@/components/mdx/img'
import { Pre } from '@/components/mdx/pre'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: Img,
    code: Pre,
  }
}
