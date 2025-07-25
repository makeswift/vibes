'use client';

import { useCallback } from 'react';

import { FileInput } from '@/vibes/soul/form/file-input';
import type { FileInputProps } from '@/vibes/soul/form/file-input';

export default function Preview() {
  const onUpload: NonNullable<FileInputProps['onUpload']> = useCallback(
    async (uploadFiles, { onProgress, onSuccess, onError }) => {
      try {
        const uploadPromises = uploadFiles.map(async (file, index) => {
          try {
            if (index === 1) {
              await new Promise((resolve) => setTimeout(resolve, 500));
              onError(file, new Error('Upload failed'));
              return;
            }
            // Simulate file upload with progress
            const totalChunks = 10;
            let uploadedChunks = 0;

            // Simulate chunk upload with delays
            for (let i = 0; i < totalChunks; i = i + 1) {
              // Simulate network delay (100-300ms per chunk)
              await new Promise((resolve) => setTimeout(resolve, Math.random() * 200 + 100));

              // Update progress for this specific file
              uploadedChunks = uploadedChunks + 1;
              const progress = (uploadedChunks / totalChunks) * 100;
              onProgress(file, progress);
            }

            // Simulate server processing delay
            await new Promise((resolve) => setTimeout(resolve, 500));
            onSuccess(file);
          } catch (error) {
            onError(file, error instanceof Error ? error : new Error('Upload failed'));
          }
        });

        await Promise.all(uploadPromises);
      } catch (error) {
        console.error('Unexpected error during upload:', error);
      }
    },
    [],
  );

  return (
    <div className="@container">
      <div className="p-4 @lg:p-10">
        <div className="mx-auto max-w-xl">
          <FileInput
            accept="image/*"
            label="Feature Images"
            maxFiles={2}
            maxSize={200 * 1024}
            message="Max 2 files, up to 200KB"
            multiple
            onUpload={onUpload}
          />
        </div>
      </div>
    </div>
  );
}
