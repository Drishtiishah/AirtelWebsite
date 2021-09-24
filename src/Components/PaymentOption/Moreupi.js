import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import image4 from '../../Assets/Payment/more.png'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons8() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <Button variant="outlined" color="secondary">
       <img src={image4} alt={image4} />
      </Button>
      <p>
        + Other UPI
        </p>

    </div>
  );
}
