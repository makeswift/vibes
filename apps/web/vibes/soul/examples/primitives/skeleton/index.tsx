import * as Skeleton from '@/vibes/soul/primitives/skeleton';

export default function Preview() {
  return (
    <div className="flex justify-center p-10">
      <Skeleton.Root className="w-96 animate-pulse space-y-4" pending={true}>
        <Skeleton.Box className="h-32 w-full rounded-xl" />
        <Skeleton.Text characterCount={24} className="w-full rounded-sm text-2xl" />
        <Skeleton.Text characterCount={16} className="w-full rounded-sm text-2xl" />
      </Skeleton.Root>
    </div>
  );
}
