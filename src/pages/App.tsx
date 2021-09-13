import { BrowserRouter, Switch } from 'react-router-dom';

import useRenderRoutes from '@router/render-routes';

const App: React.FC = () => {
  const renderRoutes = useRenderRoutes({
    renderPath: '/',
    genLayers: 1,
  });
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutes}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
