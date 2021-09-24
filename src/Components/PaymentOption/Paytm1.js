import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import image from '../../Assets/Payment/Paytm.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons3() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
      <img src={image} alt={image} />
       Paytm
    </div>
  );
}
