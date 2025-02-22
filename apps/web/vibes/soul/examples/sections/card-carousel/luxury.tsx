import { CardWithId } from '@/vibes/soul/primitives/card';
import { CardCarousel } from '@/vibes/soul/sections/card-carousel';

export default function Preview() {
  const cardsPromise = new Promise<CardWithId[]>((resolve) => {
    setTimeout(() => {
      resolve(cards);
    }, 1000);
  });

  return (
    <div>
      <section className="group/pending overflow-hidden @container">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 group-has-[[data-pending]]/pending:animate-pulse @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
          <CardCarousel
            cards={cardsPromise}
            className="w-full"
            emptyStateSubtitle="Try browsing our complete catalog of products."
            emptyStateTitle="No products found"
          />
        </div>
      </section>
      <section className="group/pending overflow-hidden bg-foreground @container">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 group-has-[[data-pending]]/pending:animate-pulse @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
          <CardCarousel
            cards={cardsPromise}
            className="w-full"
            emptyStateSubtitle="Try browsing our complete catalog of products."
            emptyStateTitle="No products found"
            textColorScheme="dark"
          />
        </div>
      </section>
    </div>
  );
}

const cards: CardWithId[] = [
  {
    id: '1',
    title: 'Jada Square Toe Ballet Flat',
    image: {
      src: 'https://rstr.in/monogram/vibes/9vu9tSw1WdA',
      alt: 'Jada Square Toe Ballet Flat',
    },
    href: '#',
  },
  {
    id: '2',
    title: 'Jayla Woven Ballet Heel',
    image: {
      src: 'https://rstr.in/monogram/vibes/jD25Jjm0zbT',
      alt: 'Jayla Woven Ballet Heel',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Jessie Ballet Flat',
    image: {
      src: 'https://rstr.in/monogram/vibes/1ipihAyvRQj',
      alt: 'Jessie Ballet Flat',
    },
    href: '#',
  },
  {
    id: '4',
    title: 'Leighton Soft Leather Loafer',
    image: {
      src: 'https://rstr.in/monogram/vibes/YfQW8M1Gv2H/zTWKcqJrdIu',
      alt: 'Leighton Soft Leather Loafer',
    },
    href: '#',
  },
  {
    id: '5',
    title: 'JADA SQUARE TOE BALLET FLAT',
    image: {
      src: 'https://rstr.in/monogram/vibes/5QBR05kyrYo',
      alt: 'JADA SQUARE TOE BALLET FLAT',
    },
    href: '#',
  },
  {
    id: '6',
    title: 'DARYA LUG SOLE FISHERMAN',
    image: {
      src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz/vfCehRZDBGk',
      alt: 'DARYA LUG SOLE FISHERMAN',
    },
    href: '#',
  },
];
