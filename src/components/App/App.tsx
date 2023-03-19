import React, { Component } from 'react';
import { Route, Routes } from 'react-router';

import { HeaderWithRouter } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { About } from '../../pages/About/About';
import { NotFound } from '../../pages/NotFound/NotFound';
import { Main } from '../../pages/Main/Main';

export class App extends Component {
  render = () => (
    <>
      <HeaderWithRouter />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
