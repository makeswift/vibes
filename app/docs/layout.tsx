import Image from 'next/image'

import { ModeToggle } from '@/components/mode-toggle'

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div>
      <nav className="flex justify-between p-4">
        <Image src="/logo.svg" width={134} height={45} alt="Makeswift logo" />

        <ModeToggle />
      </nav>
      <div className="prose p-6 dark:prose-invert">{children}</div>
    </div>
  )
}
