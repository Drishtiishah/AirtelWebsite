import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CVV from './CVV';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Enter Card Number"
        />
        <TextField
          required
          id="outlined-required"
          label="Valid thru"
        />
        <TextField
          required
          id="outlined-required"
          label="CVV"
          type="CVV"
        />
        <br/>
        <CVV/>
      </div>
    </Box>
  );
}