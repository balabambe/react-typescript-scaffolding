import React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';

import Breadcrumbs from '@components/Breadcrumbs';
import Navbar from '@components/Navbar';
import RouterOutlet from '@components/RouterOutlet';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@css/MainLayout.scoped.scss';

const signOutIcon = findIconDefinition({prefix: 'fas', iconName: 'sign-out-alt'});

const MainLayout: React.FC<RouteConfigComponentProps> = ({ route }) => (
  <>
    <header>
      <div className="user-block">
        <button className="logout" type="button">
          <FontAwesomeIcon color="#666" icon={signOutIcon} />
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
  </>
);
export default MainLayout;
