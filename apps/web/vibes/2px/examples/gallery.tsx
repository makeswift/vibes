import Gallery from '@/vibes/2px/components/gallery'

import moltenStool from './assets/molten-stool.png'
import material2 from './assets/swatch-example-1.png'
import material3 from './assets/swatch-example-2.png'
import material1 from './assets/swatch-example.png'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-white @container sm:min-h-64 lg:min-h-80">
      <Gallery
        description="Summer 2022 we moved into Reform´s big bright showroom in Copenhagen. For a week the NIKO JUNE production was happening here behind the glass front facing warm pavement and the oyster bar across the road at Torvehallerne. The showroom was filled with the scent of fresh paint and the sound of sewing machines. The NIKO JUNE collection was presented in the showroom and the production was open for the public to see."
        warranty="1 year warranty"
        relatedProducts={[]}
        product={{
          images: [
            {
              src: moltenStool.src,
              altText: 'Molten Stool',
            },
            {
              src: moltenStool.src,
              altText: 'Molten Stool',
            },
            {
              src: moltenStool.src,
              altText: 'Molten Stool',
            },
          ],
          id: 1,
          name: 'Molten Stool',
          price: '549,00 €',
          options: [
            {
              label: 'Colour / treatment',
              type: 'swatch',
              values: [
                {
                  value: 'natural',
                  inStock: true,
                  sample: material1.src,
                },
                {
                  value: 'black',
                  inStock: false,
                  sample: material2.src,
                },
                {
                  value: 'white',
                  inStock: true,
                  sample: material3.src,
                },
              ],
            },
            {
              label: 'Size',
              type: 'dropdown',
              values: [
                { label: 'S', value: 's' },
                { label: 'M', value: 'm' },
                { label: 'L', value: 'l' },
              ],
            },
          ],
        }}
      />
    </div>
  )
}
