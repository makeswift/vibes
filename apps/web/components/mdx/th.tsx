export default function TableHeaderCell({ children }: React.HTMLAttributes<HTMLTableCellElement>) {
  return <th className="border-foreground border-b pb-3 align-middle">{children}</th>;
}
