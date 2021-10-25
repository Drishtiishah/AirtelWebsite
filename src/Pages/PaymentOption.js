import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ControlledAccordions from '../Components/PaymentOption/Accordion';
import SimpleCard from '../Components/PaymentOption/Card1';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
  });

export default function PaymentOption() {
    const classes = useStyles();
    return (
        <React.Fragment>
       <Grid container spacing={3}>
<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
<SimpleCard/>
</Grid>

<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
<Typography variant="h5" component="h2" style={{color:'#8e0202'}}>
          Payment Method
        </Typography>

<ControlledAccordions/>

<Typography className={classes.pos} style={{color:'#8e0202'}}>
          Don't worry your money is safe
        </Typography>
<Typography className={classes.pos} style={{color:'#8e0202'}}>
          100% secured Payments
        </Typography>
        </Grid>
        </Grid>
</React.Fragment>
    )
    
}