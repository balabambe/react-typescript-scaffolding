import { RouteComponentProps } from 'react-router';

import AuthLayout from '@layouts/Auth';
import MainLayout from '@layouts/MainLayout';
import App from '@pages/App';
import Child from '@pages/Child';
import GrandChild from '@pages/GrandChild';

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
    component: MainLayout,
    path: '/',
    exact: true,
  },
  {
    component: MainLayout,
    path: '/app',
    routes: [
      {
        path: '/app',
        component: App,
        routes: [
          {
            path: '/app/child/:id',
            component: Child,
            routes: [
              {
                path: '/app/child/:id/grandchild',
                component: GrandChild,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    component: AuthLayout,
  },
];

export default routes;
export type { TypeRoutes };
