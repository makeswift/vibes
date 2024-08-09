import clsx from 'clsx'

import { Header, Sidebar } from '@/components/navigation'
import { BrandProvider } from '@/components/preview/brand-context'

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { vibe: string }
}) {
  return (
    <>
      <Header vibeSlug={params.vibe} />

      <div className="relative mx-auto block items-start gap-x-4 px-5 xl:container lg:flex xl:px-8">
        <Sidebar vibeSlug={params.vibe} />
        <div className="min-w-0 flex-1">
          <BrandProvider vibeSlug={params.vibe}>{children}</BrandProvider>
        </div>
      </div>
    </>
  )
}
