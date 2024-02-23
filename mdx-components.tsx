import Image, { ImageProps } from 'next/image'

import type { MDXComponents } from 'mdx/types'

import { Code } from '@/components/mdx/code'
import { Img } from '@/components/mdx/img'
import { Pre } from '@/components/mdx/pre'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: Img,
    code: Code,
    pre: Pre,
  }
}
