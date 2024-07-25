import { Button } from '@/vibes/soul/components/button'

type Props = {
  heading: string
  description: string
  link: {
    href: string
    target: '_self' | '_blank'
  }
}

export default function HeroCategory({ heading, description, link }: Props) {
  return (
    <section className="relative h-[100dvh] @container">
      <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop>
        <source
          src="https://videos.pexels.com/video-files/4957753/4957753-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute bottom-0 left-0 mx-auto flex max-w-7xl flex-col items-start gap-4 px-3 py-10 text-background @md:px-6 @lg:p-20">
        <h1 className="text-[40px] font-medium">{heading}</h1>
        <p className="max-w-2xl pb-2">{description}</p>
        <Button
          variant="tertiary"
          link={{
            href: link.href,
            target: link.target,
          }}
        >
          Show Now
        </Button>
      </div>
    </section>
  )
}
