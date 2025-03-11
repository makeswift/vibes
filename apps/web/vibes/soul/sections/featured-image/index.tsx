import { clsx } from 'clsx';
import Image from 'next/image';

import { ButtonLink } from '@/vibes/soul/primitives/button-link';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --featured-image-background: color-mix(in oklab, hsl(var(--primary)), black 75%);
 *   --featured-image-image-background: hsl(var(--primary) / 10%);
 *   --featured-image-title-font-family: var(--font-family-heading);
 *   --featured-image-font-family: var(--font-family-body);
 *   --featured-image-title: hsl(var(--background));
 *   --featured-image-description: hsl(var(--background));
 * }
 * ```
 */
export interface FeaturedImageProps {
  title: string;
  description: string;
  image: {
    src: string;
    blurDataUrl?: string;
    alt: string;
  };
  cta: {
    href: string;
    label: string;
  };
  mediaAlign?: 'left' | 'right' | 'full';
}

export function FeaturedImage({
  title,
  description,
  image,
  cta,
  mediaAlign = 'left',
}: FeaturedImageProps) {
  return (
    <section
      className={clsx(
        'relative bg-[var(--featured-image-background,color-mix(in_oklab,hsl(var(--primary)),black_75%))] @container',
        mediaAlign === 'full' && 'h-dvh max-h-[700px]',
      )}
    >
      <div className="mx-auto flex h-full max-w-screen-2xl flex-col @3xl:flex-row">
        <div
          className={clsx(
            'w-full bg-[var(--featured-image-image-background,hsl(var(--primary)/10%))] object-cover',
            mediaAlign === 'full'
              ? 'absolute inset-0 h-full'
              : 'relative aspect-square bg-primary/10 @xl:aspect-[9/6] @3xl:h-dvh @3xl:max-h-[880px] @3xl:w-1/2 @5xl:w-3/5',
            mediaAlign === 'right' && '@3xl:order-2 @7xl:mr-20',
            mediaAlign === 'left' && '@7xl:ml-20',
          )}
        >
          <Image
            alt={image.alt}
            blurDataURL={image.blurDataUrl}
            className="object-cover"
            fill
            placeholder={image.blurDataUrl != null && image.blurDataUrl !== '' ? 'blur' : 'empty'}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw"
            src={image.src}
          />
        </div>
        <header
          className={clsx(
            'z-10 mx-auto flex flex-col items-start gap-4 px-3 pb-20 pt-10 font-[family-name:var(--featured-image-font-family,var(--font-family-body))] text-background @5xl:p-20',
            mediaAlign === 'full'
              ? 'mx-auto mt-auto w-full max-w-screen-2xl px-3 @5xl:px-20'
              : 'w-full justify-end @xl:px-6 @3xl:w-1/2 @5xl:w-2/5',
            mediaAlign === 'right' && '@3xl:order-1',
          )}
        >
          <h2 className="max-w-xl font-[family-name:var(--featured-image-title-font-family,var(--font-family-heading))] text-4xl leading-none text-[var(--featured-image-title,hsl(var(--background)))] @xl:text-5xl">
            {title}
          </h2>
          <p className="max-w-md pb-2 text-[var(--featured-image-description,hsl(var(--background)))]">
            {description}
          </p>
          <ButtonLink
            className={clsx(mediaAlign !== 'full' && 'text-foreground')}
            href={cta.href}
            variant={mediaAlign === 'full' ? 'tertiary' : 'primary'}
          >
            {cta.label}
          </ButtonLink>
        </header>
      </div>
    </section>
  );
}
