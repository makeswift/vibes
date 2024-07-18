export default function Table({ children }: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="relative my-10 w-full overflow-auto">
      <table className="m-0 table w-full text-sm">{children}</table>
    </div>
  )
}
