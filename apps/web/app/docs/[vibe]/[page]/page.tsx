import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

import rehypeShiki from '@shikijs/rehype'
import clsx from 'clsx'
import { readFile } from 'fs/promises'
import path from 'path'
import prettyBytes from 'pretty-bytes'
import remarkGfm from 'remark-gfm'
import { ShikiTransformer } from 'shiki'

import * as MDXComponents from '@/components/mdx'
import { navigation } from '@/components/navigation'
import { Preview } from '@/components/preview'
import { Accordion, AccordionGroup } from '@/components/ui/accordions'
import { Button } from '@/components/ui/button'
import { ButtonLink } from '@/components/ui/button-link'
import { CodeFromFile } from '@/components/ui/code-from-file'
import { Installation } from '@/components/ui/installation'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Reveal } from '@/components/ui/reveal'
import { Step, Steps } from '@/components/ui/steps'
import { TableOfContents, TableOfContentsLink } from '@/components/ui/table-of-contents'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Check, ChevronLeft16, ChevronRight16 } from '@/icons/generated'
import { getTotalSize } from '@/lib/bundle'
import { transformers } from '@/lib/shiki'
import { pageMetaSchema } from '@/vibes/schema'
import { getVibe } from '@/vibes/utils'

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

  const allPages = vibe.navigation.flatMap(group => group.pages)
  const pageIndex = allPages.findIndex(page => page.slug === params.page)

  if (pageIndex === -1) return notFound()

  const page = allPages[pageIndex]
  const source = await readFile(path.resolve(path.join('vibes', vibe.slug, page.file)), 'utf-8')

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
              themes: { light: 'github-light', dark: 'github-dark' },
              transformers: [
                ...transformers,
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
        return <CodeFromFile {...props} basePath={path.join(process.cwd(), 'vibes', vibe.slug)} />
      },
      Popover,
      PopoverContent,
      PopoverTrigger,
      Reveal,
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
  const prevPage = pageIndex > 0 ? allPages[pageIndex - 1] : null
  const nextPage = pageIndex < allPages.length - 1 ? allPages[pageIndex + 1] : null
  const component = vibe.components.find(component => component.name === page.component)
  const numDependencies = component
    ? component.registryDependencies.length + component.dependencies.length
    : 0
  const totalSize = component ? await getTotalSize({ component, vibe }) : null

  return (
    <>
      <div className="py-8 lg:py-10">
        <h1 className="-mt-1 mb-3 text-2xl font-bold text-foreground">{meta.title}</h1>

        {meta.description && (
          <p className="max-w-4xl text-base font-light leading-relaxed text-contrast-500 md:text-lg">
            {meta.description}
          </p>
        )}

        {meta.preview && <Preview vibeSlug={vibe.slug} componentName={meta.preview} />}

        <div className="mt-8 gap-x-20 font-sans text-foreground md:mt-10 lg:grid lg:grid-cols-[minmax(0,1fr)_220px] 2xl:grid-cols-[minmax(0,1fr)_240px]">
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
              'prose-a:relative prose-a:inline-block prose-a:font-bold prose-a:no-underline prose-a:outline-primary prose-a:before:absolute prose-a:before:inset-x-0 prose-a:before:bottom-0 prose-a:before:h-[1px] prose-a:before:animate-scroll prose-a:before:bg-gradient-to-r prose-a:before:from-foreground prose-a:before:from-50% prose-a:before:to-transparent prose-a:before:to-0% prose-a:before:bg-[size:5px_2px] prose-a:before:[animation-play-state:paused] hover:prose-a:before:[animation-play-state:running]',
              '[&:not(pre_code)]:prose-code:m-0 [&:not(pre_code)]:prose-code:inline-block [&:not(pre_code)]:prose-code:rounded [&:not(pre_code)]:prose-code:bg-contrast-100 [&:not(pre_code)]:prose-code:px-1 [&:not(pre_code)]:prose-code:py-0.5 [&:not(pre_code)]:prose-code:font-normal [&:not(pre_code)]:prose-code:leading-5',
              '[&:not(pre_code)]:prose-code:before:content-none [&:not(pre_code)]:prose-code:after:content-none',
              'prose-pre:my-0 prose-pre:outline-primary',
              'prose-pre:[&_code]:block prose-pre:[&_code]:px-5 prose-pre:[&_code]:py-5 prose-pre:[&_code]:text-sm prose-pre:[&_code]:leading-5'
            )}
          >
            {meta.features && (
              <ul className="not-prose w-full columns-1 gap-x-8 space-y-2 sm:columns-2 md:gap-x-10">
                {meta.features.map((feature, index) => (
                  <li className="flex items-start gap-x-3 text-foreground" key={index}>
                    <Check className="mt-1.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {page.component && <Installation vibeSlug={vibe.slug} componentName={page.component} />}

            {content}

            <div className="mt-8 flex w-full justify-between md:mt-10">
              <div>
                {prevPage && (
                  <ButtonLink href={`/docs/${vibe.slug}/${prevPage.slug}`} variant="default">
                    <ChevronLeft16 className="-ml-1" />
                    {prevPage.title}
                  </ButtonLink>
                )}
              </div>
              <div>
                {nextPage && (
                  <ButtonLink href={`/docs/${vibe.slug}/${nextPage.slug}`} variant="default">
                    {nextPage.title}
                    <ChevronRight16 className="-mr-1" />
                  </ButtonLink>
                )}
              </div>
            </div>
          </div>
          <div className="not-prose hidden lg:block">
            <nav className="sticky top-24 w-full divide-y divide-dashed divide-contrast-400 pb-10">
              <TableOfContents className="pb-5" offsetTop={90} />
              <div className="space-y-5 py-5">
                {totalSize && (
                  <div className="flex w-full items-center gap-x-3">
                    <span className="text-sm font-bold text-foreground">Total size</span>

                    <span className="rounded bg-contrast-100 px-1.5 py-0.5 font-mono text-xs text-contrast-500">
                      {prettyBytes(totalSize, { maximumFractionDigits: 1 })}
                    </span>
                  </div>
                )}

                {component && numDependencies > 0 && (
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-foreground">Dependencies</div>
                    <ul>
                      {component.registryDependencies.map(dependency => {
                        const dependencyPage = allPages.find(page => page.component === dependency)

                        if (!dependencyPage) return null

                        return (
                          <li key={dependency}>
                            <TableOfContentsLink href={`/docs/${vibe.slug}/${dependencyPage.slug}`}>
                              {`${vibe.slug}/${dependency}`}
                            </TableOfContentsLink>
                          </li>
                        )
                      })}
                      {component.dependencies.map(dependency => (
                        <li key={dependency}>
                          <TableOfContentsLink
                            href={`https://www.npmjs.com/package/${dependency}`}
                            target="_blank"
                          >
                            {dependency}
                          </TableOfContentsLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-1">
                  <div className="text-sm font-bold text-foreground">Other links</div>
                  <ul>
                    {component && component.files[0] && (
                      <li>
                        <TableOfContentsLink
                          href={`https://github.com/makeswift/vibes/tree/main/apps/web/vibes/${vibe.slug}/${component.files[0]}`}
                          target="_blank"
                        >
                          View source
                        </TableOfContentsLink>
                      </li>
                    )}
                    <li>
                      <TableOfContentsLink
                        href="https://github.com/makeswift/vibes/issues/new"
                        target="_blank"
                      >
                        Report an issue
                      </TableOfContentsLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
