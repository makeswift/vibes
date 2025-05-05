import { OffsetPagination } from '@/vibes/soul/primitives/offset-pagination';

export default function Preview() {
  return (
    <div className="@container flex min-h-48 items-center justify-center p-5">
      <OffsetPagination pages={8} />
    </div>
  );
}
