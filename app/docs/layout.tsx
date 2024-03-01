import Image from 'next/image'
import Link from 'next/link'

import { ModeToggle } from '@/components/ui/mode-toggle'
import { Subnavigation } from '@/components/ui/subnavigation'

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
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
          <Subnavigation />
          <div className="vibes-prose prose flex-1 dark:prose-invert">{children}</div>
        </div>
      </div>
    </>
  )
}
