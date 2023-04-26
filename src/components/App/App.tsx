import React from 'react';
import { Route, Routes } from 'react-router';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { About } from '../../pages/About/About';
import { NotFound } from '../../pages/NotFound/NotFound';
import { Main } from '../../pages/Main/Main';
import { Forms } from '../../pages/Forms/Forms';

export const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
);
