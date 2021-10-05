import React from 'react';
import { matchRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

import routes from '@router/router';

import './Breadcrumbs.scope.scss';

const Breadcrumbs: React.FC = () => {
  const match = matchRoutes(routes, window.location.pathname);
  const filter = match.filter((matchRoute, index) => !matchRoute.route.hideBreadcrumb && index !== 0);
  return (
    <>
      <ul className="breadcrumbs">
        <li>
          <Link to="/">Home</Link>
        </li>
        {filter.map((item, index) => (
          <li key={item.match.url}>
            {filter.length - 1 !== index
              ? <Link to={item.match.url}>{item.route.name}</Link>
              : <span>{item.route.name}</span>}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Breadcrumbs;
