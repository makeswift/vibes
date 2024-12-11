import { DynamicForm } from '../../../primitives/dynamic-form';

import { action, fields } from './action';
import { StaticForm } from './static-form';

export default function Preview() {
  return (
    <div className="m-auto mt-4 w-[500px]">
      <h2 className="mb-2 text-lg font-bold">Static</h2>
      <StaticForm />

      <h2 className="mb-2 text-lg font-bold">Dynamic</h2>
      <DynamicForm action={action} fields={fields} />
    </div>
  );
}
