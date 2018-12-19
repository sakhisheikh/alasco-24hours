import React, { Component } from 'react';
// Material-UI
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  tbd: {
    color: '#d1d1d1',
    fontWeight: 'bold',
  },
});

class TaskOne extends Component {
  state = {
    rectOne: {
      topLeft: { x: 0, y: 10 },
      topRight: { x: 2, y: 10 },
      bottomLeft: { x: 0, y: 0 },
      bottomRight: { x: 10, y: 0 },
    },
    rectTwo: {
      topLeft: { x: 5, y: 5 },
      topRight: { x: 15, y: 5 },
      bottomLeft: { x: 5, y: 0 },
      bottomRight: { x: 15, y: 0 },
    },
    result: '',
  };

  handleChange = (pos, coord) => event => {
    const {
      target: { name, value },
    } = event;
    const { [event.target.name]: rect } = this.state;

    this.setState({
      [name]: {
        ...rect,
        [pos]: { ...rect[pos], [coord]: value },
      },
    });
  };

  handleIntersection = () => {
    const { rectOne, rectTwo } = this.state;

    // left side of other
    if (
      rectOne.topLeft.x > rectTwo.bottomRight.x ||
      rectTwo.topLeft.x > rectOne.bottomRight.x
    ) {
      this.setState({ result: 'Both Rectangles do not Intersect' });
    } else if (
      rectOne.topLeft.y < rectTwo.bottomRight.y ||
      rectTwo.topLeft.y < rectOne.bottomRight.y
    ) {
      this.setState({ result: 'Both Rectangles do not Intersect' });
    } else this.setState({ result: 'Both Rectangles Intersect' });
  };

  render() {
    const { classes } = this.props;
    const { rectOne, rectTwo, result } = this.state;
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Reactanges: Determine if 2 rectangles intersect
          </Paper>
        </Grid>
        <Grid justify="center" direction="row" spacing={8} container>
          <Grid container item xs={6}>
            <Grid xs={12} item>
              <Typography align="center">Rectangle One</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-number"
                label="Top Left X"
                value={rectOne.topLeft.x}
                name="rectOne"
                onChange={this.handleChange('topLeft', 'x')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-number"
                label="Top Left Y"
                value={rectOne.topLeft.y}
                name="rectOne"
                onChange={this.handleChange('topLeft', 'y')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-number"
                label="Top Right X"
                value={rectOne.topRight.x}
                name="rectOne"
                onChange={this.handleChange('topRight', 'x')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-number"
                label="Top Right Y"
                value={rectOne.topRight.y}
                name="rectOne"
                onChange={this.handleChange('topRight', 'y')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-number"
                label="Bottom Left X"
                value={rectOne.bottomLeft.x}
                name="rectOne"
                onChange={this.handleChange('bottomLeft', 'x')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-number"
                label="Bottom Left Y"
                value={rectOne.bottomLeft.y}
                name="rectOne"
                onChange={this.handleChange('bottomLeft', 'y')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-number"
                label="Bottom Right X"
                value={rectOne.bottomRight.x}
                name="rectOne"
                onChange={this.handleChange('bottomRight', 'x')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-number"
                label="Bottom Right Y"
                value={rectOne.bottomRight.y}
                name="rectOne"
                onChange={this.handleChange('bottomRight', 'y')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container item xs={6}>
            <Grid xs={12} item>
              <Typography align="center">Rectangle Two</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-number"
                label="Top Left X"
                value={rectTwo.topLeft.x}
                name="rectTwo"
                onChange={this.handleChange('topLeft', 'x')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-number"
                label="Top Left Y"
                value={rectTwo.topLeft.y}
                name="rectTwo"
                onChange={this.handleChange('topLeft', 'y')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-number"
                label="Top Right X"
                value={rectTwo.topRight.x}
                name="rectTwo"
                onChange={this.handleChange('topRight', 'x')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-number"
                label="Top Right Y"
                value={rectTwo.topRight.y}
                name="rectTwo"
                onChange={this.handleChange('topRight', 'y')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-number"
                label="Bottom Left X"
                value={rectTwo.bottomLeft.x}
                name="rectTwo"
                onChange={this.handleChange('bottomLeft', 'x')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-number"
                label="Bottom Left Y"
                value={rectTwo.bottomLeft.y}
                name="rectTwo"
                onChange={this.handleChange('bottomLeft', 'y')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-number"
                label="Bottom Right X"
                value={rectTwo.bottomRight.x}
                name="rectTwo"
                onChange={this.handleChange('bottomRight', 'x')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-number"
                label="Bottom Right Y"
                value={rectTwo.bottomRight.y}
                name="rectTwo"
                onChange={this.handleChange('bottomRight', 'y')}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid xs={12} item>
            <Typography align="center">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.handleIntersection}
              >
                Get Result : {result}
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

TaskOne.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskOne);
