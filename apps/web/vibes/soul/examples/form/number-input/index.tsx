import { NumberInput } from '@/vibes/soul/form/number-input';

export default function Preview() {
  return (
    <div className="p-10">
      <NumberInput
        defaultValue={1}
        errors={['Please select a quantity.']}
        label="Quantity"
        max={5}
        min={0}
      />
    </div>
  );
}
