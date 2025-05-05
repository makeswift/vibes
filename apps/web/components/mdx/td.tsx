export default function TableCell({ children }: React.HTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className="text-foreground py-3 align-middle font-light">
      <div className="flex items-center">{children}</div>
    </td>
  );
}
