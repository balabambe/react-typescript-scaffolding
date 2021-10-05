import React from 'react';
import { NavLink } from 'react-router-dom';

import Icons from '@components/Icons';
import routes, { TypeRoutes } from '@router/router';

import './Navbar.scoped.scss';

type TypeNavBar = {
  renderSecondLevel?: boolean,
}

type TypeNavBarUnionRoutes = TypeNavBar & TypeRoutes;

const RenderParentLink: React.FC<TypeNavBarUnionRoutes> = (props) => {
  const { path, icon, name, routes: children, renderSecondLevel } = props;
  if (!children || !renderSecondLevel) {
    return <>
      <NavLink to={path}>
        {icon && <i><Icons color="inherit" iconString={icon?.iconName} /></i>}
        <span>{name}</span>
      </NavLink>
    </>;
  }
  return <>
    <p>
      {icon && <i><Icons color="inherit" iconString={icon?.iconName} /></i>}
      <span>{name}</span>
    </p>
  </>;
};

RenderParentLink.defaultProps = {
  renderSecondLevel: false,
};

const RenderChildLink: React.FC<TypeRoutes> = (props) => {
  const { routes: children } = props;
  if (!children) {
    return <></>;
  }
  return <>
    <ul className="child">
      {children.map((second) => (second &&
        <li key={second.path}>
          <NavLink to={second.path}>{second.name}</NavLink>
        </li>))}
    </ul>
  </>;
};

const Navbar: React.FC<TypeNavBar> = ({renderSecondLevel}) => {
  const filter = routes.filter((route) => !route.hideNav);
  return (
    <nav className="navbar">
      <ul className="parent">
        {filter.map((item) => (
            <li key={item.path}>
              <RenderParentLink {...item} renderSecondLevel={renderSecondLevel} />
              {renderSecondLevel && <RenderChildLink {...item} />}
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
