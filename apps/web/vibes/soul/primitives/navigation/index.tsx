'use client';

import { SubmissionResult, useForm } from '@conform-to/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Popover from '@radix-ui/react-popover';
import { clsx } from 'clsx';
import debounce from 'lodash.debounce';
import { ArrowRight, ChevronDown, Search, SearchIcon, ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, {
  forwardRef,
  Ref,
  startTransition,
  useActionState,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from 'react';
import { useFormStatus } from 'react-dom';

import { FormStatus } from '@/vibes/soul/form/form-status';
import { Stream, Streamable } from '@/vibes/soul/lib/streamable';
import { Button } from '@/vibes/soul/primitives/button';
import { Logo } from '@/vibes/soul/primitives/logo';
import { Price } from '@/vibes/soul/primitives/price-label';
import { ProductCard } from '@/vibes/soul/primitives/product-card';
import { toast } from '@/vibes/soul/primitives/toaster';

interface Link {
  label: string;
  href: string;
  groups?: Array<{
    label?: string;
    href?: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  }>;
}

interface Locale {
  id: string;
  label: string;
}

interface Currency {
  id: string;
  label: string;
}

type Action<State, Payload> = (
  state: Awaited<State>,
  payload: Awaited<Payload>,
) => State | Promise<State>;

export type SearchResult =
  | {
      type: 'products';
      title: string;
      products: Array<{
        id: string;
        title: string;
        href: string;
        price?: Price;
        image?: { src: string; alt: string };
      }>;
    }
  | {
      type: 'links';
      title: string;
      links: Array<{ label: string; href: string }>;
    };

type LocaleAction = Action<SubmissionResult | null, FormData>;
type CurrencyAction = Action<SubmissionResult | null, FormData>;
type SearchAction<S extends SearchResult> = Action<
  {
    searchResults: S[] | null;
    lastResult: SubmissionResult | null;
    emptyStateTitle?: string;
    emptyStateSubtitle?: string;
  },
  FormData
>;

interface Props<S extends SearchResult> {
  className?: string;
  isFloating?: boolean;
  accountHref: string;
  cartCount?: Streamable<number | null>;
  cartHref: string;
  links: Streamable<Link[]>;
  linksPosition?: 'center' | 'left' | 'right';
  locales?: Locale[];
  activeLocaleId?: string;
  localeAction?: LocaleAction;
  currencies?: Currency[];
  activeCurrencyId?: Streamable<string | undefined>;
  currencyAction?: CurrencyAction;
  logo: Streamable<string | { src: string; alt: string }>;
  logoWidth?: number;
  logoHeight?: number;
  logoHref?: string;
  logoLabel?: string;
  mobileLogo?: Streamable<string | { src: string; alt: string }>;
  mobileLogoWidth?: number;
  mobileLogoHeight?: number;
  searchHref: string;
  searchParamName?: string;
  searchAction?: SearchAction<S>;
  searchCtaLabel?: string;
  searchInputPlaceholder?: string;
  cartLabel?: string;
  accountLabel?: string;
  openSearchPopupLabel?: string;
  searchLabel?: string;
  mobileMenuTriggerLabel?: string;
}

const MobileMenuButton = forwardRef<
  React.ComponentRef<'button'>,
  { open: boolean } & React.ComponentPropsWithoutRef<'button'>
>(({ open, className, ...rest }, ref) => {
  return (
    <button
      {...rest}
      className={clsx(
        'group relative rounded-lg p-2 ring-(--nav-focus,var(--primary)) outline-0 transition-colors focus-visible:ring-2',
        className,
      )}
      ref={ref}
    >
      <div className="flex h-4 w-4 origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
        <div
          className={clsx(
            'h-px origin-left transform bg-(--nav-mobile-button-icon,var(--foreground)) transition-all duration-300',
            open ? 'translate-x-10' : 'w-7',
          )}
        />
        <div
          className={clsx(
            'h-px transform rounded-sm bg-(--nav-mobile-button-icon,var(--foreground)) transition-all delay-75 duration-300',
            open ? 'translate-x-10' : 'w-7',
          )}
        />
        <div
          className={clsx(
            'h-px origin-left transform bg-(--nav-mobile-button-icon,var(--foreground)) transition-all delay-150 duration-300',
            open ? 'translate-x-10' : 'w-7',
          )}
        />

        <div
          className={clsx(
            'absolute top-2 flex transform items-center justify-between bg-(--nav-mobile-button-icon,var(--foreground)) transition-all duration-500',
            open ? 'w-12 translate-x-0' : 'w-0 -translate-x-10',
          )}
        >
          <div
            className={clsx(
              'absolute h-px w-4 transform bg-(--nav-mobile-button-icon,var(--foreground)) transition-all delay-300 duration-500',
              open ? 'rotate-45' : 'rotate-0',
            )}
          />
          <div
            className={clsx(
              'absolute h-px w-4 transform bg-(--nav-mobile-button-icon,var(--foreground)) transition-all delay-300 duration-500',
              open ? '-rotate-45' : 'rotate-0',
            )}
          />
        </div>
      </div>
    </button>
  );
});

MobileMenuButton.displayName = 'MobileMenuButton';

const navGroupClassName =
  'block rounded-lg bg-(--nav-group-background,transparent) px-3 py-2 font-(family-name:--nav-group-font-family,var(--font-family-body)) font-medium text-(--nav-group-text,var(--foreground)) ring-(--nav-focus,var(--primary)) transition-colors hover:bg-(--nav-group-background-hover,var(--contrast-100)) hover:text-(--nav-group-text-hover,var(--foreground)) focus-visible:outline-0 focus-visible:ring-2';
const navButtonClassName =
  'relative rounded-lg bg-(--nav-button-background,transparent) p-1.5 text-(--nav-button-icon,var(--foreground)) ring-(--nav-focus,var(--primary)) transition-colors focus-visible:outline-0 focus-visible:ring-2 @4xl:hover:bg-(--nav-button-background-hover,var(--contrast-100)) @4xl:hover:text-(--nav-button-icon-hover,var(--foreground))';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --nav-focus: var(--primary);
 *   --nav-background: var(--background);
 *   --nav-floating-border: color-mix(in oklab, var(--foreground) 10%, transparent);
 *   --nav-link-text: var(--foreground);
 *   --nav-link-text-hover: var(--foreground);
 *   --nav-link-background: transparent;
 *   --nav-link-background-hover: var(--contrast-100);
 *   --nav-link-font-family: var(--font-family-body);
 *   --nav-group-text: var(--foreground);
 *   --nav-group-text-hover: var(--foreground);
 *   --nav-group-background: transparent;
 *   --nav-group-background-hover: var(--contrast-100);
 *   --nav-group-font-family: var(--font-family-body);
 *   --nav-sub-link-text: var(--contrast-500);
 *   --nav-sub-link-text-hover: var(--foreground);
 *   --nav-sub-link-background: transparent;
 *   --nav-sub-link-background-hover: var(--contrast-100);
 *   --nav-sub-link-font-family: var(--font-family-body);
 *   --nav-button-icon: var(--foreground);
 *   --nav-button-icon-hover: var(--foreground);
 *   --nav-button-background: var(--background);
 *   --nav-button-background-hover: var(--contrast-100);
 *   --nav-menu-background: var(--background);
 *   --nav-menu-border: color-mix(in oklab, var(--foreground) 5%, transparent);
 *   --nav-mobile-background: var(--background);
 *   --nav-mobile-divider: var(--contrast-100);
 *   --nav-mobile-button-icon: var(--foreground);
 *   --nav-mobile-link-text: var(--foreground);
 *   --nav-mobile-link-text-hover: var(--foreground);
 *   --nav-mobile-link-background: transparent;
 *   --nav-mobile-link-background-hover: var(--contrast-100);
 *   --nav-mobile-link-font-family: var(--font-family-body);
 *   --nav-mobile-sub-link-text: var(--contrast-500);
 *   --nav-mobile-sub-link-text-hover: var(--foreground);
 *   --nav-mobile-sub-link-background: transparent;
 *   --nav-mobile-sub-link-background-hover: var(--contrast-100);
 *   --nav-mobile-sub-link-font-family: var(--font-family-body);
 *   --nav-search-background: var(--background);
 *   --nav-search-border: color-mix(in oklab, var(--foreground) 5%, transparent);
 *   --nav-search-divider: color-mix(in oklab, var(--foreground) 5%, transparent);
 *   --nav-search-icon: var(--contrast-500);
 *   --nav-search-empty-title: var(--foreground);
 *   --nav-search-empty-subtitle: var(--contrast-500);
 *   --nav-search-result-title: var(--foreground);
 *   --nav-search-result-title-font-family: var(--font-family-mono);
 *   --nav-search-result-link-text: var(--foreground);
 *   --nav-search-result-link-text-hover: var(--foreground);
 *   --nav-search-result-link-background: var(--background);
 *   --nav-search-result-link-background-hover: var(--contrast-100);
 *   --nav-search-result-link-font-family: var(--font-family-body);
 *   --nav-cart-count-text: var(--background);
 *   --nav-cart-count-background: var(--foreground);
 *   --nav-locale-background: var(--background);
 *   --nav-locale-link-text: var(--contrast-400);
 *   --nav-locale-link-text-hover: var(--foreground);
 *   --nav-locale-link-text-selected: var(--foreground);
 *   --nav-locale-link-background: transparent;
 *   --nav-locale-link-background-hover: var(--contrast-100);
 *   --nav-locale-link-font-family: var(--font-family-body);
 * }
 * ```
 */
export const Navigation = forwardRef(function Navigation<S extends SearchResult>(
  {
    className,
    isFloating = false,
    cartHref,
    cartCount: streamableCartCount,
    accountHref,
    links: streamableLinks,
    logo: streamableLogo,
    logoHref = '/',
    logoLabel = 'Home',
    logoWidth = 200,
    logoHeight = 40,
    mobileLogo: streamableMobileLogo,
    mobileLogoWidth = 100,
    mobileLogoHeight = 40,
    linksPosition = 'center',
    activeLocaleId,
    localeAction,
    locales,
    currencies,
    activeCurrencyId: streamableActiveCurrencyId,
    currencyAction,
    searchHref,
    searchParamName = 'query',
    searchAction,
    searchCtaLabel,
    searchInputPlaceholder,
    cartLabel = 'Cart',
    accountLabel = 'Profile',
    openSearchPopupLabel = 'Open search popup',
    searchLabel = 'Search',
    mobileMenuTriggerLabel = 'Toggle navigation',
  }: Props<S>,
  ref: Ref<HTMLDivElement>,
) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleScroll() {
      setIsSearchOpen(false);
      setIsMobileMenuOpen(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavigationMenu.Root
      className={clsx('@container relative mx-auto w-full max-w-screen-2xl', className)}
      delayDuration={0}
      onValueChange={() => setIsSearchOpen(false)}
      ref={ref}
    >
      <div
        className={clsx(
          'flex min-h-16 items-center justify-between gap-1 bg-(--nav-background,var(--background)) py-2 pr-2 pl-3 transition-shadow @4xl:rounded-2xl @4xl:px-2 @4xl:pr-2.5 @4xl:pl-6',
          isFloating
            ? 'shadow-xl ring-1 ring-(--nav-floating-border,color-mix(in_oklab,var(--foreground)_90%,transparent))'
            : 'shadow-none ring-0',
        )}
      >
        {/* Mobile Menu */}
        <Popover.Root onOpenChange={setIsMobileMenuOpen} open={isMobileMenuOpen}>
          <Popover.Anchor className="absolute top-full right-0 left-0" />
          <Popover.Trigger asChild>
            <MobileMenuButton
              aria-label={mobileMenuTriggerLabel}
              className="mr-1 @4xl:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              open={isMobileMenuOpen}
            />
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 @container max-h-[calc(var(--radix-popover-content-available-height)-8px)] w-[var(--radix-popper-anchor-width)]">
              <div className="max-h-[inherit] divide-y divide-(--nav-mobile-divider,var(--contrast-100)) overflow-y-auto bg-(--nav-mobile-background,var(--background))">
                <Stream
                  fallback={
                    <ul className="flex animate-pulse flex-col gap-4 p-5 @4xl:gap-2 @4xl:p-5">
                      <li>
                        <span className="bg-contrast-100 block h-4 w-10 rounded-md" />
                      </li>
                      <li>
                        <span className="bg-contrast-100 block h-4 w-14 rounded-md" />
                      </li>
                      <li>
                        <span className="bg-contrast-100 block h-4 w-24 rounded-md" />
                      </li>
                      <li>
                        <span className="bg-contrast-100 block h-4 w-16 rounded-md" />
                      </li>
                    </ul>
                  }
                  value={streamableLinks}
                >
                  {(links) =>
                    links.map((item, i) => (
                      <ul className="flex flex-col p-2 @4xl:gap-2 @4xl:p-5" key={i}>
                        {item.label !== '' && (
                          <li>
                            <Link
                              className="block rounded-lg bg-(--nav-mobile-link-background,transparent) px-3 py-2 font-(family-name:--nav-mobile-link-font-family,var(--font-family-body)) font-semibold text-(--nav-mobile-link-text,var(--foreground)) ring-(--nav-focus,var(--primary)) transition-colors hover:bg-(--nav-mobile-link-background-hover,var(--contrast-100)) hover:text-(--nav-mobile-link-text-hover,var(--foreground)) focus-visible:ring-2 focus-visible:outline-0 @4xl:py-4"
                              href={item.href}
                            >
                              {item.label}
                            </Link>
                          </li>
                        )}
                        {item.groups
                          ?.flatMap((group) => group.links)
                          .map((link, j) => (
                            <li key={j}>
                              <Link
                                className="block rounded-lg bg-(--nav-mobile-sub-link-background,transparent) px-3 py-2 font-(family-name:--nav-mobile-sub-link-font-family,var(--font-family-body)) text-sm font-medium text-(--nav-mobile-sub-link-text,var(--contrast-500)) ring-(--nav-focus,var(--primary)) transition-colors hover:bg-(--nav-mobile-sub-link-background-hover,var(--contrast-100)) hover:text-(--nav-mobile-sub-link-text-hover,var(--foreground)) focus-visible:ring-2 focus-visible:outline-0 @4xl:py-4"
                                href={link.href}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    ))
                  }
                </Stream>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>

        {/* Logo */}
        <div
          className={clsx(
            'flex items-center justify-start self-stretch',
            linksPosition === 'center' ? 'flex-1' : 'flex-1 @4xl:flex-none',
          )}
        >
          <Logo
            className={clsx(streamableMobileLogo != null ? 'hidden @4xl:flex' : 'flex')}
            height={logoHeight}
            href={logoHref}
            label={logoLabel}
            logo={streamableLogo}
            width={logoWidth}
          />
          {streamableMobileLogo != null && (
            <Logo
              className="flex @4xl:hidden"
              height={mobileLogoHeight}
              href={logoHref}
              label={logoLabel}
              logo={streamableMobileLogo}
              width={mobileLogoWidth}
            />
          )}
        </div>

        {/* Top Level Nav Links */}
        <ul
          className={clsx(
            'hidden gap-1 @4xl:flex @4xl:flex-1',
            {
              left: '@4xl:justify-start',
              center: '@4xl:justify-center',
              right: '@4xl:justify-end',
            }[linksPosition],
          )}
        >
          <Stream
            fallback={
              <ul className="flex animate-pulse flex-row gap-6">
                <li>
                  <span className="bg-contrast-100 block h-4 w-16 rounded-md" />
                </li>
                <li>
                  <span className="bg-contrast-100 block h-4 w-12 rounded-md" />
                </li>
                <li>
                  <span className="bg-contrast-100 block h-4 w-24 rounded-md" />
                </li>
                <li>
                  <span className="bg-contrast-100 block h-4 w-16 rounded-md" />
                </li>
              </ul>
            }
            value={streamableLinks}
          >
            {(links) =>
              links.map((item, i) => (
                <NavigationMenu.Item key={i} value={i.toString()}>
                  <NavigationMenu.Trigger asChild>
                    <Link
                      className="hidden items-center rounded-xl bg-(--nav-link-background,transparent) p-2.5 font-(family-name:--nav-link-font-family,var(--font-family-body)) text-sm font-medium whitespace-nowrap text-(--nav-link-text,var(--foreground)) ring-(--nav-focus,var(--primary)) transition-colors duration-200 hover:bg-(--nav-link-background-hover,var(--contrast-100)) hover:text-(--nav-link-text-hover,var(--foreground)) focus-visible:ring-2 focus-visible:outline-0 @4xl:inline-flex"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenu.Trigger>
                  {item.groups != null && item.groups.length > 0 && (
                    <NavigationMenu.Content className="rounded-2xl bg-(--nav-menu-background,var(--background)) shadow-xl ring-1 ring-(--nav-menu-border,color-mix(in_oklab,var(--foreground)_5%,transparent))">
                      <div className="m-auto grid w-full max-w-screen-lg grid-cols-5 justify-center gap-5 px-5 pt-5 pb-8">
                        {item.groups.map((group, columnIndex) => (
                          <ul className="flex flex-col" key={columnIndex}>
                            {/* Second Level Links */}
                            {group.label != null && group.label !== '' && (
                              <li>
                                {group.href != null && group.href !== '' ? (
                                  <Link className={navGroupClassName} href={group.href}>
                                    {group.label}
                                  </Link>
                                ) : (
                                  <span className={navGroupClassName}>{group.label}</span>
                                )}
                              </li>
                            )}

                            {group.links.map((link, idx) => (
                              // Third Level Links
                              <li key={idx}>
                                <Link
                                  className="block rounded-lg bg-(--nav-sub-link-background,transparent) px-3 py-1.5 font-(family-name:--nav-sub-link-font-family,var(--font-family-body)) text-sm font-medium text-(--nav-sub-link-text,var(--contrast-500)) ring-(--nav-focus,var(--primary)) transition-colors hover:bg-(--nav-sub-link-background-hover,var(--contrast-100)) hover:text-(--nav-sub-link-text-hover,var(--foreground)) focus-visible:ring-2 focus-visible:outline-0"
                                  href={link.href}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </div>
                    </NavigationMenu.Content>
                  )}
                </NavigationMenu.Item>
              ))
            }
          </Stream>
        </ul>

        {/* Icon Buttons */}
        <div
          className={clsx(
            'flex items-center justify-end gap-0.5 transition-colors duration-300',
            linksPosition === 'center' ? 'flex-1' : 'flex-1 @4xl:flex-none',
          )}
        >
          {searchAction ? (
            <Popover.Root onOpenChange={setIsSearchOpen} open={isSearchOpen}>
              <Popover.Anchor className="absolute top-full right-0 left-0" />
              <Popover.Trigger asChild>
                <button
                  aria-label={openSearchPopupLabel}
                  className={navButtonClassName}
                  onPointerEnter={(e) => e.preventDefault()}
                  onPointerLeave={(e) => e.preventDefault()}
                  onPointerMove={(e) => e.preventDefault()}
                >
                  <Search size={20} strokeWidth={1} />
                </button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 @container max-h-[calc(var(--radix-popover-content-available-height)-16px)] w-[var(--radix-popper-anchor-width)] py-2">
                  <div className="flex max-h-[inherit] flex-col rounded-2xl bg-(--nav-search-background,var(--background)) shadow-xl ring-1 ring-(--nav-search-border,color-mix(in_oklab,var(--foreground)_95%,transparent)) transition-all duration-200 ease-in-out @4xl:inset-x-0">
                    <SearchForm
                      searchAction={searchAction}
                      searchCtaLabel={searchCtaLabel}
                      searchHref={searchHref}
                      searchInputPlaceholder={searchInputPlaceholder}
                      searchParamName={searchParamName}
                    />
                  </div>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          ) : (
            <Link aria-label={searchLabel} className={navButtonClassName} href={searchHref}>
              <Search size={20} strokeWidth={1} />
            </Link>
          )}

          <Link aria-label={accountLabel} className={navButtonClassName} href={accountHref}>
            <User size={20} strokeWidth={1} />
          </Link>
          <Link aria-label={cartLabel} className={navButtonClassName} href={cartHref}>
            <ShoppingBag size={20} strokeWidth={1} />
            <Stream
              fallback={
                <span className="bg-contrast-100 text-background absolute -top-0.5 -right-0.5 flex h-4 w-4 animate-pulse items-center justify-center rounded-full text-xs" />
              }
              value={streamableCartCount}
            >
              {(cartCount) =>
                cartCount != null &&
                cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-(--nav-cart-count-background,var(--foreground)) font-(family-name:--nav-cart-count-font-family,var(--font-family-body)) text-xs text-(--nav-cart-count-text,var(--background))">
                    {cartCount}
                  </span>
                )
              }
            </Stream>
          </Link>

          {/* Locale / Language Dropdown */}
          {locales && locales.length > 1 && localeAction ? (
            <LocaleForm
              action={localeAction}
              activeLocaleId={activeLocaleId}
              // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
              locales={locales as [Locale, Locale, ...Locale[]]}
            />
          ) : null}

          {/* Currency Dropdown */}
          {currencies && currencies.length > 1 && currencyAction ? (
            <Stream
              fallback={
                <CurrencyForm
                  action={currencyAction}
                  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                  currencies={currencies as [Currency, ...Currency[]]}
                />
              }
              value={streamableActiveCurrencyId}
            >
              {(activeCurrencyId) => (
                <CurrencyForm
                  action={currencyAction}
                  activeCurrencyId={activeCurrencyId}
                  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                  currencies={currencies as [Currency, ...Currency[]]}
                />
              )}
            </Stream>
          ) : null}
        </div>
      </div>

      <div className="absolute top-full right-0 left-0 z-50 flex w-full justify-center perspective-[2000px]">
        <NavigationMenu.Viewport className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 relative mt-2 w-full" />
      </div>
    </NavigationMenu.Root>
  );
});

Navigation.displayName = 'Navigation';

function SearchForm<S extends SearchResult>({
  searchAction,
  searchParamName = 'query',
  searchHref = '/search',
  searchInputPlaceholder = 'Search Products',
  searchCtaLabel = 'View more',
  submitLabel = 'Submit',
}: {
  searchAction: SearchAction<S>;
  searchParamName?: string;
  searchHref?: string;
  searchCtaLabel?: string;
  searchInputPlaceholder?: string;
  submitLabel?: string;
}) {
  const [query, setQuery] = useState('');
  const [isSearching, startSearching] = useTransition();
  const [{ searchResults, lastResult, emptyStateTitle, emptyStateSubtitle }, formAction] =
    useActionState(searchAction, {
      searchResults: null,
      lastResult: null,
    });
  const [isDebouncing, setIsDebouncing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isPending = isSearching || isDebouncing || isSubmitting;
  const debouncedOnChange = useMemo(() => {
    const debounced = debounce((q: string) => {
      setIsDebouncing(false);

      const formData = new FormData();

      formData.append(searchParamName, q);

      startSearching(() => {
        formAction(formData);
      });
    }, 300);

    return (q: string) => {
      setIsDebouncing(true);

      debounced(q);
    };
  }, [formAction, searchParamName]);

  const [form] = useForm({ lastResult });

  const handleSubmit = useCallback(() => {
    setIsSubmitting(true);
  }, []);

  return (
    <>
      <form
        action={searchHref}
        className="flex items-center gap-3 px-3 py-3 @4xl:px-5 @4xl:py-4"
        onSubmit={handleSubmit}
      >
        <SearchIcon
          className="hidden shrink-0 text-(--nav-search-icon,var(--contrast-500)) @xl:block"
          size={20}
          strokeWidth={1}
        />
        <input
          className="grow bg-transparent pl-2 text-lg font-medium outline-0 focus-visible:outline-hidden @xl:pl-0"
          name={searchParamName}
          onChange={(e) => {
            setQuery(e.currentTarget.value);
            debouncedOnChange(e.currentTarget.value);
          }}
          placeholder={searchInputPlaceholder}
          type="text"
          value={query}
        />
        <SubmitButton loading={isPending} submitLabel={submitLabel} />
      </form>

      <SearchResults
        emptySearchSubtitle={emptyStateSubtitle}
        emptySearchTitle={emptyStateTitle}
        errors={form.errors}
        query={query}
        searchCtaLabel={searchCtaLabel}
        searchParamName={searchParamName}
        searchResults={searchResults}
        stale={isPending}
      />
    </>
  );
}

function SubmitButton({ loading, submitLabel }: { loading: boolean; submitLabel: string }) {
  const { pending } = useFormStatus();

  return (
    <Button
      loading={pending || loading}
      shape="circle"
      size="small"
      type="submit"
      variant="secondary"
    >
      <ArrowRight aria-label={submitLabel} size={20} strokeWidth={1.5} />
    </Button>
  );
}

function SearchResults({
  query,
  searchResults,
  stale,
  emptySearchTitle = `No results were found for '${query}'`,
  emptySearchSubtitle = 'Please try another search.',
  errors,
}: {
  query: string;
  searchParamName: string;
  searchCtaLabel?: string;
  emptySearchTitle?: string;
  emptySearchSubtitle?: string;
  searchResults: SearchResult[] | null;
  stale: boolean;
  errors?: string[];
}) {
  if (query === '') return null;

  if (errors != null && errors.length > 0) {
    if (stale) return null;

    return (
      <div className="flex flex-col border-t border-(--nav-search-divider,var(--contrast-100)) p-6">
        {errors.map((error) => (
          <FormStatus key={error} type="error">
            {error}
          </FormStatus>
        ))}
      </div>
    );
  }

  if (searchResults == null || searchResults.length === 0) {
    if (stale) return null;

    return (
      <div className="flex flex-col border-t border-(--nav-search-divider,var(--contrast-100)) p-6">
        <p className="text-2xl font-medium text-(--nav-search-empty-title,var(--foreground))">
          {emptySearchTitle}
        </p>
        <p className="text-(--nav-search-empty-subtitle,var(--contrast-500))">
          {emptySearchSubtitle}
        </p>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        'flex flex-1 flex-col overflow-y-auto border-t border-(--nav-search-divider,var(--contrast-100)) @2xl:flex-row',
        stale && 'opacity-50',
      )}
    >
      {searchResults.map((result, index) => {
        switch (result.type) {
          case 'links': {
            return (
              <section
                aria-label={result.title}
                className="flex w-full flex-col gap-1 border-b border-(--nav-search-divider,var(--contrast-100)) p-5 @2xl:max-w-80 @2xl:border-r @2xl:border-b-0"
                key={`result-${index}`}
              >
                <h3 className="mb-4 font-(family-name:--nav-search-result-title-font-family,var(--font-family-mono)) text-sm text-(--nav-search-result-title,var(--foreground)) uppercase">
                  {result.title}
                </h3>
                <ul role="listbox">
                  {result.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        className="block rounded-lg bg-(--nav-search-result-link-background,transparent) px-3 py-4 font-(family-name:--nav-search-result-link-font-family,var(--font-family-body)) font-semibold text-(--nav-search-result-link-text,var(--contrast-500)) ring-(--nav-focus,var(--primary)) transition-colors hover:bg-(--nav-search-result-link-background-hover,var(--contrast-100)) hover:text-(--nav-search-result-link-text-hover,var(--foreground)) focus-visible:ring-2 focus-visible:outline-0"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          }

          case 'products': {
            return (
              <section
                aria-label={result.title}
                className="@container flex w-full flex-col gap-5 p-5"
                key={`result-${index}`}
              >
                <h3 className="font-(family-name:--nav-search-result-title-font-family,var(--font-family-mono)) text-sm text-(--nav-search-result-title,var(--foreground)) uppercase">
                  {result.title}
                </h3>
                <ul
                  className="grid w-full grid-cols-1 gap-5 @xs:grid-cols-2 @md:grid-cols-3 @lg:grid-cols-4"
                  role="listbox"
                >
                  {result.products.map((product) => (
                    <li key={product.id}>
                      <ProductCard
                        imageSizes="(min-width: 42rem) 25vw, 50vw"
                        product={{
                          id: product.id,
                          title: product.title,
                          href: product.href,
                          price: product.price,
                          image: product.image,
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </section>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}

function LocaleForm({
  action,
  locales,
  activeLocaleId,
}: {
  activeLocaleId?: string;
  action: LocaleAction;
  locales: [Locale, ...Locale[]];
}) {
  const [lastResult, formAction] = useActionState(action, null);
  const activeLocale = locales.find((locale) => locale.id === activeLocaleId);

  const [form] = useForm({
    lastResult,
  });

  useEffect(() => {
    if (form.errors) {
      form.errors.forEach((error) => {
        toast.error(error);
      });
    }
  }, [form.errors]);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className={clsx('flex items-center gap-1 text-xs uppercase', navButtonClassName)}
      >
        {activeLocale?.id ?? locales[0].id}
        <ChevronDown size={16} strokeWidth={1.5} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-50 max-h-80 overflow-y-auto rounded-xl bg-(--nav-locale-background,var(--background)) p-2 shadow-xl @4xl:w-32 @4xl:rounded-2xl @4xl:p-2"
          sideOffset={16}
        >
          {locales.map(({ id, label }) => (
            <DropdownMenu.Item
              className={clsx(
                'cursor-default rounded-lg bg-(--nav-locale-link-background,transparent) px-2.5 py-2 font-(family-name:--nav-locale-link-font-family,var(--font-family-body)) text-sm font-medium text-(--nav-locale-link-text,var(--contrast-400)) ring-(--nav-focus,var(--primary)) outline-hidden transition-colors hover:bg-(--nav-locale-link-background-hover,var(--contrast-100)) hover:text-(--nav-locale-link-text-hover,var(--foreground))',
                {
                  'text-(--nav-locale-link-text-selected,var(--foreground))': id === activeLocaleId,
                },
              )}
              key={id}
              onSelect={() => {
                // eslint-disable-next-line @typescript-eslint/require-await
                startTransition(async () => {
                  const formData = new FormData();

                  formData.append('id', id);
                  formAction(formData);
                });
              }}
            >
              {label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function CurrencyForm({
  action,
  currencies,
  activeCurrencyId,
}: {
  activeCurrencyId?: string;
  action: CurrencyAction;
  currencies: [Currency, ...Currency[]];
}) {
  const [lastResult, formAction] = useActionState(action, null);
  const activeCurrency = currencies.find((currency) => currency.id === activeCurrencyId);

  const [form] = useForm({
    lastResult,
  });

  useEffect(() => {
    if (form.errors) {
      form.errors.forEach((error) => {
        toast.error(error);
      });
    }
  }, [form.errors]);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className={clsx('flex items-center gap-1 text-xs uppercase', navButtonClassName)}
      >
        {activeCurrency?.label ?? currencies[0].label}
        <ChevronDown size={16} strokeWidth={1.5} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-50 max-h-80 overflow-y-auto rounded-xl bg-(--nav-locale-background,var(--background)) p-2 shadow-xl @4xl:w-32 @4xl:rounded-2xl @4xl:p-2"
          sideOffset={16}
        >
          {currencies.map((currency) => (
            <DropdownMenu.Item
              className={clsx(
                'cursor-default rounded-lg bg-(--nav-locale-link-background,transparent) px-2.5 py-2 font-(family-name:--nav-locale-link-font-family,var(--font-family-body)) text-sm font-medium text-(--nav-locale-link-text,var(--contrast-400)) ring-(--nav-focus,var(--primary)) outline-hidden transition-colors hover:bg-(--nav-locale-link-background-hover,var(--contrast-100)) hover:text-(--nav-locale-link-text-hover,var(--foreground))',
                {
                  'text-(--nav-locale-link-text-selected,var(--foreground))':
                    currency.id === activeCurrencyId,
                },
              )}
              key={currency.id}
              onSelect={() => {
                // eslint-disable-next-line @typescript-eslint/require-await
                startTransition(async () => {
                  const formData = new FormData();

                  formData.append('id', currency.id);
                  formAction(formData);
                });
              }}
            >
              {currency.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
