import { Card } from '@/vibes/soul/primitives/card';

export default function Preview() {
  return (
    <div>
      <div className="bg-background p-8 @container">
        <div className="m-auto flex max-w-screen-md flex-col items-center gap-8 @md:flex-row">
          <Card
            className="w-full"
            href="#"
            image={{ src: 'https://rstr.in/monogram/vibes/RopDQNbjTc_', alt: 'Low Maintenance' }}
            title="Low Maintenance"
          />
          <Card className="w-full" href="#" title="Partial shade" />
        </div>
      </div>
      <div className="bg-foreground p-8 @container">
        <div className="m-auto flex max-w-screen-md flex-col items-center gap-8 @md:flex-row">
          <Card
            className="w-full"
            href="#"
            aspectRatio="1:1"
            image={{ src: 'https://rstr.in/monogram/vibes/RopDQNbjTc_', alt: 'Low Maintenance' }}
            title="Low Maintenance"
            textColorScheme="dark"
            iconColorScheme="dark"
          />
          <Card
            className="w-full"
            href="#"
            aspectRatio="1:1"
            title="Partial shade"
            textColorScheme="dark"
            iconColorScheme="dark"
          />
        </div>
      </div>
    </div>
  );
}
