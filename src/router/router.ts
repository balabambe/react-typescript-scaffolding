import routes, { TypeRoutes } from './router.config';

/**
 * ** Recursive function **
 * 這裡會處理每個子路由的 path 自動冠上父層的 path
 * 讓 react router config 可以順利讀取
 * @param currentRoute 子路由 route.routes 的內容
 * @returns 修改過的子路由
 */

const combineRoutePath = (currentRoute: TypeRoutes[]): TypeRoutes[] =>
  currentRoute.map((route: TypeRoutes) => {
    const { path, routes: childs } = route;

    if (childs) {
      const conbinePath = childs.map((child: TypeRoutes) => ({
        ...child,
        path: `${path}${child.path}`,
      }));
      return {
        ...route,
        routes: combineRoutePath(conbinePath), // Recursive
      };
    }
    return route;
  });

export type { TypeRoutes };
export default combineRoutePath(routes);
