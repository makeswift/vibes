import Image from 'next/image'

import { cn } from '@/lib/utils'

import ExpandableText from './expandable-text'
import OptionsSelector, { Option } from './options-selector'

type Price =
  | string
  | {
      type: 'sale'
      currentValue: string
      previousValue: string
    }
  | {
      type: 'range'
      minValue: string
      maxValue: string
    }

interface Image {
  altText: string
  src: string
}

interface Product {
  id: number
  name: string
  images?: Image[]
  price?: Price
  options?: Option[]
}

interface Props {
  product: Product
  description: string
  warranty: string
  relatedProducts: Product[]
}

export default function Gallery({ product: { price, name, images, options }, description }: Props) {
  return (
    <section
      className={cn(
        'relative flex w-full flex-col bg-background @container @2xl:flex-row @2xl:items-start'
      )}
    >
      <div className="flex flex-col @2xl:basis-1/2">
        {images?.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.altText}
            className="h-auto w-full border-b-2 border-foreground @2xl:border-r-2"
            width={800}
            height={800}
          />
        ))}
      </div>
      <div className="sticky top-0 flex max-w-3xl flex-col p-4 text-foreground @2xl:basis-1/2 @2xl:p-12">
        <h1 className="mb-2 font-mono text-xs uppercase leading-[1.125rem] @2xl:text-sm @2xl:leading-[1.375rem] @2xl:tracking-[0.02em]">
          {name}
        </h1>

        <p className="mb-2 text-3xl font-medium leading-[2.125rem] -tracking-[0.02em] @2xl:text-6xl @2xl:leading-[4rem]">
          {typeof price === 'string'
            ? price
            : price?.type === 'sale'
              ? price.currentValue
              : price?.minValue || null}
        </p>

        <ExpandableText
          text={description}
          className="mb-16 text-base font-medium leading-6 @2xl:mb-32 @2xl:text-lg @2xl:leading-tight @2xl:tracking-[0.01em]"
        />

        <OptionsSelector options={options} />
      </div>
    </section>
  )
}
