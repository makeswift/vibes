import clsx from 'clsx'

import { Header, Sidebar } from '@/components/navigation'
import { BrandProvider } from '@/components/preview/brand-context'
import * as Vibes from '@/vibes'

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { vibe: string }
}) {
  return (
    <>
      <Header vibes={Vibes} vibeSlug={params.vibe} />

      <div className="relative mx-auto block items-start gap-x-4 px-5 xl:container lg:flex xl:px-8">
        <Sidebar vibes={Vibes} vibeSlug={params.vibe} />
        <div className="min-w-0 flex-1">
          <BrandProvider vibes={Vibes} vibeSlug={params.vibe}>
            {children}
          </BrandProvider>
        </div>
      </div>
    </>
  )
}
