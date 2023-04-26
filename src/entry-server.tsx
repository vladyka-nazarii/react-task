import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';

import { App } from './components/App/App';
import { initStore } from './redux/store';
import { cardsApi } from './redux/query/cardsQuery';

export const render = async (url: string, options: RenderToPipeableStreamOptions) => {
  const store = initStore();
  store.dispatch(cardsApi.endpoints.fetchCards.initiate('picture'));
  await Promise.all(store.dispatch(cardsApi.util.getRunningQueriesThunk()));
  const preloadedState = store.getState();
  const injectPreload = () => `
    <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
    `;

  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );

  return { stream, injectPreload };
};
