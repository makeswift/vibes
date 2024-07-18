import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

import rehypeShiki from '@shikijs/rehype'
import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerRemoveLineBreak,
} from '@shikijs/transformers'
import clsx from 'clsx'
import { readFile } from 'fs/promises'
import path from 'path'
import remarkGfm from 'remark-gfm'
import { ShikiTransformer } from 'shiki'

import * as MDXComponents from '@/components/mdx'
import { navigation } from '@/components/navigation'
import { Preview } from '@/components/preview'
import { Accordion, AccordionGroup } from '@/components/ui/accordions'
import { Button } from '@/components/ui/button'
import { ButtonLink } from '@/components/ui/button-link'
import { CodeFromFile } from '@/components/ui/code-from-file'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Step, Steps } from '@/components/ui/steps'
import { TableOfContents } from '@/components/ui/table-of-contents'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getVibe } from '@/lib/registry'
import { pageMetaSchema } from '@/registry/schema'

interface PageMeta {
  title?: string
  description?: string
  preview?: string
  icon?: string
}

export async function generateStaticParams() {
  return navigation.vibes.flatMap(vibe =>
    vibe.groups.flatMap(group => group.pages.map(page => ({ vibe: vibe.slug, page: page.slug })))
  )
}

export default async function Page({ params }: { params: { vibe: string; page: string } }) {
  const vibe = getVibe(params.vibe)

  if (!vibe) return notFound()

  const file = vibe.navigation
    .flatMap(group => group.pages)
    .find(page => page.slug === params.page)?.file

  if (!file) return notFound()

  const source = await readFile(path.resolve(path.join('registry', vibe.slug, file)), 'utf-8')

  const { content, frontmatter } = await compileMDX<PageMeta>({
    source,
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
      ButtonLink,
      CodeFromFile: function CodeFromFileWithoutBasePath(props) {
        return (
          <CodeFromFile {...props} basePath={path.join(process.cwd(), 'registry', vibe.slug)} />
        )
      },
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

  const meta = pageMetaSchema(vibe).parse(frontmatter)

  return (
    <>
      <div className="py-10">
        <h1 className="-mt-1 mb-3 text-2xl font-bold text-foreground">{meta.title}</h1>

        {meta.description && (
          <p className="mb-10 max-w-4xl text-lg font-light leading-relaxed text-contrast-500">
            {meta.description}
          </p>
        )}

        {meta.preview && <Preview vibeSlug={vibe.slug} componentName={meta.preview} />}

        <div className="font-docs-sans gap-x-20 text-foreground md:grid xl:grid-cols-[minmax(0,1fr)_220px] 2xl:grid-cols-[minmax(0,1fr)_240px]">
          <div
            className={clsx(
              'prose w-full max-w-full dark:prose-invert',
              'prose-headings:text-foreground first:prose-headings:mt-0',
              'prose-h1:mb-4 prose-h1:text-2xl',
              'prose-h2:mb-3 prose-h2:mt-10 prose-h2:text-xl prose-h2:font-bold',
              'prose-h3:mb-2 prose-h3:mt-8 prose-h3:text-base prose-h3:font-bold',
              'prose-p:font-light prose-p:text-foreground first:prose-p:mt-0',
              'prose-ul:pl-5 prose-ul:font-light',
              'prose-li:[&_::marker]:!text-foreground',
              'prose-a:relative prose-a:inline-block prose-a:font-bold prose-a:no-underline prose-a:before:absolute prose-a:before:inset-x-0 prose-a:before:bottom-0 prose-a:before:h-[1px] prose-a:before:animate-scroll prose-a:before:bg-gradient-to-r prose-a:before:from-foreground prose-a:before:from-50% prose-a:before:to-transparent prose-a:before:to-0% prose-a:before:bg-[size:5px_2px] prose-a:before:[animation-play-state:paused] hover:prose-a:before:[animation-play-state:running]',
              '[&:not(pre_code)]:prose-code:m-0 [&:not(pre_code)]:prose-code:inline-block [&:not(pre_code)]:prose-code:rounded [&:not(pre_code)]:prose-code:bg-contrast-100 [&:not(pre_code)]:prose-code:px-1 [&:not(pre_code)]:prose-code:py-0.5 [&:not(pre_code)]:prose-code:font-normal [&:not(pre_code)]:prose-code:leading-5',
              '[&:not(pre_code)]:prose-code:before:content-none [&:not(pre_code)]:prose-code:after:content-none',
              'prose-pre:my-0 prose-pre:rounded-none prose-pre:!bg-contrast-100 prose-pre:p-4 dark:prose-pre:!bg-contrast-100',
              'prose-pre:[&_code]:block prose-pre:[&_code]:px-5 prose-pre:[&_code]:py-5 prose-pre:[&_code]:text-sm prose-pre:[&_code]:leading-5'
            )}
          >
            {content}
          </div>
          <TableOfContents offsetTop={90} />
        </div>
      </div>
    </>
  )
}
