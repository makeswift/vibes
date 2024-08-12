import CategoryCard from '@/vibes/soul/components/category-card'

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center p-5 @container">
      <CategoryCard
        label="Low Maintenance"
        image="https://rstr.in/monogram/vibes/YOD5DuBfoFM"
        theme="dark"
        ctaLink={{ href: '#' }}
      />
    </div>
  )
}
