'use client';

import * as Portal from '@radix-ui/react-portal';
import { ArrowRight, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useQueryState } from 'nuqs';
import {
  createContext,
  ReactNode,
  startTransition,
  useContext,
  useEffect,
  useOptimistic,
} from 'react';

import { ButtonLink } from '@/vibes/soul/primitives/button-link';
import { toast } from '@/vibes/soul/primitives/toaster';

import { compareParser } from './loader';

interface OptimisticAction {
  type: 'add' | 'remove';
  item: CompareDrawerItem;
}

interface CompareDrawerContext {
  optimisticItems: CompareDrawerItem[];
  setOptimisticItems: (action: OptimisticAction) => void;
  maxItems?: number;
}

export const CompareDrawerContext = createContext<CompareDrawerContext | undefined>(undefined);

export interface CompareDrawerProviderProps {
  children: ReactNode;
  items: CompareDrawerItem[];
  maxItems?: number;
  maxCompareLimitMessage?: string;
}

export function CompareDrawerProvider({
  children,
  items,
  maxItems = 12,
  maxCompareLimitMessage = "You've reached the maximum number of products for comparison. Remove a product to add a new one.",
}: CompareDrawerProviderProps) {
  useEffect(() => {
    if (items.length >= maxItems) {
      toast.warning(maxCompareLimitMessage);
    }
  }, [items.length, maxItems, maxCompareLimitMessage]);

  const [optimisticItems, setOptimisticItems] = useOptimistic(
    items,
    (state: CompareDrawerItem[], { type, item }: OptimisticAction) => {
      switch (type) {
        case 'add':
          return [...state, item].sort((a, b) => {
            const numA = Number(a.id);
            const numB = Number(b.id);

            if (!Number.isNaN(numA) && !Number.isNaN(numB)) {
              return numA - numB;
            }

            if (!Number.isNaN(numA)) return -1;
            if (!Number.isNaN(numB)) return 1;

            return a.id < b.id ? -1 : 1;
          });

        case 'remove':
          return state.filter((i) => i.id !== item.id);

        default:
          return state;
      }
    },
  );

  return (
    <CompareDrawerContext value={{ optimisticItems, setOptimisticItems, maxItems }}>
      {children}
    </CompareDrawerContext>
  );
}

export function useCompareDrawer() {
  const context = useContext(CompareDrawerContext);

  if (context === undefined) {
    throw new Error('useCompareDrawer must be used within a CompareDrawerProvider');
  }

  return context;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

interface CompareDrawerItem {
  id: string;
  image?: { src: string; alt: string };
  href: string;
  title: string;
}

export interface CompareDrawerProps {
  href?: string;
  paramName?: string;
  submitLabel?: string;
  removeLabel?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --compare-drawer-background: var(--background);
 *   --compare-drawer-font-family: var(--font-family-body);
 *   --compare-drawer-card-focus: var(--primary);
 *   --compare-drawer-card-border: var(--contrast-100);
 *   --compare-drawer-card-background: var(--background);
 *   --compare-drawer-card-background-hover: var(--contrast-100);
 *   --compare-drawer-card-image-background: var(--contrast-100);
 *   --compare-drawer-empty-image-text: var(--primary-shadow);
 *   --compare-drawer-card-text: var(--foreground);
 *   --compare-drawer-dismiss-border: var(--contast-100);
 *   --compare-drawer-dismiss-border-hover: var(--contast-200);
 *   --compare-drawer-dismiss-background: var(--background);
 *   --compare-drawer-dismiss-background-hover: var(--contrast-100);
 *   --compare-drawer-dismiss-icon: var(--contrast-400);
 *   --compare-drawer-dismiss-icon-hover: var(--foreground);
 * }
 * ```
 */
export function CompareDrawer({
  href = '/compare',
  paramName = 'compare',
  submitLabel = 'Compare',
  removeLabel = 'Remove',
}: CompareDrawerProps) {
  const [params, setParam] = useQueryState(paramName, compareParser);

  const { optimisticItems, setOptimisticItems } = useCompareDrawer();

  return (
    optimisticItems.length > 0 && (
      <Portal.Root asChild>
        <div className="@container sticky bottom-0 z-10 w-full border-t border-(--compare-drawer-card-border,var(--contrast-100)) bg-(--compare-drawer-background,var(--background)) px-3 py-4 @md:py-5 @xl:px-6 @5xl:px-10">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-end gap-x-3 gap-y-4 @md:flex-row">
            <div className="flex flex-1 flex-wrap justify-end gap-4">
              {optimisticItems.map((item) => (
                <div className="relative" key={item.id}>
                  <Link
                    className="group relative flex max-w-56 items-center overflow-hidden rounded-xl border border-(--compare-drawer-link-border,var(--contrast-100)) bg-(--compare-drawer-card-background,var(--background)) font-semibold whitespace-nowrap ring-(--compare-drawer-card-focus,var(--primary)) transition-all duration-150 hover:bg-(--compare-drawer-card-background-hover,var(--contrast-100)) focus:ring-2 focus:outline-hidden"
                    href={item.href}
                  >
                    <div className="relative aspect-square w-12 shrink-0 bg-(--compare-drawer-card-image-background,var(--contrast-100))">
                      {item.image?.src != null ? (
                        <Image
                          alt={item.image.alt}
                          className="rounded-lg object-cover @4xl:rounded-r-none"
                          fill
                          sizes="3rem"
                          src={item.image.src}
                        />
                      ) : (
                        <span className="max-w-full p-1 text-xs break-all text-(--compare-drawer-empty-image-text,var(--primary-shadow)) opacity-20">
                          {getInitials(item.title)}
                        </span>
                      )}
                    </div>
                    <span className="hidden truncate pr-5 pl-3 text-(--compare-drawer-card-text,var(--foreground)) @4xl:block">
                      {item.title}
                    </span>
                  </Link>
                  <button
                    aria-label={`${removeLabel} ${item.title}`}
                    className="absolute -top-2.5 -right-2.5 flex h-7 w-7 items-center justify-center rounded-full border border-(--compare-drawer-dismiss-border,var(--contrast-100)) bg-(--compare-drawer-dismiss-background,var(--background)) text-(--compare-drawer-dismiss-icon,var(--contrast-400)) transition-colors duration-150 hover:border-(--compare-drawer-dismiss-border-hover,var(--contrast-200)) hover:bg-(--compare-drawer-dismiss-background-hover,var(--contrast-100)) hover:text-(--compare-drawer-dismiss-icon-hover,var(--foreground))"
                    onClick={() => {
                      startTransition(async () => {
                        setOptimisticItems({ type: 'remove', item });

                        await setParam((prev) => {
                          const next = prev?.filter((v) => v !== item.id) ?? [];

                          return next.length > 0 ? next : null;
                        });
                      });
                    }}
                    type="button"
                  >
                    <X absoluteStrokeWidth size={16} strokeWidth={1.5} />
                  </button>
                </div>
              ))}
            </div>
            <ButtonLink
              className="hidden @md:block"
              href={`${href}?${paramName}=${params?.toString()}`}
              size="medium"
              variant="primary"
            >
              <span className="inline-flex items-center gap-1">
                {submitLabel} <ArrowRight absoluteStrokeWidth size={20} strokeWidth={1} />
              </span>
            </ButtonLink>
            <ButtonLink className="w-full @md:hidden" href={href} size="small" variant="primary">
              <span className="inline-flex items-center gap-1">
                {submitLabel} <ArrowRight absoluteStrokeWidth size={16} strokeWidth={1} />
              </span>
            </ButtonLink>
          </div>
        </div>
      </Portal.Root>
    )
  );
}
