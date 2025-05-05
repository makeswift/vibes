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
 *   --feature-background: var(--primary-shadow);
 *   --feature-image-background: color-mix(in oklab, var(--primary) 10%, transparent);
 *   --feature-title-font-family: var(--font-family-heading);
 *   --feature-font-family: var(--font-family-body);
 *   --feature-title: var(--primary);
 *   --feature-description: var(--background);
 * }
 * ```
 */
export function Feature({ image, title, description, cta }: FeatureProps) {
  return (
    <section className="@container/section bg-(--feature-background,var(--primary-shadow))">
      <div className="flex flex-col @3xl/section:flex-row">
        <div className="relative aspect-square max-h-96 w-full bg-(--feature-image-background,color-mix(in_oklab,var(--primary)_10%,transparent)) @3xl/section:max-h-none @3xl/section:w-1/2">
          <Image
            alt={image.alt}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            src={image.src}
          />
        </div>
        <div className="text-background @container/content flex w-full flex-col justify-end px-3 py-10 @lg/section:px-10 @3xl/section:w-1/2 @5xl:p-20">
          <header className="max-w-xl font-(family-name:--feature-font-family,var(--font-family-body))">
            <h2 className="font-(family-name:--feature-title-font-family,var(--font-family-heading)) text-4xl leading-none font-medium text-(--feature-title,var(--primary)) @xl:text-5xl">
              {title}
            </h2>
            <p className="mt-4 font-normal text-(--feature-description,var(--background))">
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
}
