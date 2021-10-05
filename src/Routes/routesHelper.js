import { CONTACT_PAGE, HOME_PAGE, PAGE_NOT_FOUND } from "./constants";

const routes = {
  [HOME_PAGE]: {
    private: false,
    pageName: "Home",
  },

  [CONTACT_PAGE]: {
    private: false,
    pageName: "Contact",
  },

  [PAGE_NOT_FOUND]: {
    private: false,
    pageName: "PageNotFound",
  },
};

export default routes;
