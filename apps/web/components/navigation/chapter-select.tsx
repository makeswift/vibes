'use client';

import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import ChevronDown12 from '@/icons/generated/ChevronDown12';

import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';

import { Chapter } from './navigation';

type ComingSoonChapter = Pick<
  Chapter,
  'name' | 'slug' | 'description' | 'author' | 'thumbnail' | 'tags'
>;

const comingSoonChapters = [
  {
    name: '2px',
    slug: '2px',
    author: {
      name: 'Tinloof',
      url: 'https://tinloof.com',
    },
    description:
      'A bold design that combines brutalist and minimal styles, featuring distinctive 2-pixel borders and details.',
    thumbnail: '/2px/thumbnail.png',
    tags: ['Ecommerce'],
  },
  {
    name: 'Eclipse',
    slug: 'eclipse',
    author: {
      name: 'Makeswift',
      url: 'https://makeswift.com',
    },
    description:
      'A modern dark mode SaaS website vibe inspired by Linear, featuring minimalistic design, background textures, translucent foreground elements, and animated glow effects.',
    thumbnail: '/eclipse/thumbnail.png',
    tags: ['SaaS'],
  },
] as const satisfies ComingSoonChapter[];

interface Props {
  chapterSlug: string;
  chapters: Chapter[];
}

export function ChapterSelect({ chapters, chapterSlug }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const activeVibe = Object.values(chapters).find((chapter) => chapter.slug === chapterSlug);
  const allChapters = useMemo(
    () => [
      ...chapters.map((chapter) => ({ ...chapter, comingSoon: false })),
      ...comingSoonChapters.map((chapter) => ({ ...chapter, comingSoon: true })),
    ],
    [chapters],
  );

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  if (!activeVibe) return null;

  return (
    <>
      <Sheet onOpenChange={setIsOpen} open={isOpen}>
        <SheetTrigger asChild>
          <Button size="small" variant="ghost">
            <span className="text-sm">{activeVibe.name}</span>
            <ChevronDown12
              className={clsx(
                'stroke-foreground transition-transform',
                isOpen ? 'rotate-180' : 'rotate-0',
              )}
            />
          </Button>
        </SheetTrigger>
        <SheetContent className="z-20 focus:outline-none" side="top">
          <VisuallyHidden.Root>
            <SheetTitle>VIBES</SheetTitle>
          </VisuallyHidden.Root>
          <div className="mx-auto grid grid-cols-1 gap-x-6 gap-y-8 xl:container md:grid-cols-2 md:gap-y-10 lg:gap-x-8 lg:py-2 xl:px-8 2xl:grid-cols-3">
            {Object.values(allChapters).map((chapter) => (
              <div key={chapter.slug}>
                <Link
                  aria-disabled={chapter.comingSoon}
                  className={clsx(
                    'group ring-primary ring-offset-8 focus:outline-none focus-visible:ring-2',
                    chapter.comingSoon && 'pointer-events-none',
                  )}
                  href={`/docs/${chapter.slug}`}
                >
                  <div className="relative mb-4 aspect-video">
                    {chapter.comingSoon && (
                      <span className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white">
                        Coming Soon!
                      </span>
                    )}
                    <div className="marching-ants absolute inset-0 border border-dashed border-transparent bg-transparent opacity-50 transition-all [animation-play-state:paused] group-hover:-inset-1 group-hover:opacity-100 group-hover:[animation-play-state:running]" />
                    <Image
                      alt={`Thumbnail of ${chapter.name} chapter`}
                      className={clsx(
                        'border border-contrast-200 bg-contrast-100 object-cover',
                        chapter.comingSoon && 'opacity-50',
                      )}
                      fill
                      priority
                      src={chapter.thumbnail}
                    />
                  </div>
                </Link>
                <div className="mb-2 flex justify-between">
                  <div className="mb-1">
                    <Link className="text-xl font-bold" href={`/docs/${chapter.slug}`}>
                      {chapter.name}
                    </Link>
                    <div className="text-xs">
                      <span className="text-contrast-400">by </span>
                      <Link
                        className="marching-ants-link text-contrast-500"
                        href={chapter.author.url}
                        target="_blank"
                      >
                        {chapter.author.name}
                      </Link>
                    </div>
                  </div>
                  <div>
                    {chapter.tags.map((tag, index) => (
                      <span
                        className="rounded-full border border-foreground px-2 py-0.5 text-xs font-bold text-foreground"
                        key={index}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="pr-4 font-light text-foreground">{chapter.description}</p>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <div aria-hidden="true" className="hidden">
        {Object.values(chapters).map((chapter) => (
          <Image
            alt={`Preload thumbnail of ${chapter.name} chapter`}
            fill
            key={chapter.slug}
            priority
            src={chapter.thumbnail}
          />
        ))}
      </div>
    </>
  );
}
