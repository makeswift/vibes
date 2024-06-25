export default function Table({ children }: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="relative w-full overflow-auto">
      <table className="border-docs-foreground table w-full border text-sm">{children}</table>
    </div>
  )
}
