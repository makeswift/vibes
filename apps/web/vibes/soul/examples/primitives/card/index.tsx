import { Card } from '@/vibes/soul/primitives/card';

export default function Preview() {
  return (
    <div className="flex h-screen items-center justify-center gap-8 bg-background p-8">
      <Card
        className="w-80"
        href="#"
        image={{ src: 'https://rstr.in/monogram/vibes/RopDQNbjTc_', alt: 'Low Maintenance' }}
        title="Low Maintenance"
      />
      <Card
        className="w-80"
        href="#"
        // image={{ src: 'https://rstr.in/monogram/vibes/RopDQNbjTc_', alt: 'Low Maintenance' }}
        title="Partial shade"
      />
    </div>
  );
}
