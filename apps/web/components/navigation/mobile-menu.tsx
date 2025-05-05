import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';

import { Chapter } from './navigation';
import { PageLink } from './page-link';

interface Props {
  chapter?: Chapter;
}

export function MobileMenu({ chapter }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  if (!chapter) return null;

  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Open mobile navigation"
          className="inline-flex h-6 w-7 shrink-0 flex-col justify-between px-1 py-1.5 transition-transform xl:hidden"
        >
          <div
            className={clsx(
              'bg-foreground h-0.5 w-full transition-transform duration-200',
              isOpen ? 'translate-y-[5px] rotate-45' : 'translate-y-[1px] rotate-0',
            )}
          />
          <div
            className={clsx(
              'bg-foreground h-0.5 transition-all duration-200',
              isOpen ? 'w-full -translate-y-[5px] -rotate-45' : 'w-4/5 translate-y-[-1px] rotate-0',
            )}
          />
        </button>
      </SheetTrigger>
      <SheetContent className="w-full md:w-72" side="left">
        <VisuallyHidden.Root>
          <SheetTitle>Groups</SheetTitle>
        </VisuallyHidden.Root>
        <div className="text-foreground space-y-4">
          {chapter.groups.map((group) => (
            <div key={group.title}>
              <div className="pb-1.5 text-sm leading-normal font-bold">{group.title}</div>

              <ul>
                {group.pages.map((page) => (
                  <li key={page.slug}>
                    <PageLink chapterSlug={chapter.slug} className="block py-1.5" page={page} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
