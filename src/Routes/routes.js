import LazyLoadPages from "./LazyLoadPages";
import routesHelper from "./routesHelper";

// Add Routes here
const routes = {};

for (let path in routesHelper) {
  routes[path] = {
    ...routesHelper[path],
    component: LazyLoadPages[routesHelper[path].pageName],
  };
}

export default routes;
