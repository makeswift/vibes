import { Button } from '@/vibes/soul/primitives/button';
import { ArrowRight } from 'lucide-react';

export default function Preview() {
  return (
    <div className="flex h-screen flex-col items-center gap-x-4 gap-y-6 px-6 py-8">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
        <Button variant="primary" size="large">
          Shop now
        </Button>
        <Button variant="primary" size="medium">
          Shop now
        </Button>
        <Button variant="primary" size="small">
          Shop now
        </Button>
        <Button variant="primary" size="x-small">
          Shop now
        </Button>
        <Button variant="primary" size="icon">
          <ArrowRight size={20} />
        </Button>
        <Button variant="primary" size="icon-small">
          <ArrowRight size={20} />
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
        <Button variant="secondary" size="large">
          Shop now
        </Button>
        <Button variant="secondary" size="medium">
          Shop now
        </Button>
        <Button variant="secondary" size="small">
          Shop now
        </Button>
        <Button variant="secondary" size="x-small">
          Shop now
        </Button>
        <Button variant="secondary" size="icon">
          <ArrowRight size={20} />
        </Button>
        <Button variant="secondary" size="icon-small">
          <ArrowRight size={20} />
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
        <Button variant="tertiary" size="large">
          Shop now
        </Button>
        <Button variant="tertiary" size="medium">
          Shop now
        </Button>
        <Button variant="tertiary" size="small">
          Shop now
        </Button>
        <Button variant="tertiary" size="x-small">
          Shop now
        </Button>
        <Button variant="tertiary" size="icon">
          <ArrowRight size={20} />
        </Button>
        <Button variant="tertiary" size="icon-small">
          <ArrowRight size={20} />
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
        <Button variant="ghost" size="large">
          Shop now
        </Button>
        <Button variant="ghost" size="medium">
          Shop now
        </Button>
        <Button variant="ghost" size="small">
          Shop now
        </Button>
        <Button variant="ghost" size="x-small">
          Shop now
        </Button>
        <Button variant="ghost" size="icon">
          <ArrowRight size={20} />
        </Button>
        <Button variant="ghost" size="icon-small">
          <ArrowRight size={20} />
        </Button>
      </div>
    </div>
  );
}
