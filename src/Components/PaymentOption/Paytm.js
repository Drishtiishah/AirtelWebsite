import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import image3 from '../../Assets/Payment/paytm.png'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons2() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
      <Button variant="outlined" color="secondary">
      <img src={image3} alt={image3}/>
      </Button>
      <p>
        Paytm 
        </p>
    </div>
  );
}
