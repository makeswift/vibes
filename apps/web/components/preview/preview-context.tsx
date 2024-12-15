'use client';

import { createContext, Dispatch, SetStateAction, useCallback, useContext, useState } from 'react';

const MIN_WIDTH = 320;

interface Context {
  width: number | null;
  zoom: number;
  isDragging: boolean;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
  setMaxWidth: Dispatch<SetStateAction<number | null>>;
  resize: (nextWidth: number | null) => void;
  tab: string | undefined;
  setTab: Dispatch<SetStateAction<string>>;
}

const PreviewContext = createContext<Context>({
  width: null,
  zoom: 1,
  isDragging: false,
  setIsDragging: () => void 0,
  setMaxWidth: () => void 0,
  resize: () => void 0,
  tab: undefined,
  setTab: () => void 0,
});

interface Props {
  children: React.ReactNode;
}

export function PreviewProvider({ children }: Props) {
  const [width, setWidth] = useState<number | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [maxWidth, setMaxWidth] = useState<number | null>(null);
  const [tab, setTab] = useState<string>('preview');

  const resize = useCallback(
    (nextWidth: number | null) => {
      if (nextWidth === null) {
        setWidth(null);
        setZoom(1);
      } else {
        if (maxWidth === null) return;

        setWidth(Math.max(Math.min(nextWidth, maxWidth), MIN_WIDTH));
        setZoom(Math.min(maxWidth / Math.max(nextWidth, MIN_WIDTH), 1));
      }
    },
    [maxWidth],
  );

  return (
    <PreviewContext.Provider
      value={{
        tab,
        width,
        zoom,
        setTab,
        setMaxWidth,
        isDragging,
        setIsDragging,
        resize,
      }}
    >
      {children}
    </PreviewContext.Provider>
  );
}

export function usePreviewContext() {
  return useContext(PreviewContext);
}
