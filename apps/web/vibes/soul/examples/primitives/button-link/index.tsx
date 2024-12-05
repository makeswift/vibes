import { ButtonLink } from '@/vibes/soul/primitives/button-link';
import { ArrowRight } from 'lucide-react';

export default function Preview() {
  return (
    <div className="flex h-screen flex-col items-center gap-x-4 gap-y-6 px-6 py-8">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
        <ButtonLink href="#" variant="primary" size="large">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" variant="primary" size="medium">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" variant="primary" size="small">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" variant="primary" size="x-small">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" variant="primary" size="icon">
          <ArrowRight size={20} />
        </ButtonLink>
        <ButtonLink href="#" variant="primary" size="icon-small">
          <ArrowRight size={20} />
        </ButtonLink>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
        <ButtonLink href="#" variant="secondary" size="large">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" variant="secondary" size="medium">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" variant="secondary" size="small">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" variant="secondary" size="x-small">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" variant="secondary" size="icon">
          <ArrowRight size={20} />
        </ButtonLink>
        <ButtonLink href="#" variant="secondary" size="icon-small">
          <ArrowRight size={20} />
        </ButtonLink>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
        <ButtonLink href="#" variant="tertiary" size="large">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" variant="tertiary" size="medium">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" variant="tertiary" size="small">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" variant="tertiary" size="x-small">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" variant="tertiary" size="icon">
          <ArrowRight size={20} />
        </ButtonLink>
        <ButtonLink href="#" variant="tertiary" size="icon-small">
          <ArrowRight size={20} />
        </ButtonLink>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
        <ButtonLink href="#" variant="ghost" size="large">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" variant="ghost" size="medium">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" variant="ghost" size="small">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" variant="ghost" size="x-small">
          Shop now
        </ButtonLink>
        <ButtonLink href="#" variant="ghost" size="icon">
          <ArrowRight size={20} />
        </ButtonLink>
        <ButtonLink href="#" variant="ghost" size="icon-small">
          <ArrowRight size={20} />
        </ButtonLink>
      </div>
    </div>
  );
}
