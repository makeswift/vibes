import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/vibes/soul/primitives/button';
import { Icon, IconName } from '@/vibes/soul/primitives/icon';

export interface FeatureGridProps {
  image: {
    src: string;
    alt: string;
  };
  grid: Array<{
    icon: IconName;
    title: string;
    description: string;
  }>;
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
 *   --feature-grid-background: var(--primary-shadow);
 *   --feature-grid-image-background: color-mix(in oklab, var(--primary) 10%, transparent);
 *   --feature-grid-font-family: var(--font-family-body);
 *   --feature-grid-icon: var(--background);
 *   --feature-grid-title: var(--background);
 *   --feature-grid-description: var(--contrast-200)
 * }
 * ```
 */
export function FeatureGrid({ image, grid, cta }: FeatureGridProps) {
  return (
    <section className="@container/section bg-(--feature-grid-background,var(--primary-shadow))">
      <div className="flex flex-col @3xl/section:flex-row">
        <div className="relative aspect-square max-h-96 w-full bg-(--feature-grid-image-background,color-mix(in_oklab,var(--primary)_10%,transparent)) @3xl/section:max-h-none @3xl/section:w-1/2">
          <Image
            alt={image.alt}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            src={image.src}
          />
        </div>
        <div className="@container/content w-full px-3 py-10 @lg/section:px-10 @3xl/section:w-1/2 @5xl:p-20">
          <ul className="mb-10 grid gap-10 @xs/content:grid-cols-2">
            {grid.map(({ title, description, icon }, idx) => {
              return (
                <li className="flex items-center gap-4" key={idx}>
                  <Icon
                    className="h-5 w-5 text-(--feature-grid-icon,var(--background))"
                    name={icon}
                  />
                  <div className="font-(family-name:--feature-grid-font-family,var(--font-family-body))">
                    <p className="text-lg font-medium text-(--feature-grid-title,var(--background)) @md/content:text-xl">
                      {title}
                    </p>
                    <p className="text-xs font-normal text-(--feature-grid-description,var(--contrast-200)) @md/content:text-sm">
                      {description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <Button className="mt-6" variant="primary">
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
