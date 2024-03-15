import Image from 'next/image'
import Link from 'next/link'

import { promises } from 'fs'
import path from 'path'

import { ComponentPreview } from '@/components/component-preview'
import { Content } from '@/components/ui/content'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { Subnavigation } from '@/components/ui/subnavigation'
import { TableOfContents } from '@/components/ui/table-of-contents'
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
      <header className="sticky top-0 z-20 border-b border-black bg-white px-6 md:px-8">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between pb-0.5">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image src="/logo.svg" width={90} height={24} alt="Vibes logo" priority />
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/docs" className="font-bold">
              All vibes
            </Link>
            <ModeToggle />
          </div>
        </div>
      </header>

      <div className="px-6 md:px-8">
        <div className="mx-auto flex max-w-7xl gap-x-12 md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
          <Subnavigation allVibes={allVibes} />

          <div className="vibes-prose prose max-w-max py-8 dark:prose-invert">
            <ComponentPreview color="#e6e6e6">Testing</ComponentPreview>
            <Content>{children}</Content>
          </div>
        </div>
      </div>
    </>
  )
}
