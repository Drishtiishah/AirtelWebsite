import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import image from '../../Assets/Payment/SBI.png'
import image2 from '../../Assets/Payment/HDFC.png'
import image3 from '../../Assets/Payment/icici.png'
import image4 from '../../Assets/Payment/more.png'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="secondary">
        <img src={image} alt={image} />
      </Button>
      <p>
        SBI
        </p>

      <Button variant="outlined" color="secondary">
       <img src={image2} alt={image2} />
      </Button>
      <p>
        HDFC
        </p>
    
      <Button variant="outlined" color="secondary">
       <img src={image3} alt={image3} />
      </Button>
      <p>
        ICICI
        </p>
        
      <Button variant="outlined" color="secondary">
       <img src={image4} alt={image4} />
      </Button>
      <p>
        + more banks
        </p>
    </div>
  );
}