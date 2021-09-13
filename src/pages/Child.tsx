import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

const App: React.FC<RouteConfigComponentProps> = ({route}) =>  (
    <>
      <h1>Child</h1>
      {renderRoutes(route?.routes)}
    </>
  );
export default App;
