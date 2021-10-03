import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornments from './Textfield';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      maxWidth: 1200,
      flexGrow: 1,
    },
  },
}));

export default function ContainedButtonsR() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InputAdornments/> 
    </div>
  );
}