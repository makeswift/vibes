export default function TableHeaderCell({ children }: React.HTMLAttributes<HTMLTableCellElement>) {
  return <th className="border-b border-foreground pb-3 align-middle">{children}</th>;
}
