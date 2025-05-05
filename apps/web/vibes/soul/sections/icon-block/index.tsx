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
 *   --icon-block-background: var(--background);
 *   --icon-block-border: var(--contrast-100);
 *   --icon-block-font-family: var(--font-family-body);
 *   --icon-block-title: var(--foreground);
 *   --icon-block-description: var(--contrast-400);
 *   --icon-block-icon: var(--foreground);
 * }
 * ```
 */
export function IconBlock({ list }: IconBlockProps) {
  return (
    <section className="@container bg-(--icon-block-background,var(--background)) font-(family-name:--icon-block-font-family,var(--font-family-body))">
      <ul className="mx-auto flex w-full max-w-screen-2xl flex-wrap justify-center px-3 @2xl:px-20">
        {list.map(({ title, description, icon }, idx) => {
          return (
            <li
              className={clsx(
                'flex w-full flex-col items-center gap-2 border-t border-(--icon-block-border,var(--contrast-100)) px-1 py-10 @md:w-1/2 @xl:w-1/3 @2xl:w-1/4',
              )}
              key={idx}
            >
              <Icon className="text-(--icon-block-icon,var(--foreground))" name={icon} />
              <div className="flex flex-col items-center text-center">
                <span className="text-(--icon-block-title,var(--foreground))">{title}</span>
                <span className="text-(--icon-block-description,var(--contrast-400))">
                  {description}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
