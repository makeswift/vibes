'use client';

import { parseAsString, useQueryState } from 'nuqs';
import { useOptimistic, useTransition } from 'react';

import { Select } from '@/vibes/soul/form/select';
import { Streamable, useStreamable } from '@/vibes/soul/lib/streamable';
import * as Skeleton from '@/vibes/soul/primitives/skeleton';

export interface Option {
  label: string;
  value: string;
}

export function Sorting({
  label: streamableLabel,
  options: streamableOptions,
  paramName = 'sort',
  defaultValue = '',
  placeholder: streamablePlaceholder,
}: {
  label?: Streamable<string | null>;
  options: Streamable<Option[]>;
  paramName?: string;
  defaultValue?: string;
  placeholder?: Streamable<string | null>;
}) {
  const [param, setParam] = useQueryState(
    paramName,
    parseAsString.withDefault(defaultValue).withOptions({ shallow: false, history: 'push' }),
  );
  const [optimisticParam, setOptimisticParam] = useOptimistic(param);
  const [isPending, startTransition] = useTransition();
  const options = useStreamable(streamableOptions);
  const label = useStreamable(streamableLabel) ?? 'Sort';
  const placeholder = useStreamable(streamablePlaceholder) ?? 'Sort by';

  return (
    <Select
      hideLabel
      label={label}
      name={paramName}
      onValueChange={(value) => {
        startTransition(async () => {
          setOptimisticParam(value);
          await setParam(value);
        });
      }}
      options={options}
      pending={isPending}
      placeholder={placeholder}
      value={optimisticParam}
      variant="round"
    />
  );
}

export function SortingSkeleton() {
  return (
    <Skeleton.Root
      className="@container-normal group-has-[[data-pending]]/product-list-section:animate-pulse"
      pending
    >
      <Skeleton.Box className="h-[50px] w-[12ch] rounded-full" data-pending />
    </Skeleton.Root>
  );
}
