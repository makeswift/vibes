import Link from 'next/link';

import { AnimatedUnderline } from '@/vibes/soul/primitives/animated-underline';

export default function Preview() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="max-w-80">
        <p className="mb-6">
          This is text with an{' '}
          <Link className="group/underline focus:outline-hidden" href="/">
            <AnimatedUnderline>animated link</AnimatedUnderline>
          </Link>{' '}
          inside.
        </p>

        <p>
          <AnimatedUnderline>
            Animated line with a very long text to exhibit multi-line support
          </AnimatedUnderline>
        </p>
      </div>
    </div>
  );
}
