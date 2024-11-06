'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Suspense, use } from 'react'

import { ArrowRight, X } from 'lucide-react'
import { parseAsArrayOf, parseAsString, useQueryState } from 'nuqs'

import { Button } from '@/vibes/soul/primitives/button'
import { Drawer, DrawerItem } from '@/vibes/soul/primitives/drawer'

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

type Props = {
  items: DrawerItem[] | Promise<DrawerItem[]>
  paramName?: string
  action?: React.ComponentProps<'form'>['action']
  submitLabel?: string
}

function CompareDrawerInner({
  items,
  paramName = 'compare',
  action,
  submitLabel = 'Compare',
}: Props) {
  const resolved = items instanceof Promise ? use(items) : items
  const [, setParam] = useQueryState(
    paramName,
    parseAsArrayOf(parseAsString).withOptions({ shallow: false, scroll: false })
  )

  return (
    resolved.length > 0 && (
      <Drawer>
        <form
          action={action}
          className="mx-auto flex w-full max-w-7xl flex-col items-start justify-end gap-x-3 gap-y-4 @md:flex-row"
        >
          <div className="flex flex-1 flex-wrap justify-end gap-4">
            {resolved.map(item => (
              <div className="relative" key={item.id}>
                <input type="hidden" name={paramName} value={item.id} key={item.id} />
                <Link
                  href={item.href}
                  className="group relative flex max-w-56 items-center whitespace-nowrap rounded-xl border border-contrast-100 bg-background font-semibold ring-primary transition-all duration-150 hover:bg-contrast-100 focus:outline-0 focus:ring-2"
                >
                  <div className="bg-primary-highlight/10 relative aspect-square w-12 shrink-0">
                    {item.image?.src != null ? (
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        className="rounded-lg object-cover @4xl:rounded-r-none"
                      />
                    ) : (
                      <span className="max-w-full break-all p-1 text-xs text-primary-shadow opacity-20">
                        {getInitials(item.title)}
                      </span>
                    )}
                  </div>
                  <span className="hidden truncate pl-3 pr-5 text-foreground @4xl:block">
                    {item.title}
                  </span>
                </Link>

                <button
                  type="button"
                  aria-label={`Remove ${item.title}`}
                  onClick={e => {
                    setParam(prev => {
                      const next = prev?.filter(v => v !== item.id) ?? []

                      return next.length > 0 ? next : null
                    })
                  }}
                  className="absolute -right-2.5 -top-2.5 flex h-7 w-7 items-center justify-center rounded-full border border-contrast-100 bg-background text-contrast-400 transition-colors duration-150 hover:border-contrast-200 hover:bg-contrast-100 hover:text-foreground"
                >
                  <X strokeWidth={1.5} absoluteStrokeWidth size={16} />
                </button>
              </div>
            ))}
          </div>

          <Button size="medium" variant="primary" className="hidden @md:block" type="submit">
            {submitLabel} <ArrowRight size={20} strokeWidth={1} absoluteStrokeWidth />
          </Button>

          <Button size="small" variant="primary" className="w-full @md:hidden" type="submit">
            {submitLabel} <ArrowRight size={16} strokeWidth={1} absoluteStrokeWidth />
          </Button>
        </form>
      </Drawer>
    )
  )
}

export function CompareDrawer(props: Props) {
  return (
    <Suspense fallback={null}>
      <CompareDrawerInner {...props} />
    </Suspense>
  )
}
