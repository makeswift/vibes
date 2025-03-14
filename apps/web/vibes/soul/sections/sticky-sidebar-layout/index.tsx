import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface StickySidebarLayoutProps {
  className?: string;
  sidebar: ReactNode;
  children: ReactNode;
  containerSize?: 'md' | 'lg' | 'xl' | '2xl';
  sidebarSize?: '1/4' | '1/3' | '1/2' | 'sm' | 'md' | 'lg';
  sidebarPosition?: 'before' | 'after';
  hideOverflow?: boolean;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --section-max-width-medium: 768px;
 *   --section-max-width-large: 1024px;
 *   --section-max-width-x-large: 1280px;
 *   --section-max-width-2x-large: 1536px;
 * }
 * ```
 */
export function StickySidebarLayout({
  className,
  sidebar,
  children,
  sidebarSize = '1/3',
  sidebarPosition = 'before',
  containerSize = '2xl',
  hideOverflow = false,
}: StickySidebarLayoutProps) {
  return (
    <section className={clsx('@container', hideOverflow && 'overflow-hidden', className)}>
      <div
        className={clsx(
          'mx-auto flex flex-col items-stretch gap-x-16 gap-y-10 px-4 py-10 @xl:px-6 @xl:py-14 @4xl:flex-row @4xl:px-8 @4xl:py-20',
          {
            md: 'max-w-[var(--section-max-width-medium,768px)]',
            lg: 'max-w-[var(--section-max-width-large,1024px)]',
            xl: 'max-w-[var(--section-max-width-x-large,1280px)]',
            '2xl': 'max-w-[var(--section-max-width-2x-large,1536px)]',
          }[containerSize],
        )}
      >
        <div
          className={clsx(
            'min-w-0',
            sidebarPosition === 'after' ? 'order-2' : 'order-1',
            {
              '1/3': '@4xl:w-1/3',
              '1/2': '@4xl:w-1/2',
              '1/4': '@4xl:w-1/4',
              sm: '@4xl:w-48',
              md: '@4xl:w-60',
              lg: '@4xl:w-80',
            }[sidebarSize],
          )}
        >
          <div className="group/sidebar-menu sticky top-10">{sidebar}</div>
        </div>
        <div
          className={clsx(
            'min-w-0',
            sidebarPosition === 'after' ? 'order-1' : 'order-2',
            {
              '1/3': '@4xl:w-2/3',
              '1/2': '@4xl:w-1/2',
              '1/4': '@4xl:w-3/4',
              sm: '@4xl:flex-1',
              md: '@4xl:flex-1',
              lg: '@4xl:flex-1',
            }[sidebarSize],
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
