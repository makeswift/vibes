export function CodeFrame({ children, filename = 'test.tsx' }) {
  return (
    <div className="[&>pre]:my-0">
      <div className="">{filename}</div>
      {children}
    </div>
  )
}
