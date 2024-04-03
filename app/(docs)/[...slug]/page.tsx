import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound, redirect } from 'next/navigation'

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
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Step, Steps } from '@/components/ui/steps'
import { Table, TableCell, TableRow } from '@/components/ui/table'
import { TableOfContents } from '@/components/ui/table-of-contents'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Viewer from '@/components/vibes/viewer'

interface PageMeta {
  title?: string
  preview?: string
  icon?: string
}

export default async function Page({ params }: { params: { slug?: string[] } }) {
  if (!params.slug) return redirect('/')

  const path = params.slug?.join('/')
  const file = await readFile(`${process.cwd()}/mdx/${path}.mdx`).catch(() => notFound())

  const { content, frontmatter } = await compileMDX<PageMeta>({
    source: file,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [
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
      Popover,
      PopoverContent,
      PopoverTrigger,
      Step,
      Steps,
      Table,
      TableCell,
      TableRow,
      TableOfContents,
      Tabs,
      TabsContent,
      TabsList,
      TabsTrigger,
    },
  })

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      {frontmatter.preview && <Viewer path={frontmatter.preview} />}
      <div className="gap-x-20 pt-5 md:grid xl:grid-cols-[minmax(0,1fr)_220px] 2xl:grid-cols-[minmax(0,1fr)_240px]">
        <div>{content}</div>
        <TableOfContents offsetTop={90} />
      </div>
    </div>
  )
}
