import {
  CONTACT_US_PAGE,
  HOME_PAGE,
  OUR_WORK,
  PAGE_NOT_FOUND,
  Common_Landing_Page,
  CAUSES,
  EVENTS,
} from './constants';

const routes = {
  [HOME_PAGE]: {
    private: false,
    pageName: 'Home',
  },

  [CONTACT_US_PAGE]: {
    private: false,
    pageName: 'ContactUS',
  },
  [OUR_WORK]: {
    private: false,
    pageName: 'OurWork',
  },
  [Common_Landing_Page]: {
    private: false,
    pageName: 'CommonLandingPage',
  },
  [CAUSES]: {
    private: false,
    pageName: 'Causes',
  },
  [EVENTS]: {
    private: false,
    pageName: 'Events',
  },

  // Add your route here

  [PAGE_NOT_FOUND]: {
    private: false,
    pageName: 'PageNotFound',
  },
};

export default routes;
