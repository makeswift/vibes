import { clsx } from 'clsx';

import { Icon, IconName } from '@/vibes/soul/primitives/icon';

export interface IconBlockProps {
  list: Array<{
    icon: IconName;
    title: string;
    description: string;
  }>;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --icon-block-background: hsl(var(--background));
 *   --icon-block-border: hsl(var(--contrast-100));
 *   --icon-block-font-family: var(--font-family-body);
 *   --icon-block-title: hsl(var(--foreground));
 *   --icon-block-description: hsl(var(--contrast-400));
 *   --icon-block-icon: hsl(var(--foreground));
 * }
 * ```
 */
export const IconBlock = function IconBlock({ list }: IconBlockProps) {
  return (
    <section className="bg-[var(--icon-block-background,hsl(var(--background)))] font-[family-name:var(--icon-block-font-family,var(--font-family-body))] @container">
      <ul className="mx-auto flex w-full max-w-screen-2xl flex-wrap justify-center px-3 @2xl:px-20">
        {list.map(({ title, description, icon }, idx) => {
          return (
            <li
              className={clsx(
                'border-[var(--icon-block-border,hsl(var(--contrast-100))] flex w-full flex-col items-center gap-2 border-t px-1 py-10 @md:w-1/2 @xl:w-1/3 @2xl:w-1/4',
              )}
              key={idx}
            >
              <Icon className="text-[var(--icon-block-icon,hsl(var(--foreground)))]" name={icon} />
              <div className="flex flex-col items-center text-center">
                <span className="text-[var(--icon-block-title,hsl(var(--foreground)))]">
                  {title}
                </span>
                <span className="text-[var(--icon-block-description,hsl(var(--contrast-400)))]">
                  {description}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
