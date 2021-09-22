import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';

import RouterOutlet from '@components/RouterOutlet';

const Books: React.FC<RouteConfigComponentProps> = ({route}) =>  (
    <>
      <h1>Books</h1>
      <RouterOutlet route={route} />
    </>
  );
export default Books;
