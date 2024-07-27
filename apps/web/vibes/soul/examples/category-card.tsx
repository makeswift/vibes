import CategoryCard from '@/vibes/soul/components/category-card'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-5 @container sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <CategoryCard
        label="Low Maintenance"
        image="https://rstr.in/monogram/vibes/YOD5DuBfoFM"
        theme="dark"
        ctaLink={{
          href: '/',
          target: '_self',
        }}
      />
    </div>
  )
}
