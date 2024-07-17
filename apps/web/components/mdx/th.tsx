export default function TableHeaderCell({ children }: React.HTMLAttributes<HTMLTableCellElement>) {
  return (
    <th className="border-b-2 border-foreground bg-contrast-100 p-3 align-middle dark:bg-foreground/20">
      {children}
    </th>
  )
}
