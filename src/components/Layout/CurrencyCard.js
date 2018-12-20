import React, { Component } from 'react';
// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Spring, config } from 'react-spring';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import RefreshIcon from '@material-ui/icons/Refresh';
import Swap from '@material-ui/icons/SwapHorizRounded';
import CurrencyContext from '../Context/Currency';

const styles = () => ({
  card: {
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.5)',
    maxWidth: 367,
    minHeight: 300,
  },
  upper: {
    backgroundColor: '#fccf5d',
    minHeight: 80,
  },
  lower: {
    backgroundColor: '#fff',
  },
  upperText: {
    color: '#000',
  },
  list: {
    fontFamily: 'Poppins',
    width: '40%',
    fontSize: 10,
    letterSpacing: 1,
  },
  login: {
    margin: 5,
    border: '1px solid #FFFFFF',
    fontSize: 10,
    boxShadow: '0 0 2px 0 rgba(0,0,0,0.15)',
    backgroundColor: '#fff',
    color: '#9B9B9B',
    fontFamily: 'Poppins',
  },
  roundedBorder: {
    borderRadius: '24px',
  },
  centered: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomCentered: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  menu: {
    minWidth: 100,
  },
  textField: {
    width: '60%',
    '& label span': {
      color: 'red',
    },
  },
  rating: {
    borderRadius: '50%',
    minHeight: 120,
    minWidth: 120,
    // padding: 20,
    border: '6px solid #818181',
  },
  ratingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#141e30',
  },
  exchangeBox: {
    margin: 40,
  },
  darkButton: {
    backgroundColor: '#fccf5d',
    '&:hover': {
      backgroundColor: '#fccf5d',
    },
    color: '#000',
    fontWeight: 'bold',
    fontSize: 8,
  },
  cssLabel: {
    color: '#4A4A4A',
    fontSize: 12,
    fontFamily: 'Poppins',
    '&$cssFocused': {
      color: '#fccf5d',
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: '#fccf5d',
    },
  },
  error: {
    color: 'red',
    fontSize: 10,
  },
});

/* eslint-disable */

class CurrencyCard extends Component {
  state = {
    from: '',
    fromCurrency: '',
    toCurrency: '',
    result: '',
    amountError: false,
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleCurrency = currency => event => {
    this.setState({
      [currency]: event.target.value,
    });
  };

  handleSwap = () => {
    this.setState(
      state => {
        return {
          toCurrency: state.fromCurrency,
          fromCurrency: state.toCurrency,
        };
      },
      () => {
        this.handleConvert();
      },
    );
  };

  handleConvert = () => {
    const { from, toCurrency, fromCurrency } = this.state;

    const res = [from, toCurrency, fromCurrency].filter(x => x === '').length
      ? this.setState({ amountError: true })
      : this.setState({
        result: (toCurrency / fromCurrency) * from,
        amountError: false,
      });
    return res;
  };

  render() {
    const { classes, currenciesData } = this.props;
    const { from, toCurrency, fromCurrency, result, amountError } = this.state;

    return (
      <Fade in timeout={500}>
        <Paper className={classes.card}>
          <Grid
            className={classes.upper}
            alignItems="center"
            justify="center"
            item
            direction="row"
            container
          >
            <Grid
              alignItems="center"
              direction="row"
              justify="flex-start"
              container
              xs={12}
              item
            >
              <Grid item xs={6}>
                <Typography className={classes.upperText} align="center">
                  Curreny Coverter
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <CurrencyContext.Consumer>
                  {({ loadCurrencies }) => (
                    <Button
                      className={`${classes.login} ${classes.roundedBorder}`}
                      align="center"
                      onClick={loadCurrencies}
                    >
                      <RefreshIcon />
                      <span className={classes.listText}>
                        Refresh Currency Rates
                      </span>
                    </Button>
                  )}
                </CurrencyContext.Consumer>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            className={classes.lower}
            alignItems="center"
            justify="center"
            item
            direction="row"
            container
          >
            <Grid xs={12} className={classes.centered} item>
              <TextField
                type="number"
                required
                value={from}
                className={classes.textField}
                inputProps={{ min: '0', step: '1' }}
                name="from"
                onChange={this.handleChange}
                label="Currency"
                margin="dense"
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                InputProps={{
                  classes: {
                    focused: classes.cssFocused,
                    underline: classes.cssUnderline,
                  },
                }}
              />
            </Grid>
            <Grid xs={12} container item>
              <Grid className={classes.centered} item xs={5}>
                <TextField
                  id="standard-select-currency"
                  select
                  required
                  label="From"
                  className={classes.textField}
                  value={fromCurrency}
                  onChange={this.handleCurrency('fromCurrency')}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                    displayEmpty: true,
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                    shrink: true,
                  }}
                  InputProps={{
                    classes: {
                      focused: classes.cssFocused,
                      underline: classes.cssUnderline,
                    },
                  }}
                  margin="normal"
                >
                  <MenuItem value="">None</MenuItem>
                  {currenciesData &&
                    Object.keys(currenciesData.rates).map(key => (
                      <MenuItem className="menuItem" {...{ key }} value={currenciesData.rates[key]}>
                        {key}
                      </MenuItem>
                    ))}
                </TextField>
              </Grid>
              <Grid className={classes.bottomCentered} item xs={2}>
                <Button
                  className={`${classes.roundedBorder}`}
                  align="center"
                  onClick={this.handleSwap}
                >
                  <Swap />
                </Button>
              </Grid>
              <Grid className={classes.centered} item xs={5}>
                <TextField
                  id="standard-select-currency"
                  select
                  required
                  label="To"
                  className={classes.textField}
                  value={toCurrency}
                  onChange={this.handleCurrency('toCurrency')}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu,
                    },
                    displayEmpty: true,
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                    shrink: true,
                  }}
                  InputProps={{
                    classes: {
                      focused: classes.cssFocused,
                      underline: classes.cssUnderline,
                    },
                  }}
                  margin="normal"
                >
                  <MenuItem value="">None</MenuItem>
                  {currenciesData &&
                    Object.keys(currenciesData.rates).map(key => (
                      <MenuItem {...{ key }} value={currenciesData.rates[key]}>
                        {key}
                      </MenuItem>
                    ))}
                </TextField>
              </Grid>
              <Grid className={classes.centered} item xs={12}>
                <Button
                  className={`${classes.roundedBorder} ${classes.darkButton}`}
                  align="center"
                  onClick={this.handleConvert}
                >
                  Convert
                </Button>
              </Grid>
              <Grid className={classes.centered} item xs={12}>
                {amountError && (
                  <Typography className={classes.error} align="center">
                    Please fill the required fields
                  </Typography>
                )}
              </Grid>
              <Grid
                xs={12}
                className={`${classes.centered} ${classes.exchangeBox}`}
              >
                <div className={`${classes.rating} ${classes.centered}`}>
                  <Typography className={classes.ratingText}>
                    {result ? (
                      <Spring
                        from={{ number: 0 }}
                        to={{ number: result }}
                        delay="1000"
                        config={config.molasses}
                      >
                        {props => <div>{props.number.toFixed(1)}</div>}
                      </Spring>
                    ) : (
                        ''
                      )}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Fade>
    );
  }
}

export default withStyles(styles)(CurrencyCard);
