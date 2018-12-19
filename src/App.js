import React from 'react';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import Main from './Main';
import MainLayout from './components/MainLayout';
import createStore from './store';

const STORE = createStore();

const App = () => (
  <Provider store={STORE}>
    <Main>
      <Router>
        <MainLayout path="/" />
      </Router>
    </Main>
  </Provider>
);

export default App;
