import Image from 'next/image'
import Link from 'next/link'

import { promises } from 'fs'
import path from 'path'

import { ModeToggle } from '@/components/ui/mode-toggle'
import { Subnavigation } from '@/components/ui/subnavigation'
import { readMeta } from '@/lib/read-meta'

const nav = ['/', '/guides']

export default async function MdxLayout({ children }: { children: React.ReactNode }) {
  // Read the file at navigation.json and parse the component paths to compose the subnavigation
  const filePath = path.join(process.cwd(), '/app/docs/navigation.json')
  const navigation = JSON.parse(await promises.readFile(filePath, 'utf-8')) as {
    editions: { name: string; groups: { name: string; pages: string[] }[] }[]
  }
  const parseComponents = async () => {
    const vibeLinks = navigation.editions.map(async edition => {
      const readPages = edition.groups.flatMap(group =>
        group.pages.map(page =>
          readMeta(page).then(meta => ({ title: meta.title, icon: meta.icon, href: page }))
        )
      )

      const links = await Promise.all(readPages)
      return { name: edition.name, links }
    })

    const vibes = await Promise.all(vibeLinks)

    return vibes.reduce(
      (acc, { name, links }) => {
        acc[name] = links
        return acc
      },
      {} as Record<string, { title: string; icon: string; href: string }[]>
    )
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
        </div>
      </div>
    </>
  )
}
