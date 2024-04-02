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

import * as MDXComponents from '@/components/mdx'
import { Accordion, AccordionGroup } from '@/components/ui/accordions'
import { Button } from '@/components/ui/button'
import { ComponentPreview } from '@/components/ui/component-preview'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Step, Steps } from '@/components/ui/steps'
import { Table, TableCell, TableRow } from '@/components/ui/table'
import { TableOfContents } from '@/components/ui/table-of-contents'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface PageMeta {
  title?: string
  path?: string
}

export default async function Page({ params }: { params: { slug?: string[] } }) {
  const file = await readFile(process.cwd() + '/mdx/' + params.slug?.join('/') + '.mdx').catch(() =>
    permanentRedirect('/404')
  )

  const { content, frontmatter } = await compileMDX<PageMeta>({
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
                  name: 'transformers:pre',
                  pre(node) {
                    this.addClassToHast(node, 'relative')

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
      ...MDXComponents,
      Accordion,
      AccordionGroup,
      Button,
      ComponentPreview,
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
    },
  })

  const Preview = frontmatter.path
    ? lazy(() => import('@/components/vibes/' + frontmatter.path + '/preview'))
    : () => null

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <ErrorBoundary fallback={<div>Fallback!</div>}>
        <Suspense>
          <Preview></Preview>
        </Suspense>
      </ErrorBoundary>
      <div className="gap-x-20 pt-5 md:grid xl:grid-cols-[minmax(0,1fr)_220px] 2xl:grid-cols-[minmax(0,1fr)_240px]">
        <div>{content}</div>
        <TableOfContents offsetTop={90} />
      </div>
    </div>
  )
}
