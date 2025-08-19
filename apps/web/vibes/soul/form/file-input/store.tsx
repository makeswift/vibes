import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

const initialFileState = (file: File): FileItemState => ({
  file,
  progress: 0,
  status: 'idle',
  hasAnimated: false,
});

export interface FileItemState {
  file: File;
  progress: number;
  error?: string;
  status: 'idle' | 'uploading' | 'error' | 'success';
  hasAnimated: boolean;
}

export interface FileInputStoreState {
  files: Map<File, FileItemState>;
  dragOver: boolean;
  invalid: boolean;
  actions: {
    addFiles: (files: File[]) => void;
    setFiles: (files: File[]) => void;
    setProgress: (file: File, progress: number) => void;
    setSuccess: (file: File) => void;
    setError: (file: File, error: string) => void;
    removeFile: (file: File) => void;
    setDragOver: (dragOver: boolean) => void;
    setInvalid: (invalid: boolean) => void;
    setHasAnimated: (file: File) => void;
    clear: () => void;
  };
}

export const useFileInputStore = create<FileInputStoreState>((set) => ({
  files: new Map(),
  dragOver: false,
  invalid: false,
  actions: {
    addFiles: (files: File[]) =>
      set((state) => {
        const hasNewFiles = files.some((file) => !state.files.has(file));

        if (!hasNewFiles) return {};

        const newFilesMap = new Map<File, FileItemState>(state.files);

        for (const file of files) {
          if (!newFilesMap.has(file)) {
            newFilesMap.set(file, initialFileState(file));
          }
        }

        return { files: newFilesMap };
      }),

    setFiles: (files: File[]) =>
      set((state) => {
        const newFilesMap = new Map<File, FileItemState>();

        for (const file of files) {
          const existingState = state.files.get(file);
          newFilesMap.set(file, existingState ?? initialFileState(file));
        }

        return { files: newFilesMap };
      }),

    setProgress: (file: File, progress: number) =>
      set((state) => {
        const fileState = state.files.get(file);
        if (!fileState) return {};

        const newFilesMap = new Map<File, FileItemState>(state.files);

        newFilesMap.set(file, {
          ...fileState,
          progress,
          status: 'uploading',
        });
        return { files: newFilesMap };
      }),

    setSuccess: (file: File) =>
      set((state) => {
        const fileState = state.files.get(file);
        if (!fileState) return {};

        const newFilesMap = new Map<File, FileItemState>(state.files);

        newFilesMap.set(file, {
          ...fileState,
          progress: 100,
          status: 'success',
          error: undefined,
        });
        return { files: newFilesMap };
      }),

    setError: (file: File, error: string) =>
      set((state) => {
        const fileState = state.files.get(file);
        if (!fileState) return {};

        const newFilesMap = new Map<File, FileItemState>(state.files);

        newFilesMap.set(file, {
          ...fileState,
          error,
          status: 'error',
        });
        return { files: newFilesMap, invalid: true };
      }),

    setHasAnimated: (file: File) =>
      set((state) => {
        const fileState = state.files.get(file);
        if (!fileState) return {};

        const newFilesMap = new Map<File, FileItemState>(state.files);

        newFilesMap.set(file, {
          ...fileState,
          hasAnimated: true,
        });
        return { files: newFilesMap };
      }),

    removeFile: (file: File) =>
      set((state) => {
        if (!state.files.has(file)) return {};

        const newFilesMap = new Map<File, FileItemState>(state.files);

        if (newFilesMap.delete(file)) {
          return { files: newFilesMap };
        }

        return {};
      }),

    setDragOver: (dragOver: boolean) =>
      set((state) => {
        if (state.dragOver !== dragOver) {
          return { dragOver };
        }
        return {};
      }),

    setInvalid: (invalid: boolean) =>
      set((state) => {
        if (state.invalid !== invalid) {
          return { invalid };
        }
        return {};
      }),

    clear: () =>
      set({
        files: new Map<File, FileItemState>(),
        dragOver: false,
        invalid: false,
      }),
  },
}));

export const useFiles = () =>
  useFileInputStore(useShallow((state) => Array.from(state.files.keys())));
export const useFileState = (file: File) => useFileInputStore((state) => state.files.get(file));
export const useDragOver = () => useFileInputStore((state) => state.dragOver);
export const useInvalid = () => useFileInputStore((state) => state.invalid);

export const useFileInputActions = () => useFileInputStore(useShallow((state) => state.actions));
