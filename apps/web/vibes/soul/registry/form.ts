import { Components } from '@/vibes/schema';

export const form = [
  {
    name: 'button-radio-group',
    dependencies: ['clsx', 'lucide-react', '@radix-ui/react-radio-group'],
    registryDependencies: ['field-error', 'label'],
    files: ['form/button-radio-group/index.tsx'],
  },
  {
    name: 'card-radio-group',
    dependencies: ['clsx', '@radix-ui/react-radio-group'],
    registryDependencies: ['field-error', 'label'],
    files: ['form/card-radio-group/index.tsx'],
  },
  {
    name: 'checkbox',
    dependencies: ['@radix-ui/react-checkbox', '@radix-ui/react-label', 'lucide-react', 'clsx'],
    registryDependencies: ['field-error'],
    files: ['form/checkbox/index.tsx'],
  },
  {
    name: 'checkbox-group',
    dependencies: ['clsx'],
    registryDependencies: ['field-error', 'label', 'checkbox'],
    files: ['form/checkbox-group/index.tsx'],
  },
  {
    name: 'date-picker',
    dependencies: ['lucide-react', '@radix-ui/react-popover'],
    registryDependencies: ['input', 'calendar'],
    files: ['form/date-picker/index.tsx'],
  },
  {
    name: 'dynamic-form',
    dependencies: ['@conform-to/react', '@conform-to/zod', 'zod'],
    registryDependencies: [
      'button',
      'button-radio-group',
      'card-radio-group',
      'checkbox',
      'checkbox-group',
      'date-picker',
      'form-status',
      'input',
      'number-input',
      'radio-group',
      'select',
      'swatch-radio-group',
      'textarea',
    ],
    files: ['form/dynamic-form/index.tsx', 'form/dynamic-form/schema.ts'],
  },
  {
    name: 'field-error',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['form/field-error/index.tsx'],
  },
  {
    name: 'file-input',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: ['label', 'button', 'toaster'],
    files: [
      'form/file-input/index.tsx',
      'form/file-input/file-dropzone.tsx',
      'form/file-input/file-item.tsx',
    ],
  },
  {
    name: 'form-status',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['form/form-status/index.tsx'],
  },
  {
    name: 'input',
    dependencies: ['clsx'],
    registryDependencies: ['field-error', 'label'],
    files: ['form/input/index.tsx'],
  },
  {
    name: 'label',
    dependencies: ['clsx', '@radix-ui/react-label'],
    registryDependencies: [],
    files: ['form/label/index.tsx'],
  },
  {
    name: 'number-input',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: ['field-error', 'label'],
    files: ['form/number-input/index.tsx'],
  },
  {
    name: 'radio-group',
    dependencies: ['clsx', '@radix-ui/react-radio-group'],
    registryDependencies: ['field-error', 'label'],
    files: ['form/radio-group/index.tsx'],
  },
  {
    name: 'range-input',
    dependencies: ['lucide-react'],
    registryDependencies: ['input', 'button'],
    files: ['form/range-input/index.tsx'],
  },
  {
    name: 'select',
    dependencies: ['clsx', 'lucide-react', '@radix-ui/react-select'],
    registryDependencies: ['field-error', 'label'],
    files: ['form/select/index.tsx'],
  },
  {
    name: 'swatch-radio-group',
    dependencies: ['clsx', 'lucide-react', '@radix-ui/react-radio-group'],
    registryDependencies: ['field-error', 'label'],
    files: ['form/swatch-radio-group/index.tsx'],
  },
  {
    name: 'textarea',
    dependencies: ['clsx'],
    registryDependencies: ['field-error', 'label'],
    files: ['form/textarea/index.tsx'],
  },
  {
    name: 'toggle-group',
    dependencies: ['clsx', '@radix-ui/react-toggle-group'],
    registryDependencies: ['field-error', 'label'],
    files: ['form/toggle-group/index.tsx'],
  },
] satisfies Components;
