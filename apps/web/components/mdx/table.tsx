export default function Table({ children }: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="relative mt-6 mb-10 w-full overflow-auto">
      <table className="m-0 table w-full text-sm">{children}</table>
    </div>
  );
}
