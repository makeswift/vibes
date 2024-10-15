import { AnimatedLink } from '@/vibes/soul/components/animated-link'

export default function Preview() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <AnimatedLink href="/" label="Hover Me" />

      <div className="mt-6 max-w-56 rounded bg-contrast-100/30 p-4">
        <AnimatedLink
          href="/"
          label="Animated Link with a very long label to exhibit multi line support"
        />
      </div>
    </div>
  )
}
