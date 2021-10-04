import { lazy, Suspense } from 'react';

import PageLoadingSpinner from '../components/PageLoadingSpinner';
import ErrorBoundary from '../components/ErrorBoundary';

// Add pages here
const PAGES = ['Home', 'PageNotFound'];

function LazyLoadPages(page) {
  const Component = lazy(() => import(/* @vite-ignore */ `../pages/${page}` ));
  return (
    <ErrorBoundary>
      <Suspense fallback={PageLoadingSpinner()}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
}

// Generate key (page): value (lazy loading component with error boundary) pair.
const COMPONENTS = {};
PAGES.forEach((page) => {
  COMPONENTS[page] = LazyLoadPages(page);
});

export default COMPONENTS;