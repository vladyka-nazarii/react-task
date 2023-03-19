import React, { Component } from 'react';
import { Route, Routes } from 'react-router';

export class App extends Component {
  render = () => (
    <>
      <Routes>
        <Route path="/" element={<div>Main Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}
