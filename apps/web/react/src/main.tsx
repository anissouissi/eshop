import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { ErrorBoundary } from 'react-error-boundary';
import App from './app/app';
import { ErrorFallback } from '@aso/shared-ui';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace('/')}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>
);
