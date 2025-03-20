import { type CardContent } from '@/vibes/soul/primitives/card';
import { CardCarousel } from '@/vibes/soul/sections/card-carousel';

export default function Preview() {
  const cardsPromise = new Promise<CardContent[]>((resolve) => {
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
            iconColorScheme="dark"
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
            iconColorScheme="dark"
            textColorScheme="dark"
          />
        </div>
      </section>
    </div>
  );
}

const cards: CardContent[] = [
  {
    title: 'Mini Bar Bag',
    image: {
      src: 'https://rstr.in/monogram/vibes/mrlTNE1TJfB',
      alt: 'Mini Bar Bag',
    },
    href: '#1',
  },
  {
    title: 'Mini Bar Bag',
    image: {
      src: 'https://rstr.in/monogram/vibes/LznMEk1GSB1',
      alt: 'Mini Bar Bag',
    },
    href: '#2',
  },
  {
    title: 'Stem Caddy',
    image: {
      src: 'https://rstr.in/monogram/vibes/EpL5yspw4Pc',
      alt: 'Stem Caddy',
    },
    href: '#3',
  },
  {
    title: 'Hip Slinger',
    image: {
      src: 'https://rstr.in/monogram/vibes/z6b0vDjJv6x',
      alt: 'Hip Slinger',
    },
    href: '#4',
  },
  {
    title: 'Everyday Tote',
    image: {
      src: 'https://rstr.in/monogram/vibes/1tVm6tBbJq9',
      alt: 'Everyday Tote',
    },
    href: '#5',
  },
  {
    title: 'Mini Saddlebag',
    image: {
      src: 'https://rstr.in/monogram/vibes/MZX8-yya26e',
      alt: 'Mini Saddlebag',
    },
    href: '#6',
  },
];
