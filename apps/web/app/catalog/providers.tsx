'use client';

import { CatalogProvider } from '@aso/web-catalog-ui';

export function Providers({ children }: { children: React.ReactNode }) {
  return <CatalogProvider>{children}</CatalogProvider>;
}
