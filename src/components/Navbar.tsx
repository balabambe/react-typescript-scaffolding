import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '@router/router';

type TypeNavBar = {
  renderSecondLevel?: boolean,
}

const Navbar: React.FC<TypeNavBar> = ({renderSecondLevel}) => {
  const filter = routes.filter((route) => !route.hideNav);
  return (
    <nav className="navbar">
      <ul className="parent">
        {filter.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path}>{item.name}</NavLink>
              {item?.routes && renderSecondLevel && <>
                <ul className="child">
                  {item.routes.map((second) => (second &&
                    <li key={second.path}>
                      <NavLink to={second.path}>{second.name}</NavLink>
                    </li>))}
                </ul>
              </>}
            </li>
          ))}
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  renderSecondLevel: false,
};

export default Navbar;
