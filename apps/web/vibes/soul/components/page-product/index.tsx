import AnnouncementBar from '@/vibes/soul/components/announcement-bar'
import Carousel from '@/vibes/soul/components/card-carousel'
import CategoryCard from '@/vibes/soul/components/category-card'
import Footer from '@/vibes/soul/components/footer'
import Header from '@/vibes/soul/components/header'
import IconBlock from '@/vibes/soul/components/icon-block'
import Newsletter from '@/vibes/soul/components/newsletter'
import { ProductCard } from '@/vibes/soul/components/product-card'
import ProductDescription from '@/vibes/soul/components/product-description'
import ProductDetail from '@/vibes/soul/components/product-detail'
import { categories } from '@/vibes/soul/examples/card-carousel'
import { footerLinks } from '@/vibes/soul/examples/footer'
import { headerLinks } from '@/vibes/soul/examples/header'

export const ProductPage = function ProductPage() {
  return (
    <>
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>
      <div className="relative flex flex-col">
        <Header links={headerLinks} logo={{ alt: 'SOUL' }} />

        <ProductDetail
          product={
            {
              name: "Men's Long Sleeve Jersey",
              price: {
                type: 'static',
                value: 39.95,
              },
              image: 'https://rstr.in/monogram/vibes/pVfZNkBI_Rd',
              ctaLink: { href: '/' },
            } as ProductCard
          }
          images={[
            'https://rstr.in/monogram/vibes/pVfZNkBI_Rd',
            'https://rstr.in/monogram/vibes/nBQFO6MyZ34',
            'https://rstr.in/monogram/vibes/11zZTfNCpui',
            'https://rstr.in/monogram/vibes/h4YqOhXhxfm',
            'https://rstr.in/monogram/vibes/GQxaw-DlEYn',
            'https://rstr.in/monogram/vibes/WOTVa86be5S',
          ]}
          rating={4.5}
          content={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore.
            </p>
          }
          options={['XS', 'S', 'M', 'L', 'XL', 'XXL']}
        />

        {/* TODO: Add Review / Returns Here */}

        <ProductDescription
          accordions={[
            {
              title: 'What is your return policy?',
              content:
                'We want you to be completely satisfied with your purchase. If you’re not happy with your plant, you can return it within 30 days of delivery. Please ensure the plant is in its original condition and packaging. For detailed return instructions, visit our Return Policy page or contact our customer support team.',
            },
            {
              title: 'How do I care for my new plants?',
              content:
                'Caring for your new plants involves understanding their specific needs. Most indoor plants require indirect sunlight, regular watering, and occasional feeding. Check the plant care tag that comes with your purchase for detailed instructions. If you need more help, our Care Guide section offers detailed advice for each plant type.',
            },
            {
              title: 'Do you offer plant delivery services?',
              content:
                'Yes, we offer nationwide delivery for all our plants. Our plants are carefully packaged to ensure they arrive healthy and safe. Delivery times vary depending on your location but typically range from 3 to 7 business days. For more information, check our Delivery Information page or enter your zip code at checkout for estimated delivery times.',
            },
            {
              title: 'Can I get advice on choosing the right plant?',
              content:
                'Absolutely! Choosing the right plant can depend on several factors such as your living space, light availability, and personal preferences. Our Plant Finder tool can help you select the perfect plant for your environment. Additionally, our customer service team is available to offer personalized recommendations based on your needs.',
            },
          ]}
          image={{
            url: 'https://rstr.in/monogram/vibes/YOD5DuBfoFM',
            dimensions: {
              width: 467,
              height: 600,
            },
            alt: 'Plants',
          }}
        />

        <IconBlock
          list={[
            {
              icon: 'Truck',
              title: 'Free Shipping',
              description: 'On orders over $250',
            },
            {
              icon: 'RotateCcw',
              title: 'Free Returns',
              description: 'On full priced items only',
            },
            {
              icon: 'Star',
              title: '2 Year Warranty',
              description: 'As standard',
            },
          ]}
        />

        <Carousel title="New Arrivals" link={{ label: 'See All', href: '/' }}>
          {categories.map(category => (
            <CategoryCard key={category.label} {...category} />
          ))}
        </Carousel>

        <Newsletter
          heading="Sign up for our newsletter"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          theme="light"
        />
        <Footer sections={footerLinks} logo="SOUL" />
      </div>
    </>
  )
}

export default ProductPage
