import { CONTACT_US_PAGE, HOME_PAGE, PAGE_NOT_FOUND } from './constants';
import LazyLoadPages from './LazyLoadPages';

// Add Routes here
const routes = {
  [HOME_PAGE]: {
    private: false,
    component: LazyLoadPages.Home,
  },
  [CONTACT_US_PAGE]: {
    private: false,
    component: LazyLoadPages.ContactUS,
  },


  [PAGE_NOT_FOUND]: {
    private: false,
    component: LazyLoadPages.PageNotFound,
  },
};

export default routes;
