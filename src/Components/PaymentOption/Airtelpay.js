import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import image3 from '../../Assets/Payment/Airtelpay.jpg'

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
      <img src={image3} alt={image3} />
        Airtel
    </div>
  );
}
