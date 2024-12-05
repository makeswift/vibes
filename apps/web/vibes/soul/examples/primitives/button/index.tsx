import { Button } from '@/vibes/soul/primitives/button';

export default function Preview() {
  return (
    <div className="grid h-screen place-content-center gap-x-4 gap-y-6">
      <Button variant="primary">Shop Now</Button>
      <Button loading variant="primary">
        Shop Now
      </Button>

      <Button variant="secondary">Shop Now</Button>
      <Button loading variant="secondary">
        Shop Now
      </Button>

      <Button variant="tertiary">Shop Now</Button>
      <Button loading variant="tertiary">
        Shop Now
      </Button>
    </div>
  );
}
