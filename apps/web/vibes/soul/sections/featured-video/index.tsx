import { clsx } from 'clsx';

import { ButtonLink } from '@/vibes/soul/primitives/button-link';

export interface FeaturedVideoProps {
  title: string;
  description: string;
  video: string;
  cta: {
    href: string;
    label: string;
  };
  mediaAlign?: 'left' | 'right' | 'full';
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --featured-video-background: color-mix(in oklab, hsl(var(--primary)), black 75%);
 *   --featured-video-video-background: hsl(var(--primary) / 10%);
 *   --featured-video-title-font-family: var(--font-family-heading);
 *   --featured-video-font-family: var(--font-family-body);
 *   --featured-video-title: hsl(var(--background));
 *   --featured-video-description: hsl(var(--background));
 * }
 * ```
 */
export const FeaturedVideo = function FeaturedVideo({
  title,
  description,
  video,
  cta,
  mediaAlign = 'left',
}: FeaturedVideoProps) {
  return (
    <section
      className={clsx(
        'relative bg-[var(--featured-video-background,color-mix(in_oklab,hsl(var(--primary)),black_75%))] @container',
        mediaAlign === 'full' && 'h-dvh max-h-[700px]',
      )}
    >
      <div className="mx-auto flex h-full max-w-screen-2xl flex-col @3xl:flex-row">
        <video
          autoPlay
          className={clsx(
            'w-full bg-[var(--featured-video-video-background,hsl(var(--primary)/10%))] object-cover',
            mediaAlign === 'full'
              ? 'absolute inset-0 h-full'
              : 'aspect-square @xl:aspect-[9/6] @3xl:h-dvh @3xl:max-h-[880px] @3xl:w-1/2 @5xl:w-3/5',
            { '@3xl:order-2': mediaAlign === 'right' },
          )}
          loop
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
        <header
          className={clsx(
            'z-10 mx-auto flex flex-col items-start gap-4 px-3 pb-20 pt-10 font-[family-name:var(--featured-video-font-family,var(--font-family-body))] text-background @5xl:p-20',
            mediaAlign === 'full'
              ? 'mx-auto mt-auto w-full max-w-screen-2xl px-3 @5xl:px-20'
              : 'w-full justify-end @xl:px-6 @3xl:w-1/2 @5xl:w-2/5',
            mediaAlign === 'right' && '@3xl:order-1',
          )}
        >
          <h2 className="max-w-xl font-[family-name:var(--featured-video-title-font-family,var(--font-family-heading))] text-4xl leading-none text-[var(--featured-video-title,hsl(var(--background)))] @xl:text-5xl">
            {title}
          </h2>
          <p className="max-w-md pb-2 text-[var(--featured-video-description,hsl(var(--background)))]">
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
};
