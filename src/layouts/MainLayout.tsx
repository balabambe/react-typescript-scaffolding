import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';

import RouterOutlet from '@components/RouterOutlet';

const MainLayout: React.FC<RouteConfigComponentProps> = ({route}) =>  (
    <>
      <h1>MainLayout</h1>
      <RouterOutlet route={route} />
    </>
  )
;
export default MainLayout;
