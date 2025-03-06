import { SectionLayout } from '@/vibes/soul/sections/section-layout';

export default function Preview() {
  return (
    <SectionLayout containerSize="md">
      <h1 className="mb-3 px-1 font-heading text-4xl leading-none md:text-5xl lg:mb-5 lg:text-6xl">
        A Guide to Low-Light Houseplants
      </h1>
      <p>
        Not all plants need bright sunlight to thrive. This guide highlights the best low-light
        houseplants, perfect for those darker corners of your home or office that need a touch of
        green.
      </p>
    </SectionLayout>
  );
}
