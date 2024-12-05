import { Breadcrumb, Breadcrumbs } from '@/vibes/soul/primitives/breadcrumbs';

export const breadcrumbs: Breadcrumb[] = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'Shoes',
    href: '#',
  },
  {
    label: 'Boots',
    href: '#',
  },
];

export default function Preview() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </div>
  );
}
