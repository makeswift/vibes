export default function TableCell({ children }: React.HTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className="border-b border-foreground p-3 align-middle font-light [&:has([role=checkbox])]:pr-0">
      {children}
    </td>
  )
}
