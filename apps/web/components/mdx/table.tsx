export default function Table({ children }: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="relative mb-10 mt-6 w-full overflow-auto">
      <table className="m-0 table w-full text-sm">{children}</table>
    </div>
  )
}
