import { ButtonLink } from '@/vibes/soul/primitives/button-link';

export default function Preview() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-y-6">
      <ButtonLink href="#" variant="primary">
        Shop Now
      </ButtonLink>

      <ButtonLink href="#" variant="secondary">
        Shop Now
      </ButtonLink>

      <ButtonLink href="#" variant="tertiary">
        Shop Now
      </ButtonLink>
    </div>
  );
}
