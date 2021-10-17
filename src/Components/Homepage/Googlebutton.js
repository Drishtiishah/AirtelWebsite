import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Google from '../../Assets/Homepage/Google.png';

export default function Googlebutton() {
  return (
    <Button variant="contained" color="primary" style={{ backgroundColor: '#000000' }} href="https://play.google.com/store/apps/details?id=com.myairtelapp">
       <img src={Google} alt={Google} width= "40%" height= "40%" justifycontent ='left'/> 
       <Grid container spacing={4}align='right'>
       <Grid item xs={12}sm={12}md={12}xl={12} >
       <Typography variant="h10">Get it on</Typography>
       <Typography variant="h5">Google Play</Typography>
       </Grid>
       </Grid>   
    </Button>
  );
}