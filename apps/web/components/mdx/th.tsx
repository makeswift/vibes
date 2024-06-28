export default function TableHeaderCell({ children }: React.HTMLAttributes<HTMLTableCellElement>) {
  return (
    <th className="border-b-2 border-foreground bg-foreground/5 p-3 align-middle dark:bg-foreground/20">
      {children}
    </th>
  )
}
