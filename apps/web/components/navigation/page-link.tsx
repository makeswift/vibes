'use client';

import { usePathname } from 'next/navigation';

import { Link } from './link';
import { Page } from './navigation';

interface Props
  extends Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href' | 'active' | 'children'> {
  chapterSlug: string;
  page: Page;
}

export function PageLink({ chapterSlug, page, ...rest }: Props) {
  const pathname = usePathname();
  const href = `/docs/${chapterSlug}/${page.slug}`;

  return (
    <Link {...rest} active={pathname === href} href={href}>
      {page.title}
    </Link>
  );
}
