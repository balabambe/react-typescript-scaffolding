import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';

import Breadcrumbs from '@components/Breadcrumbs';
import Navbar from '@components/Navbar';
import RouterOutlet from '@components/RouterOutlet';

const MainLayout: React.FC<RouteConfigComponentProps> = ({ route }) => (
  <>
    <Navbar renderSecondLevel />
    <h1>MainLayout</h1>
    <Breadcrumbs />
    <RouterOutlet route={route} />
  </>
);
export default MainLayout;
