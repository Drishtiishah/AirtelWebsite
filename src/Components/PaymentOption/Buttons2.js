import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="secondary">
        Airtel
      </Button>
      <Button variant="outlined" color="secondary">
        Google Pay
      </Button>
      <Button variant="outlined" color="secondary">
        Paytm 
      </Button>
      <Button variant="outlined" color="secondary">
        + other UPI Id
      </Button>
    </div>
  );
}