export default function TableHeaderCell({ children }: React.HTMLAttributes<HTMLTableCellElement>) {
  return (
    <th className="border-docs-foreground bg-docs-foreground/5 dark:bg-docs-foreground/20 border-b-2 p-3 align-middle">
      {children}
    </th>
  )
}
