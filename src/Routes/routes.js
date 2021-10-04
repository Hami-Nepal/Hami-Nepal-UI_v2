import { HOME_PAGE, PAGE_NOT_FOUND } from './constants';
import LazyLoadPages from './LazyLoadPages';

// Add Routes here
const routes = {
  [HOME_PAGE]: {
    private: false,
    component: LazyLoadPages.Home,
  },

  [PAGE_NOT_FOUND]: {
    private: false,
    component: LazyLoadPages.PageNotFound,
  },
};

export default routes;
