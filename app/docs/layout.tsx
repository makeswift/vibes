import Image from 'next/image'
import Link from 'next/link'

import { promises } from 'fs'
import { Table } from 'lucide-react'
import path from 'path'

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
      <nav className="px-8 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
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
      </nav>
      <div className="p-8">
        <div className="mx-auto flex max-w-7xl gap-x-12">
          <Subnavigation allVibes={allVibes} />

          <div className="vibes-prose prose flex-1 dark:prose-invert">{children}</div>

          <TableOfContents />
        </div>
      </div>
    </>
  )
}
