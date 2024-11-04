import Link from 'next/link'

import { ArrowRight } from 'lucide-react'

import { Price } from '@/vibes/soul/primitives/price-label'
import { ProductCard } from '@/vibes/soul/primitives/product-card'

export type SearchResult =
  | {
      title: string
      products: {
        id: string
        title: string
        href: string
        price?: Price
        image?: { src: string; alt: string }
      }[]
    }
  | { title: string; links: { label: string; href: string }[] }

type Props = {
  searchResults: SearchResult[]
  cta?: { label: string; href: string }
  emptySearchTitleLabel?: string
  emptySearchSubtitleLabel?: string
  term: string
}

export const SearchResults = ({
  searchResults,
  cta,
  emptySearchTitleLabel = 'No results were found for',
  emptySearchSubtitleLabel = 'Please try another search.',
  term,
}: Props) => {
  if (searchResults.length === 0) {
    return (
      <div className="flex flex-col border-t border-contrast-100 p-6">
        <h1 className="text-2xl font-medium text-foreground">
          {emptySearchTitleLabel} '{term}'.
        </h1>
        <p className="text-contrast-500">{emptySearchSubtitleLabel}</p>
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col border-t border-contrast-100 @2xl:flex-row">
        {searchResults.map((result, index) => {
          if ('links' in result) {
            return (
              <div
                className="flex w-full flex-col gap-1 border-b border-contrast-100 p-5 @2xl:max-w-80 @2xl:border-b-0 @2xl:border-r"
                key={`result-${index}`}
              >
                <span className="mb-4 font-mono text-sm uppercase">{result.title}</span>
                {result.links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="block rounded-lg px-3 py-4 font-semibold text-contrast-500 ring-primary transition-colors hover:bg-contrast-100 hover:text-foreground focus-visible:outline-0 focus-visible:ring-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )
          }

          if ('products' in result) {
            return (
              <div className="flex w-full flex-col gap-5 p-5" key={`result-${index}`}>
                <span className="font-mono text-sm uppercase">{result.title}</span>
                <div className="grid w-fit grid-cols-2 gap-5 @xl:grid-cols-4 @2xl:grid-cols-2 @4xl:grid-cols-4">
                  {result.products.map(product => (
                    <ProductCard
                      key={product.id}
                      product={{
                        id: product.id,
                        title: product.title,
                        href: product.href,
                        price: product.price,
                        image: product.image,
                      }}
                    />
                  ))}
                </div>
              </div>
            )
          }

          return null
        })}
      </div>
      {/* CTA */}
      {cta && (
        <div className="w-full border-t border-contrast-100 p-4">
          <Link
            href={cta.href}
            className="group flex w-fit items-center gap-1 rounded-md p-1 text-[15px] font-semibold ring-primary hover:text-foreground focus-visible:outline-0 focus-visible:ring-2"
          >
            {cta.label}
            <ArrowRight className="h-5 w-5 p-0.5 transition group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </>
  )
}
