'use client';

import { ArrowRight } from 'lucide-react';
import { ReactNode, useEffect, useState } from 'react';

import { Input } from '@/vibes/soul/form/input';
import { Button } from '@/vibes/soul/primitives/button';

export interface RangeInputProps {
  applyLabel?: string;
  colorScheme?: 'light' | 'dark';
  disabled?: boolean;
  max?: number;
  maxLabel?: string;
  maxName?: string;
  maxPlaceholder?: string;
  maxPrepend?: ReactNode;
  maxStep?: number;
  min?: number;
  minLabel?: string;
  minName?: string;
  minPlaceholder?: string;
  minPrepend?: ReactNode;
  minStep?: number;
  onChange?: (value: { min: number | null; max: number | null }) => void;
  value?: { min: number | null; max: number | null };
}

const clamp = (value: number, min: number | null, max?: number | null) =>
  Math.min(Math.max(value, min ?? -Infinity), max ?? Infinity);

export function RangeInput({
  applyLabel = 'Apply',
  colorScheme = 'light',
  disabled = false,
  max = 100,
  maxLabel = 'Max',
  maxName = 'max',
  maxPlaceholder = 'Max',
  maxPrepend = null,
  maxStep = 1,
  min = 0,
  minLabel = 'Min',
  minName = 'min',
  minPlaceholder = 'Min',
  minPrepend = null,
  minStep = 1,
  onChange,
  value,
}: RangeInputProps) {
  const [state, setState] = useState({
    min: value?.min?.toString() ?? '',
    max: value?.max?.toString() ?? '',
  });

  useEffect(() => {
    setState({ min: value?.min?.toString() ?? '', max: value?.max?.toString() ?? '' });
  }, [value]);

  const parsedMinState = parseInt(state.min, 10);
  const parsedMaxState = parseInt(state.max, 10);
  const minStateAsNumber = Number.isNaN(parsedMinState) ? null : parsedMinState;
  const maxStateAsNumber = Number.isNaN(parsedMaxState) ? null : parsedMaxState;

  return (
    <div className="flex w-full items-center gap-2">
      <Input
        className="flex-1"
        colorScheme={colorScheme}
        disabled={disabled}
        label={minLabel}
        max={maxStateAsNumber ?? max}
        min={min}
        name={minName}
        onBlur={(e) => {
          const clamped = clamp(
            e.currentTarget.valueAsNumber,
            min,
            e.currentTarget.max === '' ? null : parseInt(e.currentTarget.max, 10),
          );
          const nextValue = Number.isNaN(clamped) ? null : clamped;

          setState((prev) => ({ ...prev, min: nextValue?.toString() ?? '' }));
        }}
        onChange={(e) => {
          const nextValue = e.currentTarget.value;

          setState((prev) => ({ ...prev, min: nextValue }));
        }}
        placeholder={minPlaceholder}
        prepend={minPrepend}
        step={minStep}
        type="number"
        value={state.min}
      />
      <Input
        className="flex-1"
        colorScheme={colorScheme}
        disabled={disabled}
        label={maxLabel}
        max={max}
        min={minStateAsNumber ?? min}
        name={maxName}
        onBlur={(e) => {
          const clamped = clamp(
            e.currentTarget.valueAsNumber,
            e.currentTarget.min === '' ? null : parseInt(e.currentTarget.min, 10),
            max,
          );
          const nextValue = Number.isNaN(clamped) ? null : clamped;

          setState((prev) => ({ ...prev, max: nextValue?.toString() ?? '' }));
        }}
        onChange={(e) => {
          const nextValue = e.currentTarget.value;

          setState((prev) => ({ ...prev, max: nextValue }));
        }}
        placeholder={maxPlaceholder}
        prepend={maxPrepend}
        step={maxStep}
        type="number"
        value={state.max}
      />
      <Button
        className="shrink-0"
        disabled={disabled || (state.min === state.max && state.min !== '' && state.max !== '')}
        onClick={() =>
          onChange?.({
            min: state.min === '' ? null : Number(state.min),
            max: state.max === '' ? null : Number(state.max),
          })
        }
        shape="circle"
        size="small"
        variant="secondary"
      >
        <span className="sr-only">{applyLabel}</span>
        <ArrowRight size={20} strokeWidth={1} />
      </Button>
    </div>
  );
}
