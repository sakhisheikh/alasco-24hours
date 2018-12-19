import React from 'react';
import { Router } from '@reach/router';
import MainLayout from './components/MainLayout';

const App = () => (
  <Router>
    <MainLayout path="/" />
  </Router>
);

export default App;
