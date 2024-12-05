'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export function Portal({ children }: { children: React.ReactNode }) {
  const [doc, setDoc] = useState<Document | null>(null);

  useEffect(() => setDoc(document), []);

  return doc && createPortal(children, doc.body);
}
