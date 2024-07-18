export default function TableCell({ children }: React.HTMLAttributes<HTMLTableCellElement>) {
  return <td className="py-3 align-middle font-light text-foreground">{children}</td>
}
