'use client';

import { DocSearch } from '@docsearch/react';
import Image from 'next/image';

import '@docsearch/css';

import { ModeToggle } from '@/components/ui/mode-toggle';
import { env } from '@/lib/env';

import { ChapterSelect } from './chapter-select';
import { GroupLink } from './group-link';
import { Link } from './link';
import { MobileMenu } from './mobile-menu';
import { Chapter } from './navigation';

interface Props {
  chapterSlug: string;
  chapters: Chapter[];
}

export function Header({ chapters, chapterSlug }: Props) {
  const chapter = chapters.find((c) => c.slug === chapterSlug);

  return (
    <header className="border-contrast-300 bg-background @container sticky top-0 z-[60] h-14 border-b border-dashed md:h-16">
      <div className="mx-auto flex h-full max-w-screen-2xl items-center justify-between px-3 md:px-5 xl:px-8">
        <div className="flex flex-1 items-center gap-x-2 md:gap-x-3">
          <MobileMenu chapter={chapter} />

          <Link className="shrink-0" href="/">
            <Image
              alt="Vibes logo"
              className="mb-0.5"
              height={22}
              priority
              src="/logo.svg"
              width={80}
            />
          </Link>

          <div className="flex items-center">
            <div className="w-2">
              <div className="bg-contrast-500 mx-auto h-5 w-[1px] -skew-x-[20deg]" />
            </div>

            <ChapterSelect chapterSlug={chapterSlug} chapters={chapters} />
          </div>
        </div>

        <nav className="hidden h-full gap-x-4 lg:flex">
          {chapter?.groups.map((group) => (
            <GroupLink
              chapterSlug={chapterSlug}
              className="h-[calc(100%+1px)] place-content-center border-b-2 border-transparent"
              group={group}
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              key={group.pages[0]!.slug}
            />
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-x-0 md:gap-x-1">
          {/* <Button variant="ghost" size="icon">
            <Search />
          </Button> */}

          <DocSearch
            apiKey={env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY}
            appId={env.NEXT_PUBLIC_ALGOLIA_APP_ID}
            indexName={env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}
          />

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
