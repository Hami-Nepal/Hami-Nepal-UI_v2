import {  CONTACT_US_PAGE, HOME_PAGE, PAGE_NOT_FOUND } from "./constants";

const routes = {
  [HOME_PAGE]: {
    private: false,
    pageName: "Home",
  },

  [CONTACT_US_PAGE]: {
    private: false,
    pageName: "ContactUS",
  },

  // Add your route here

  [PAGE_NOT_FOUND]: {
    private: false,
    pageName: "PageNotFound",
  },
};

export default routes;
