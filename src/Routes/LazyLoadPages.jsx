import { lazy, Suspense } from "react";

import PageLoadingSpinner from "../components/PageLoadingSpinner";
import ErrorBoundary from "../components/ErrorBoundary";
import routesHelper from "./routesHelper";

function LazyLoadPages(page) {
  const Component = lazy(() => import(`../pages/${page}/index.jsx`));
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
for (let route in routesHelper) {
  COMPONENTS[routesHelper[route].pageName] = LazyLoadPages(
    routesHelper[route].pageName
  );
}

export default COMPONENTS;
