'use client';

import { createContext, useCallback, useContext, useMemo, useReducer } from 'react';
import type { ReactNode } from 'react';

interface FileState {
  file: File;
  progress: number;
  error?: string;
  status: 'idle' | 'uploading' | 'error' | 'success';
}

interface FileInputState {
  files: Map<File, FileState>;
  dragOver: boolean;
  invalid: boolean;
}

type FileUploadActions =
  | { type: 'ADD_FILES'; files: File[] }
  | { type: 'SET_FILES'; files: File[] }
  | { type: 'SET_PROGRESS'; file: File; progress: number }
  | { type: 'SET_SUCCESS'; file: File }
  | { type: 'SET_ERROR'; file: File; error: string }
  | { type: 'REMOVE_FILE'; file: File }
  | { type: 'SET_DRAG_OVER'; dragOver: boolean }
  | { type: 'SET_INVALID'; invalid: boolean }
  | { type: 'CLEAR' };

const initialState: FileInputState = {
  files: new Map(),
  dragOver: false,
  invalid: false,
};

function fileUploadReducer(state: FileInputState, action: FileUploadActions): FileInputState {
  switch (action.type) {
    case 'ADD_FILES': {
      const newFiles = new Map(state.files);
      action.files.forEach((file) => {
        if (!newFiles.has(file)) {
          newFiles.set(file, {
            file,
            progress: 0,
            status: 'idle',
          });
        }
      });
      return {
        ...state,
        files: newFiles,
      };
    }

    case 'SET_FILES':
      const setFiles = new Map<File, FileState>();

      action.files.forEach((file) => {
        setFiles.set(file, {
          file,
          progress: 0,
          status: 'idle',
        });
      });

      return {
        ...state,
        files: setFiles,
      };

    case 'SET_PROGRESS':
      const updatedFiles = new Map(state.files);
      const fileState = updatedFiles.get(action.file);

      if (fileState) {
        updatedFiles.set(action.file, {
          ...fileState,
          progress: action.progress,
          status: 'uploading',
        });
      }

      return {
        ...state,
        files: updatedFiles,
      };

    case 'SET_SUCCESS':
      const successFiles = new Map(state.files);
      const successFileState = successFiles.get(action.file);

      if (successFileState) {
        successFiles.set(action.file, {
          ...successFileState,
          status: 'success',
          progress: 100,
        });
      }

      return {
        ...state,
        files: successFiles,
      };

    case 'SET_ERROR':
      const errorFiles = new Map(state.files);
      const errorFileState = errorFiles.get(action.file);

      if (errorFileState) {
        errorFiles.set(action.file, {
          ...errorFileState,
          status: 'error',
          error: action.error,
        });
      }

      return {
        ...state,
        files: errorFiles,
      };

    case 'REMOVE_FILE':
      const removeFiles = new Map(state.files);
      removeFiles.delete(action.file);

      return {
        ...state,
        files: removeFiles,
      };

    case 'SET_DRAG_OVER':
      return {
        ...state,
        dragOver: action.dragOver,
      };

    case 'SET_INVALID':
      return {
        ...state,
        invalid: action.invalid,
      };

    case 'CLEAR':
      return initialState;

    default:
      return state;
  }
}

interface FileUploadContextType {
  state: FileInputState;
  addFiles: (files: File[]) => void;
  setFiles: (files: File[]) => void;
  setProgress: (file: File, progress: number) => void;
  setSuccess: (file: File) => void;
  setError: (file: File, error: string) => void;
  removeFile: (file: File) => void;
  clearAll: () => void;
  setDragOver: (dragOver: boolean) => void;
  setInvalid: (invalid: boolean) => void;
}

const FileUploadContext = createContext<FileUploadContextType | undefined>(undefined);

export function FileUploadProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(fileUploadReducer, initialState);

  const addFiles = useCallback((files: File[]) => {
    dispatch({ type: 'ADD_FILES', files });
  }, []);

  const setFiles = useCallback((files: File[]) => {
    dispatch({ type: 'SET_FILES', files });
  }, []);

  const setProgress = useCallback((file: File, progress: number) => {
    dispatch({ type: 'SET_PROGRESS', file, progress });
  }, []);

  const setSuccess = useCallback((file: File) => {
    dispatch({ type: 'SET_SUCCESS', file });
  }, []);

  const setError = useCallback((file: File, error: string) => {
    dispatch({ type: 'SET_ERROR', file, error });
  }, []);

  const removeFile = useCallback((file: File) => {
    dispatch({ type: 'REMOVE_FILE', file });
  }, []);

  const clearAll = useCallback(() => {
    dispatch({ type: 'CLEAR' });
  }, []);

  const setDragOver = useCallback((dragOver: boolean) => {
    dispatch({ type: 'SET_DRAG_OVER', dragOver });
  }, []);

  const setInvalid = useCallback((invalid: boolean) => {
    dispatch({ type: 'SET_INVALID', invalid });
  }, []);

  const contextValue = useMemo(
    () => ({
      state,
      addFiles,
      setFiles,
      setProgress,
      setSuccess,
      setError,
      removeFile,
      clearAll,
      setDragOver,
      setInvalid,
    }),
    [
      state,
      addFiles,
      setFiles,
      setProgress,
      setSuccess,
      setError,
      removeFile,
      clearAll,
      setDragOver,
      setInvalid,
    ],
  );

  return <FileUploadContext.Provider value={contextValue}>{children}</FileUploadContext.Provider>;
}

export function useFileUpload() {
  const context = useContext(FileUploadContext);
  if (context === undefined) {
    throw new Error('useFileUpload must be used within a FileUploadProvider');
  }
  return context;
}
