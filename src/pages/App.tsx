import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';

import RouterOutlet from '@components/RouterOutlet';

const App: React.FC<RouteConfigComponentProps> = ({route}) =>  (
    <>
      <h1>Apppp</h1>
      <RouterOutlet route={route} />
    </>
  );
export default App;
