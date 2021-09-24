import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import image2 from '../../Assets/Payment/HDFC.png'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons6() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="secondary" href="https://netbanking.hdfcbank.com/netbanking/">
       <img src={image2} alt={image2} />
      </Button>
      <p>
        HDFC
        </p>

    </div>
  );
}
