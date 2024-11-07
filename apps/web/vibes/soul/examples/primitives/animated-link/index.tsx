import { AnimatedLink } from '@/vibes/soul/primitives/animated-link'

export default function Preview() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="max-w-80">
        <p className="mb-6">
          This is text with an <AnimatedLink link={{ href: '/' }} label="animated link" /> inside.
        </p>

        <AnimatedLink
          link={{ href: '/' }}
          label="Animated link with a very long label to exhibit multi line support"
        />
      </div>
    </div>
  )
}
