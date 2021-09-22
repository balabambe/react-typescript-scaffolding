import React from 'react';
import { matchRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

import routes from '@router/router';

const Breadcrumbs: React.FC = () => {
  const match = matchRoutes(routes, window.location.pathname);
  const filter = match.filter((matchRoute, index) => !matchRoute.route.hideBreadcrumb && index !== 0);
  return (
    <>
      <ul className="breadcumbs">
        <li>
          <Link to="/">Home</Link>
        </li>
        {filter.map((item) => (
          <li key={item.match.url}>
            <Link to={item.match.url}>{item.route.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Breadcrumbs;
