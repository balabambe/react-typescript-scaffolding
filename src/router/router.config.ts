import React from 'react';
import { RouteComponentProps } from 'react-router';

type TypeRoutes = {
  path: string;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
    | undefined;
  exact?: boolean;
  meta?: Record<string, unknown>;
  routes?: TypeRoutes[];
  breadcrumbName?: string;
};

/**
 * 每一層子路由的 path 應該要完整填寫包含父層的 path
 * 但這樣寫實在太雞肋了，如果要把子路由搬到另一層去，path 都要一層一層重寫
 * 所以底下我寫了一個 function 自動把子路由的 path 前加上父層的 path
 * 如果有要搬動子路由的需求就可以直接剪下貼上比較方便
 */
const routes: TypeRoutes[] = [
  {
    component: React.lazy(() => import('@layouts/MainLayout')),
    path: '/',
    exact: true,
    breadcrumbName: 'Home',
  },
  {
    component: React.lazy(() => import('@layouts/MainLayout')),
    path: '/app',
    routes: [
      {
        path: '',
        component: React.lazy(() => import('@pages/App')),
        breadcrumbName: 'App',
        routes: [
          {
            path: '/child',
            component: React.lazy(() => import('@pages/Child')),
            breadcrumbName: 'Child',
            routes: [
              {
                path: '/:id',
                component: React.lazy(() => import('@pages/Child')),
                routes: [
                  {
                    path: '/grandchild',
                    breadcrumbName: 'GrandChild',
                    component: React.lazy(() => import('@pages/GrandChild')),
                  },
                ],
              },
            ],
          },
          {
            path: '/child2',
            component: React.lazy(() => import('@pages/Child')),
            breadcrumbName: 'Child2',
            meta: {
              isMeta: 'Hi',
            },
            routes: [
              {
                path: '/:id',
                component: React.lazy(() => import('@pages/Child')),
                routes: [
                  {
                    path: '/grandchild',
                    breadcrumbName: 'GrandChild',
                    component: React.lazy(() => import('@pages/GrandChild')),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    component: React.lazy(() => import('@layouts/MainLayout')),
    path: '/app2',
    routes: [
      {
        path: '',
        component: React.lazy(() => import('@pages/App')),
        breadcrumbName: 'App2',
        routes: [
          {
            path: '/child3',
            component: React.lazy(() => import('@pages/Child')),
            breadcrumbName: 'Child3',
            routes: [
              {
                path: '/:id',
                component: React.lazy(() => import('@pages/Child')),
                routes: [
                  {
                    path: '/grandchild4',
                    breadcrumbName: 'GrandChild4',
                    component: React.lazy(() => import('@pages/GrandChild')),
                  },
                ],
              },
            ],
          },
          {
            path: '/child2',
            component: React.lazy(() => import('@pages/Child')),
            breadcrumbName: 'Child2',
            routes: [
              {
                path: '/:id',
                component: React.lazy(() => import('@pages/Child')),
                routes: [
                  {
                    path: '/grandchild',
                    breadcrumbName: 'GrandChild',
                    component: React.lazy(() => import('@pages/GrandChild')),
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    component: React.lazy(() => import('@layouts/Auth')),
  },
];

export default routes;
export type { TypeRoutes };
