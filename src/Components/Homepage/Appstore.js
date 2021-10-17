import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Apple from '../../Assets/Homepage/Apple.png';

export default function Appstore() {
  return (
    <Button variant="contained" color="primary" style={{ backgroundColor: '#000000' }} href="https://apps.apple.com/in/app/airtel-thanks-recharge-upi/id543184334">
      <img src={Apple} alt={Apple} width= "40%" height= "40%" justifycontent ='left'/> 
      <Grid container spacing={8}align='right'>
        <Grid item xs={12}sm={12}md={12}xl={12} >
        <Typography variant="h10"style={{color:'#ffffff'}}>Download on the</Typography>
        <Typography variant="h5">App Store</Typography>
        </Grid>
        </Grid>
    </Button>
  );
}