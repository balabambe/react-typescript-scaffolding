import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

const App: React.FC<RouteConfigComponentProps> = ({route}) =>  (
    <>
      <h1>Apppp</h1>
      {renderRoutes(route?.routes)}
    </>
  );
export default App;
