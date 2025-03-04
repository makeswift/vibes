import { NumberInput } from '@/vibes/soul/form/number-input';

export default function Preview() {
  return (
    <div className="p-10">
      <NumberInput errors={['Please select a quantity.']} min={0} max={5} label="Quantity" />
    </div>
  );
}
