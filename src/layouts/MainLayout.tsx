import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';

import Breadcrumbs from '@components/Breadcrumbs';
import Icons from '@components/Icons';
import Navbar from '@components/Navbar';
import RouterOutlet from '@components/RouterOutlet';

import './MainLayout.scoped.scss';

const MainLayout: React.FC<RouteConfigComponentProps> = ({ route }) => (
  <div className="wrapper">
    <header>
      <div className="user-block">
        <button className="logout" type="button">
          <Icons iconString="sign-out-alt" />
          <span>Logout</span>
        </button>
      </div>
    </header>
    <main>
      <aside>
        <Navbar renderSecondLevel />
        <p>v{process.env.REACT_APP_VERSION}</p>
      </aside>
      <section className="content">
        <Breadcrumbs />
        <RouterOutlet route={route} />
      </section>
    </main>
  </div>
);
export default MainLayout;
