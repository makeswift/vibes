'use client';

import { parseAsString, useQueryState } from 'nuqs';
import { use, useOptimistic } from 'react';

import { Select } from '@/vibes/soul/form/select';
import { Stream, Streamable, useStreamable } from '@/vibes/soul/lib/streamable';

import { ProductListTransitionContext } from './context';

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
  return (
    <Stream
      fallback={<SortingSkeleton />}
      value={Promise.all([streamableLabel, streamableOptions, streamablePlaceholder])}
    >
      {([label, options, placeholder]) => (
        <SortingResolved
          defaultValue={defaultValue}
          label={label}
          options={options}
          paramName={paramName}
          placeholder={placeholder}
        />
      )}
    </Stream>
  );
}

function SortingResolved({
  paramName,
  defaultValue,
  options: resolvedOptions,
  label: resolvedLabel,
  placeholder: resolvedPlaceholder,
}: {
  paramName: string;
  defaultValue: string;
  options: Streamable<Option[]>;
  label?: Streamable<string | null>;
  placeholder?: Streamable<string | null>;
}) {
  const [param, setParam] = useQueryState(
    paramName,
    parseAsString.withDefault(defaultValue).withOptions({ shallow: false, history: 'push' }),
  );
  const [optimisticParam, setOptimisticParam] = useOptimistic(param);
  const [, startTransition] = use(ProductListTransitionContext);
  const options = useStreamable(resolvedOptions);
  const label = useStreamable(resolvedLabel) ?? 'Sort';
  const placeholder = useStreamable(resolvedPlaceholder) ?? 'Sort by';

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
      placeholder={placeholder}
      value={optimisticParam}
      variant="round"
    />
  );
}

function SortingSkeleton() {
  return <div className="h-[50px] w-[12ch] animate-pulse rounded-full bg-contrast-100" />;
}
