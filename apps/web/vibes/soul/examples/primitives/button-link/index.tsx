import { ButtonLink } from '@/vibes/soul/primitives/button-link';

export default function Preview() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-y-5">
      <ButtonLink href="#" variant="primary">
        Shop now
      </ButtonLink>

      <ButtonLink href="#" variant="secondary">
        Shop now
      </ButtonLink>

      <ButtonLink href="#" variant="tertiary">
        Shop now
      </ButtonLink>

      <ButtonLink href="#" variant="ghost">
        Shop now
      </ButtonLink>
    </div>
  );
}
