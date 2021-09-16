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
  name?: string;
  hideBreadcrumb?: boolean,
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
    name: 'Home',
  },
  {
    component: React.lazy(() => import('@layouts/MainLayout')),
    path: '/books',
    hideBreadcrumb: true,
    routes: [
      {
        path: '',
        component: React.lazy(() => import('@pages/App')),
        name: 'App',
        routes: [
          {
            path: '/child',
            component: React.lazy(() => import('@pages/Child')),
            name: 'Child',
            routes: [
              {
                path: '/:id',
                component: React.lazy(() => import('@pages/Child')),
                hideBreadcrumb: true,
                routes: [
                  {
                    path: '/grandchild',
                    name: 'GrandChild',
                    component: React.lazy(() => import('@pages/GrandChild')),
                  },
                ],
              },
            ],
          },
          {
            path: '/child2',
            component: React.lazy(() => import('@pages/Child')),
            name: 'Child2',
            meta: {
              isMeta: 'Hi',
            },
            routes: [
              {
                path: '/:id',
                component: React.lazy(() => import('@pages/Child')),
                hideBreadcrumb: true,
                routes: [
                  {
                    path: '/grandchild',
                    name: 'GrandChild',
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
    path: '/electronics',
    hideBreadcrumb: true,
    routes: [
      {
        path: '',
        component: React.lazy(() => import('@pages/App')),
        name: 'App2',
        routes: [
          {
            path: '/child3',
            component: React.lazy(() => import('@pages/Child')),
            name: 'Child3',
            routes: [
              {
                path: '/:id',
                component: React.lazy(() => import('@pages/Child')),
                hideBreadcrumb: true,
                routes: [
                  {
                    path: '/grandchild4',
                    name: 'GrandChild4',
                    component: React.lazy(() => import('@pages/GrandChild')),
                  },
                ],
              },
            ],
          },
          {
            path: '/child2',
            component: React.lazy(() => import('@pages/Child')),
            name: 'Child2',
            routes: [
              {
                path: '/:id',
                component: React.lazy(() => import('@pages/Child')),
                hideBreadcrumb: true,
                routes: [
                  {
                    path: '/grandchild',
                    name: 'GrandChild',
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
