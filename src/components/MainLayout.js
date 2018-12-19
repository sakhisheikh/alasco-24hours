import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

// tasks
import TaskOne from './TaskOne';
import TaskTwo from './TaskTwo';
import TaskThree from './TaskThree';

function TabContainer(props) {
  const { classes, children } = props;
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid
          alignItems="flex-start"
          justify="center"
          direction="row"
          container
          className={`${classes.root} ${classes.demo}`}
          spacing={8}
        >
          <Grid item>{children}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  demo: {
    height: 'calc(100vh - 64px)',
  },
  tbd: {
    color: '#d1d1d1',
    fontWeight: 'bold',
  },
});

class MainLayout extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            <Tab label="Task One" />
            <Tab label="Task Two" />
            <Tab label="Task Three" />
          </Tabs>
        </AppBar>
        <TabContainer {...{ classes }}>
          {value === 0 && <TaskOne />}
          {value === 1 && <TaskTwo />}
          {value === 2 && <TaskThree />}
        </TabContainer>
      </div>
    );
  }
}

MainLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainLayout);
