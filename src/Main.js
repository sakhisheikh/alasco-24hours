import React from 'react';
import PropTypes from 'prop-types';
// Utils
import Loading from './components/Loaders/Loading';

const Main = ({ children }) => (
  <React.Fragment>
    <Loading />
    {children}
  </React.Fragment>
);

Main.propTypes = {
  children: PropTypes.any,
};

export default Main;
