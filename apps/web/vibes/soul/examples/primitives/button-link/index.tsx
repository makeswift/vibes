import { ArrowRight } from 'lucide-react';

import { ButtonLink } from '@/vibes/soul/primitives/button-link';

export default function Preview() {
  return (
    <div className="flex h-screen flex-col items-center gap-x-4 gap-y-6 px-6 py-8">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
        <ButtonLink href="#" size="large" variant="primary">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" size="medium" variant="primary">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" size="small" variant="primary">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" size="x-small" variant="primary">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" size="icon" variant="primary">
          <ArrowRight size={20} />
        </ButtonLink>
        <ButtonLink href="#" size="icon-small" variant="primary">
          <ArrowRight size={20} />
        </ButtonLink>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
        <ButtonLink href="#" size="large" variant="secondary">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" size="medium" variant="secondary">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" size="small" variant="secondary">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" size="x-small" variant="secondary">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" size="icon" variant="secondary">
          <ArrowRight size={20} />
        </ButtonLink>
        <ButtonLink href="#" size="icon-small" variant="secondary">
          <ArrowRight size={20} />
        </ButtonLink>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
        <ButtonLink href="#" size="large" variant="tertiary">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" size="medium" variant="tertiary">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" size="small" variant="tertiary">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" size="x-small" variant="tertiary">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" size="icon" variant="tertiary">
          <ArrowRight size={20} />
        </ButtonLink>
        <ButtonLink href="#" size="icon-small" variant="tertiary">
          <ArrowRight size={20} />
        </ButtonLink>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
        <ButtonLink href="#" size="large" variant="ghost">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" size="medium" variant="ghost">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" size="small" variant="ghost">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" size="x-small" variant="ghost">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" size="icon" variant="ghost">
          <ArrowRight size={20} />
        </ButtonLink>
        <ButtonLink href="#" size="icon-small" variant="ghost">
          <ArrowRight size={20} />
        </ButtonLink>
      </div>
    </div>
  );
}
