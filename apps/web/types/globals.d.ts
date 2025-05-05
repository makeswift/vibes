import 'react';

declare module 'react' {
  interface CSSProperties {
    '--foreground'?: string;
    '--background'?: string;
  }
}
