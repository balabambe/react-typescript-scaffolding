import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';

import RouterOutlet from '@components/RouterOutlet';

const Electronics: React.FC<RouteConfigComponentProps> = ({route}) =>  (
    <>
      <h1>Electronics</h1>
      <RouterOutlet route={route} />
    </>
  );
export default Electronics;
