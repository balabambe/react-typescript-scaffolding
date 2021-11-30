import React, { Suspense } from 'react';
import { Button } from 'react-bootstrap';
import { RouteConfigComponentProps } from 'react-router-config';
import { useHistory } from 'react-router-dom';

import Breadcrumbs from '@components/Breadcrumbs';
import Icons from '@components/Icons';
import Navbar from '@components/Navbar';
import RouterOutlet from '@components/RouterOutlet';

import './MainLayout.scoped.scss';

const MainLayout: React.FC<RouteConfigComponentProps> = ({ route }) => {
  const history = useHistory();
  const logout = () => {
    history.push('/login');
  };
  return (
    <div className="wrapper">
      <header>
        <div className="user-block">
          <Button className="logout" onClick={() => logout()} type="button">
            <Icons iconString="sign-out-alt" />
            <span>Logout</span>
          </Button>
        </div>
      </header>
      <main>
        <aside>
          <Navbar renderSecondLevel />
          <p>v{process.env.REACT_APP_VERSION}</p>
        </aside>
        <section className="content">
          <Breadcrumbs />
          <Suspense fallback={<div>Loading...</div>}>
            <RouterOutlet route={route} />
          </Suspense>
        </section>
      </main>
    </div>
  );
};
export default MainLayout;
