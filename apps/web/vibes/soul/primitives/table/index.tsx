import { clsx } from 'clsx';
import { ComponentPropsWithRef, forwardRef } from 'react';

export type TableProps = ComponentPropsWithRef<'table'> & {
  className?: string;
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --table-focus: var(--primary);
 *   --table-font-family: var(--font-family-body);
 *   --table-border: var(--contrast-200);
 *   --table-header-background: var(--contrast-50);
 *   --table-header-text: var(--foreground);
 *   --table-row-background: var(--background);
 *   --table-row-background-hover: var(--contrast-50);
 *   --table-row-text: var(--foreground);
 *   --table-cell-padding: 0.75rem;
 * }
 * ```
 */
export const Table = forwardRef<HTMLTableElement, TableProps>(({ className, ...props }, ref) => {
  return (
    <div className="relative overflow-auto">
      <table
        ref={ref}
        className={clsx(
          'w-full caption-bottom border-collapse border-spacing-0 font-(family-name:--table-font-family,var(--font-family-body)) text-sm',
          className,
        )}
        {...props}
      />
    </div>
  );
});
Table.displayName = 'Table';

export type TableHeaderProps = ComponentPropsWithRef<'thead'> & {
  className?: string;
};

export const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <thead
        ref={ref}
        className={clsx(
          'bg-(--table-header-background,var(--contrast-50)) [&_tr]:border-b [&_tr]:border-(--table-border,var(--contrast-200))',
          className,
        )}
        {...props}
      />
    );
  },
);
TableHeader.displayName = 'TableHeader';

export type TableBodyProps = ComponentPropsWithRef<'tbody'> & {
  className?: string;
};

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...props }, ref) => {
    return <tbody ref={ref} className={clsx('[&_tr:last-child]:border-0', className)} {...props} />;
  },
);
TableBody.displayName = 'TableBody';

export type TableFooterProps = ComponentPropsWithRef<'tfoot'> & {
  className?: string;
};

export const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <tfoot
        ref={ref}
        className={clsx(
          'border-t border-(--table-border,var(--contrast-200)) bg-(--table-header-background,var(--contrast-50)) font-medium [&>tr]:last:border-b-0',
          className,
        )}
        {...props}
      />
    );
  },
);
TableFooter.displayName = 'TableFooter';

export type TableRowProps = ComponentPropsWithRef<'tr'> & {
  className?: string;
};

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={clsx(
          'border-b border-(--table-border,var(--contrast-200)) bg-(--table-row-background,var(--background)) text-(--table-row-text,var(--foreground)) transition-colors hover:bg-(--table-row-background-hover,var(--contrast-50)) data-[state=selected]:bg-(--table-row-background-hover,var(--contrast-50))',
          className,
        )}
        {...props}
      />
    );
  },
);
TableRow.displayName = 'TableRow';

export type TableHeadProps = ComponentPropsWithRef<'th'> & {
  className?: string;
};

export const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, ...props }, ref) => {
    return (
      <th
        ref={ref}
        className={clsx(
          'h-12 px-(--table-cell-padding,0.75rem) text-left align-middle font-medium text-(--table-header-text,var(--foreground)) [&:has([role=checkbox])]:pr-0',
          className,
        )}
        {...props}
      />
    );
  },
);
TableHead.displayName = 'TableHead';

export type TableCellProps = ComponentPropsWithRef<'td'> & {
  className?: string;
};

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={clsx(
          'p-(--table-cell-padding,0.75rem) align-middle text-(--table-row-text,var(--foreground)) [&:has([role=checkbox])]:pr-0',
          className,
        )}
        {...props}
      />
    );
  },
);
TableCell.displayName = 'TableCell';

export type TableCaptionProps = ComponentPropsWithRef<'caption'> & {
  className?: string;
};

export const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <caption
        ref={ref}
        className={clsx('mt-4 text-sm text-(--table-row-text,var(--foreground))', className)}
        {...props}
      />
    );
  },
);
TableCaption.displayName = 'TableCaption';
