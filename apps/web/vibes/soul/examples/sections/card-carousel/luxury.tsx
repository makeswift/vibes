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
      <section className="group/pending @container overflow-hidden">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 group-has-[[data-pending]]/pending:animate-pulse @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
          <CardCarousel
            cards={cardsPromise}
            className="w-full"
            emptyStateSubtitle="Try browsing our complete catalog of products."
            emptyStateTitle="No products found"
          />
        </div>
      </section>
      <section className="group/pending bg-foreground @container overflow-hidden">
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

const cards: CardContent[] = [
  {
    title: 'JADA SQUARE TOE BALLET FLAT',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZTUwMzNmMy0zYzRlLTQzOTUtYTc3MC1jYWM0OWE1YWMyY2E=/jada-square-toe.webp',
      alt: 'JADA SQUARE TOE BALLET FLAT',
    },
    href: '#1',
  },
  {
    title: 'Jayla Woven Ballet Heel',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZTE5YTQ1Mi1lZDU3LTQ2NDYtODgxMC0yYzU2NjI0NGM3ODk=/jayla-woven.webp',
      alt: 'Jayla Woven Ballet Heel',
    },
    href: '#2',
  },
  {
    title: 'Jessie Ballet Flat',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowZWIzNWY2My0yM2Y3LTRmNDAtYTUzOS0zY2JjNmFhYzJkYWQ=/jessie-ballet.webp',
      alt: 'Jessie Ballet Flat',
    },
    href: '#3',
  },
  {
    title: 'Leighton Soft Leather Loafer',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmM2Y1MzJiZi1hYTg0LTQzNzctYTA4NS1hODZkMWI3NGFmOWU=/leighton-soft.jpeg',
      alt: 'Leighton Soft Leather Loafer',
    },
    href: '#4',
  },
  {
    title: 'JADA SQUARE TOE BALLET FLAT',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmN2Q1MDUxMC03ZGEwLTQ3MGItYTI0Ny1mOTA0ZTNjYTkyZWU=/jada-square-toe.webp',
      alt: 'JADA SQUARE TOE BALLET FLAT',
    },
    href: '#5',
  },
  {
    title: 'DARYA LUG SOLE FISHERMAN',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo3ZjAyMzkyYS1iN2ViLTQ0YzAtYmUxNi1kOThjMjk0MTU0ZGQ=/darya-lug.webp',
      alt: 'DARYA LUG SOLE FISHERMAN',
    },
    href: '#6',
  },
];
