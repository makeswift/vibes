import { FieldError } from '@/vibes/soul/form/field-error';

export default function Preview() {
  return (
    <div className="p-10">
      <FieldError>You must accept the Terms & Conditions</FieldError>
    </div>
  );
}
