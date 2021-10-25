import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
            maxWidth: 1200,
            flexGrow: 1,
            
      },
    },
  }));

export default function InputAdornments() {
    const classes = useStyles();
  return (
    <center>
    <div className={classes.root}>
    <Box sx={{ display: 'flex' }}>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <TextField
          label="Mobile Number"
          id="outlined-start-adornment"
          sx={{ width: '30ch', height: '4ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">+91</InputAdornment>,
          }}
        />

    <Button variant="contained" color="primary" size="large" style={{ backgroundColor: '#8e0202' }} href="https://drishtiishah.github.io/AirtelWebsite/PaymentOption">
    Recharge 
    </Button>
    </Grid>
    </Box>
    </div>
    </center>
  );
}
