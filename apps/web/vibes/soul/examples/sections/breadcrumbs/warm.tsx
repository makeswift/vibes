import { type Breadcrumb, Breadcrumbs } from '@/vibes/soul/sections/breadcrumbs';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';

export default function Preview() {
  const breadcrumbsPromise = new Promise<Breadcrumb[]>((resolve) => {
    setTimeout(() => resolve(breadcrumbs), 1000);
  });

  return (
    <SectionLayout className="group/breadcrumbs">
      <Breadcrumbs breadcrumbs={breadcrumbsPromise} />
    </SectionLayout>
  );
}

export const breadcrumbs: Breadcrumb[] = [
  {
    label: 'Home',
    href: '#1',
  },
  {
    label: 'Bags',
    href: '#2',
  },
  {
    label: 'Handle Bags',
    href: '#3',
  },
];
