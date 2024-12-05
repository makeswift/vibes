import { AnimatedLink } from '@/vibes/soul/primitives/animated-link';

export default function Preview() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="max-w-80">
        <p className="mb-6">
          This is text with an <AnimatedLink label="animated link" link={{ href: '/' }} /> inside.
        </p>

        <AnimatedLink
          label="Animated link with a very long label to exhibit multi line support"
          link={{ href: '/' }}
        />
      </div>
    </div>
  );
}
