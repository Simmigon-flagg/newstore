import React, { lazy, Suspense } from 'react';

const LazyVan = lazy(() => import('./Van'));

const Van = props => (
  <Suspense fallback={null}>
    <LazyVan {...props} />
  </Suspense>
);

export default Van;
