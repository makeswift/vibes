'use client';

import { clsx } from 'clsx';
import {
  ComponentPropsWithoutRef,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';

import { Portal } from './portal';

interface Props extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  children: (state: { active: boolean; hover: boolean }) => ReactNode;
}

type Position = [number, number];

export default function Draggable({ className, children, style, ...rest }: Props) {
  const { stack, setStack } = useDraggable();
  const [zIndex, setZIndex] = useState(stack);
  const prevZIndex = useRef(0);
  const pointerStart = useRef<Position>([0, 0]);
  const positionStart = useRef<Position>([0, 0]);
  const [position, setPosition] = useState<Position>([0, 0]);
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  const onPointerMove = useCallback((e: PointerEvent) => {
    setPosition([
      positionStart.current[0] + e.clientX - pointerStart.current[0],
      positionStart.current[1] + e.clientY - pointerStart.current[1],
    ]);
  }, []);
  const onTouchMove = useCallback((e: TouchEvent) => {
    setPosition([
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      positionStart.current[0] + e.touches[0]!.clientX - pointerStart.current[0],
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      positionStart.current[1] + e.touches[0]!.clientY - pointerStart.current[1],
    ]);
  }, []);

  return (
    <div
      {...rest}
      className={clsx(className, 'relative touch-none select-none')}
      onPointerDown={(e) => {
        pointerStart.current = [e.clientX, e.clientY];
        positionStart.current = position;

        setActive(true);
        setStack((prev) => prev + 1);
        setZIndex(stack + 1);

        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', () => {
          setActive(false);

          prevZIndex.current = stack + 1;
          setZIndex(stack + 1);

          window.removeEventListener('pointermove', onPointerMove);
        });
      }}
      onPointerEnter={() => {
        prevZIndex.current = zIndex;
        setZIndex(stack + 1);
        setHover(true);
      }}
      onPointerLeave={() => {
        setZIndex(prevZIndex.current);
        setHover(false);
      }}
      onTouchStart={(e) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        pointerStart.current = [e.touches[0]!.clientX, e.touches[0]!.clientY];
        positionStart.current = position;

        setActive(true);
        setStack((prev) => prev + 1);

        window.addEventListener('touchmove', onTouchMove);
        window.addEventListener('touchend', () => {
          setActive(false);

          prevZIndex.current = stack + 1;
          setZIndex(stack + 1);

          window.removeEventListener('touchmove', onTouchMove);
        });
      }}
      style={{
        ...style,
        transform: `translate3d(${position[0]}px, ${position[1]}px, 0)`,
        zIndex,
      }}
    >
      {children({ active, hover })}
      {active && (
        <Portal>
          <div className="fixed inset-0 z-50 cursor-grabbing" />
        </Portal>
      )}
    </div>
  );
}

interface Context {
  stack: number;
  setStack: Dispatch<SetStateAction<number>>;
}

const DraggableContext = createContext<Context>({ stack: 0, setStack: () => void 0 });

export function useDraggable() {
  return useContext(DraggableContext);
}

export function DraggableProvider({ children }: { children: ReactNode }) {
  const [stack, setStack] = useState(0);

  return (
    <DraggableContext.Provider value={{ stack, setStack }}>{children}</DraggableContext.Provider>
  );
}
