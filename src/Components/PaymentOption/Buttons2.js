import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import image from '../../Assets/Payment/Airtelpay.png'
import image2 from '../../Assets/Payment/GooglePay.png'
import image3 from '../../Assets/Payment/paytm.png'
import image4 from '../../Assets/Payment/more.png'

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
      <img src={image} alt={image}/>
      </Button>
      <p>
        Airtel
        </p>

      <Button variant="outlined" color="secondary">
      <img src={image2} alt={image2}/>
      </Button>
      <p>
        Google Pay
        </p>

      <Button variant="outlined" color="secondary">
      <img src={image3} alt={image3}/>
      </Button>
      <p>
        Paytm 
        </p>

      <Button variant="outlined" color="secondary">
      <img src={image4} alt={image4}/>
      </Button>
      <p>
        + other UPI Id
        </p>

    </div>
  );
}