export default function TableRow({ children }: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr className="after:border-contrast-300 relative border-0 after:absolute after:inset-x-0 after:bottom-0 after:border-b after:border-dashed">
      {children}
    </tr>
  );
}
