export function ComponentPreview({
  children,
  color,
}: {
  children: React.ReactNode
  color: string
}) {
  return (
    <div
      className="mb-12 flex min-h-80 w-full items-center justify-center overflow-y-auto border border-black p-10 shadow-[-4px_4px_0_black]"
      style={{ background: color }}
    >
      {children}
    </div>
  )
}
