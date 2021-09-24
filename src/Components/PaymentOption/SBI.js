import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import image from '../../Assets/Payment/SBI.png'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="secondary" href="https://retail.onlinesbi.com/retail/login.htm">
        <img src={image} alt={image} />
      </Button>
      <p>
        SBI
        </p>
    </div>
  );
}
