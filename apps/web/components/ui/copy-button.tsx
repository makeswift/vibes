'use client';

import { clsx } from 'clsx';

import { useToast } from '@/components/ui/use-toast';

import { Button } from './button';

interface Props {
  className?: string;
  clipboard: string;
  children?: React.ReactNode;
}

export function CopyButton({ className, clipboard, children }: Props) {
  const { toast } = useToast();

  return (
    <Button
      className={clsx('group/button [&>span]:hover:bg-transparent', className)}
      onClick={() => {
        navigator.clipboard.writeText(clipboard);

        toast({ title: 'Copied to clipboard' });
      }}
      size="icon"
      variant="ghost"
    >
      {children}

      <svg className="h-4 w-4 overflow-visible stroke-foreground" viewBox="0 0 16 16">
        <rect
          fill="transparent"
          height="10.5"
          rx="3.5"
          strokeDasharray="3 1.5"
          strokeWidth="1.5"
          width="10.5"
          x="0.75"
          y="4.75"
        />
        <rect
          className="transition-transform duration-150 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
          fill="white"
          height="10.5"
          rx="3.5"
          strokeWidth="1.5"
          width="10.5"
          x="4.75"
          y="0.75"
        />
      </svg>
    </Button>
  );
}
