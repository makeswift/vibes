import { TableOfContents } from './table-of-contents'

export function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="gap-x-12 md:grid md:grid-cols-[minmax(0,1fr)_220px] lg:grid-cols-[minmax(0,1fr)_240px]">
      <div>{children}</div>
      <TableOfContents />
    </div>
  )
}
