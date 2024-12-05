import { Input } from '@/vibes/soul/primitives/input';

export default function Preview() {
  return (
    <div className="mx-auto flex max-w-[390px] flex-col justify-center gap-3 p-5 sm:p-8 lg:p-12">
      <Input prepend="$" placeholder="Amount" label="Label" />
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" error="Last name required" />
    </div>
  );
}
