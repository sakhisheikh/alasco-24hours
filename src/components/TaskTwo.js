import React, { Component } from 'react';
// Material-UI
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    padding: '5px 20px',
    backgroundColor: '#fccf5d',
  },
  tbd: {
    color: '#d1d1d1',
    fontWeight: 'bold',
  },
});

class TaskTwo extends Component {
  state = {
    dices: 2,
    iterations: 1000,
    sides: 6,
    finalize: false,
  };

  possibleCombinations = [];

  generateDiceData = (dices = 2, sides = 6, iterations = 1000) => {
    const diceSides = [...Array(sides)].map((_, i) => i + 1);
    const possibleSum = {};
    diceSides.forEach(side => {
      this.possibleCombinations.push(
        ...[...Array(sides)].map((_, i) => {
          // eslint-disable-next-line no-prototype-builtins
          if (possibleSum.hasOwnProperty(`${side + i + 1}`)) {
            possibleSum[side + i + 1] += 1 / (sides * sides);
          } else possibleSum[side + i + 1] = 1 / (sides * sides);
          return [side, i + 1];
        }),
      );
    });

    this.checkChances({ possibleSum });
  };

  checkChances = ({ possibleSum }) => {
    const { iterations } = this.state;
    let total = 0.5;

    Object.keys(possibleSum).map(key => {
      switch (true) {
        case key > 1 && key < 7:
          total += -0.5 * iterations * possibleSum[key];
          break;
        case key > 6 && key < 10:
          total += 0 * iterations * possibleSum[key];
          break;
        case key === 10:
          total += 1 * iterations * possibleSum[key];
          break;
        case key === 11:
          total += 0.5 * iterations * possibleSum[key];
          break;
        case key === 12:
          total += 1.5 * iterations * possibleSum[key];
          break;
        default:
          break;
      }
      return true;
    });

    if (total < 0.5) {
      this.setState({
        result: 'Oooops ! You should not play this game',
        total,
        finalize: true,
      });
    } else {
      this.setState({
        result: 'Hoooray !!! You should play this game',
        total,
        finalize: true,
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { dices, iterations, sides, result, total, finalize } = this.state;

    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Dices: Is it good to play this game?
          </Paper>
          <Paper>
            <Typography>Dices: {dices}</Typography>
            <Typography>Itertions: {iterations}</Typography>
            <Typography>Sides: {sides}</Typography>
            <Typography>Chances of win / lose?</Typography>
          </Paper>
        </Grid>
        <Grid xs={12} item>
          <Typography align="center">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.generateDiceData}
            >
              Check your luck
            </Button>
          </Typography>
          <Typography align="center">{result}</Typography>
          {finalize && (
            <Typography align="center">
              Reason : Your amount will be
              <span style={{ fontWeight: 'bold' }}>
                {Number(total).toFixed(0)}
              </span>
              after {iterations}iterations
            </Typography>
          )}
        </Grid>
      </React.Fragment>
    );
  }
}

TaskTwo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskTwo);
