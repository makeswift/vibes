export default function TableCell({ children }: React.HTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className="border-docs-foreground border-b p-3 align-middle font-light [&:has([role=checkbox])]:pr-0">
      {children}
    </td>
  )
}
