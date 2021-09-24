import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import image from '../../Assets/Payment/Airtelpay.png'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons9() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
      <Button variant="outlined" color="secondary">
      <img src={image} alt={image}/>
      </Button>
      <p>
        Airtel
        </p>
    </div>
  );
}
