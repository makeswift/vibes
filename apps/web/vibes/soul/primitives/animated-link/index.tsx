import { clsx } from 'clsx';
import Link from 'next/link';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --animated-link-text: hsl(var(--foreground));
 *   --animated-link-font-family: var(--font-family-body);
 *   --animated-link-hover: hsl(var(--primary));
 * }
 * ```
 */
export function AnimatedLink({
  className,
  text,
  href,
}: {
  className?: string;
  text: string;
  href: string;
}) {
  return (
    <Link
      className={clsx(
        'origin-left font-[family-name:var(--animated-link-font-family,var(--font-family-body))] font-semibold leading-normal text-[var(--animated-link-text,hsl(var(--foreground)))] transition-[background-size] duration-300 [background:linear-gradient(0deg,var(--animated-link-hover,hsl(var(--primary))),var(--animated-link-hover,hsl(var(--primary))))_no-repeat_left_bottom_/_0_2px] hover:bg-[size:100%_2px] focus:outline-none focus-visible:bg-[size:100%_2px]',
        className,
      )}
      href={href}
    >
      {text}
    </Link>
  );
}
