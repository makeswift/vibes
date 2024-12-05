import { Input } from '@/vibes/soul/primitives/input';

export default function Preview() {
  return (
    <div className="mx-auto flex max-w-[390px] flex-col justify-center gap-3 p-5 sm:p-8 lg:p-12">
      <Input label="Label" placeholder="Amount" prepend="$" />
      <Input placeholder="First Name" />
      <Input error="Last name required" placeholder="Last Name" />
    </div>
  );
}
