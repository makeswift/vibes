import { Card } from '@/vibes/soul/primitives/card';
import { Icon } from '@/vibes/soul/primitives/icon';

export default function Preview() {
  return (
    <div className="bg-background flex flex-col items-center px-6 py-8">
      <Card ariaLabel="Sign up for a personal account" className="max-w-md" href="#">
        <div className="text-foreground font-body">
          <h3 className="text-lg font-semibold">Sign up for a personal account</h3>
          <p className="mt-4 text-base font-normal">
            Create a personal account to enjoy faster checkout, save shipping addresses, track your
            orders, and build your shopping lists.
          </p>
          <div className="text-foreground mt-8 flex items-center gap-x-3 text-base">
            <p className="font-semibold">Create personal account</p>
            <Icon
              className="size-5 transition-transform duration-100 ease-linear group-hover/card:translate-x-1"
              name="arrow-right"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
