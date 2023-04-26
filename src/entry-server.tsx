import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';

import { App } from './components/App/App';
import { store } from './redux/store';

export const render = (url: string, options: RenderToPipeableStreamOptions) =>
  renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );
