import { Navigation } from '@/components/ui/navigation'

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />

      <div className="px-6 md:px-8">
        <div className="mx-auto flex max-w-7xl gap-x-10 md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
          {children}
        </div>
      </div>
    </>
  )
}
