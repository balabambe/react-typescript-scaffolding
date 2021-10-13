import React from 'react';
import { RouteComponentProps } from 'react-router';

import { iconElectrics, iconHome, IconObject, iconPosts } from '@components/Icons';
import Auth from '@layouts/Auth';
import MainLayout from '@layouts/MainLayout';

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
  hideNav?: boolean,
  icon?: IconObject,
};

/**
 * 每一層子路由的 path 應該要完整填寫包含父層的 path
 * 但這樣寫實在太雞肋了，如果要把子路由搬到另一層去，path 都要一層一層重寫
 * 所以我在 router.ts 寫了一個 function 自動把子路由的 path 前加上父層的 path
 * 如果有要搬動子路由的需求就可以直接剪下貼上比較方便
 */
const routes: TypeRoutes[] = [
  {
    component: MainLayout,
    path: '/',
    exact: true,
    name: 'Home',
    icon: iconHome,
  },
  {
    component: MainLayout,
    path: '/posts',
    name: 'Posts',
    hideBreadcrumb: true,
    icon: iconPosts,
    routes: [
      {
        path: '',
        component: React.lazy(() => import('@pages/Posts/index')),
        name: 'Posts',
        icon: iconPosts,
        routes: [
          {
            path: '',
            component: React.lazy(() => import('@pages/Posts/Posts')),
            exact: true,
            hideBreadcrumb: true,
            name: 'Posts',
          },
          {
            path: '/:id',
            component: React.lazy(() => import('@pages/Posts/Post')),
            name: 'Post',
          },
        ]
      },
      {
        path: '/articles',
        component: React.lazy(() => import('@pages/Posts/Posts')),
        name: 'My Articles',
      }
    ],
  },
  {
    component: MainLayout,
    path: '/electronics',
    name: 'Electronics',
    hideBreadcrumb: true,
    icon: iconElectrics,
    routes: [
      {
        path: '',
        component: React.lazy(() => import('@pages/Electronics')),
        name: 'Electronics',
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
    component: Auth,
    hideNav: true,
  },
];

export default routes;
export type { TypeRoutes };
