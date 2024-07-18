export default function TableHeader({ children }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className="[&_tr]:after:hidden">{children}</thead>
}
