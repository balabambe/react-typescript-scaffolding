import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { useParams } from 'react-router-dom';

import RouterOutlet from '@components/RouterOutlet';

const App: React.FC<RouteConfigComponentProps> = ({route}) =>  {
  const {id} = useParams<{id: string}>();
  return (
    <>
      <h1>Child</h1>
      <div>params: {id}</div>
      <div>meta: {route?.meta?.isMeta}</div>
      <RouterOutlet route={route} />
    </>
  );
};
export default App;
