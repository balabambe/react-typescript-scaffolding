import React from 'react';
import { RouteComponentProps } from 'react-router';

type TypeRoutes = {
  path: string;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
    | undefined;
  exact?: boolean;
  meta?: unknown;
  routes?: TypeRoutes[];
};

const routes: TypeRoutes[] = [
  {
    component: React.lazy(() => import('@layouts/MainLayout')),
    path: '/',
    exact: true,
  },
  {
    component: React.lazy(() => import('@layouts/MainLayout')),
    path: '/app',
    routes: [
      {
        path: '/app',
        component: React.lazy(() => import('@pages/App')),
        routes: [
          {
            path: '/app/child',
            component: React.lazy(() => import('@pages/Child')),
            routes: [
              {
                path: '/app/child/:id',
                component: React.lazy(() => import('@pages/Child')),
                routes: [
                  {
                    path: '/app/child/:id/grandchild',
                    component: React.lazy(() => import('@pages/GrandChild')),
                  },
                ],
              },
            ]
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
