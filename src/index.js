import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true,
    fontFamily: 'Poppins',
  },
});

function render(Component) {
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Component />
    </MuiThemeProvider>,
    document.getElementById('root'),
  );
}

render(App);
