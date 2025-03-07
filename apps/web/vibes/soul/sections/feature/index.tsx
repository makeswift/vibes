import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/vibes/soul/primitives/button';

export interface FeatureProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  cta: {
    href: string;
    label: string;
  };
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --feature-background: color-mix(in oklab, hsl(var(--primary)), black 75%);
 *   --feature-image-background: hsl(var(--primary) / 10%);
 *   --feature-title-font-family: var(--font-family-heading);
 *   --feature-font-family: var(--font-family-body);
 *   --feature-title: hsl(var(--primary));
 *   --feature-description: hsl(var(--background));
 * }
 * ```
 */
export const Feature = function Feature({ image, title, description, cta }: FeatureProps) {
  return (
    <section className="bg-[var(--feature-background,color-mix(in_oklab,hsl(var(--primary)),black_75%))] @container/section">
      <div className="flex flex-col @3xl/section:flex-row">
        <div className="relative aspect-square max-h-96 w-full bg-[var(--feature-image-background,hsl(var(--primary)/10%))] @3xl/section:max-h-none @3xl/section:w-1/2">
          <Image
            alt={image.alt}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            src={image.src}
          />
        </div>
        <div className="flex w-full flex-col justify-end px-3 py-10 text-background @container/content @lg/section:px-10 @3xl/section:w-1/2 @5xl:p-20">
          <header className="max-w-xl font-[family-name:var(--feature-font-family,var(--font-family-body))]">
            <h2 className="font-[family-name:var(--feature-title-font-family,var(--font-family-heading))] text-4xl font-medium leading-none text-[var(--feature-title,hsl(var(--primary)))] @xl:text-5xl">
              {title}
            </h2>
            <p className="mt-4 font-normal text-[var(--feature-description,hsl(var(--background)))]">
              {description}
            </p>
            <Button className="mt-6" variant="primary">
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </header>
        </div>
      </div>
    </section>
  );
};
