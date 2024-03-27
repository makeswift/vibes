import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'
import { promises } from 'fs'
import path from 'path'

import { ModeToggle } from '@/components/ui/mode-toggle'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select } from '@/components/ui/select'
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

  console.log({ allVibes })
  return (
    <>
      <header className="sticky top-0 z-20 h-16 border-b border-dashed border-foreground/25 bg-background px-6">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between pb-0.5">
          <div className="flex items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="relative mt-0.5 block rounded-full px-1 py-1.5"
                  role="button"
                  aria-label="Open mobile navigation"
                >
                  <div className="flex h-4 w-5 flex-col justify-between py-0.5 transition-transform">
                    <div className="h-0.5 w-full bg-foreground transition-transform duration-200"></div>
                    <div className="h-0.5 w-full bg-foreground transition-transform duration-200"></div>
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent align="start">
                <Subnavigation allVibes={allVibes} />
              </PopoverContent>
            </Popover>

            <Link href="/" className="shrink-0">
              <Image src="/logo.svg" width={90} height={24} alt="Vibes logo" priority />
            </Link>
          </div>

          <div className="flex items-center gap-x-3">
            <form className="w-72">
              <label htmlFor="default-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <svg
                    className="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="stroke-foreground"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full rounded-none border border-foreground/20 bg-background py-2 pr-3 ps-10 text-sm text-foreground placeholder-foreground/50 outline-none ring-0 transition-colors ease-linear hover:border-foreground"
                  placeholder="Search"
                  required
                />
                <div className="absolute end-2.5 top-1/2 -translate-y-1/2 rounded-lg px-2 py-2 text-xs font-medium text-foreground/50 focus:outline-none">
                  ⌘K
                </div>
              </div>
            </form>

            <ModeToggle />
          </div>
        </div>
      </header>

      <div className="px-6 md:px-8">
        <div className="mx-auto flex max-w-7xl gap-x-12 md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="fixed top-16 z-10 hidden h-[calc(100vh-4rem)] w-full md:sticky md:block">
            <Subnavigation allVibes={allVibes} className="h-full overflow-y-scroll py-10" />
          </aside>

          <div
            className={clsx(
              'vibes-prose',
              'prose max-w-none py-10 dark:prose-invert',
              'prose-headings:font-bold',
              'prose-h1:mb-1 prose-h1:text-3xl',
              'prose-h2:mb-1.5 prose-h2:text-2xl',
              'prose-h3:mb-2 prose-h3:text-xl',
              'prose-p:font-light first:prose-p:mt-0',
              'prose-ul:pl-5 prose-ul:font-light',
              'prose-li:[&_::marker]:!text-foreground',
              'hover:prose-a:before:animate-underline-hover prose-a:relative prose-a:font-medium prose-a:no-underline prose-a:before:absolute prose-a:before:left-0 prose-a:before:top-full prose-a:before:mt-0.5 prose-a:before:h-[2px] prose-a:before:w-full prose-a:before:bg-gradient-to-r prose-a:before:from-foreground prose-a:before:from-50% prose-a:before:to-transparent prose-a:before:to-0% prose-a:before:bg-[size:5px_2px]',
              'prose-code:not(pre code):m-0 prose-code:not(pre code):inline-block prose-code:not(pre code):rounded prose-code:not(pre code):bg-gray-100 prose-code:not(pre code):px-1 prose-code:not(pre code):py-0.5 prose-code:not(pre code):font-normal prose-code:not(pre code):leading-5',
              'prose-code:not(pre code):before:content-none prose-code:not(pre code):after:content-none',
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
