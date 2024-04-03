export default function Table({ children }: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="relative w-full overflow-auto">
      <table className="table w-full border border-foreground text-sm">{children}</table>
    </div>
  )
}
