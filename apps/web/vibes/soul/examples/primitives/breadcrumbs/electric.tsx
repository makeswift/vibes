import { Breadcrumbs } from '@/vibes/soul/primitives/breadcrumbs';

export const breadcrumbs = [
  {
    id: '1',
    text: 'Home',
    href: '#',
  },
  {
    id: '2',
    text: 'Plants',
    href: '#',
  },
  {
    id: '3',
    text: 'Indoor',
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
