import { route } from 'quasar/wrappers';

import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';
import { setupLayouts } from 'virtual:generated-layouts';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

const extendedRoutes = setupLayouts(routes);
// extendedRoutes.push({
//   path: '/:pathMatch(.*)*',
//   name: 'NotFound',
//   component: () => import('pages/404.vue'),
// });


export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    history: createHistory(process.env.VUE_ROUTER_BASE),
    //extendRoutes: (routes: RouteRecordRaw[]) => setupLayouts(routes),
    routes: extendedRoutes,
    // @ts-ignore
    //extendedRoutes: routes => setupLayouts(routes),
  });

  return Router;
});
