import { RouteComponentProps } from 'react-router';

import AuthLayout from '@layouts/Auth';
import MainLayout from '@layouts/MainLayout';
import App from '@pages/App';

type TypeRoutes = {
  path: string,
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | undefined,
  exact?: boolean,
  meta?: unknown,
  children?: TypeRoutes[],
}

const routes: TypeRoutes[] = [
  {
    component: MainLayout,
    path: '/',
    exact: true,
    children: [
      {
        path: '/',
        exact: true,
        component: App,
        meta: {},
      },
      {
        path: 'child',
        component: App,
        children: [
          {
            path: 'grandchild',
            component: App,
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

