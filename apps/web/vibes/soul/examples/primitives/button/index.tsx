import { ArrowRight } from 'lucide-react';

import { Button } from '@/vibes/soul/primitives/button';

export default function Preview() {
  return (
    <div className="flex h-screen flex-col items-center gap-x-4 gap-y-6 px-6 py-8">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
        <Button size="large" variant="primary">
          Shop now
        </Button>
        <Button size="medium" variant="primary">
          Shop now
        </Button>
        <Button size="small" variant="primary">
          Shop now
        </Button>
        <Button size="x-small" variant="primary">
          Shop now
        </Button>
        <Button size="icon" variant="primary">
          <ArrowRight size={20} />
        </Button>
        <Button size="icon-small" variant="primary">
          <ArrowRight size={20} />
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
        <Button size="large" variant="secondary">
          Shop now
        </Button>
        <Button size="medium" variant="secondary">
          Shop now
        </Button>
        <Button size="small" variant="secondary">
          Shop now
        </Button>
        <Button size="x-small" variant="secondary">
          Shop now
        </Button>
        <Button size="icon" variant="secondary">
          <ArrowRight size={20} />
        </Button>
        <Button size="icon-small" variant="secondary">
          <ArrowRight size={20} />
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
        <Button size="large" variant="tertiary">
          Shop now
        </Button>
        <Button size="medium" variant="tertiary">
          Shop now
        </Button>
        <Button size="small" variant="tertiary">
          Shop now
        </Button>
        <Button size="x-small" variant="tertiary">
          Shop now
        </Button>
        <Button size="icon" variant="tertiary">
          <ArrowRight size={20} />
        </Button>
        <Button size="icon-small" variant="tertiary">
          <ArrowRight size={20} />
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
        <Button size="large" variant="ghost">
          Shop now
        </Button>
        <Button size="medium" variant="ghost">
          Shop now
        </Button>
        <Button size="small" variant="ghost">
          Shop now
        </Button>
        <Button size="x-small" variant="ghost">
          Shop now
        </Button>
        <Button size="icon" variant="ghost">
          <ArrowRight size={20} />
        </Button>
        <Button size="icon-small" variant="ghost">
          <ArrowRight size={20} />
        </Button>
      </div>
    </div>
  );
}
