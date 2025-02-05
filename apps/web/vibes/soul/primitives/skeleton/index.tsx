import { clsx } from 'clsx';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --skeleton: hsl(var(--contrast-100));
 * }
 * ```
 */
function SkeletonRoot({
  className,
  children,
  pending = false,
}: {
  className?: string;
  children?: React.ReactNode;
  pending: boolean;
}) {
  return (
    <div
      className={clsx('@container', className)}
      data-pending={pending ? '' : undefined}
      role={pending ? 'status' : undefined}
    >
      {children}
      {pending && <span className="sr-only">Loading...</span>}
    </div>
  );
}

SkeletonRoot.displayName = 'Skeleton.Root';

function SkeletonBox({ className }: { className?: string }) {
  return <div className={clsx('bg-[var(--skeleton,hsl(var(--contrast-100)))]', className)} />;
}

SkeletonBox.displayName = 'Skeleton.Box';

function SkeletonText({ className }: { className?: string }) {
  return (
    <div className={clsx('flex h-[1lh] items-center', className)}>
      <div
        className={clsx(
          'h-[1ex] w-full rounded-[inherit] bg-[var(--skeleton,hsl(var(--contrast-100)))]',
        )}
      />
    </div>
  );
}

SkeletonText.displayName = 'Skeleton.Text';

export { SkeletonRoot as Root, SkeletonBox as Box, SkeletonText as Text };
