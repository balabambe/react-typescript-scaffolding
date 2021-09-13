import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

const MainLayout: React.FC<RouteConfigComponentProps> = ({route}) =>  (
    <>
      <h1>MainLayout</h1>
      {renderRoutes(route?.routes)}
    </>
  )
;
export default MainLayout;
