import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { useParams } from 'react-router-dom';

const App: React.FC<RouteConfigComponentProps> = ({route}) =>  {
  const {id} = useParams<{id: string}>();
  return (
    <>
      <h1>Child</h1>
      <div>params: {id}</div>
      {renderRoutes(route?.routes)}
    </>
  );
};
export default App;
