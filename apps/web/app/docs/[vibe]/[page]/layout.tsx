import { Header, Sidebar } from '@/components/navigation'

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { vibe: string; page: string }
}) {
  return (
    <>
      <Header sidebar={<Sidebar vibeSlug={params.vibe} />} />

      <div className="px-5 md:px-8">
        <div className="mx-auto flex w-full max-w-7xl gap-x-10 md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="top-16 z-10 hidden h-[calc(100vh-4rem)] w-full md:sticky md:block">
            <div className="h-full overflow-y-scroll py-8">
              <Sidebar vibeSlug={params.vibe} />
            </div>
          </aside>

          {children}
        </div>
      </div>
    </>
  )
}
