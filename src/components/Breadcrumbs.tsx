import React from 'react';
import { matchRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

import routes from '@router/router';

const Breadcrumbs: React.FC = () => {
  const match = matchRoutes(routes, window.location.pathname);
  const filter = match.filter((matchRoute) => matchRoute.route.breadcrumbName);
  return (
    <>
      <ul className="breadcumbs">
        {filter.map((item) => (
          <li key={item.match.url}>
            <Link to={item.match.url}>{item.route.breadcrumbName}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Breadcrumbs;
