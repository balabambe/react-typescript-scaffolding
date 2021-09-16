import { StrictMode, Suspense } from 'react';
import { render } from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter, Switch } from 'react-router-dom';

import routes from '@router/router';

import reportWebVitals from './reportWebVitals';

render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
