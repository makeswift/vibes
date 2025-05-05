'use client';

import { CardRadioGroup } from '@/vibes/soul/form/card-radio-group';

export default function Preview() {
  return (
    <div className="mx-auto max-w-2xl p-10">
      <CardRadioGroup
        label="Options"
        options={[
          {
            label: 'Philodendron Imperial Red',
            value: 'option-1',
            image: {
              src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowNzAzMzk0Ni01NGNhLTQ3ZDYtODgyYi0wYWI3NTUzNTU4YjQ=/kv08IvX08j.jpeg',
              alt: 'Philodendron Imperial Red',
            },
          },
          {
            label: 'Monstera',
            value: 'option-2',
            image: {
              src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZToyMTIwYzE1ZC01YzlkLTQ3MDgtOTZhOS1hZDkwYjVmNDAwZWY=/n0P83RMnClS%202930x3663.jpeg',
              alt: 'Monstera',
            },
          },
          {
            label: 'Pink Caladium',
            value: 'option-3',
            image: {
              src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjJhNTMyOC1hNzMwLTQxYjQtODE5Ny05ZDdlYWViMjJhMDQ=/AaZW4j2VTd4%202489x3111.jpeg',
              alt: 'Pink Caladium',
            },
          },
        ]}
      />
    </div>
  );
}
