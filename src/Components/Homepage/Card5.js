import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Appstore from './Appstore';
import Googlebutton from './Googlebutton';
import AirtelThanks from '../../Assets/Homepage/AirtelThanks.png';
import image from '../../Assets/Homepage/Phone.png';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: 'linear-gradient(#d2001a, #8f0000 ,#000000,#000000)',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    color:'black',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard5() {
  const classes = useStyles()
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Typography style={{color:'white'}} margin="normal" align={'center'}>
         Experience the all new Airtel Thank App
        </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <img src={AirtelThanks} alt={AirtelThanks}/>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <img src={image} alt={image} width="50%" height= "100%"/>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
        <Typography style={{color:'#ffffff'}} align={'right'} >
          Get exclusive offers and account information at one place 
        </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <Googlebutton/>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <Appstore/>
          </Grid>
          </Grid>
      </CardContent>
    </Card>
  );
}