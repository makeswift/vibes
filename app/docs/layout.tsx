import clsx from 'clsx'
import { promises } from 'fs'
import path from 'path'

import { Navigation } from '@/components/ui/navigation'
import { Subnavigation } from '@/components/ui/subnavigation'
import { readMeta } from '@/lib/read-meta'

export type Vibes = {
  [key: string]: { name: string; icon: string; pages: { title: string; href: string }[] }[]
}

export default async function MdxLayout({ children }: { children: React.ReactNode }) {
  // Read the file at navigation.json and parse the groups into paths to compose the subnavigation
  const filePath = path.join(process.cwd(), '/app/docs/navigation.json')
  const navigation = JSON.parse(await promises.readFile(filePath, 'utf-8')) as {
    vibes: { name: string; groups: { name: string; icon: string; pages: string[] }[] }[]
  }
  const parseComponents = async () => {
    const vibePages = navigation.vibes.map(async vibe => {
      const readPages = vibe.groups.map(group => {
        const links = group.pages.map(page =>
          readMeta(page).then(meta => ({ title: meta.title, icon: meta.icon, href: page }))
        )
        return { name: group.name, icon: group.icon, pages: links }
      })

      const pages = await Promise.all(readPages)
      return {
        name: vibe.name,
        groups: await Promise.all(
          pages.map(async p => {
            const resolvedLinks = await Promise.all(p.pages)
            return { name: p.name, icon: p.icon, pages: resolvedLinks }
          })
        ),
      }
    })

    const vibes = await Promise.all(vibePages)
    return vibes.reduce((acc, { name, groups }) => {
      acc[name.charAt(0).toLowerCase() + name.slice(1)] = groups
      return acc
    }, {} as Vibes)
  }

  const allVibes = await parseComponents()

  return (
    <>
      <Navigation allVibes={allVibes} />

      <div className="px-6 md:px-8">
        <div className="mx-auto flex max-w-7xl gap-x-10 md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="fixed top-16 z-10 hidden h-[calc(100vh-4rem)] w-full md:sticky md:block">
            <Subnavigation allVibes={allVibes} className="h-full overflow-y-scroll py-8" />
          </aside>

          <div
            className={clsx(
              // 'vibes-prose',
              'prose max-w-full py-10 dark:prose-invert',
              'prose-headings:font-heading prose-headings:font-bold',
              'prose-h1:mb-4 prose-h1:text-3xl',
              'prose-h2:mb-3 prose-h2:mt-10 prose-h2:text-xl',
              'prose-h3:mb-2 prose-h3:mt-8 prose-h3:text-base',
              'prose-p:font-light first:prose-p:mt-0',
              'prose-ul:pl-5 prose-ul:font-light',
              'prose-li:[&_::marker]:!text-foreground',
              'prose-a:relative prose-a:font-bold prose-a:no-underline prose-a:before:absolute prose-a:before:left-0 prose-a:before:top-full prose-a:before:mt-0.5 prose-a:before:h-[2px] prose-a:before:w-full prose-a:before:bg-gradient-to-r prose-a:before:from-foreground prose-a:before:from-50% prose-a:before:to-transparent prose-a:before:to-0% prose-a:before:bg-[size:5px_2px] hover:prose-a:before:animate-underline-hover',
              '[&:not(pre_code)]:prose-code:m-0 [&:not(pre_code)]:prose-code:inline-block [&:not(pre_code)]:prose-code:rounded [&:not(pre_code)]:prose-code:bg-gray-100 [&:not(pre_code)]:prose-code:px-1 [&:not(pre_code)]:prose-code:py-0.5 [&:not(pre_code)]:prose-code:font-normal [&:not(pre_code)]:prose-code:leading-5',
              '[&:not(pre_code)]:prose-code:before:content-none [&:not(pre_code)]:prose-code:after:content-none',
              'prose-pre:my-5 prose-pre:rounded-none prose-pre:!bg-foreground/5 prose-pre:py-5',
              'prose-pre:[&_code]:block prose-pre:[&_code]:px-5 prose-pre:[&_code]:py-5 prose-pre:[&_code]:text-sm prose-pre:[&_code]:leading-5'
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
