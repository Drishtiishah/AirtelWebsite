import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import image from '../../Assets/Payment/Paytm.jpg'
import image2 from '../../Assets/Payment/Amazonpay.png'
import image3 from '../../Assets/Payment/Airtelpay.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="secondary">
      <img src={image} alt={image} />
      </Button>
      <p>
        Airtel
        </p>

      <Button variant="outlined" color="secondary">
      <img src={image2} alt={image2} />
      </Button>
      <p>
        Amazon Pay
        </p>

      <Button variant="outlined" color="secondary">
      <img src={image3} alt={image3} />
      </Button>
      <p>
        Paytm
        </p>

    </div>
  );
}