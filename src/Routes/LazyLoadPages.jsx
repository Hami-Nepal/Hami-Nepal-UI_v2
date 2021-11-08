import { lazy, Suspense } from "react";

import PageLoadingSpinner from "../components/PageLoadingSpinner";
import ErrorBoundary from "../components/ErrorBoundary";
import routesHelper from "./routesHelper";

function LazyLoadPages(page) {
<<<<<<< HEAD
  const Component = lazy(() => import(/* @vite-ignore */ `../pages/${page}/index.jsx` ));
=======
  const Component = lazy(() => import(`../pages/${page}/index.jsx`));
>>>>>>> 58e254b9c1acb4635429f500c0cb469c2f4a2d98
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
