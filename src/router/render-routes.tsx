import React from 'react';
import { Route } from 'react-router-dom';

import routes from '@router/routes.config';

type TypeRoutesProps = {
  renderPath: string;
  genLayers?: number;
};

const useRenderRoutes = (props: TypeRoutesProps): React.ReactElement => {
  const { renderPath, genLayers } = props;
  return (
    <>
      {routes.map((item) => {
        const { exact, component, path } = item;
        return (
          <Route
            component={component}
            exact={exact}
            key={path}
            path={path} />
        );
      })}
    </>
  );
};

export default useRenderRoutes;
