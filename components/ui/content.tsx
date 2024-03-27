import { TableOfContents } from './table-of-contents'

export function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="gap-x-16 pt-5 md:grid xl:grid-cols-[minmax(0,1fr)_220px] 2xl:grid-cols-[minmax(0,1fr)_240px]">
      <div>{children}</div>
      <TableOfContents />
    </div>
  )
}
