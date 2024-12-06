'use server';

export async function addToCartAction(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log('Add to cart:', id);
}
