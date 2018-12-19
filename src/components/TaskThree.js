import React, { Component } from 'react';
// Material-UI
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import CurrencyContext from './Context/Currency';

// api
import getCurrencyRates from '../api/currencyRates';

// actions
import actions from '../actions';

// components
import CurrencyCard from './Layout/CurrencyCard';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    height: 'calc(100vh - 64px)',
  },
  tbd: {
    color: '#d1d1d1',
    fontWeight: 'bold',
  },
  indent: {
    margin: 20,
  },
});

class TaskThree extends Component {
  state = {
    currenciesData: '',
  };

  componentDidMount = () => {
    this.loadCurrencies();
  };

  // eslint-disable-next-line consistent-return
  loadCurrencies = async () => {
    const { loadScreen } = this.props;
    loadScreen(true);
    try {
      const res = await getCurrencyRates();
      loadScreen(false);
      if (res.success) {
        this.setState({ currenciesData: res });
      }
    } catch (error) {
      loadScreen(false);
      return error;
    }
  };

  render() {
    const { classes } = this.props;
    const { currenciesData } = this.state;

    return (
      <React.Fragment>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid
              alignItems="center"
              justify="center"
              direction="row"
              container
              className={`${classes.root} ${classes.demo}`}
              spacing={8}
            >
              <Grid xs={12} className={classes.indent} item>
                <CurrencyContext.Provider
                  value={{
                    loadCurrencies: this.loadCurrencies,
                  }}
                >
                  <CurrencyCard {...{ currenciesData }} />
                </CurrencyContext.Provider>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

TaskThree.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  loadScreen: isLoading => dispatch(actions.loadScreen(isLoading)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withStyles(styles)(TaskThree));
