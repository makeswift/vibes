import { v4 as uuid } from 'uuid';

import { TreeNodeType } from '@/vibes/soul/primitives/tree/components/tree-node';

export const data: TreeNodeType[] = [
  {
    id: uuid(),
    name: 'Catalog',
    children: [
      {
        id: uuid(),
        name: 'Apparel',
        children: [
          {
            id: uuid(),
            name: 'Men',
            children: [
              {
                id: uuid(),
                name: 'T-Shirts',
                children: [
                  {
                    id: uuid(),
                    name: 'Classic Tee',
                    children: [
                      { id: uuid(), name: 'Black / S' },
                      { id: uuid(), name: 'Black / M' },
                      { id: uuid(), name: 'White / L' },
                    ],
                  },
                  {
                    id: uuid(),
                    name: 'Ultra-Performance Tee With Ridiculously Long Marketing Name For Overflow Testing',
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Shoes',
                children: [
                  {
                    id: uuid(),
                    name: 'Runner 2.0',
                    children: [
                      { id: uuid(), name: 'US 9' },
                      { id: uuid(), name: 'US 10' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: uuid(),
            name: 'Women',
            children: [
              {
                id: uuid(),
                name: 'Dresses',
                children: [
                  {
                    id: uuid(),
                    name: 'Satin Midi Dress',
                    children: [
                      { id: uuid(), name: 'Blush / S' },
                      { id: uuid(), name: 'Navy / S' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: 'Electronics',
        children: [
          {
            id: uuid(),
            name: 'Laptops',
            children: [
              {
                id: uuid(),
                name: 'Nebula 14',
                children: [
                  { id: uuid(), name: '16GB / 512GB' },
                  { id: uuid(), name: '32GB / 1TB' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: 'Home & Garden',
        children: [
          {
            id: uuid(),
            name: 'Furniture',
            children: [
              {
                id: uuid(),
                name: 'City Loft Sofa',
                children: [
                  { id: uuid(), name: '2-Seater / Sand' },
                  { id: uuid(), name: '3-Seater / Charcoal' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
