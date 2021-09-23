import { StrictMode, Suspense } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter, Switch } from 'react-router-dom';

import routes from '@router/router';
import store from '@store/index';

import reportWebVitals from './reportWebVitals';

render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {renderRoutes(routes)}
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
