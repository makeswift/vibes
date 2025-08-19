import { FileItem } from '@/vibes/soul/form/file-input/file-item';
import { useFiles } from '@/vibes/soul/form/file-input/store';

export interface FileListProps {
  id: string;
  onRemoveFile: (file: File) => void;
  uploadingLabel?: string;
  successLabel?: string;
  errorLabel?: string;
}

export function FileList({
  id,
  onRemoveFile,
  uploadingLabel,
  successLabel,
  errorLabel,
}: FileListProps) {
  const files = useFiles();

  return (
    <div className="mt-3 grid gap-3" id={`${id}-list`} role="list">
      {files.map((file) => (
        <FileItem
          errorLabel={errorLabel}
          file={file}
          id={id}
          key={URL.createObjectURL(file)}
          onRemoveFile={onRemoveFile}
          successLabel={successLabel}
          uploadingLabel={uploadingLabel}
        />
      ))}
    </div>
  );
}
