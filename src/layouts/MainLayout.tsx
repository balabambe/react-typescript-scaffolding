import React from 'react';
import { RouteComponentProps } from 'react-router';

const MainLayout: React.FC<RouteComponentProps> = ({match}) =>
  // console.log(match, 'match');
   (
    <>
      MainLayout
      Match URL: {match.url}
    </>
  )
;
export default MainLayout;
