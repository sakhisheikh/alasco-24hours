/* eslint-disable react/no-array-index-key, no-console */
import React from 'react';
// Material-UI
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
});

function Home({ classes }) {
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
            <Grid item>
              <Typography className={classes.tbd} variant="h4">
                TBD
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
