// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'skillsPage',
      getComponent(nextState, cb) {
        System.import('containers/SkillsPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/experiences',
      name: 'experiencesPage',
      getComponent(location, cb) {
        System.import('containers/ExperiencesPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/experiences-old',
      name: 'experiencesPage',
      getComponent(location, cb) {
        System.import('containers/OldExperiencesPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/contact',
      name: 'contactPage',
      getComponent(location, cb) {
        System.import('containers/ContactPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
