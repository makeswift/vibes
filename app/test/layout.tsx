import { ModeToggle } from "@/components/mode-toggle"

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div>
      <nav className="p-4">
        <a href="/">Home</a>

        <ModeToggle />
      </nav>
      <div className="prose dark:prose-invert">{children}</div>
    </div>
  )
}
