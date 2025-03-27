import { WishlistItemCard } from '@/vibes/soul/primitives/wishlist-item-card';
import { action, removeAction } from './action';
import { type Product } from '@/vibes/soul/primitives/product-card';

const product1: Product = {
  id: '1',
  title: 'Jada Square Toe Ballet Flat',
  subtitle: '',
  badge: 'Bestseller',
  price: '$350',
  image: {
    src: 'https://rstr.in/monogram/vibes/9vu9tSw1WdA',
    alt: 'Jada Square Toe Ballet Flat',
  },
  href: '#',
  rating: 4.5,
};

const product2: Product = {
  id: '2',
  href: '#',
  title: 'Product Name',
  subtitle: 'Blue/Black/Green',
  price: {
    type: 'sale',
    previousValue: '$123.99',
    currentValue: '$99.99',
  },
};

export default function Preview() {
  return (
    <div>
      <div className="bg-background p-8 @container">
        <div className="m-auto flex max-w-screen-lg flex-col gap-8 @md:flex-row">
          <WishlistItemCard
            wishlistId="1"
            action={action}
            removeAction={removeAction}
            item={{
              itemId: '1',
              productId: '1',
              product: product1,
              callToAction: {
                label: 'Add to cart',
                disabled: false,
              },
            }}
          />
          <WishlistItemCard
            wishlistId="1"
            action={action}
            removeAction={removeAction}
            item={{
              itemId: '2',
              productId: '2',
              product: product2,
              callToAction: {
                label: 'Out of stock',
                disabled: true,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
