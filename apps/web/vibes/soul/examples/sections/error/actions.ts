export async function action() {
  'use server';

  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log('Action triggered');
}
