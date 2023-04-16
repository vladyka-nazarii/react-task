import React from 'react';
import { Route, Routes } from 'react-router';
import { Provider } from 'react-redux';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { About } from '../../pages/About/About';
import { NotFound } from '../../pages/NotFound/NotFound';
import { Main } from '../../pages/Main/Main';
import { Forms } from '../../pages/Forms/Forms';
import { store } from '../../redux/store';

export const App = () => (
  <Provider store={store}>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Provider>
);
