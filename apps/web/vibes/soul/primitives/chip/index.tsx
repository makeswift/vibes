import { X } from 'lucide-react';

interface Props {
  buttonName?: string;
  buttonValue?: string;
  children?: React.ReactNode;
  removeLabel?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Chip = function Chip({
  buttonName,
  buttonValue,
  children,
  removeLabel = 'Remove',
  onClick,
}: Props) {
  return (
    <span className="flex h-9 items-center gap-1.5 rounded-lg bg-contrast-100 px-3 py-2 text-sm font-semibold leading-5 text-foreground">
      {children}
      <button
        className="flex h-5 w-5 items-center justify-center rounded-full hover:bg-contrast-200 focus:outline-none focus:ring-1 focus:ring-foreground"
        name={buttonName}
        onClick={onClick}
        title={removeLabel}
        value={buttonValue}
      >
        <X size={12} />
      </button>
    </span>
  );
};
