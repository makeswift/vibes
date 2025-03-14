import { clsx } from 'clsx';

import { Stream, Streamable } from '@/vibes/soul/lib/streamable';
import { Badge } from '@/vibes/soul/primitives/badge';
import { ButtonLink } from '@/vibes/soul/primitives/button-link';
import { CursorPagination, CursorPaginationInfo } from '@/vibes/soul/primitives/cursor-pagination';
import {
  ProductCard,
  ProductCardSkeleton,
  ProductCardWithId,
} from '@/vibes/soul/primitives/product-card';
import * as Skeleton from '@/vibes/soul/primitives/skeleton';

export interface Order {
  id: string;
  totalPrice: string;
  status: string;
  href: string;
  lineItems: ProductCardWithId[];
}

export interface OrderListProps {
  className?: string;
  title?: string;
  orders: Streamable<Order[]>;
  paginationInfo?: Streamable<CursorPaginationInfo>;
  orderNumberLabel?: string;
  totalLabel?: string;
  viewDetailsLabel?: string;
  emptyStateTitle?: string;
  emptyStateActionLabel?: string;
  emptyStateActionHref?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --order-list-title-font-family: var(--font-family-heading);
 *   --order-list-label-font-family: var(--font-family-mono);
 *   --order-list-title: hsl(var(--foreground));
 *   --order-list-label: hsl(var(--contrast-500));
 *   --order-list-info: hsl(var(--foreground));
 *   --order-list-border: hsl(var(--contrast-100));
 *   --order-list-empty-state-title: hsl(var(--foreground));
 * }
 * ```
 */
export function OrderList({
  className,
  title = 'Orders',
  orders: streamableOrders,
  paginationInfo,
  orderNumberLabel = 'Order #',
  totalLabel = 'Total',
  viewDetailsLabel = 'View details',
  emptyStateTitle = 'You don&apos;t have any orders',
  emptyStateActionLabel = 'Shop now',
  emptyStateActionHref = '/',
}: OrderListProps) {
  return (
    <div className="group/order-list @container">
      <h1 className="mb-8 hidden font-[family-name:var(--order-list-title-font-family,var(--font-family-heading))] text-4xl font-medium leading-tight tracking-tight text-[var(--order-list-title,hsl(var(--foreground)))] @2xl:block">
        {title}
      </h1>
      <Stream fallback={<OrderListSkeleton />} value={streamableOrders}>
        {(orders) => {
          if (orders.length === 0) {
            return (
              <OrderListEmptyState
                emptyStateActionHref={emptyStateActionHref}
                emptyStateActionLabel={emptyStateActionLabel}
                emptyStateTitle={emptyStateTitle}
              />
            );
          }

          return (
            <div className="@container">
              {orders.map((order) => (
                <div
                  className={clsx(
                    'border-t border-[var(--order-list-border,hsl(var(--contrast-100)))] pb-6 pt-5 last:border-b @lg:pb-10 @lg:pt-6',
                    className,
                  )}
                  key={order.id}
                >
                  <div className="flex flex-col justify-between gap-x-10 gap-y-4 @lg:flex-row">
                    <div className="flex items-start gap-x-12 gap-y-4">
                      <div>
                        <span className="font-[family-name:var(--order-list-label-font-family,var(--font-family-mono))] text-xs uppercase leading-normal text-[var(--order-list-label,hsl(var(--contrast-500)))]">
                          {orderNumberLabel}
                        </span>
                        <span className="block text-lg font-semibold leading-normal text-[var(--order-list-info,hsl(var(--foreground)))]">
                          {order.id}
                        </span>
                      </div>
                      <div>
                        <span className="font-[family-name:var(--order-list-label-font-family,var(--font-family-mono))] text-xs uppercase leading-normal text-[var(--order-list-label,hsl(var(--contrast-500)))]">
                          {totalLabel}
                        </span>
                        <span className="block text-lg font-semibold leading-normal text-[var(--order-list-info,hsl(var(--foreground)))]">
                          {order.totalPrice}
                        </span>
                      </div>
                      <Badge className="mt-0.5">{order.status}</Badge>
                    </div>
                    <ButtonLink href={order.href} size="small">
                      {viewDetailsLabel}
                    </ButtonLink>
                  </div>
                  <div className="mt-6 flex gap-4 overflow-hidden [mask-image:linear-gradient(to_right,_black_0%,_black_80%,_transparent_98%)]">
                    {order.lineItems.map((lineItem) => (
                      <ProductCard
                        className="shrink-0 basis-32 @lg:basis-40"
                        key={lineItem.id}
                        product={lineItem}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        }}
      </Stream>
      {paginationInfo && <CursorPagination info={paginationInfo} />}
    </div>
  );
}

function OrderListSkeleton() {
  return (
    <Skeleton.Root className="group-has-[[data-pending]]/order-list:animate-pulse" pending>
      {Array.from({ length: 3 }).map((_, id) => (
        <div
          className="border-t border-[var(--skeleton,hsl(var(--contrast-300)/15%))] pb-6 pt-5 last:border-b @lg:pb-10 @lg:pt-6"
          data-pending
          key={id}
        >
          <div className="flex flex-col justify-between gap-x-10 gap-y-4 @lg:flex-row">
            <div className="flex flex-wrap items-start gap-x-12 gap-y-4">
              <div>
                <Skeleton.Text characterCount={7} className="rounded-sm text-xs" />
                <Skeleton.Text characterCount={7} className="rounded text-lg" />
              </div>
              <div>
                <Skeleton.Text characterCount={8} className="rounded-sm text-xs" />
                <Skeleton.Text characterCount={6} className="rounded text-lg" />
              </div>
              <Skeleton.Box className="mt-0.5 h-[22px] w-[55px] rounded" />
            </div>
            <Skeleton.Box className="h-[43px] min-w-[12ch] gap-x-2 rounded-full px-4 py-2.5" />
          </div>
          <div className="mt-6 flex gap-4 overflow-hidden [mask-image:linear-gradient(to_right,_black_0%,_black_80%,_transparent_98%)]">
            {Array.from({ length: 8 }).map((__, idx) => (
              <ProductCardSkeleton className="shrink-0 basis-32 @lg:basis-40" key={idx} />
            ))}
          </div>
        </div>
      ))}
    </Skeleton.Root>
  );
}

function OrderListEmptyState({
  emptyStateTitle,
  emptyStateActionLabel,
  emptyStateActionHref = '/',
}: Pick<OrderListProps, 'emptyStateTitle' | 'emptyStateActionLabel' | 'emptyStateActionHref'>) {
  return (
    <div className="@container">
      <div className="border-t border-[var(--order-list-border,hsl(var(--contrast-100)))] py-20">
        <header className="mx-auto flex max-w-2xl flex-col items-center gap-5">
          <h2 className="text-center text-lg font-semibold text-[var(--order-list-empty-state-title,hsl(var(--foreground)))]">
            {emptyStateTitle}
          </h2>
          <ButtonLink className="w-fit" href={emptyStateActionHref}>
            {emptyStateActionLabel}
          </ButtonLink>
        </header>
      </div>
    </div>
  );
}
