import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

const levelIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

class Snacks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      notify: '',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.notify !== prevState.notify) {
      return {
        notify: nextProps.notify,
        open: nextProps.notify.open,
      };
    }
    return null;
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    const { open, notify } = this.state;
    const { classes } = this.props;
    const Icon = levelIcon[notify.level];
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          autoHideDuration={2000}
          onClose={this.handleClose}
        >
          <SnackbarContent
            className={`${classes[notify.level]}`}
            aria-describedby="client-snackbar"
            message={[
              <span id="client-snackbar" className={classes.message}>
                <Icon className={`${classes.icon} ${classes.iconVariant}`} />
                {notify.message}
              </span>,
            ]}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={this.handleClose}
              >
                <CloseIcon className={classes.icon} />
              </IconButton>,
            ]}
          />
        </Snackbar>
      </div>
    );
  }
}

Snacks.propTypes = {
  notify: PropTypes.any,
  classes: PropTypes.object.isRequired,
};

export default connect(state => ({
  notify: state.notify.notify,
}))(withStyles(styles)(Snacks));
