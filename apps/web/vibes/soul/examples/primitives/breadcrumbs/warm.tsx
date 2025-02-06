import { Breadcrumbs } from '@/vibes/soul/primitives/breadcrumbs';

export const breadcrumbs = [
  {
    id: '1',
    text: 'Home',
    href: '#',
  },
  {
    id: '2',
    text: 'Bags',
    href: '#',
  },
  {
    id: '3',
    text: 'Handle Bags',
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
