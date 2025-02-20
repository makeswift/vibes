import { Breadcrumbs, BreadcrumbWithId } from '@/vibes/soul/sections/breadcrumbs';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';

export default function Preview() {
  const breadcrumbsPromise = new Promise<BreadcrumbWithId[]>((resolve) => {
    setTimeout(() => resolve(breadcrumbs), 1000);
  });

  return (
    <SectionLayout className="group/breadcrumbs">
      <Breadcrumbs breadcrumbs={breadcrumbsPromise} />
    </SectionLayout>
  );
}

export const breadcrumbs: BreadcrumbWithId[] = [
  {
    id: '1',
    label: 'Home',
    href: '#',
  },
  {
    id: '2',
    label: 'Plants',
    href: '#',
  },
  {
    id: '3',
    label: 'Indoor',
    href: '#',
  },
];
