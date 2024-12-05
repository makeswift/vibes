import { Rating } from '@/vibes/soul/primitives/rating';

export default function Preview() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Rating rating={4.5} />
    </div>
  );
}
