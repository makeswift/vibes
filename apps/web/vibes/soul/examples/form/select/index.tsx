import { Select } from '@/vibes/soul/form/select';

export default function Preview() {
  return (
    <div className="p-10">
      <Select
        label="Option"
        name="options"
        options={[
          { value: 'option-1', label: 'Option 1' },
          { value: 'option-2', label: 'Option 2' },
          { value: 'option-3', label: 'Option 3' },
        ]}
      />
    </div>
  );
}
