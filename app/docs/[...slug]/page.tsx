// vibes.site/docs/eclipse/button
import { compileMDX } from 'next-mdx-remote/rsc'
import { permanentRedirect } from 'next/navigation'
import { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import rehypeShiki from '@shikijs/rehype'
import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerRemoveLineBreak,
} from '@shikijs/transformers'
import { readFile } from 'fs/promises'
import remarkGfm from 'remark-gfm'
import { ShikiTransformer } from 'shiki'

import { Code } from '@/components/mdx/code'
import { Img } from '@/components/mdx/img'
import { Pre } from '@/components/mdx/pre'
import { Accordion, AccordionGroup } from '@/components/ui/accordions'
import { Button } from '@/components/ui/button'
import { ComponentPreview } from '@/components/ui/component-preview'
import { Content } from '@/components/ui/content'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Step, Steps } from '@/components/ui/steps'
import { Table, TableCell, TableRow } from '@/components/ui/table'
import { Heading, TableOfContents } from '@/components/ui/table-of-contents'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button as EclipseButton } from '@/components/vibes/eclipse/button'

// params { slug: '/controls/checkbox' }
export default async function Page({ params }: { params: { slug?: string[] } }) {
  const file = await readFile(process.cwd() + '/mdx/' + params.slug?.join('/') + '.mdx').catch(() =>
    permanentRedirect('/404')
  )

  const { content, frontmatter } = await compileMDX<{ title?: string; path?: string }>({
    source: file,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [
            // @ts-ignore-next-line
            rehypeShiki,
            {
              themes: {
                light: 'github-light',
                dark: 'github-dark',
              },
              transformers: [
                transformerNotationDiff(),
                transformerNotationHighlight(),
                transformerNotationWordHighlight(),
                transformerNotationFocus(),
                transformerRemoveLineBreak(),
                {
                  name: 'transformers:show-line-numbers',
                  pre(node: any) {
                    if (this.options?.meta?.__raw?.includes('showLineNumbers')) {
                      this.addClassToHast(node, 'show-line-numbers')
                    }
                  },
                } as ShikiTransformer,
              ],
            },
          ],
        ],
      },
    },
    components: {
      Accordion,
      AccordionGroup,
      Button,
      ComponentPreview,
      Content,
      EclipseButton,
      Heading,
      Popover,
      PopoverContent,
      PopoverTrigger,
      Step,
      Steps,
      TableOfContents,
      Tabs,
      TabsContent,
      TabsList,
      TabsTrigger,
      img: Img,
      code: Code,
      pre: Pre,
    },
  })

  const Preview = lazy(() => import('@/components/vibes/' + frontmatter.path + '/preview'))

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <ErrorBoundary fallback={<div>Fallback!</div>}>
        <Suspense>
          <Preview></Preview>
        </Suspense>
      </ErrorBoundary>

      {content}
    </div>
  )
}
