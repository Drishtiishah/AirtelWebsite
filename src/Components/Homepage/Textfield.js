import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
    <div className={classes.root}>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <TextField
          label="Mobile Number"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '30ch', height: '4ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">+91</InputAdornment>,
          }}
        />
    <Button variant="contained" color="primary" href="https://drishtiishah.github.io/AirtelWebsite/PaymentOption">
    Recharge
    </Button>
    </Box>
    </div>
  );
}
