import { PriceLabel } from '@/vibes/soul/primitives/price-label';

export default function Preview() {
  return (
    <div className="flex h-screen items-center justify-center gap-16">
      <PriceLabel price="$100" />
      <PriceLabel price={{ type: 'sale', previousValue: '$150', currentValue: '$100' }} />
      <PriceLabel price={{ type: 'range', minValue: '$100', maxValue: '$200' }} />
    </div>
  );
}
