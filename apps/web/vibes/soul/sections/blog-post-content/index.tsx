import { clsx } from 'clsx';
import Image from 'next/image';

import { Breadcrumbs } from '@/vibes/soul/primitives/breadcrumbs';

import { ButtonLink } from '../../primitives/button-link';

interface Tag {
  label: string;
  link: {
    href: string;
    target?: string;
  };
}

interface Image {
  src: string;
  alt: string;
}

interface Props {
  title: string;
  author: string;
  date: string;
  tags?: Tag[];
  content: string;
  image?: Image;
  className?: string;
}

export const BlogPostContent = function BlogPostContent({
  title,
  author,
  date,
  tags,
  content,
  image,
  className = '',
}: Props) {
  return (
    <section className={clsx('@container', className)}>
      <div className="mx-auto max-w-screen-2xl px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
        <header className="mx-auto w-full max-w-4xl pb-8 @2xl:pb-12 @4xl:pb-16">
          <Breadcrumbs
            breadcrumbs={[
              {
                label: 'Home',
                href: '#',
              },
              {
                label: 'Blog',
                href: '#',
              },
              {
                label: title,
                href: '#',
              },
            ]}
          />

          <h1 className="mb-4 mt-8 font-heading text-4xl font-medium leading-none @xl:text-5xl @4xl:text-6xl">
            {title}
          </h1>
          <p>
            {date} <span className="px-1">•</span> {author}
          </p>

          {(tags?.length ?? 0) > 0 && (
            <div className="-ml-1 mt-4 flex flex-wrap gap-1.5 @xl:mt-6">
              {tags?.map((tag, index) => (
                <ButtonLink key={index} href={tag.link.href} variant="tertiary" size="small">
                  {tag.label}
                </ButtonLink>
              ))}
            </div>
          )}
        </header>

        {image?.src != null && image.src !== '' && (
          <Image
            src={image.src}
            alt={image.alt}
            height={780}
            width={1280}
            className="mb-8 aspect-video w-full rounded-2xl bg-contrast-100 object-cover @2xl:mb-12 @4xl:mb-16"
          />
        )}

        <article
          dangerouslySetInnerHTML={{ __html: content }}
          className="prose mx-auto w-full max-w-4xl space-y-4 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:leading-none [&_h2]:@xl:text-4xl [&_img]:mx-auto [&_img]:max-h-[600px] [&_img]:w-fit [&_img]:rounded-2xl [&_img]:object-cover"
        />
      </div>
    </section>
  );
};
