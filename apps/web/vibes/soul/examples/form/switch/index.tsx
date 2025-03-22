import { Switch } from '@/vibes/soul/form/switch';

const variants = ['primary', 'secondary', 'tertiary'] as const;
const labelPositions = ['left', 'right', 'both'] as const;

export default function Preview() {
  return (
    <div className="p-10">
      <div className="flex flex-row">
        {labelPositions.map((pos) => (
          <div key={pos} className="mb-4 flex flex-1 flex-col items-center">
            <div className="mb-2 text-sm">
              labelPosition: <span className="font-bold">{pos}</span>
            </div>
            {variants.map((variant) => (
              <div key={variant} className="mb-2 flex justify-between">
                <Switch
                  size="small"
                  label={{ on: 'On', off: 'Off' }}
                  variant={variant}
                  labelPosition={pos}
                  defaultChecked={true}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
