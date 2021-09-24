import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import image2 from '../../Assets/Payment/GooglePay.png'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons1() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
       <Button variant="outlined" color="secondary">
      <img src={image2} alt={image2}/>
      </Button>
      <p>
        Google Pay
        </p>
    </div>
  );
}
