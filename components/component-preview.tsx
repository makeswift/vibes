export function ComponentPreview({
  children,
  color,
}: {
  children: React.ReactNode
  color: string
}) {
  return (
    <div
      className="dot-shadow dot-shadow-lg mb-12 flex min-h-80 w-full items-center justify-center border border-black p-10"
      style={{ background: color }}
    >
      {children}
    </div>
  )
}
