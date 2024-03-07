import Image from 'next/image'
import Link from 'next/link'

import { ModeToggle } from '@/components/ui/mode-toggle'
import { Subnavigation } from '@/components/ui/subnavigation'
import { readMeta } from '@/lib/read-meta'

const nav = ['/', '/guides']

export default async function MdxLayout({ children }: { children: React.ReactNode }) {
  // ingest the nav json and fetch metadata to generate the navigation JSX
  const meta = await readMeta('/app/docs/page.mdx')
  const navigation = parseJSON(await readFile('./navigation.json'))
  const links = navigation.map(edition =>
    edition.groups.map(group =>
      group.pages.map(async page => {
        const meta = await readMeta()

        return { title: meta.title, icon: meta.icon, href: page }
      })
    )
  )

  return (
    <>
      <nav className="px-8 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" width={90} height={24} alt="Vibes logo" priority />
          </Link>

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
          <Subnavigation links={links} />

          <div className="vibes-prose prose flex-1 dark:prose-invert">{children}</div>
        </div>
      </div>
    </>
  )
}
