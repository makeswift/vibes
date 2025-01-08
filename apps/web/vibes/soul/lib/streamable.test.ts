import { describe, expect, test } from 'vitest';

import { Streamable } from './streamable';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const worker = async <T>({ output, ms }: { ms?: number; output: T }) =>
  sleep(ms ?? Math.round(Math.random() * 20)).then(() => output);

describe('Streamable.all', () => {
  const array = [-1, 27, 13, -40, 95];
  const json = { a: 'foo', b: 'bar', array };

  test('returns a promise that resolves to an array of resolved values', async () => {
    const streamable = Streamable.all([
      worker({ output: 42 }),
      worker({ output: 'Hello there' }),
      worker({ output: array }),
      worker({ output: json }),
      worker({ output: null }),
      worker({ output: undefined }),
      worker({ output: NaN }),
      17,
      'Hi',
      array,
      json,
      null,
      undefined,
      NaN,
    ]);

    expect(await streamable).toEqual([
      42,
      'Hello there',
      array,
      json,
      null,
      undefined,
      NaN,
      17,
      'Hi',
      array,
      json,
      null,
      undefined,
      NaN,
    ]);
  });

  test('returns the same promise instance iff passed the same set of inputs', async () => {
    const worker1 = worker({ output: 42 });
    const worker2 = worker({ output: 'Hello there' });
    const worker3 = worker({ output: array });
    const worker4 = worker({ output: json });

    const streamable1 = Streamable.all([worker1, worker2, worker3, worker4, 17, 'Hi', array, json]);

    expect(await streamable1).toEqual([42, 'Hello there', array, json, 17, 'Hi', array, json]);

    const streamable2 = Streamable.all([worker1, worker2, worker3, worker4, 17, 'Hi', array, json]);
    expect(streamable2).toBe(streamable1);

    const streamable3 = Streamable.all([worker1, worker2, worker4, worker3, 17, 'Hi', array, json]);
    expect(streamable1).not.toBe(streamable3);

    const streamable4 = Streamable.all([worker1, worker2, worker4, worker3, 17, 'Hi', array, json]);
    expect(streamable4).toBe(streamable3);

    const streamable5 = Streamable.all([
      worker1,
      worker2,
      worker4,
      worker3,
      17,
      'Hi',
      array,
      json,
      undefined,
    ]);
    expect(streamable5).not.toBe(streamable4);
  });
});
